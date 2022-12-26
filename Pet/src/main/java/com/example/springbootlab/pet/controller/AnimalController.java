package com.example.springbootlab.pet.controller;

import com.example.springbootlab.pet.dto.*;
import com.example.springbootlab.pet.entity.Animal;
import com.example.springbootlab.pet.entity.Pet;
import com.example.springbootlab.pet.service.AnimalService;
import com.example.springbootlab.pet.service.PetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

/**
 * Created By IDEA
 * Author: s188026 Yifei Liu
 * Date: 2022/11/1 1:32
 * Description: REST controller for animal resource
 */

@RestController
@RequestMapping("api/animals")
public class AnimalController {

    private final AnimalService animalService;
    private final PetService petService;

    public AnimalController(AnimalService animalService, PetService petService) {
        this.animalService = animalService;
        this.petService = petService;
    }

    @GetMapping
    public ResponseEntity<GetAnimalsResponse> getAnimals() {
        return ResponseEntity.ok(GetAnimalsResponse.entityToDtoMapper().apply(animalService.findAll()));
    }

    @GetMapping("{name}")
    public ResponseEntity<GetAnimalResponse> getAnimal(@PathVariable("name") String name) {
        Optional<Animal> animal = animalService.find(name);
        System.out.println(name);
        return animal.map(value -> ResponseEntity.ok(GetAnimalResponse.entityToDtoMapper().apply(value)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("")
    public ResponseEntity<String> createAnimal(@RequestBody CreateAnimalRequest request, UriComponentsBuilder builder) {
        Animal animal = CreateAnimalRequest.dtoToEntityMapper().apply(request);
        animal = animalService.create(animal);
        return ResponseEntity.created(builder.pathSegment("api", "animals", "{name}").buildAndExpand(animal.getName()).toUri()).build();
    }

    @DeleteMapping("{name}")
    public ResponseEntity<Void> deleteAnimal(@PathVariable("name") String name) {
        Optional<Animal> animal = animalService.find(name);
        if (animal.isPresent()) {
            // System.out.println(animal.get().getName());
            // here is used to delete all pets of this animal. I'm not sure whether we need it.
            // List<Pet> petList = petService.findAll(animal.get());
            // for(Pet pet : petList){
            //     petService.delete(pet.getId());
            // }
            animalService.delete(animal.get().getName());
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
