package com.example.springbootlab.pet.service;

import com.example.springbootlab.pet.entity.Animal;
import com.example.springbootlab.pet.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created By IDEA
 * Author: s188026 Yifei Liu
 * Date: 2022/10/10 11:10
 * Description: Service layer for all business actions regarding pet's class(Animal) entity.
 */

@Service
public class AnimalService {

    /**
     * Repository for animal entity.
     */
    private final AnimalRepository repository;

    /**
     * @param repository repository for animal entity
     */
    @Autowired
    public AnimalService(AnimalRepository repository) {
        this.repository = repository;
    }

    /**
     * @param name name of the animal
     * @return container with animal entity
     */
    public Optional<Animal> find(String name) {
        return repository.find(name);
    }

    public List<Animal> findAll() {
        return repository.findAll();
    }

    public void delete(String name) { repository.delete(repository.find(name).orElseThrow()); }

    public void update(Animal entity) {
        repository.update(entity);
    }

    /**
     * Stores new animal in the data store.
     *
     * @param animal new animal to be saved
     */
    public void create(Animal animal) {
        repository.create(animal);
    }

}