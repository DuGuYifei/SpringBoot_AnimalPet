import{e,g as a,w as t,i,v as n,t as s,F as l,o}from"./vendor.ba458dd1.js";const u={data(){return{id:this.$route.query.pet,petName:"petName",isSick:"false",animalName:this.$route.query.animal}},methods:{upPet(){!function(e,a){const t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&fetchAndDisplayAnimal(a)},t.open("PUT","http://localhost:4030/api/animals/"+a.animalName+"/pets/"+a.id,!0);const i={name:a.petName,is_sick:"true"==a.isSick};t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(i))}(this.animalName,this),alert("update sucessfully")},goView(){this.$router.push({path:"/animals/view",query:{animal:this.animalName}})}},mounted:function(){!function(e){const a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&200===this.status&&(!function(e,a){a.petName=e.name,a.isSick=e.isSick?"true":"false",a.animalName=e.animal}(JSON.parse(this.responseText),e),console.log(JSON.parse(this.responseText)))},a.open("GET","http://localhost:4030/api/animals/"+e.animalName+"/pets/"+e.id,!0),a.send()}(this)}};const m=a("h1",null,"View/Edit Pet",-1),p=a("label",{for:"name"},"Name: ",-1),r=a("br",null,null,-1),c=a("label",null,"isSick: ",-1),d=a("label",{for:"is1"},"True",-1),h=a("label",{for:"is2"},"False",-1),f=a("br",null,null,-1),N={for:"animal"},S=a("br",null,null,-1);u.render=function(u,k,y,b,g,w){return o(),e(l,null,[a("button",{onClick:k[0]||(k[0]=e=>w.goView())},"back"),m,p,t(a("input",{id:"name",name:"name","onUpdate:modelValue":k[1]||(k[1]=e=>g.petName=e)},null,512),[[i,g.petName]]),r,c,d,t(a("input",{id:"is1",name:"isSick",type:"radio",value:"true","onUpdate:modelValue":k[2]||(k[2]=e=>g.isSick=e)},null,512),[[n,g.isSick]]),h,t(a("input",{id:"is2",name:"isSick",type:"radio",value:"false","onUpdate:modelValue":k[3]||(k[3]=e=>g.isSick=e)},null,512),[[n,g.isSick]]),f,a("label",N,"Animal: "+s(g.animalName),1),S,a("button",{onClick:k[4]||(k[4]=(...e)=>w.upPet&&w.upPet(...e))},"update")],64)};export{u as default};