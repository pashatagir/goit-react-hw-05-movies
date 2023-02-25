"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[470],{7185:function(n,t,e){e.d(t,{UK:function(){return s},W2:function(){return c},_V:function(){return p}});var r,i,a,o=e(168),u=e(4313),c=u.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),s=u.ZP.div(i||(i=(0,o.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),p=u.ZP.h3(a||(a=(0,o.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"])))},7233:function(n,t,e){e.d(t,{Pg:function(){return c},Pt:function(){return s},z5:function(){return u}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"7cc21d4cba3da7a5d2a2ac6813f90105"};var u=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8470:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i,a,o,u,c,s=e(3433),p=e(9439),d=e(7185),l=e(2791),f=e(168),x=e(4313),h=e(9128),g=(x.ZP.div(r||(r=(0,f.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),x.ZP.input(i||(i=(0,f.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),(0,x.ZP)(h.G4C)(a||(a=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),x.ZP.form(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 1px solid black;\n  margin-bottom: 30px;\n  overflow: hidden;\n"])))),m=x.ZP.button(u||(u=(0,f.Z)(["\n  display: inline-block;\n  height: 20px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.4;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=x.ZP.input(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=e(184),Z=function(n){var t=n.onSubmit,e=(0,l.useState)(""),r=(0,p.Z)(e,2),i=r[0],a=r[1];return(0,b.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(i),a("")},children:[(0,b.jsx)(v,{type:"text",value:i,onChange:function(n){var t=n.currentTarget.value;a(t)}}),(0,b.jsx)(m,{type:"submit",children:"Search"})]})},k=e(7233),y=e(1087),w=e(7689),j=function(){var n,t=(0,y.lr)(),e=(0,p.Z)(t,2),r=e[0],i=e[1],a=null!==(n=r.get("name"))&&void 0!==n?n:"",o=(0,l.useState)([]),u=(0,p.Z)(o,2),c=u[0],f=u[1];(0,l.useEffect)((function(){(0,k.Pt)(a).then((function(n){var t=n.results;f((0,s.Z)(t))}))}),[a]);return(0,b.jsxs)("main",{children:[(0,b.jsx)(Z,{value:a,onSubmit:function(n){i(""!==n?{name:n}:{}),f([])}}),(0,b.jsxs)(d.W2,{children:[c.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path;return(0,b.jsx)(d.UK,{children:(0,b.jsxs)(y.rU,{to:"".concat(t),children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(r),alt:e}),(0,b.jsx)(d._V,{children:e})]})},t)})),(0,b.jsx)(l.Suspense,{children:(0,b.jsx)(w.j3,{})})]})]})}}}]);
//# sourceMappingURL=470.68b0d827.chunk.js.map