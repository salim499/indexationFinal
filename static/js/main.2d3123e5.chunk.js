(this.webpackJsonpindexation_final=this.webpackJsonpindexation_final||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},84:function(e,t){},87:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(0),i=a.n(r),l=a(10),n=a.n(l),s=(a(55),a(43)),o=a(9),g=a.p+"static/media/logo.6ce24c58.svg",d=(a(56),a(34)),p=a.n(d),u=a(35),b=a.n(u),h=a(42),j=(a(88),a(98));var f=function(e){return Object(c.jsx)(j.a.Dialog,{style:{color:"black"},children:Object(c.jsx)(h.a,{words:e.word,options:{rotations:5,rotationAngles:[-5,-5,5,5]},style:{background:"rgba(0,0,0,1)",opacity:"1"}})})},m=a(23);function O(e){for(var t=[],a=0,c=0;c<e.length;c+=3)a++,t.push(a);return t}function v(e){return e.replace(/&eacute;/gi,"\xe9").replace(/&acirc;/gi,"\xe2").replace(/&egrave;/gi,"\xe8").replace(/&agrave;/gi,"\xe0").replace(/\ufffd/gi,"\xe9").replace(/&ccedil/gi,"\xe7")}function x(e){return e.replace(/&eacute;/gi,"\xe9").replace(/&acirc;/gi,"\xe2").replace(/&egrave;/gi,"\xe8").replace(/&agrave;/gi,"\xe0").replace(/\ufffd/gi,"\xe9").replace(/&ccedil/gi,"\xe7").replace(/eacute/gi,"").replace(/acirc/gi,"").replace(/egrave/gi,"").replace(/agrave/gi,"").replace(/\ufffd/gi,"").replace(/ccedil/gi,"").replace(/(href+)/gi,"").replace(/^align(.*)/gi,"").replace(/^class(.*)/gi,"").replace('="',"").replace(/nbsp/gi,"").replace(/^est$/gi,"").replace(/^repr$/gi,"").replace(/^faq$/gi,"").replace(/^qui$/gi,"").replace(/^acc$/gi,"").replace(/^lors$/gi,"").replace(/^sur$/gi,"").replace(/^par$/gi,"").replace(/^ont$/gi,"").replace(/^ann$/gi,"").replace(/^raquo$/gi,"").replace(/^laquo$/gi,"").replace(/^span$/gi,"").replace(/^des$/gi,"").replace(/^de$/gi,"").replace(/^les$/gi,"").replace(/^le$/gi,"").replace(/^mes$/gi,"").replace(/^me$/gi,"").replace(/^ses$/gi,"").replace(/^se$/gi,"").replace(/^hat$/gi,"").replace(/^syst$/gi,"").replace(/^dans$/gi,"").replace(/^pour$/gi,"").replace(/^ter$/gi,"").replace(/^que$/gi,"").replace(/^un$/gi,"").replace(/^une$/gi,"").replace(/^ainsi$/gi,"").replace(/^img$/gi,"").replace(/^src$/gi,"").replace(/^tre$/gi,"").replace(/^pre$/gi,"").replace(/borr0"/gi,"").replace(/^target/gi,"").replace(/^blank/gi,"").replace(/^afin/gi,"").replace(/^une/gi,"").replace(/gif(.*)/gi,"").replace(/alt(.*)/gi,"").replace(/png(.*)/gi,"").replace(/^width(.*)/gi,"").replace(/^height(.*)/gi,"").replace(/^top(.*)/gi,"").replace(/^inx$/gi,"").replace(/^rob$/gi,"").replace(/^ing$/gi,"").replace(/^tab$/gi,"").replace(/^lui$/gi,"").replace(/^curit$/gi,"").replace(/^pas$/gi,"").replace(/^ges$/gi,"").replace(/^scer$/gi,"").replace(/^ima$/gi,"").replace(/^rveur$/gi,"").replace(/^plus$/gi,"").replace(/^faire$/gi,"").replace(/^aux$/gi,"").replace(/^the$/gi,"").replace(/^requ$/gi,"").replace(/^3a39"$/gi,"").replace(/^sans$/gi,"").replace(/^mais$/gi,"").replace(/^mani$/gi,"").replace(/^basant$/gi,"")}var $=function(){function e(e){var t=3*e.target.dataset.val;y(j.slice(t-3,t))}var t=Object(r.useRef)(null),a=Object(r.useState)([]),l=Object(o.a)(a,2),n=l[0],d=l[1],u=Object(r.useState)([]),h=Object(o.a)(u,2),j=h[0],$=h[1],C=Object(r.useState)([]),w=Object(o.a)(C,2),k=w[0],y=w[1],L=Object(r.useState)([]),S=Object(o.a)(L,2),N=S[0],_=S[1],M=Object(r.useState)([]),F=Object(o.a)(M,2),I=F[0],q=F[1],A=Object(r.useState)("green"),E=Object(o.a)(A,2),P=(E[0],E[1]),B=Object(r.useState)("ouvrir "),D=Object(o.a)(B,2),J=D[0],R=D[1],T=Object(r.useState)(),z=Object(o.a)(T,2),G=z[0],V=z[1];function H(e){if(I.includes(e.target.dataset.val))e.target.style.color="green",P("green"),R("ouvrir "),q(I.filter((function(t){return t!==e.target.dataset.val})));else{e.target.style.color="red",P("red"),R("fermer ");var t=[],a=j.find((function(t){return t.id===e.target.dataset.val}));for(var c in a.element.body)x(c).length>3&&t.push({text:x(c),value:a.element.body[c]});_(t),q((function(t){return[].concat(Object(s.a)(t),[e.target.dataset.val])}))}}function K(e){console.log(e.target.dataset.mode),V(e.target.dataset.mode)}function Q(e){var t=[];k.forEach((function(e){t.push(e)})),t.find((function(t){return t.element.title===e.target.dataset.val})).click++,y(t)}return Object(r.useEffect)((function(){p.a.get("https://indexationphp.herokuapp.com/").then((function(e){console.log(e.data),e.data.forEach((function(e){for(var t in e.head)for(var a in e.body)t===a&&(e.head[t]=e.head[t]+e.body[a]);Object.assign(e.body,e.head)})),d(e.data)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{id:"nav_bar",children:[Object(c.jsx)("li",{id:"sign_in",className:"nav-links",children:Object(c.jsx)("a",{onClick:K,"data-mode":"Includes",href:"#",children:"Mode strict"})}),Object(c.jsx)("li",{id:"sign_in",className:"nav-links",children:Object(c.jsx)("a",{onClick:K,"data-mode":"SemiIncludes",href:"#",children:"Mode SemiIncludes"})}),Object(c.jsx)("li",{id:"sign_in",className:"nav-links",children:Object(c.jsx)("a",{onClick:K,"data-mode":"SemiChar",href:"#",children:"Mode SemiChar"})}),Object(c.jsx)("li",{id:"sign_in",className:"nav-links",children:Object(c.jsx)("a",{onClick:K,"data-mode":"Char",href:"#",children:"Mode Char"})})]})}),Object(c.jsx)("img",{src:g,className:"App-logo",alt:"logo"}),Object(c.jsx)("div",{class:"logo",children:Object(c.jsx)("img",{alt:"Google",src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"})}),Object(c.jsx)("div",{class:"bar",children:Object(c.jsx)("input",{ref:t,class:"searchbar",type:"text",title:"Search"})}),Object(c.jsx)("div",{class:"buttons",children:Object(c.jsx)("button",{onClick:function(e){console.log(G),$([]);var a=t.current.value.split(" ").filter((function(e){return e.length>0})),c=[];a.forEach((function(e){n.forEach((function(t){for(var a in t.body){if("Includes"===G){if(a.includes(e.toLowerCase())||e.toLowerCase().includes(a))if(Math.abs(a.length-e.toLowerCase().length)<3)c.find((function(e){return e.element===t}))||c.push({id:t.descriptions+t.title+t.keywords,element:t,click:0})}else if("Char"===G){for(var r=0,i=0;i<e.toLowerCase().length;i++)a.includes(e.toLowerCase().charAt(i))&&r++;if(Math.abs(e.toLowerCase().length-r)<1)if(Math.abs(a.length-r)<3)console.log(e.toLowerCase().length,r),c.find((function(e){return e.element===t}))||c.push({id:t.descriptions+t.title+t.keywords,element:t,click:0})}else if("SemiChar"===G){for(var l=e.toLowerCase().substr(0,e.toLowerCase().length/2),n=e.toLowerCase().substr(e.toLowerCase().length/2,e.toLowerCase().length),s=a.substr(0,a.length/2),o=a.substr(a.length/2,a.length),g=0,d=0;d<l.length;d++)s.includes(l.charAt(d))&&(g+=1);for(var p=0;p<n.length;p++)o.includes(n.charAt(p))&&(g+=1);e.toLowerCase().length-g<3&&(console.log(e.toLowerCase().length,g),c.push({id:t.descriptions+t.title+t.keywords,element:t,click:0}))}else if("SemiIncludes"===G){var u=e.toLowerCase().substr(0,e.toLowerCase().length/2),b=e.toLowerCase().substr(e.toLowerCase().length/2,e.toLowerCase().length),h=a.substr(0,a.length/2),f=a.substr(a.length/2,a.length);h!==u&&f!==b&&b!==f&&u!==h||(console.log(a),c.push({id:t.descriptions+t.title+t.keywords,element:t,click:0}))}}$(c),console.log(j),y(c.slice(0,3))}))}))},class:"button",type:"button",children:"Chercher"})}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"global",children:k.map((function(e,t){return Object(c.jsxs)("div",{className:"g",children:[Object(c.jsxs)("div",{className:"firstPart",children:[Object(c.jsx)("h4",{className:"title",children:Object(c.jsx)("a",{"data-val":e.element.title,onClick:Q,target:"_blank",href:"https://salim499.github.io/dataVizFinalRender/CommentCaMarche/"+e.element.file.split("/")[e.element.file.split.length+1],children:v(e.element.title)})}),Object(c.jsx)("p",{className:"p",children:e.element.descriptions?v((e.element.descriptions+e.element.keywords).slice(0,300)):v(e.element.keywords.slice(0,300))}),Object(c.jsx)("br",{}),Object(c.jsx)(b.a,{name:"rate1",starCount:5,value:e.click}),"\xa0 \u2002",Object(c.jsxs)("button",{className:"myButton",style:{color:"black"},"data-val":e.id,onClick:H,children:[J," nuage de mots"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),I.includes(e.id)?Object(c.jsx)(m.b,{children:Object(c.jsx)(m.a,{children:Object(c.jsx)("div",{className:"secondPart",children:Object(c.jsx)(f,{word:N})})})}):null]})}))}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"Footer",children:j?O(j).map((function(t,a){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("a",{onClick:e,"data-val":t,href:"#",rel:"noopener noreferrer",children:t}),"\u2002 \xa0"]})})):null}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),c(e),r(e),i(e),l(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),C()}},[[87,1,2]]]);
//# sourceMappingURL=main.2d3123e5.chunk.js.map