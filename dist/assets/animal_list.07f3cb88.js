import{e as t,F as n,f as a,g as e,o as l,t as s}from"./vendor.ba458dd1.js";const o={data:()=>({animalArr:[]}),methods:{delAnimal(t){!function(t,n){const a=new XMLHttpRequest;a.onreadystatechange=function(){4===this.readyState&&202===this.status&&i(n)},a.open("DELETE","http://localhost:4030/api/animals/"+t,!0),a.send()}(t,this)},goAdd(){this.$router.push("/animals/add")},goView(t){this.$router.push({path:"/animals/view",query:{animal:t}})}},mounted:function(){i(this)}};function i(t){const n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(t,n){n.animalArr=[],t.animals.forEach((t=>{console.log(t),n.animalArr.push(t.name)}))}(JSON.parse(this.responseText),t)},n.open("GET","http://localhost:4030/api/animals",!0),n.send()}const u=e("h1",null,"Animals",-1),d=e("tr",null,[e("th",null,"name"),e("th",null,"view/edit"),e("th",null,"delete")],-1),r=["onClick"],h=["onClick"];o.render=function(o,i,c,m,p,f){return l(),t(n,null,[u,d,(l(!0),t(n,null,a(p.animalArr,(n=>(l(),t("tr",null,[e("td",null,s(n),1),e("td",null,[e("button",{onClick:t=>f.goView(n)},"View/Edit",8,r)]),e("td",null,[e("button",{onClick:t=>f.delAnimal(n)},"Delete",8,h)])])))),256)),e("button",{onClick:i[0]||(i[0]=(...t)=>f.goAdd&&f.goAdd(...t))},"add")],64)};export{o as default};