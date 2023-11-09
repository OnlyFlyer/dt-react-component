"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7670,3958],{13918:function(K,a,e){e.d(a,{Z:function(){return S}});var O=e(2211),m=e(50959),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},_=f,r=e(47151),o=function(T,g){return m.createElement(r.Z,(0,O.Z)((0,O.Z)({},T),{},{ref:g,icon:_}))};o.displayName="DeleteOutlined";var S=m.forwardRef(o)},90057:function(K,a,e){e.d(a,{Z:function(){return S}});var O=e(2211),m=e(50959),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"},_=f,r=e(47151),o=function(T,g){return m.createElement(r.Z,(0,O.Z)((0,O.Z)({},T),{},{ref:g,icon:_}))};o.displayName="FormOutlined";var S=m.forwardRef(o)},66357:function(K,a,e){e.d(a,{Z:function(){return S}});var O=e(2211),m=e(50959),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"},_=f,r=e(47151),o=function(T,g){return m.createElement(r.Z,(0,O.Z)((0,O.Z)({},T),{},{ref:g,icon:_}))};o.displayName="PlusSquareOutlined";var S=m.forwardRef(o)},7947:function(K,a,e){e.r(a),e.d(a,{DefaultTree:function(){return T}});var O=e(93525),m=e.n(O),f=e(54306),_=e.n(f),r=e(50959),o=e(89647),S=e(76596),j=e(11527),T=function(){var L,i,D,x=(0,r.useState)(S.r),A=_()(x,2),c=A[0],y=A[1],C=(0,r.useState)([]),R=_()(C,2),u=R[0],W=R[1],M=function(l){console.log(l);var t=l.node.key,d=l.dragNode.key,p=l.node.pos.split("-"),E=l.dropPosition-Number(p[p.length-1]),v=function P(I,b,H){for(var $=0;$<I.length;$++){if(I[$].key===b)return H(I[$],$,I);I[$].children&&P(I[$].children,b,H)}},s=m()(c),n;if(v(s,d,function(P,I,b){b.splice(I,1),n=P}),!l.dropToGap)v(s,t,function(P){P.children=P.children||[],P.children.unshift(n)});else if((l.node.props.children||[]).length>0&&l.node.props.expanded&&E===1)v(s,t,function(P){P.children=P.children||[],P.children.unshift(n)});else{var h=[],k;v(s,t,function(P,I,b){h=b,k=I}),E===-1?h.splice(k,0,n):h.splice(k+1,0,n)}y(s)},B=function(l){var t=[],d=function p(E){E.forEach(function(v){var s;l.includes(v.key)&&t.push(v),v!=null&&(s=v.children)!==null&&s!==void 0&&s.length&&p(v==null?void 0:v.children)})};d(c),W(t),console.log(l,"--selectedKeys")};return console.log(u,"--selectedItems"),(0,j.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,j.jsx)(o.Catalogue.Tree,{treeData:c,showHeader:!0,treeTitle:"\u81EA\u5B9A\u4E49\u76EE\u5F55",draggable:{icon:!1,nodeDraggable:function(){return!0}},height:500,wrapperStyle:{width:300},onSearch:function(l,t){console.log(l,t,"--onSearch")},onDrop:M,onSelect:B,multiple:!0}),(0,j.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:u!=null&&u.length?"\u9009\u4E2D\u4E86 ".concat(u==null||(L=u.map)===null||L===void 0||(i=L.call(u,function(U){return U==null?void 0:U.title}))===null||i===void 0||(D=i.join)===null||D===void 0?void 0:D.call(i,"\u3001")):"Content"})]})};a.default=T},58200:function(K,a,e){e.r(a),e.d(a,{NoHeaderTree:function(){return S}});var O=e(54306),m=e.n(O),f=e(50959),_=e(89647),r=e(76596),o=e(11527),S=function(){var T,g,L,i=(0,f.useState)(r.r),D=m()(i,1),x=D[0],A=(0,f.useState)([]),c=m()(A,2),y=c[0],C=c[1],R=function(W){var M=[],B=function U(l){l.forEach(function(t){var d;W.includes(t.key)&&M.push(t),t!=null&&(d=t.children)!==null&&d!==void 0&&d.length&&U(t==null?void 0:t.children)})};B(x),C(M),console.log(W,"--selectedKeys")};return console.log(y,"--selectedItems"),(0,o.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,o.jsx)(_.Catalogue.Tree,{treeData:x,showHeader:!1,height:500,wrapperStyle:{paddingTop:12},onSelect:R}),(0,o.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:y!=null&&y.length?"\u9009\u4E2D\u4E86 ".concat(y==null||(T=y.map)===null||T===void 0||(g=T.call(y,function(u){return u==null?void 0:u.title}))===null||g===void 0||(L=g.join)===null||L===void 0?void 0:L.call(g,"\u3001")):"Content"})]})};a.default=S},48505:function(K,a,e){e.r(a),e.d(a,{SmallTree:function(){return T}});var O=e(93525),m=e.n(O),f=e(54306),_=e.n(f),r=e(50959),o=e(89647),S=e(76596),j=e(11527),T=function(){var L,i,D,x=(0,r.useState)(S.r),A=_()(x,2),c=A[0],y=A[1],C=(0,r.useState)([]),R=_()(C,2),u=R[0],W=R[1],M=function(t){console.log(t);var d=t.node.key,p=t.dragNode.key,E=t.node.pos.split("-"),v=t.dropPosition-Number(E[E.length-1]),s=function I(b,H,$){for(var Z=0;Z<b.length;Z++){if(b[Z].key===H)return $(b[Z],Z,b);b[Z].children&&I(b[Z].children,H,$)}},n=m()(c),h;if(s(n,p,function(I,b,H){H.splice(b,1),h=I}),!t.dropToGap)s(n,d,function(I){I.children=I.children||[],I.children.unshift(h)});else if((t.node.props.children||[]).length>0&&t.node.props.expanded&&v===1)s(n,d,function(I){I.children=I.children||[],I.children.unshift(h)});else{var k=[],P;s(n,d,function(I,b,H){k=H,P=b}),v===-1?k.splice(P,0,h):k.splice(P+1,0,h)}y(n)},B=function(t){return console.log(t,"--node"),(0,S._)(1500,[])},U=function(t){var d=[],p=function E(v){v.forEach(function(s){var n;t.includes(s.key)&&d.push(s),s!=null&&(n=s.children)!==null&&n!==void 0&&n.length&&E(s==null?void 0:s.children)})};p(c),W(d),console.log(t,"--selectedKeys")};return console.log(u,"--selectedItems"),(0,j.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,j.jsx)(o.Catalogue.Tree,{treeData:c,showHeader:!0,size:"small",treeTitle:"\u81EA\u5B9A\u4E49\u76EE\u5F55",draggable:{icon:!1,nodeDraggable:function(){return!0}},height:500,loadData:B,onSearch:function(t,d){console.log(t,d,"--onSearch")},onDrop:M,onSelect:U}),(0,j.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:u!=null&&u.length?"\u9009\u4E2D\u4E86 ".concat(u==null||(L=u.map)===null||L===void 0||(i=L.call(u,function(l){return l==null?void 0:l.title}))===null||i===void 0||(D=i.join)===null||D===void 0?void 0:D.call(i,"\u3001")):"Content"})]})};a.default=T},87723:function(K,a,e){e.r(a),e.d(a,{WithBtnSlotTree:function(){return D}});var O=e(86366),m=e.n(O),f=e(17727),_=e(54306),r=e.n(_),o=e(50959),S=e(66357),j=e(90057),T=e(13918),g=e(89647),L=e(76596),i=e(11527),D=function(){var A,c,y,C=(0,o.useState)(L.r),R=r()(C,1),u=R[0],W=(0,o.useState)([]),M=r()(W,2),B=M[0],U=M[1],l=function(d){var p=[],E=function v(s){s.forEach(function(n){var h;d.includes(n.key)&&p.push(n),n!=null&&(h=n.children)!==null&&h!==void 0&&h.length&&v(n==null?void 0:n.children)})};E(u),U(p),console.log(d,"--selectedKeys")};return console.log(B,"--selectedItems"),(0,i.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,i.jsx)(g.Catalogue.Tree,{treeData:u,showHeader:!0,height:500,onSelect:l,btnSlot:(0,i.jsxs)(f.default,{style:{marginRight:10},children:[(0,i.jsx)(S.Z,{}),(0,i.jsx)(j.Z,{}),(0,i.jsx)(T.Z,{})]})}),(0,i.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:B!=null&&B.length?"\u9009\u4E2D\u4E86 ".concat(B==null||(A=B.map)===null||A===void 0||(c=A.call(B,function(t){return t==null?void 0:t.title}))===null||c===void 0||(y=c.join)===null||y===void 0?void 0:y.call(c,"\u3001")):"Content"})]})};a.default=D},5341:function(K,a,e){e.r(a),e.d(a,{WithCheckboxTree:function(){return S}});var O=e(54306),m=e.n(O),f=e(50959),_=e(89647),r=e(76596),o=e(11527),S=function(){var T,g,L,i,D=(0,f.useState)(r.r),x=m()(D,1),A=x[0],c=(0,f.useState)([]),y=m()(c,2),C=y[0],R=y[1],u=(0,f.useState)([]),W=m()(u,2),M=W[0],B=W[1],U=function(d){console.log(d,"--selectedKeys");var p=[],E=function v(s){s.forEach(function(n){var h;d.includes(n.key)&&p.push(n),n!=null&&(h=n.children)!==null&&h!==void 0&&h.length&&v(n==null?void 0:n.children)})};E(A),R(p)},l=function(d,p){console.log(p,"--info"),console.log(d,"--checkedKeys");var E=[],v=function s(n){n.forEach(function(h){var k,P;d!=null&&(k=d.includes)!==null&&k!==void 0&&k.call(d,h.key)&&E.push(h),h!=null&&(P=h.children)!==null&&P!==void 0&&P.length&&s(h==null?void 0:h.children)})};v(A),B(E)};return console.log(C,"--selectedItems"),console.log(M,"--checkedItems"),(0,o.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,o.jsx)(_.Catalogue,{treeData:A,showHeader:!0,treeTitle:"\u81EA\u5B9A\u4E49\u76EE\u5F55",height:500,onSearch:function(d,p){console.log(d,p,"--onSearch")},checkable:!0,onSelect:U,onCheck:l}),(0,o.jsxs)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:[(0,o.jsx)("p",{children:C!=null&&C.length?"\u9009\u4E2D\u4E86 ".concat(C==null||(T=C.map)===null||T===void 0||(g=T.call(C,function(t){return t==null?void 0:t.title}))===null||g===void 0||(L=g.join)===null||L===void 0?void 0:L.call(g,"\u3001")):"\u672A\u9009\u4E2D"}),(0,o.jsx)("p",{children:M!=null&&M.length?"\u52FE\u9009\u4E86 ".concat(M==null||(i=M.map(function(t){return t==null?void 0:t.title}))===null||i===void 0?void 0:i.join("\u3001")):null})]})]})};a.default=S},10200:function(K,a,e){e.r(a),e.d(a,{WithTabsTree:function(){return x}});var O=e(86366),m=e.n(O),f=e(17727),_=e(54306),r=e.n(_),o=e(50959),S=e(66357),j=e(90057),T=e(13918),g=e(89647),L=e(49568),i=e(76596),D=e(11527),x=function(){var c,y,C,R=(0,o.useState)(i.r),u=r()(R,2),W=u[0],M=u[1],B=(0,o.useState)([]),U=r()(B,2),l=U[0],t=U[1],d=function(E){console.log(E,"--selectedKeys");var v=[],s=function n(h){h.forEach(function(k){var P;E.includes(k.key)&&v.push(k),k!=null&&(P=k.children)!==null&&P!==void 0&&P.length&&n(k==null?void 0:k.children)})};s(W),t(v)};return console.log(l,"--selectedItems"),(0,D.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,D.jsx)(g.Catalogue.Tree,{treeData:W,showHeader:!0,height:500,wrapperStyle:{width:300},onSelect:d,defaultStatus:L.I3.tabs,tabsProps:{items:[{label:"All",key:"all"},{label:"\u9879\u76EE1",key:"project_1"},{label:"\u9879\u76EE2",key:"project_2"},{label:"\u7981\u7528",key:"project_3",disabled:!0}],onTabClick:function(E,v){console.log(E,v,"onTabClick"),E==="project_1"?M(i.r.slice(0,2)):E==="project_2"?M(i.r.slice(3)):E==="all"&&M(i.r)}},onStatusChange:function(E){E===L.I3.search&&M(i.r)},btnSlot:(0,D.jsxs)(f.default,{style:{marginRight:10},children:[(0,D.jsx)(S.Z,{}),(0,D.jsx)(j.Z,{}),(0,D.jsx)(T.Z,{})]})}),(0,D.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:(0,D.jsx)("p",{children:l!=null&&l.length?"\u9009\u4E2D\u4E86 ".concat(l==null||(c=l.map)===null||c===void 0||(y=c.call(l,function(p){return p==null?void 0:p.title}))===null||y===void 0||(C=y.join)===null||C===void 0?void 0:C.call(y,"\u3001")):"\u672A\u9009\u4E2D"})})]})};a.default=x},25627:function(K,a,e){e.r(a),e.d(a,{NormalTreeSelect:function(){return S},default:function(){return j}});var O=e(54306),m=e.n(O),f=e(50959),_=e(89647),r=[{value:"1",title:"1",children:[{value:"1.1",title:"1.1",children:[{value:"1.1.1",title:"1.1.1",isLeaf:!0},{value:"1.1.2",title:"1.1.2",isLeaf:!0},{value:"1.1.3",title:"1.1.3",isLeaf:!0},{value:"1.1.4",title:"1.1.4",isLeaf:!0},{value:"1.1.5",title:"1.1.5",isLeaf:!0},{value:"1.1.6",title:"1.1.6",isLeaf:!0}]},{value:"1.2",title:"1.2",children:[{value:"1.2.1",title:"1.2.1",isLeaf:!0}]}]},{value:"2",title:"2",children:[{value:"2.1",title:"2.1",children:[{value:"2.1.1",title:"2.1.1",isLeaf:!0},{value:"2.1.2",title:"2.1.2",isLeaf:!0}]},{value:"2.2",title:"2.2",children:[{value:"2.2.1",title:"2.2.1",isLeaf:!0},{value:"2.2.2",title:"2.2.2",isLeaf:!0},{value:"2.2.3",title:"2.2.3",isLeaf:!0},{value:"2.2.4",title:"2.2.4",isLeaf:!0},{value:"2.2.5",title:"2.2.5",isLeaf:!0},{value:"2.2.6",title:"2.2.6",isLeaf:!0},{value:"2.2.7",title:"2.2.7",isLeaf:!0}]}]},{value:"3",title:"3",children:[{value:"3.1",title:"3.1",children:[{value:"3.1.1",title:"3.1.1",isLeaf:!0},{value:"3.1.2",title:"3.1.2",isLeaf:!0}]},{value:"3.2",title:"3.2",children:[{value:"3.2.1",title:"3.2.1",isLeaf:!0}]}]},{value:"4",title:"4",children:[{value:"4.1",title:"4.1",children:[{value:"4.1.1",title:"4.1.1",isLeaf:!0},{value:"4.1.2",title:"4.1.2",isLeaf:!0}]},{value:"4.2",title:"4.2",children:[{value:"4.2.1",title:"4.2.1",isLeaf:!0}]}]}],o=e(11527),S=function(){var g,L=(0,f.useState)(r),i=m()(L,1),D=i[0],x=(0,f.useState)([]),A=m()(x,2),c=A[0],y=A[1],C=function(u,W,M){y(W)};return console.log(c,"--selectedLabelList"),(0,o.jsxs)("div",{style:{display:"flex",background:"#eee",padding:20},children:[(0,o.jsx)(_.Catalogue.TreeSelect,{treeData:D,style:{width:200},showSearch:!0,multiple:!0,onChange:C}),(0,o.jsx)("p",{style:{marginLeft:12,marginBottom:0,padding:10,flex:1,background:"#fff"},children:(0,o.jsx)("p",{children:c!=null&&c.length?"\u9009\u4E2D\u4E86 ".concat(c==null||(g=c.join)===null||g===void 0?void 0:g.call(c,"\u3001")):"\u672A\u9009\u4E2D"})})]})},j=S},76596:function(K,a,e){e.d(a,{_:function(){return m},r:function(){return O}});var O=[{key:"1",title:"\u6587\u4EF6\u59391",contextMenuConfig:{data:[{text:"\u65E5\u5FD7",key:"log"},{text:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",key:"customOperation"}],onClick:function(_,r){console.log(_,r,"--8")}},children:[{key:"1.1",title:"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u4EF6\u5939\u540D\u79F0",contextMenuConfig:{data:[{text:"\u65B0\u5EFA\u6587\u4EF6\u5939",key:"newFolder"},{text:"\u5220\u9664",key:"deleteFolder"}],onClick:function(_,r){console.log(_,r,"--13")}},children:[{key:"1.1.1",title:"\u6587\u4EF62",contextMenuConfig:{data:[{text:"\u7F16\u8F91",key:"editFile"},{text:"\u5220\u9664",key:"deleteFile"},{text:"\u514B\u9686",key:"cloneFile"}],onClick:function(_,r){console.log(_,r,"--23")}}},{key:"1.1.2",title:"\u6587\u4EF63"},{key:"1.1.3",title:"\u6587\u4EF64"},{key:"1.1.4",title:"\u6587\u4EF65"},{key:"1.1.5",title:"\u6587\u4EF66"},{key:"1.1.6",title:"\u6587\u4EF67"}]},{key:"1.2",title:"\u6587\u4EF6\u59398",children:[{key:"1.2.1",title:"\u6587\u4EF69"}]}]},{key:"2",title:"\u6587\u4EF6\u593910",children:[{key:"2.1",title:"\u6587\u4EF6\u593911",children:[{key:"2.1.1",title:"\u6587\u4EF612"},{key:"2.1.2",title:"\u6587\u4EF613"}]},{key:"2.2",title:"\u6587\u4EF6\u593914",children:[{key:"2.2.1",title:"\u6587\u4EF615"},{key:"2.2.2",title:"\u6587\u4EF616"},{key:"2.2.3",title:"\u6587\u4EF617"},{key:"2.2.4",title:"\u6587\u4EF618"},{key:"2.2.5",title:"\u6587\u4EF619"},{key:"2.2.6",title:"\u6587\u4EF620"},{key:"2.2.7",title:"\u6587\u4EF621"}]}]},{key:"3",title:"\u6587\u4EF6\u593922",children:[{key:"3.1",title:"\u6587\u4EF6\u593923",children:[{key:"3.1.1",title:"\u6587\u4EF624"},{key:"3.1.2",title:"\u6587\u4EF625"}]},{key:"3.2",title:"\u6587\u4EF6\u593926",children:[{key:"3.2.1",title:"\u6587\u4EF627"}]}]},{key:"4",title:"4",children:[{key:"4.1",title:"\u6587\u4EF6\u593928",children:[{key:"4.1.1",title:"\u6587\u4EF629"},{key:"4.1.2",title:"\u6587\u4EF630"}]},{key:"4.2",title:"\u6587\u4EF6\u593931",children:[{key:"4.2.1",title:"\u6587\u4EF632"}]}]},{key:"521751",title:"\u6587\u4EF6\u593933",children:[{key:"5.1",title:"\u6587\u4EF6\u593934",children:[{key:"5.1.1",title:"\u6587\u4EF635"},{key:"5.1.2",title:"\u6587\u4EF636"},{key:"5.1.3",title:"\u6587\u4EF637"},{key:"5.1.4",title:"\u6587\u4EF638"}]},{key:"5.2",title:"\u6587\u4EF6\u593939",children:[{key:"5.2.12",title:"\u6587\u4EF640"}]},{key:"5.3",title:"\u6587\u4EF6\u593941",children:[{key:"5.2.131",title:"\u6587\u4EF642"},{key:"5.2.2",title:"\u6587\u4EF643"},{key:"5.2.3",title:"\u6587\u4EF644"}]}]},{key:"6123123",title:"\u6587\u4EF6\u593945",children:[{key:"6.1",title:"\u6587\u4EF6\u593946",children:[{key:"6.1.1",title:"\u6587\u4EF647"},{key:"6.1.2",title:"\u6587\u4EF648"},{key:"6.1.3",title:"\u6587\u4EF649"},{key:"6.1.4",title:"\u6587\u4EF650"}]},{key:"6.2",title:"\u6587\u4EF6\u593951",children:[{key:"6.2.1123",title:"\u6587\u4EF652"}]},{key:"6.3",title:"\u6587\u4EF6\u593953",children:[{key:"6.2.1867234",title:"\u6587\u4EF654"},{key:"6.2.2",title:"\u6587\u4EF655"},{key:"6.2.3",title:"\u6587\u4EF656"}]}]},{key:"721751",title:"\u6587\u4EF6\u593957",children:[{key:"7.1",title:"\u6587\u4EF6\u593958",children:[{key:"7.1.1",title:"\u6587\u4EF659"},{key:"7.1.2",title:"\u6587\u4EF660"},{key:"7.1.3",title:"\u6587\u4EF661"},{key:"7.1.4",title:"\u6587\u4EF662"}]},{key:"7.2",title:"\u6587\u4EF6\u593963",children:[{key:"7.2.31878",title:"\u6587\u4EF664"}]},{key:"7.3",title:"\u6587\u4EF6\u593965",children:[{key:"7.2.12451",title:"\u6587\u4EF666"},{key:"7.2.2",title:"\u6587\u4EF667"},{key:"7.2.3",title:"\u6587\u4EF668"}]}]},{key:"821751",title:"\u6587\u4EF6\u593969",children:[{key:"8.1",title:"\u6587\u4EF6\u593970",children:[{key:"8.1.1",title:"\u6587\u4EF671"},{key:"8.1.2",title:"\u6587\u4EF672"},{key:"8.1.3",title:"\u6587\u4EF673"},{key:"8.1.4",title:"\u6587\u4EF674"}]},{key:"8.2",title:"\u6587\u4EF6\u593975",children:[{key:"8.2.1",title:"\u6587\u4EF676"}]},{key:"8.3",title:"\u6587\u4EF6\u593977",children:[{key:"8.2.878231",title:"\u6587\u4EF678"},{key:"8.2.2",title:"\u6587\u4EF679"},{key:"8.2.3",title:"\u6587\u4EF680"}]}]},{key:"99921266",title:"\u6587\u4EF6\u593981",children:[{key:"9.1",title:"\u6D4B\u8BD5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u4EF6\u5939\u540D\u79F0",children:[{key:"9.1.1",title:"\u6587\u4EF682"},{key:"9.1.2",title:"\u6587\u4EF683"},{key:"9.1.3",title:"\u6587\u4EF684"},{key:"9.1.4",title:"\u6587\u4EF685"},{key:"9.1.5",title:"\u6587\u4EF686"},{key:"9.1.6",title:"\u6587\u4EF687"}]},{key:"9.2",title:"\u6587\u4EF6\u593988",children:[{key:"9.2.1",title:"\u6587\u4EF689"}]}]},{key:"10",title:"\u6587\u4EF6\u593990",children:[{key:"10.1",title:"\u6587\u4EF6\u593991",children:[{key:"10.1.1",title:"\u6587\u4EF692"},{key:"10.1.2",title:"\u6587\u4EF693"}]},{key:"10.2",title:"\u6587\u4EF6\u593994",children:[{key:"10.2.1",title:"\u6587\u4EF695"},{key:"10.2.2",title:"\u6587\u4EF696"},{key:"10.2.3",title:"\u6587\u4EF697"},{key:"10.2.4",title:"\u6587\u4EF698"},{key:"10.2.5",title:"\u6587\u4EF699"},{key:"10.2.6",title:"\u6587\u4EF6100"},{key:"10.2.7",title:"\u6587\u4EF6101"}]}]},{key:"118326832101dd",title:"\u6587\u4EF6\u5939102",children:[{key:"11.13",title:"\u6587\u4EF6\u5939103",children:[{key:"11.41.1",title:"\u6587\u4EF6104"},{key:"11.71.2",title:"\u6587\u4EF6105"}]},{key:"11.2",title:"\u6587\u4EF6\u5939106",children:[{key:"11.82.1",title:"\u6587\u4EF6107"}]}]}],m=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1500,r=arguments.length>1?arguments[1]:void 0;return new Promise(function(o){setTimeout(function(){return o(r)},_)})}}}]);
