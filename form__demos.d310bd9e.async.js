"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294,1135],{99783:function(K,o,e){e.r(o);var g=e(86366),p=e.n(g),D=e(17727),I=e(58383),P=e.n(I),m=e(43249),E=e(51317),h=e.n(E),s=e(96169),f=e(90650),v=e.n(f),a=e(35031),u=e(54306),y=e.n(u),d=e(50959),i=e(8827),U=e(8160),t=e(11527);o.default=function(){var W=i.Form.useForm(),T=y()(W,1),M=T[0],c=(0,d.useState)(!1),_=y()(c,2),n=_[0],r=_[1],C=function(){r(!0),(0,U.Z)().then(function(A){M.setFieldValue("data",A)}).finally(function(){r(!1)})},O=function(){M.validateFields().then(function(A){console.log(A)})};return(0,d.useEffect)(function(){C()},[]),(0,t.jsxs)(D.default,{direction:"vertical",size:8,align:"center",style:{marginBottom:8},children:[(0,t.jsx)(i.Form,{form:M,layout:"vertical",children:(0,t.jsx)(i.Form.Table,{name:"data",loading:n,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(i.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(A){var R=A.name;return(0,t.jsx)(m.default,{type:"link",onClick:function(){return s.default.info(JSON.stringify(M.getFieldValue(["data",R])))},children:"Configuration"})}}]})}),(0,t.jsx)(m.default,{type:"primary",onClick:O,children:"Submit"})]})}},76204:function(K,o,e){e.r(o);var g=e(90650),p=e.n(g),D=e(35031),I=e(54306),P=e.n(I),m=e(50959),E=e(8827),h=e(8160),s=e(11527);o.default=function(){var f=E.Form.useForm(),v=P()(f,1),a=v[0],u=(0,m.useState)([]),y=P()(u,2),d=y[0],i=y[1],U=(0,m.useState)(!1),t=P()(U,2),W=t[0],T=t[1],M=function(){T(!0),(0,h.Z)().then(function(n){a.setFieldValue("data",n)}).finally(function(){T(!1)})};(0,m.useEffect)(function(){M()},[]);var c=(0,m.useMemo)(function(){return d.map(function(_){var n;return(n=a.getFieldsValue().data)===null||n===void 0?void 0:n.findIndex(function(r){return r.uuid===_})})},[d]);return(0,s.jsx)(E.Form,{form:a,layout:"vertical",style:{height:400},children:(0,s.jsx)(E.Form.Table,{name:"data",loading:W,scroll:{y:280},rowSelection:{selectedRowKeys:c,onChange:function(n){i(a.getFieldsValue().data.filter(function(r,C){return n.includes(C)}).map(function(r){return r.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(n){var r=n.name;return(0,s.jsx)(D.default,{disabled:d.includes(a.getFieldValue(["data",r,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,s.jsx)(D.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,s.jsx)(D.default,{placeholder:"Company"})}}]})})}},31213:function(K,o,e){e.r(o);var g=e(58383),p=e.n(g),D=e(43249),I=e(91225),P=e.n(I),m=e(47715),E=e(57213),h=e.n(E),s=e(54306),f=e.n(s),v=e(50959),a=e(8827),u=e(11527);o.default=function(){var y=a.Form.useForm(),d=f()(y,1),i=d[0],U=a.Form.useWatch("data",i)||[],t=(0,v.useState)(new Array(10).fill(1).map(function(c,_){return{label:"test-".concat(_),value:_}})),W=f()(t,1),T=W[0],M=(0,v.useMemo)(function(){var c=U.filter(Boolean).map(function(_){return _.name});return T.map(function(_){return h()(h()({},_),{},{disabled:c.includes(_.value)})})},[U.filter(Boolean).map(function(c){return c.name}).toString()]);return(0,u.jsx)(a.Form,{form:i,layout:"vertical",initialValues:{data:[{}]},style:{padding:18},children:(0,u.jsx)(a.Form.Table,{bordered:!0,name:"data",scroll:{y:280},columns:function(_,n){var r=n.remove;return[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,u.jsx)(m.default,{placeholder:"Name",options:M})}},{key:"op",title:"Configuration",render:function(O){var l=O.name;return(0,u.jsx)(D.default,{type:"link",onClick:function(){return r(l)},children:"delete"})}}]},size:"small",footer:function(_,n){var r=n.add;return(0,u.jsx)(D.default,{type:"link",onClick:function(){return r({})},children:"add"})}})})}},37093:function(K,o,e){e.r(o);var g=e(58383),p=e.n(g),D=e(43249),I=e(51317),P=e.n(I),m=e(96169),E=e(91225),h=e.n(E),s=e(47715),f=e(90650),v=e.n(f),a=e(35031),u=e(54306),y=e.n(u),d=e(50959),i=e(8827),U=e(8160),t=e(11527);o.default=function(){var W=i.Form.useForm(),T=y()(W,1),M=T[0],c=(0,d.useState)(!1),_=y()(c,2),n=_[0],r=_[1],C=function(){r(!0),(0,U.Z)().then(function(l){M.setFieldValue("data",l)}).finally(function(){r(!1)})};return(0,d.useEffect)(function(){C()},[]),(0,t.jsx)(i.Form,{form:M,layout:"vertical",style:{height:400},children:(0,t.jsx)(i.Form.Table,{name:"data",loading:n,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(a.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,t.jsx)(s.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(l){var A=y()(l,1),R=A[0];return[["data",R,"gender"]]},render:function(l,A,R){var L,B=l.name;return(R==null||(L=R.getFieldValue)===null||L===void 0?void 0:L.call(R,["data",B,"gender"]))==="female"?"--":(0,t.jsx)(i.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(a.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(a.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(l){var A=l.name;return(0,t.jsx)(D.default,{type:"link",onClick:function(){return m.default.info(JSON.stringify(M.getFieldValue(["data",A])))},children:"Configuration"})}}]})})}},83522:function(K,o,e){e.r(o);var g=e(58383),p=e.n(g),D=e(43249),I=e(51317),P=e.n(I),m=e(96169),E=e(90650),h=e.n(E),s=e(35031),f=e(54306),v=e.n(f),a=e(50959),u=e(8827),y=e(8160),d=e(11527);o.default=function(){var i=u.Form.useForm(),U=v()(i,1),t=U[0],W=(0,a.useState)(!1),T=v()(W,2),M=T[0],c=T[1],_=function(){c(!0),(0,y.Z)().then(function(r){t.setFieldValue("data",r)}).finally(function(){c(!1)})};return(0,a.useEffect)(function(){_()},[]),(0,d.jsx)(u.Form,{form:t,layout:"vertical",style:{height:400},children:(0,d.jsx)(u.Form.Table,{name:"data",loading:M,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,d.jsx)(s.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,d.jsx)(u.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(n,r){var C=n.getFieldValue,O=v()(r,1),l=O[0];return{required:C(["data",l,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,d.jsx)(s.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,d.jsx)(s.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(r){var C=r.name;return(0,d.jsx)(D.default,{type:"link",onClick:function(){return m.default.info(JSON.stringify(t.getFieldValue(["data",C])))},children:"Configuration"})}}]})})}},8160:function(K,o,e){e.d(o,{Z:function(){return m}});var g=e(25359),p=e.n(g),D=e(49811),I=e.n(D),P=e(87955);function m(){return E.apply(this,arguments)}function E(){return E=I()(p()().mark(function h(){return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",new Promise(function(v){setTimeout(function(){var a=Array.from({length:5}).map(function(){return{uuid:P.We.datatype.uuid(),name:P.We.internet.userName(),address:P.We.address.cityName(),company:P.We.company.bs(),gender:P.We.name.sex(),weight:P.We.datatype.number({max:200,min:80})}});v(a)},150)}));case 1:case"end":return f.stop()}},h)})),E.apply(this,arguments)}}}]);