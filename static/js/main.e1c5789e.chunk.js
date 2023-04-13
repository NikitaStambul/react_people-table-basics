(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(23),c(2)),s=c(6),j=c.n(s),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})},b=c(8),h=c(12),d=c(4),O=c(1);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(25);var x=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person,c=t.sex,n=t.slug,a=t.name,s=t.born,l=t.died,o=t.motherName,b=t.fatherName,h=t.mother,d=t.father,O=Object(r.h)().slug,u=void 0===O?"":O;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n===u}),children:[Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"#/people/".concat(n),className:j()({"has-text-danger":"f"===c}),children:a})}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:l}),h?Object(i.jsx)("td",{children:Object(i.jsx)("a",{className:"has-text-danger",href:"#/people/".concat(h.slug),children:h.name})}):Object(i.jsx)("td",{children:o||"-"}),d?Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"#/people/".concat(d.slug),children:d.name})}):Object(i.jsx)("td",{children:b||"-"})]})},m=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(p,{person:e},e.slug)}))})]})},f=c(9);function v(e){return e.map((function(t){var c=e.find((function(e){var c=e.name;return t.motherName===c})),n=e.find((function(e){var c=e.name;return t.fatherName===c}));return Object(f.a)(Object(f.a)({},t),{},{mother:c,father:n})}))}var g=function(){var e=Object(O.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!0),r=Object(d.a)(a,2),s=r[0],j=r[1],l=Object(O.useState)(!1),o=Object(d.a)(l,2),p=o[0],f=o[1],g=function(){var e=Object(h.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:t=e.sent,c=v(t),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(O.useEffect)((function(){g()}),[]);var N=Object(O.useMemo)((function(){return Boolean(c.length)}),[c]);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(x,{}),p&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!N&&!p&&!s&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),N&&Object(i.jsx)(m,{people:c})]})})]})},N=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})},y=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"people",text:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.b,{path:"people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(g,{})}),Object(i.jsx)(r.b,{path:":slug",element:Object(i.jsx)(g,{})})]}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(N,{})})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(y,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e1c5789e.chunk.js.map