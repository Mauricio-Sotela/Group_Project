(this["webpackJsonphome-shop"]=this["webpackJsonphome-shop"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":0,"productName":"ARC TABLE","url":"images/Arc_table.jpg","price":679.52,"inventory":3,"tags":"table","label":"WOUD","link":"https://www.woud.dk/arc-coffee-table-white-pigmented-ash/","description":"Woud Design Beistelltisch Arc"},{"id":1,"productName":"VASE CACTUS","url":"images/leonel_lopez.jpg","price":100.2,"inventory":21,"tags":"vase, leonel lopez","label":"pottery vase","link":"http://byricardomarcenaroi.blogspot.com/2011/04/ceramic-ceramica-mata-ortiz-pottery.html","description":"Lorem ipsum dolor sit amet"},{"id":2,"productName":"WANDSEKRET\xc4R","url":"images/WANDSEKRET\xc4R.jpg","price":1.999,"inventory":0,"tags":"desk","label":"WOUD","link":"https://www.pamono.de/multifunctional-pill-schrank-in-schwarz-gelb-von-dalius-razauskas-fuer-emko/?utm_medium=cpc&utm_source=google&utm_campaign=PLA_DE_1519633602_56981826143&utm_content=288977479421_c_&utm_term=pla-294682000766___QYI-287317&gclid=EAIaIQobChMIwfGtp5Ki6gIViKoYCh3RewDXEAQYAiABEgKhHfD_BwE","description":"Multifunctional Pill Schrank"},{"id":3,"productName":"Alessa Daybed ","url":"images/AlessaDaybed.jpg","price":879.52,"inventory":1,"tags":"bed","label":"Daybed, Cushion + Pillow Set","link":"https://www.moeshomecollection.com/product/rn-1036-23/","description":" Daybed, Cushion + Pillow Set"},{"id":4,"productName":"FORDITE ","url":"images/fordite.jpg","price":7959.5,"inventory":21,"tags":"rug, design","label":"smeg","link":"https://www.archiproducts.com/en/products/cc-tapis/handmade-custom-rug-fordite_388112","description":"cc-tapis Handmade custom rug"},{"id":5,"productName":"SMEG FAB10","url":"images/smeg-fridge.jpg","price":899,"inventory":21,"tags":"fridge, vintage","label":"smeg","link":"https://www.ambientedirect.com/smeg/fab10-kuehlschrank-mit-gefrierfach_pid_2728.html?adgt_source=gmc&adgt_medium=product&adgt_campaign=de&adgt_content=020012&src=gmc&lan=de&shop_country=de&art=020012000003&gclid=EAIaIQobChMIjJf57JWi6gIViZntCh29GAWjEAQYFiABEgLnw_D_BwE&et_uk=9f03651e646b44518d30720119e7eacb&aff=gmc&nodds=1","description":"FAB10 K\xfchlschrank mit Gefrierfach"}]')},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(26),a(16)),i=a(17),m=a(20),u=a(19),s=a(6),p=a(1),d=a(10),E=function(){return l.a.createElement("header",null,l.a.createElement(s.b,{className:"style-link-nav",to:"/Home"},l.a.createElement("h3",null,"logo")),l.a.createElement("div",{className:"text"},l.a.createElement("form",{className:"form-searchfield"},l.a.createElement("input",{className:"input-text",type:"text",placeholder:"hellos"}),l.a.createElement("input",{className:"input-search",type:"submit",value:"search"}))),l.a.createElement("nav",null,l.a.createElement(s.b,{className:"style-link-nav",to:"/product"},l.a.createElement("li",null,"Product")),l.a.createElement(s.b,{className:"style-link-nav",to:"/about"},l.a.createElement("li",null,"About"))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Home"))},g=function(e){var t=e.data.map((function(e){var t=e.id,a=e.productName,n=e.url,r=e.price,c=e.tags,o=e.description;return l.a.createElement(s.b,{key:t,to:"/product/".concat(t)},l.a.createElement("li",{className:"quote",key:t},l.a.createElement("h1",null,a),l.a.createElement("img",{className:"img-box",src:n,alt:c}),l.a.createElement("p",null,o),l.a.createElement("h5",null,"\u20ac ",r)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Product"),l.a.createElement("ul",{className:"container-products"},t))},f=function(e){console.log(e);var t=e.data.filter((function(t){return t.id==e.id})).map((function(e){var t=e.id,a=e.productName,n=e.url,r=(e.price,e.inventory),c=e.tags,o=e.label,i=e.link,m=e.description;return l.a.createElement("div",{key:t,className:"box-quote"},l.a.createElement("h3",{className:"headline-productName"},a),l.a.createElement("img",{className:"img-box",src:n,alt:c}),l.a.createElement("h4",null,r),l.a.createElement("a",{href:i},"More info"),l.a.createElement("h5",null,o),l.a.createElement("p",null,m))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"product-info"},l.a.createElement("h4",null,"ProductInfo"),t))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about"},l.a.createElement("h3",null,"About Me")))},v=function(){return l.a.createElement("h4",null,"Coming Soon")},w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,{basename:""},l.a.createElement(E,null),l.a.createElement("h1",null,"Online Store"),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:h}),l.a.createElement(p.a,{path:"/about",exact:!0,component:b}),l.a.createElement(p.a,{path:"/product/:id",component:function(e){var t=e.match;return l.a.createElement(f,{data:d,id:t.params.id})}}),l.a.createElement(p.a,{path:"/product",exact:!0,component:function(){return l.a.createElement(g,{data:d})}}),l.a.createElement(p.a,{path:function(){return"/main"},component:v})))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a53cdc4a.chunk.js.map