(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[250],{13277:function(){},75952:function(z,T,e){"use strict";e.r(T),e.d(T,{default:function(){return F}});var m=e(9761),g=e(67294),Z=e(5977),A=e(11849),G=e(34792),I=e(48086),j=e(39428),f=e(3182),D=e(69610),L=e(54941),R=e(3980),C=e(54531),V=function(){function o(r){(0,D.Z)(this,o),this.id=void 0,this.resultId=void 0,this.query=void 0,this.queryErrorMsg=void 0,this.queryForm=void 0,this.queryResult=void 0,this.queryFormValue={},this.id=r.id,this.resultId=r.resultId,this.query=r.query,this.makeObservable()}return(0,L.Z)(o,[{key:"makeObservable",value:function(){(0,C.Ou)(this,{id:C.LO.ref,resultId:C.LO.ref,query:C.LO.ref,queryForm:C.LO.ref,queryResult:C.LO.ref,queryFormValue:C.LO.ref,queryErrorMsg:C.LO.ref,loadQuery:C.aD,getQueryResult:C.aD})}},{key:"loadQuery",value:function(){var r=(0,f.Z)((0,j.Z)().mark(function u(){var s;return(0,j.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,R.hi.loadQuery({id:this.id,resultId:this.resultId});case 2:s=v.sent,s.success?this.queryForm=s.data.schema:this.queryErrorMsg=s.message;case 4:case"end":return v.stop()}},u,this)}));function h(){return r.apply(this,arguments)}return h}()},{key:"getQueryResult",value:function(){var r=(0,f.Z)((0,j.Z)().mark(function u(s){var i;return(0,j.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.hi.getQueryResult({id:this.id,resultId:this.resultId,answer:s,query:this.query});case 2:i=a.sent,this.queryFormValue=s,i.code!==200?I.default.error(i.message):this.queryResult=i.data;case 5:case"end":return a.stop()}},u,this)}));function h(u){return r.apply(this,arguments)}return h}()},{key:"updateAnswer",value:function(){var r=(0,f.Z)((0,j.Z)().mark(function u(s,i){return(0,j.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.hi.post("/api/public/saveAnswer",{id:i,queryId:this.resultId,answer:s,projectId:this.id});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u,this)}));function h(u,s){return r.apply(this,arguments)}return h}()},{key:"upload",value:function(){var r=(0,f.Z)((0,j.Z)().mark(function u(s,i){return(0,j.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",R.hi.upload("/api/public/upload",(0,A.Z)((0,A.Z)({},s),{},{fileType:4,basePath:this.id}),i));case 1:case"end":return a.stop()}},u,this)}));function h(u,s){return r.apply(this,arguments)}return h}()}]),o}(),U=g.createContext(new V({id:"123456",resultId:"123456"}));function M(){return(0,g.useContext)(U)}var k=e(68068),K=e(8373),t=e(85893),W=(0,m.Pi)(function(){var o=M(),r=o.queryForm,h=o.queryResult,u=o.query;return(0,g.useEffect)(function(){o.loadQuery()},[]),(0,g.useEffect)(function(){var s;r&&((s=r.children)===null||s===void 0?void 0:s.filter(function(i){var v;return!((v=i.children)!==null&&v!==void 0&&v.find(function(a){return!!u[a.id]}))}).length)===0&&o.getQueryResult({})},[r,u]),h?(0,t.jsx)(t.Fragment,{}):r?(0,t.jsx)("div",{className:"public-query",children:(0,t.jsx)("div",{className:"query-form",children:!h&&(0,t.jsx)(k.Z,{theme:"antdForm",schema:r,questionNumber:!1,onSubmit:function(i){o.getQueryResult(i)}})})}):(0,t.jsx)(K.gb,{})}),H=e(57663),c=e(71577),l=e(49111),y=e(19650),n=e(71153),d=e(60331),N=e(83279),S=e(18106),x=e(38222),$=e(94184),p=e.n($),O=e(96389),Q=x.Z.TabPane,P=(0,m.Pi)(function(){var o=M(),r=o.queryResult,h=o.queryFormValue,u=(0,g.useMemo)(function(){return(0,O.SB)()},[]);return(0,g.useEffect)(function(){},[]),r?(0,t.jsxs)("div",{className:p()("query-result",u?"mobile":"pc"),children:[(0,t.jsxs)("div",{className:"query-result-criteria",children:[(0,t.jsx)("h3",{children:"\u67E5\u8BE2\u6761\u4EF6"}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"12px 0"},children:[(0,t.jsxs)("div",{children:["\u67E5\u8BE2\u6761\u4EF6\uFF1A",(0,t.jsx)(y.Z,{children:Object.values(h).reduce(function(s,i){return s.push.apply(s,(0,N.Z)(Object.values(i))),s},[]).map(function(s){return(0,t.jsx)(d.Z,{color:"blue",children:s},s)})})]}),(0,t.jsx)(c.Z,{type:"primary",onClick:function(){o.queryResult=void 0},children:"\u91CD\u65B0\u67E5\u8BE2"})]})]}),(0,t.jsx)("div",{className:"query-result-container",children:(0,t.jsxs)("div",{className:"query-result-data",children:[(0,t.jsxs)("div",{className:"query-result-data-total",children:["\u67E5\u8BE2\u5230 ",r.answers.length," \u6761\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E"]}),(0,t.jsx)("div",{className:"query-result-data-content",children:(0,t.jsx)(x.Z,{type:"card",children:r.answers.map(function(s){return(0,t.jsx)(Q,{tab:s.createAt,children:(0,t.jsx)(k.Z,{theme:u?"antdMobile":"antd",schema:r==null?void 0:r.schema,initialValues:s.answer,headerVisible:!1,footerVisible:!!(r!=null&&r.schema.attribute),paginationVisible:!1,fieldPermission:r.fieldPermission,onUpload:function(v,a){return o.upload(v,a)},onSubmit:function(v){o.updateAnswer(v,s.answerId).then(function(a){a.success?I.default.success("\u7B54\u6848\u66F4\u65B0\u6210\u529F"):I.default.error(a.message)})}})},s.answerId)})})})]})})]}):(0,t.jsx)(t.Fragment,{})}),B=e(12997),E=(0,m.Pi)(function(){var o=M(),r=o.queryErrorMsg;return r?(0,t.jsx)("div",{className:"render-failure  phone",children:(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{children:(0,t.jsx)(B.AT,{})}),(0,t.jsx)("h2",{children:r})]})}):(0,t.jsx)(t.Fragment,{})}),F=(0,m.Pi)(function(){var r=(0,Z.UO)(),h=r.id,u=r.resultId,s=(0,Z.TH)(),i=(0,g.useMemo)(function(){return new V({id:h,resultId:u,query:s.query})},[h,u]);return(0,t.jsxs)(U.Provider,{value:i,children:[(0,t.jsx)(E,{}),(0,t.jsx)(W,{}),(0,t.jsx)(P,{})]})})},60331:function(z,T,e){"use strict";e.d(T,{Z:function(){return H}});var m=e(96156),g=e(22122),Z=e(28481),A=e(54549),G=e(94184),I=e.n(G),j=e(98423),f=e(67294),D=e(53124),L=e(98787),R=e(21790),C=function(c,l){var y={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&l.indexOf(n)<0&&(y[n]=c[n]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(c);d<n.length;d++)l.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(c,n[d])&&(y[n[d]]=c[n[d]]);return y},V=function(l){var y,n=l.prefixCls,d=l.className,N=l.checked,S=l.onChange,x=l.onClick,$=C(l,["prefixCls","className","checked","onChange","onClick"]),p=f.useContext(D.E_),O=p.getPrefixCls,Q=function(F){S==null||S(!N),x==null||x(F)},P=O("tag",n),B=I()(P,(y={},(0,m.Z)(y,"".concat(P,"-checkable"),!0),(0,m.Z)(y,"".concat(P,"-checkable-checked"),N),y),d);return f.createElement("span",(0,g.Z)({},$,{className:B,onClick:Q}))},U=V,M=function(c,l){var y={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&l.indexOf(n)<0&&(y[n]=c[n]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(c);d<n.length;d++)l.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(c,n[d])&&(y[n[d]]=c[n[d]]);return y},k=new RegExp("^(".concat(L.Y.join("|"),")(-inverse)?$")),K=new RegExp("^(".concat(L.E.join("|"),")$")),t=function(l,y){var n,d=l.prefixCls,N=l.className,S=l.style,x=l.children,$=l.icon,p=l.color,O=l.onClose,Q=l.closeIcon,P=l.closable,B=P===void 0?!1:P,E=M(l,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),F=f.useContext(D.E_),o=F.getPrefixCls,r=F.direction,h=f.useState(!0),u=(0,Z.Z)(h,2),s=u[0],i=u[1];f.useEffect(function(){"visible"in E&&i(E.visible)},[E.visible]);var v=function(){return p?k.test(p)||K.test(p):!1},a=(0,g.Z)({backgroundColor:p&&!v()?p:void 0},S),Y=v(),b=o("tag",d),ee=I()(b,(n={},(0,m.Z)(n,"".concat(b,"-").concat(p),Y),(0,m.Z)(n,"".concat(b,"-has-color"),p&&!Y),(0,m.Z)(n,"".concat(b,"-hidden"),!s),(0,m.Z)(n,"".concat(b,"-rtl"),r==="rtl"),n),N),J=function(q){q.stopPropagation(),O==null||O(q),!q.defaultPrevented&&("visible"in E||i(!1))},re=function(){return B?Q?f.createElement("span",{className:"".concat(b,"-close-icon"),onClick:J},Q):f.createElement(A.Z,{className:"".concat(b,"-close-icon"),onClick:J}):null},te="onClick"in E||x&&x.type==="a",se=(0,j.Z)(E,["visible"]),X=$||null,ne=X?f.createElement(f.Fragment,null,X,f.createElement("span",null,x)):x,w=f.createElement("span",(0,g.Z)({},se,{ref:y,className:ee,style:a}),ne,re());return te?f.createElement(R.Z,null,w):w},W=f.forwardRef(t);W.CheckableTag=U;var H=W},71153:function(z,T,e){"use strict";var m=e(38663),g=e.n(m),Z=e(13277),A=e.n(Z)}}]);
