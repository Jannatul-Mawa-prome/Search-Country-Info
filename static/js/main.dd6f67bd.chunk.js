(this["webpackJsonpsearch-country"]=this["webpackJsonpsearch-country"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),i=n.n(a),s=(n(55),n.p,n(56),n(29)),j=n(97),o=n(92),l=n(10),u=n(6);var h=function(e){var t=e.info,n=t.name,c=t.flag,r=t.capital,a=Object(l.f)();return Object(u.jsx)(o.a,{container:!0,item:!0,xs:6,md:2,children:Object(u.jsxs)("div",{style:{border:"1px solid black",height:"auto",width:"150px",margin:"20px"},children:[Object(u.jsx)("img",{style:{width:"100%",height:"100px",objectFit:"cover"},src:c,alt:"flag"}),Object(u.jsx)("h3",{children:n}),Object(u.jsx)("p",{children:r}),Object(u.jsx)(j.a,{onClick:function(){a.push("/details/".concat(n))},size:"small",style:{margin:"8px"},variant:"contained",color:"secondary",children:"Show Detail"})]})})},b=n(96);var d=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var a=Object(c.useState)(""),i=Object(s.a)(a,2),j=i[0],l=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"These are country."}),Object(u.jsx)(b.a,{onChange:function(e){return l(e.target.value)},label:"Search country..."}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{container:!0,spacing:1,children:n.filter((function(e){return""===e||e.name.toLowerCase().includes(j.toLowerCase())?e:void 0})).map((function(e){return Object(u.jsx)(h,{info:e})}))})]})},x=n(30);var O=function(){var e=Object(l.g)().name,t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e[0])}))}),[]),Object(u.jsxs)("div",{style:{border:"1px solid black",textAlign:"center"},children:[Object(u.jsx)("img",{style:{width:"200px"},src:r.flag,alt:"flag"}),Object(u.jsxs)("h3",{children:["Country name: ",r.name]}),Object(u.jsxs)("h5",{children:["Capital: ",r.capital]}),Object(u.jsxs)("h5",{children:["Population: ",r.population]})]})};var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"/country",children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"/details/:name",children:Object(u.jsx)(O,{})})]})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}},[[63,1,2]]]);
//# sourceMappingURL=main.dd6f67bd.chunk.js.map