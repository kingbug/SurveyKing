(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[7915],{87113:function(fe,$,t){"use strict";t.r($),t.d($,{default:function(){return ce}});var ve=t(13062),z=t(71230),me=t(57663),E=t(71577),g=t(39428),w=t(3182),he=t(89032),k=t(15746),pe=t(59250),b=t(13013),xe=t(30887),L=t(28682),ye=t(34792),P=t(48086),Fe=t(47673),M=t(4107),Ze=t(71194),U=t(50146),Ce=t(49111),Q=t(19650),ge=t(71153),W=t(60331),D=t(94657),B=t(3980),H=t(57254),J=t(49101),G=t(84391),X=t(36450),K=t(91186),N=t(80582),c=t(67294),Y=t(40017),je=t(43358),q=t(34041),j=t(11849),Be=t(62999),_=t(54680),ee=t(86468),o=t(82837),te=t(60780),re=t.n(te),e=t(85893),ne=(0,N.Pi)(function(m){var h,a=m.user,R=m.onClose,I=m.onOk,p=(0,B.m2)(),y=(0,c.useRef)(),T=a==null||(h=a.roles)===null||h===void 0?void 0:h.map(function(r){return r.id}),f=!!(a!=null&&a.id),S=p.depts,F=p.positions,O=(0,c.useState)(function(){var r;return(a==null||(r=a.userPositions)===null||r===void 0?void 0:r.map(function(l){return l.id}))||[]}),Z=(0,D.Z)(O,2),C=Z[0],V=Z[1],A=(0,c.useMemo)(function(){return re()(S.map(function(r){return{value:r.id,title:r.name,key:r.id,parentId:r.parentId}}),{parentProperty:"parentId",customID:"value"})},[S]);(0,c.useEffect)(function(){F.length===0&&p.loadPositions({pageSize:1024})},[]);var v=[{title:"\u673A\u6784\u540D\u79F0",dataIndex:"deptId",width:"30%",renderFormItem:function(l,n,u){var s=n.type,i=n.defaultRender,x=n.fieldProps;return s==="form"?(0,e.jsx)(_.Z,(0,j.Z)((0,j.Z)({allowClear:!0,treeData:A},x),{},{placeholder:"\u8BF7\u9009\u62E9\u673A\u6784"})):i(l)}},{title:"\u5C97\u4F4D\u540D\u79F0",dataIndex:"positionId",width:"50%",renderFormItem:function(l,n,u){var s=n.type,i=n.defaultRender;return s==="form"?(0,e.jsx)(q.Z,{options:F.map(function(x){return{label:x.name,value:x.id}}),placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"}):i(l)}},{title:"\u64CD\u4F5C",valueType:"option",width:200}];return(0,e.jsxs)(o.aN,{title:f?"\u4FEE\u6539\u7528\u6237":"\u65B0\u5EFA\u7528\u6237",formRef:y,open:!0,initialValues:(0,j.Z)((0,j.Z)({},a),{},{roles:T}),drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){R()}},onFinish:function(){var r=(0,w.Z)((0,g.Z)().mark(function l(n){var u;return(0,g.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p.saveOrUpdateUser((0,j.Z)((0,j.Z)({},a),n));case 2:u=i.sent,u.success&&I();case 4:case"end":return i.stop()}},l)}));return function(l){return r.apply(this,arguments)}}(),children:[(0,e.jsxs)(o.ZP.Group,{children:[(0,e.jsx)(o.V,{name:"name",width:"md",label:"\u7528\u6237\u540D",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0,rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,e.jsx)(o.V,{width:"md",name:"username",label:"\u767B\u5F55\u540D",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u6237\u540D\u79F0",rules:[{required:!0,message:"\u767B\u5F55\u540D\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(){var r=(0,w.Z)((0,g.Z)().mark(function n(u,s){var i;return(0,g.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s!==(a==null?void 0:a.username)){d.next=2;break}return d.abrupt("return");case 2:return d.next=4,B.hi.checkUsernameExist(s);case 4:if(i=d.sent,!i){d.next=7;break}throw new Error("\u767B\u5F55\u540D\u5DF2\u5B58\u5728!");case 7:case"end":return d.stop()}},n)}));function l(n,u){return r.apply(this,arguments)}return l}()}],required:!0})]}),!f&&(0,e.jsxs)(o.ZP.Group,{children:[(0,e.jsx)(o.V.Password,{width:"md",name:"password",label:"\u8F93\u5165\u5BC6\u7801",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!f,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],required:!f}),(0,e.jsx)(o.V.Password,{width:"md",name:"rePassword",label:"\u786E\u8BA4\u5BC6\u7801",placeholder:"\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{required:!f,message:"\u786E\u8BA4\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A!"},function(r){var l=r.getFieldValue;return{validator:function(u,s){return!s||l("password")===s?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))}}}],required:!f})]}),(0,e.jsxs)(o.ZP.Group,{children:[(0,e.jsx)(o._I,{options:[{value:"M",label:"\u7537"},{value:"F",label:"\u5973"}],width:"md",name:"gender",label:"\u6027\u522B"}),(0,e.jsx)(o._I,{required:!0,options:[{value:1,label:"\u6FC0\u6D3B"},{value:0,label:"\u5931\u6D3B"}],width:"md",name:"status",label:"\u72B6\u6001"})]}),(0,e.jsxs)(o.ZP.Group,{children:[(0,e.jsx)(o.V,{name:"phone",width:"md",label:"\u624B\u673A",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}),(0,e.jsx)(o.V,{width:"md",name:"email",label:"\u90AE\u7BB1",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",rules:[{type:"email",message:"\u8BF7\u8F93\u5165\u90AE\u7BB1!"}]}),(0,e.jsx)(ee.FQ,{name:"deptId",width:"md",treeData:A,label:"\u7EC4\u7EC7\u673A\u6784",placeholder:"\u8BF7\u9009\u62E9\u7EC4\u7EC7\u673A\u6784",value:a==null?void 0:a.deptId}),(0,e.jsx)(o._I,{mode:"tags",request:(0,w.Z)((0,g.Z)().mark(function r(){return(0,g.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",B.hi.loadRoles({current:1,pageSize:1024}).then(function(u){return u.list.map(function(s){return{label:s.name,value:s.id}})}));case 1:case"end":return n.stop()}},r)})),width:"md",name:"roles",label:"\u89D2\u8272\u5217\u8868"})]}),(0,e.jsx)(o.ZP.Group,{children:(0,e.jsx)(o.ZP.Item,{label:"\u9009\u62E9\u5C97\u4F4D",name:"userPositions",trigger:"onValuesChange",children:(0,e.jsx)(K.nx,{rowKey:"id",toolBarRender:!1,columns:v,recordCreatorProps:{newRecordType:"dataSource",position:"top",record:function(){return{id:"".concat(Date.now())}}},editable:{type:"multiple",editableKeys:C,onChange:V,actionRender:function(l,n,u){return[u.delete]}}})})})]})}),Ie=t(43185),ue=t(32620),ae=t(90631),le=t(43347),se=ue.Z.Dragger;function oe(m){var h=m.onCancel,a=m.onOk,R=(0,c.useState)(!1),I=(0,D.Z)(R,2),p=I[0],y=I[1],T=(0,c.useState)([]),f=(0,D.Z)(T,2),S=f[0],F=f[1],O={multiple:!1,accept:".xlsx",beforeUpload:function(C){return F([C]),!1},onRemove:function(){F([])},maxCount:1};return(0,e.jsx)(U.Z,{title:"\u6279\u91CF\u5BFC\u5165\u7528\u6237",onCancel:h,open:!0,maskClosable:!1,footer:[(0,e.jsx)(E.Z,{onClick:h,children:"\u53D6\u6D88"},"cancel"),(0,e.jsx)(E.Z,{icon:(0,e.jsx)(ae.Z,{}),onClick:function(){B.hi.download("/api/file/downloadTemplate?name=\u5377\u738B\u7528\u6237\u5BFC\u5165\u6A21\u677F")},children:"\u4E0B\u8F7D\u6A21\u677F"},"downloadTemplate"),(0,e.jsx)(E.Z,{icon:(0,e.jsx)(G.Z,{}),type:"primary",loading:p,onClick:function(){if(S.length===0){P.default.error("\u8BF7\u9009\u62E9\u6587\u4EF6");return}y(!0),B.hi.upload("/api/importUser",{file:S[0]},function(C){}).then(function(C){y(!1),C.success?(P.default.success("\u5BFC\u5165\u6210\u529F"),a()):P.default.error(C.message)})},children:"\u5BFC\u5165"},"importTemplate")],children:(0,e.jsxs)(se,(0,j.Z)((0,j.Z)({},O),{},{children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(le.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u8005\u62D6\u62FDExcel\u6587\u4EF6\u5230\u6B64\u5904"})]}))})}var ie=["magenta","volcano","cyan","blue","geekblue","purple"],de=(0,N.Pi)(function(){var m=(0,B.m2)(),h=(0,c.useRef)(),a=(0,c.useRef)(),R=(0,c.useState)(),I=(0,D.Z)(R,2),p=I[0],y=I[1],T=(0,c.useState)(!1),f=(0,D.Z)(T,2),S=f[0],F=f[1],O=(0,c.useState)(),Z=(0,D.Z)(O,2),C=Z[0],V=Z[1];(0,c.useEffect)(function(){m.loadPermissions()},[m]);var A=[{title:"\u7EC4\u7EC7\u673A\u6784",dataIndex:"deptName",hideInSearch:!0,width:150},{title:"\u59D3\u540D",dataIndex:"name",ellipsis:!0,width:120},{title:"\u89D2\u8272",dataIndex:"role",hideInSearch:!0,width:150,renderFormItem:function(r,l){var n=l.defaultRender;return n(r)},render:function(r,l){var n;return(0,e.jsx)(Q.Z,{children:(n=l.roles)===null||n===void 0?void 0:n.filter(function(u){return u}).map(function(u,s){return(0,e.jsx)(W.Z,{color:ie[s],children:u.name},u.id)})})}},{title:"\u624B\u673A",dataIndex:"phone",width:150,search:!1},{title:"\u72B6\u6001",dataIndex:"status",search:!1,width:100,valueEnum:{0:{text:"\u5931\u6D3B",status:"Default"},1:{text:"\u6FC0\u6D3B",status:"Processing"}}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createAt",width:150,valueType:"dateTime",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",width:140,fixed:"right",render:function(r,l){return[(0,e.jsx)("a",{onClick:function(){y({visible:!0,current:l})},children:"\u7F16\u8F91"},"editable"),(0,e.jsx)(b.Z,{overlay:(0,e.jsx)(L.Z,{onClick:function(u){var s=u.key;s==="resetPwd"?U.Z.confirm({title:"\u91CD\u7F6E\u5BC6\u7801",content:(0,e.jsx)(M.Z.Password,{placeholder:"\u8F93\u5165\u5BC6\u7801",onChange:function(x){return a.current=x.target.value}}),okType:"primary",okText:"\u4FEE\u6539",cancelText:"\u53D6\u6D88",onOk:function(x){return a.current?(B.hi.updateUser({id:l.id,password:a.current}).then(function(d){d.success&&(P.default.success("\u4FEE\u6539\u6210\u529F"),a.current=void 0,x())}),!1):(P.default.error("\u8BF7\u8F93\u5165\u5BC6\u7801"),!1)}}):s==="delete"&&U.Z.confirm({title:"\u5220\u9664\u7528\u6237",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u7528\u6237\u5417\uFF1F",okType:"danger",okText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onOk:function(){m.deleteUser(l.id).then(function(x){if(x.success){var d;P.default.success("\u5220\u9664\u6210\u529F"),(d=h.current)===null||d===void 0||d.reload()}})}})},items:[{label:"\u91CD\u7F6E\u5BC6\u7801",key:"resetPwd"},{label:"\u5220\u9664\u7528\u6237",key:"delete"}]}),children:(0,e.jsxs)("a",{className:"ant-dropdown-link",onClick:function(u){return u.preventDefault()},children:["\u66F4\u591A",(0,e.jsx)(H.Z,{})]})},"action")]}}];return(0,e.jsxs)(X._z,{title:!1,children:[(0,e.jsxs)(z.Z,{gutter:20,children:[(0,e.jsx)(k.Z,{xs:0,md:6,children:(0,e.jsx)(Y.A,{onSelect:function(r){return V(r)}})}),(0,e.jsxs)(k.Z,{xs:24,md:18,children:[(0,e.jsx)(K.ZP,{columns:A,bordered:!0,actionRef:h,params:{deptId:C},request:function(){var v=(0,w.Z)((0,g.Z)().mark(function r(l){return(0,g.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",m.loadUsers(l));case 1:case"end":return u.stop()}},r)}));return function(r){return v.apply(this,arguments)}}(),columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:{labelWidth:"auto"},pagination:{defaultPageSize:10},scroll:{x:900},dateFormatter:"string",headerTitle:"\u7CFB\u7EDF\u7528\u6237\u5217\u8868",toolBarRender:function(){return[(0,e.jsx)(E.Z,{icon:(0,e.jsx)(J.Z,{}),type:"primary",onClick:function(){y({visible:!0})},children:"\u65B0\u5EFA"},"button"),(0,e.jsx)(E.Z,{icon:(0,e.jsx)(G.Z,{}),type:"primary",onClick:function(){F(!0)},children:"\u6279\u91CF\u5BFC\u5165"},"import")]}}),(p==null?void 0:p.visible)&&(0,e.jsx)(ne,{onClose:function(){y(void 0)},onOk:function(){var r;y(void 0),(r=h.current)===null||r===void 0||r.reload()},user:p.current})]})]}),S&&(0,e.jsx)(oe,{onCancel:function(){return F(!1)},onOk:function(){var r;F(!1),(r=h.current)===null||r===void 0||r.reload()}})]})}),ce=de}}]);
