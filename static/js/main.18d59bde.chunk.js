(this["webpackJsonpword-blitz"]=this["webpackJsonpword-blitz"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),i=(n(15),n(16),n(7)),o=n(10),l=n(3),u=n(2),j=n(0);function d(e){return Object(j.jsxs)("div",{className:"Timer",children:["Time: ",e.time,"s"]})}var f=n(5),O={A:90,B:20,C:50,D:30,E:110,F:20,G:20,H:30,I:80,J:80,K:11,L:50,M:30,N:70,O:70,P:30,Q:2,R:80,S:60,T:70,U:40,V:10,W:10,X:2,Y:2,Z:2};function b(e){return Math.round((200-O[e])/10)}function h(e){return Object(j.jsxs)("div",{className:e.isSelected?"Tile Selected":"Tile",children:[Object(j.jsx)("div",{className:"Score",children:b(e.char)}),e.char]})}function v(e){var t=e.wordString;function n(e,t){var n=e.indexOf(t);return-1===n?[e,!1]:[[].concat(Object(f.a)(e.slice(0,n)),Object(f.a)(e.slice(n+1))),!0]}return Object(j.jsx)("div",{className:"WordTiles",children:function(t){for(var r,c,a,s=e.typedWord.split(""),i=!1,o=[],l=0;l<t.length;l++){var d=n(s,t[l]),f=Object(u.a)(d,2);s=f[0],i=f[1],o.push((r=t[l],c=l,a=i,Object(j.jsx)(h,{isSelected:a,char:r},c)))}return o}(t)})}function x(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!0),i=Object(u.a)(s,2),o=i[0],d=i[1];function O(e,t){var n=e.indexOf(t);return-1===n?[e,!1]:[[].concat(Object(f.a)(e.slice(0,n)),Object(f.a)(e.slice(n+1))),!0]}function b(){var t,n=c.split(""),r=Object(l.a)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(-1===e.letters.indexOf(a))return!1}}catch(b){r.e(b)}finally{r.f()}var s,i=[e.letters,!1],o=i[0],j=Object(l.a)(n);try{for(j.s();!(s=j.n()).done;){var d=O(o,s.value),f=Object(u.a)(d,2);if(o=f[0],!f[1])return!1}}catch(b){j.e(b)}finally{j.f()}return!0}return Object(r.useEffect)((function(){d(b())}),[c]),Object(j.jsx)("input",{type:"text",className:o?"WordInput":"WordInput Invalid",onKeyDown:function(t){"Enter"===t.key&&c.length>0&&b()&&(e.handleWordSubmit(c),a(""))},onChange:function(t){var n=t.target.value.toUpperCase();a(n),e.handleTypedWord(n)},value:c})}function S(e){return Object(j.jsx)("div",{className:S,children:Object(j.jsx)("ul",{className:"FoundWords list",children:function(t){for(var n=[],r=0,c=Object.keys(e.usedWords);r<c.length;r++){var a=c[r];n.push(Object(j.jsxs)("li",{className:"FoundWord",children:[a," +",e.usedWords[a]]},a))}return n}(e.usedWords)})})}function g(){var e={A:7,B:2,C:3,D:4,E:12,F:2,G:2,H:5,I:6,J:1,K:1,L:4,M:3,N:6,O:8,P:2,Q:1,R:6,S:6,T:9,U:3,V:1,W:2,X:1,Y:2,Z:1},t=["A","E","I","O","U"],n=["B","C","D","F","G","H","K","L","M","N","P","R","S","T","W","Y"];var r=function(){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++)for(var c=r[n],a=0;a<e[c];a++)t.push(c);return t}();var c=function(){for(var e=[],c=0;c<10;c++)e.push(r[Math.floor(Math.random()*r.length)]);if(function(e){var n,r=0,c=Object(l.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;-1!==t.indexOf(a)&&(r+=1)}}catch(s){c.e(s)}finally{c.f()}return r}(e)<=1)for(var a=0;a<e.length;a++)-1===t.indexOf(e[a])&&(e[a]=t[Math.floor(Math.random()*t.length)]);if(function(e){var n,r=0,c=Object(l.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;-1===t.indexOf(a)&&(r+=1)}}catch(s){c.e(s)}finally{c.f()}return r}(e)<=1)for(var s=0;s<e.length;s++)-1===t.indexOf(e[s])&&(e[s]=n[Math.floor(Math.random()*n.length)]);return e}();return console.log(c),c}function p(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),f=Object(u.a)(s,2),O=(f[0],f[1],Object(r.useState)(0)),h=Object(u.a)(O,2),p=h[0],m=h[1],y=Object(r.useState)({}),W=Object(u.a)(y,2),T=W[0],N=W[1],I=Object(r.useState)(!1),C=Object(u.a)(I,2),M=(C[0],C[1],Object(r.useState)([])),w=Object(u.a)(M,2),F=w[0],E=w[1],P=Object(r.useState)(!0),k=Object(u.a)(P,2),B=k[0],A=k[1],L=n(18);function D(e){var t,n=e.split(""),r=0,c=Object(l.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value;r+=b(a)}}catch(s){c.e(s)}finally{c.f()}N(Object(o.a)(Object(i.a)({},e,r),T)),m((function(e){return e+r}))}var R=Object(r.useState)(0),U=Object(u.a)(R,2),H=U[0],J=U[1];return Object(r.useEffect)((function(){var e=setInterval((function(){H>0&&J((function(e){return e-1})),0===H&&clearInterval(e)}),1e3);return function(){return clearInterval(e)}}),[H]),Object(j.jsxs)("div",{className:"WordBlitz",children:[!B&&Object(j.jsx)(d,{time:H}),B&&Object(j.jsxs)("div",{className:"Instructions",children:[Object(j.jsx)("h1",{children:"How To Play: "}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Press START"}),Object(j.jsx)("li",{children:"Enter as many words as possible using the letters given."}),Object(j.jsx)("li",{children:"Score is calculated from letters used."})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)(v,{typedWord:c.toUpperCase(),wordString:F}),0===H?Object(j.jsx)("button",{className:"StartButton",onClick:function(){A(!1),J(30),E(g()),m(0),N([]),a("")},children:"START"}):Object(j.jsx)(x,{handleTypedWord:function(e){a(e)},letters:F,handleWordSubmit:function(e){var t=e.toLowerCase(),n=L.lengths[e.length-1],r=L.lengths[e.length];2===e.length&&(n=0);for(var c=n;c<r;c++)if(t===L[c])return-1===Object.keys(T).indexOf(e)&&D(e),!0;return!1}}),!B&&Object(j.jsxs)("div",{className:"PlayerScore",children:["Score: ",p]}),Object(j.jsx)(S,{usedWords:T})]})}var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),y()}},[[20,1,2]]]);
//# sourceMappingURL=main.18d59bde.chunk.js.map