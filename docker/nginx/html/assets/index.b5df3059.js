import{r as e,c as t,o as n,a as r,b as o,d as i}from"./vendor.ba458dd1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const a={};a.render=function(r,o){const i=e("router-view");return n(),t(i)};const s={},d=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in s)return;s[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},l=[{path:"",name:"rootP",component:()=>d((()=>import("./animal_list.bd2c873e.js")),["assets/animal_list.bd2c873e.js","assets/animal_list.20edfb2c.css","assets/vendor.ba458dd1.js"])},{path:"/animals",name:"Animals",component:()=>d((()=>import("./animal_list.bd2c873e.js")),["assets/animal_list.bd2c873e.js","assets/animal_list.20edfb2c.css","assets/vendor.ba458dd1.js"])},{path:"/animals/view",name:"AnimalView",component:()=>d((()=>import("./animal_view.e8fd2de1.js")),["assets/animal_view.e8fd2de1.js","assets/animal_list.20edfb2c.css","assets/vendor.ba458dd1.js"])},{path:"/animals/add",name:"AnimalAdd",component:()=>d((()=>import("./animal_add.62a95db9.js")),["assets/animal_add.62a95db9.js","assets/vendor.ba458dd1.js"])},{path:"/pet",name:"PetView",component:()=>d((()=>import("./pet_view.970aa9ca.js")),["assets/pet_view.970aa9ca.js","assets/vendor.ba458dd1.js"])},{path:"/pet/add",name:"PetAdd",component:()=>d((()=>import("./pet_add.c224d078.js")),["assets/pet_add.c224d078.js","assets/vendor.ba458dd1.js"])},{path:"/file",name:"FileAdd",component:()=>d((()=>import("./file.02592eda.js")),["assets/file.02592eda.js","assets/vendor.ba458dd1.js"])}],c=r({history:o(),routes:l});i(a).use(c).mount("#app");