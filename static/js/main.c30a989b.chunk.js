(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),o=s(5),a=s(6),c=s(9),l=s(7),u=s(8),h=s(1),d=s.n(h),b=(s(14),s(15),s(2)),p=s.n(b),g=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return i.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r?i.reverse():(console.log(s,r),i)}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(c.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:n.NONE,isChanged:!1},t.sortAlphabet=function(){t.setState({sortType:n.ALPHABET,isChanged:!0})},t.sortByLength=function(){t.setState({sortType:n.LENGTH,isChanged:!0})},t.toReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed,isChanged:!t.isChanged}}))},t.toReset=function(){t.setState({isReversed:!1,sortType:n.NONE,isChanged:!1})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isChanged,s=t.isReversed;return Object(g.jsxs)("div",{className:"section content",children:[Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":this.state.sortType!==n.ALPHABET}),onClick:this.sortAlphabet,children:"Sort alphabetically"}),Object(g.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":this.state.sortType!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(g.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!this.state.isReversed}),onClick:this.toReverse,children:"Reverse"}),(e||s)&&Object(g.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.toReset,children:"Reset"})]}),Object(g.jsx)("ul",{children:Object(g.jsx)("ul",{children:v(j,this.state).map((function(t){return Object(g.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.a.PureComponent);i.a.render(Object(g.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c30a989b.chunk.js.map