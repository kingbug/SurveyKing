(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[346],{57254:function(ve,V,e){"use strict";e.d(V,{Z:function(){return g}});var T=e(28991),Z=e(67294),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},K=W,x=e(27029),M=function(Y,G){return Z.createElement(x.Z,(0,T.Z)((0,T.Z)({},Y),{},{ref:G,icon:K}))};M.displayName="DownOutlined";var g=Z.forwardRef(M)},59271:function(ve,V,e){"use strict";e.d(V,{Z:function(){return g}});var T=e(28991),Z=e(67294),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},K=W,x=e(27029),M=function(Y,G){return Z.createElement(x.Z,(0,T.Z)((0,T.Z)({},Y),{},{ref:G,icon:K}))};M.displayName="HomeOutlined";var g=Z.forwardRef(M)},81262:function(){},18727:function(ve,V,e){"use strict";e.r(V),e.d(V,{Practice:function(){return N},default:function(){return se}});var T=e(36017),Z=e(35247),W=e(71194),K=e(50146),x=e(11849),M=e(39428),g=e(3182),Q=e(68068),Y=e(9761),G=e(87857),C=e(67294),ae=e(5977);const xe="Left",fe="Right",me="Up",he="Down",z={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:Infinity,touchEventOptions:{passive:!0}},ie={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},ge="mousemove",pe="mouseup",Oe="touchend",Ee="touchmove",oe="touchstart";function je(r,p,v,f){return r>p?v>0?fe:xe:f>0?he:me}function ye(r,p){if(p===0)return r;const v=Math.PI/180*p,f=r[0]*Math.cos(v)+r[1]*Math.sin(v),P=r[1]*Math.cos(v)-r[0]*Math.sin(v);return[f,P]}function l(r,p){const v=i=>{const o="touches"in i;o&&i.touches.length>1||r((s,d)=>{d.trackMouse&&!o&&(document.addEventListener(ge,f),document.addEventListener(pe,S));const{clientX:a,clientY:L}=o?i.touches[0]:i,A=ye([a,L],d.rotationAngle);return d.onTouchStartOrOnMouseDown&&d.onTouchStartOrOnMouseDown({event:i}),Object.assign(Object.assign(Object.assign({},s),ie),{initial:A.slice(),xy:A,start:i.timeStamp||0})})},f=i=>{r((o,s)=>{const d="touches"in i;if(d&&i.touches.length>1)return o;if(i.timeStamp-o.start>s.swipeDuration)return o.swiping?Object.assign(Object.assign({},o),{swiping:!1}):o;const{clientX:a,clientY:L}=d?i.touches[0]:i,[A,ee]=ye([a,L],s.rotationAngle),ne=A-o.xy[0],te=ee-o.xy[1],J=Math.abs(ne),w=Math.abs(te),k=(i.timeStamp||0)-o.start,ce=Math.sqrt(J*J+w*w)/(k||1),we=[ne/(k||1),te/(k||1)],ue=je(J,w,ne,te),be=typeof s.delta=="number"?s.delta:s.delta[ue.toLowerCase()]||z.delta;if(J<be&&w<be&&!o.swiping)return o;const le={absX:J,absY:w,deltaX:ne,deltaY:te,dir:ue,event:i,first:o.first,initial:o.initial,velocity:ce,vxvy:we};le.first&&s.onSwipeStart&&s.onSwipeStart(le),s.onSwiping&&s.onSwiping(le);let Pe=!1;return(s.onSwiping||s.onSwiped||s[`onSwiped${ue}`])&&(Pe=!0),Pe&&s.preventScrollOnSwipe&&s.trackTouch&&i.cancelable&&i.preventDefault(),Object.assign(Object.assign({},o),{first:!1,eventData:le,swiping:!0})})},P=i=>{r((o,s)=>{let d;if(o.swiping&&o.eventData){if(i.timeStamp-o.start<s.swipeDuration){d=Object.assign(Object.assign({},o.eventData),{event:i}),s.onSwiped&&s.onSwiped(d);const a=s[`onSwiped${d.dir}`];a&&a(d)}}else s.onTap&&s.onTap({event:i});return s.onTouchEndOrOnMouseUp&&s.onTouchEndOrOnMouseUp({event:i}),Object.assign(Object.assign(Object.assign({},o),ie),{eventData:d})})},D=()=>{document.removeEventListener(ge,f),document.removeEventListener(pe,S)},S=i=>{D(),P(i)},j=(i,o)=>{let s=()=>{};if(i&&i.addEventListener){const d=Object.assign(Object.assign({},z.touchEventOptions),o.touchEventOptions),a=[[oe,v,d],[Ee,f,Object.assign(Object.assign({},d),o.preventScrollOnSwipe?{passive:!1}:{})],[Oe,P,d]];a.forEach(([L,A,ee])=>i.addEventListener(L,A,ee)),s=()=>a.forEach(([L,A])=>i.removeEventListener(L,A))}return s},U={ref:i=>{i!==null&&r((o,s)=>{if(o.el===i)return o;const d={};return o.el&&o.el!==i&&o.cleanUpTouch&&(o.cleanUpTouch(),d.cleanUpTouch=void 0),s.trackTouch&&i&&(d.cleanUpTouch=j(i,s)),Object.assign(Object.assign(Object.assign({},o),{el:i}),d)})}};return p.trackMouse&&(U.onMouseDown=v),[U,j]}function t(r,p,v,f){return!p.trackTouch||!r.el?(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0})):r.cleanUpTouch?p.preventScrollOnSwipe!==v.preventScrollOnSwipe||p.touchEventOptions.passive!==v.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:f(r.el,p)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:f(r.el,p)})}function h(r){const{trackMouse:p}=r,v=C.useRef(Object.assign({},ie)),f=C.useRef(Object.assign({},z)),P=C.useRef(Object.assign({},f.current));P.current=Object.assign({},f.current),f.current=Object.assign(Object.assign({},z),r);let D;for(D in z)f.current[D]===void 0&&(f.current[D]=z[D]);const[S,j]=C.useMemo(()=>l(F=>v.current=F(v.current,f.current),{trackMouse:p}),[p]);return v.current=t(v.current,f.current,P.current,j),S}var n=e(92725),c=e(12997),b=e(96389),X=e(42285),B=e(78210),I=e(3980),q=e(32235),_=e(27400),H=e(59271),u=e(85893),N=(0,Y.Pi)(function(){var r,p,v,f,P=(0,ae.UO)(),D=P.id,S=P.answerId,j=(0,ae.TH)(),F=j.query.preview==="1",U=j.query.pattern,i=j.query.openid,o=j.query.ptype,s=(0,C.useMemo)(function(){return(0,b.SB)()},[]),d=(0,C.useRef)(null),a=(0,C.useMemo)(function(){return new q.b({surveyRef:d,id:"exercise",answerId:S,repoId:D,examExerciseType:o})},[d,D,S]),L=(0,_.a)();(0,C.useEffect)(function(){L.currentUser()},[L]);var A=a.saving,ee=a.loading,ne=(r=a.setting)===null||r===void 0?void 0:r.answerSetting,te=a.loginRequired,J=a.verifying,w=ne||{},k=w.autoSave,ce=w.progressBar,we=w.initialValues,ue=w.questionNumber,be=w.wechatOnly,le=w.onePageOneQuestion,Pe=w.answerSheetVisible,Ne=w.triggerType,Ue=w.copyEnabled,Ce=((p=a.setting)===null||p===void 0?void 0:p.examSetting)||{},Ke=Ce.exerciseMode,ze=Ce.maxSwitchScreenTimes,Le=!!((v=a.setting)!==null&&v!==void 0&&(f=v.examSetting)!==null&&f!==void 0&&f.randomSurveyWrong),Ae=a.errorMessage,Te=a.savedAnswer,Ze=a.confirmTempAnswerType,$e=a.statistics,re=a.survey,De=a.answerId,Re=a.mode,Se=a.success,Ie=(0,b.XO)(re,j);(0,C.useEffect)(function(){re&&(0,b.iq)(re,"statEnabled","quota")&&a.loadStatistics()},[re,a]);var Xe=h({onSwipedLeft:function(){var O;(O=d.current)===null||O===void 0||O.getStore().handleNext()},onSwipedRight:function(){var O;(O=d.current)===null||O===void 0||O.getStore().handlePrev()}}),Ve=(0,C.useCallback)(function($,O){ce&&a.changeProgress(O),k&&$&&a.tempSave($)},[ce]),He=function(){return(0,u.jsx)(c.BW,{})},Be=function(O){var y,m;return(0,u.jsxs)("div",{className:"render-failure ".concat(s?"mobile":"phone"),children:[((y=a.project)===null||y===void 0?void 0:y.name)&&(0,u.jsx)("div",{className:"title",children:(m=a.project)===null||m===void 0?void 0:m.name}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)("div",{children:(0,u.jsx)(c.AT,{})}),(0,u.jsx)("h2",{children:Ae||O}),(0,u.jsx)("div",{children:"\u611F\u8C22\u5173\u6CE8\uFF01"})]})]})},Fe=function(){if(Se)return(0,u.jsx)(u.Fragment,{});if(ee)return(0,u.jsx)(n.Z,{});if(a.errorCode!==200)return Be();if(be&&!(0,b.CL)())return Be("\u53EA\u80FD\u5728\u5FAE\u4FE1\u4E2D\u6253\u5F00");if(te)return(0,u.jsx)("div",{children:He()});if(re&&!Se&&!J)return Ze===1&&k&&Re==="survey"&&!De?(0,u.jsx)(c.oq,{}):(0,u.jsx)("div",{style:{userSelect:Ue===!1?"none":"unset"},children:(0,u.jsx)(Q.Z,{ref:d,mode:Re,loading:A||ee,progressBar:ce,questionNumber:ue,theme:s?"antdMobile":"antd",schema:re,onChange:Ve,onePageOneQuestion:!0,answerSheetVisible:!0,exerciseMode:!0,wrongMode:Le,pattern:U,triggerType:Ne,onInit:function(y){a.tempSave(y.values)},initialQuestionScore:a.initialQuestionScore,onDictSearch:function(){var O=(0,g.Z)((0,M.Z)().mark(function y(m){var R;return(0,M.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,I.hi.loadDict(m);case 2:if(R=E.sent,!R.success){E.next=5;break}return E.abrupt("return",R.data);case 5:return E.abrupt("return",[]);case 6:case"end":return E.stop()}},y)}));return function(y){return O.apply(this,arguments)}}(),initialValues:Ze===3?Ie:(0,x.Z)((0,x.Z)((0,x.Z)((0,x.Z)({},we),k?Te==null?void 0:Te.answer:{}),Ie),a.values),statistics:$e,onUpload:function(y,m){return a.upload(y,m)},footerVisible:!(F||U==="readPretty"),headerVisible:!F,isPreview:F,onLink:function(y){I.hi.loadLinkResult((0,x.Z)((0,x.Z)({},y),{},{projectId:D})).then(function(m){if(m.success&&m.data.answer){var R=m.data.answer;Object.keys(R).forEach(function(de){var E=R[de];if(y.questionId!==de){var Me;(Me=d.current)===null||Me===void 0||Me.setValue(de,E)}})}})},onSubmit:function(y){a.saveData((0,x.Z)((0,x.Z)({},y),{},{openid:i}),{answerId:De}).then(function(m){!(m!=null&&m.success)&&m!==null&&m!==void 0&&m.message&&(s?G.u_.alert({title:"\u4FDD\u5B58\u5931\u8D25",content:(0,u.jsx)(B.Z,{html:m.message})}):K.Z.error({title:"\u4FDD\u5B58\u5931\u8D25",content:(0,u.jsx)(B.Z,{html:m.message}),okText:"\u77E5\u9053\u4E86"}))})},onNote:function(y,m){I.hi.updateUserBook({templateId:y,note:m})},onLazyLoad:function(){var O=(0,g.Z)((0,M.Z)().mark(function y(m){var R;return(0,M.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,I.hi.getTemplate({id:m});case 2:return R=E.sent,E.abrupt("return",(0,x.Z)((0,x.Z)({},R),{},{schema:R==null?void 0:R.template}));case 4:case"end":return E.stop()}},y)}));return function(y){return O.apply(this,arguments)}}()})})};(0,C.useEffect)(function(){Se&&X.m8.push("/exercise")},[Se]);var We=function(){var O,y,m=(O=a.survey)===null||O===void 0||(y=O.attribute)===null||y===void 0?void 0:y.backgroundImage;if(m)return{backgroundImage:"url(/api/public/preview/".concat(m,")")}};return(0,u.jsxs)(b.ff.Provider,{value:a,children:[(0,u.jsx)("div",{style:{padding:20},children:(0,u.jsxs)(Z.Z,{children:[(0,u.jsxs)(Z.Z.Item,{onClick:function(){return X.m8.push("/")},children:[(0,u.jsx)(H.Z,{}),"\u9996\u9875"]}),(0,u.jsx)(Z.Z.Item,{onClick:function(){return X.m8.push("/exercise")},children:"\u5728\u7EBF\u7EC3\u4E60"})]})}),(0,u.jsx)("div",{className:"survey ".concat(s?"mobile":"pc"),style:We(),children:Fe()})]})}),se=function(){var r=(0,ae.UO)(),p=r.id,v=p===void 0?"":p,f=r.answerId;return(0,u.jsx)(N,{id:v,aId:f})}},35247:function(ve,V,e){"use strict";e.d(V,{Z:function(){return ye}});var T=e(22122),Z=e(96156),W=e(85061),K=e(94184),x=e.n(K),M=e(50344),g=e(67294),Q=e(53124),Y=e(28682),G=e(96159),C=e(57254),ae=e(81555),xe=function(l,t){var h={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&t.indexOf(n)<0&&(h[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(l);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(l,n[c])&&(h[n[c]]=l[n[c]]);return h},fe=function(t){var h=t.prefixCls,n=t.separator,c=n===void 0?"/":n,b=t.children,X=t.overlay,B=t.dropdownProps,I=xe(t,["prefixCls","separator","children","overlay","dropdownProps"]),q=g.useContext(Q.E_),_=q.getPrefixCls,H=_("breadcrumb",h),u=function(r){return X?g.createElement(ae.Z,(0,T.Z)({overlay:X,placement:"bottom"},B),g.createElement("span",{className:"".concat(H,"-overlay-link")},r,g.createElement(C.Z,null))):r},N;return"href"in I?N=g.createElement("a",(0,T.Z)({className:"".concat(H,"-link")},I),b):N=g.createElement("span",(0,T.Z)({className:"".concat(H,"-link")},I),b),N=u(N),b!=null?g.createElement("li",null,N,c&&g.createElement("span",{className:"".concat(H,"-separator")},c)):null};fe.__ANT_BREADCRUMB_ITEM=!0;var me=fe,he=function(t){var h=t.children,n=g.useContext(Q.E_),c=n.getPrefixCls,b=c("breadcrumb");return g.createElement("span",{className:"".concat(b,"-separator")},h||"/")};he.__ANT_BREADCRUMB_SEPARATOR=!0;var z=he,ie=function(l,t){var h={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&t.indexOf(n)<0&&(h[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(l);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(l,n[c])&&(h[n[c]]=l[n[c]]);return h};function ge(l,t){if(!l.breadcrumbName)return null;var h=Object.keys(t).join("|"),n=l.breadcrumbName.replace(new RegExp(":(".concat(h,")"),"g"),function(c,b){return t[b]||c});return n}function pe(l,t,h,n){var c=h.indexOf(l)===h.length-1,b=ge(l,t);return c?g.createElement("span",null,b):g.createElement("a",{href:"#/".concat(n.join("/"))},b)}var Oe=function(t,h){return t=(t||"").replace(/^\//,""),Object.keys(h).forEach(function(n){t=t.replace(":".concat(n),h[n])}),t},Ee=function(t,h,n){var c=(0,W.Z)(t),b=Oe(h||"",n);return b&&c.push(b),c},oe=function(t){var h=t.prefixCls,n=t.separator,c=n===void 0?"/":n,b=t.style,X=t.className,B=t.routes,I=t.children,q=t.itemRender,_=q===void 0?pe:q,H=t.params,u=H===void 0?{}:H,N=ie(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),se=g.useContext(Q.E_),r=se.getPrefixCls,p=se.direction,v,f=r("breadcrumb",h);if(B&&B.length>0){var P=[];v=B.map(function(S){var j=Oe(S.path,u);j&&P.push(j);var F;return S.children&&S.children.length&&(F=g.createElement(Y.Z,{items:S.children.map(function(U){return{key:U.path||U.breadcrumbName,label:_(U,u,B,Ee(P,U.path,u))}})})),g.createElement(me,{overlay:F,separator:c,key:j||S.breadcrumbName},_(S,u,B,P))})}else I&&(v=(0,M.Z)(I).map(function(S,j){return S&&(0,G.Tm)(S,{separator:c,key:j})}));var D=x()(f,(0,Z.Z)({},"".concat(f,"-rtl"),p==="rtl"),X);return g.createElement("nav",(0,T.Z)({className:D,style:b},N),g.createElement("ol",null,v))};oe.Item=me,oe.Separator=z;var je=oe,ye=je},36017:function(ve,V,e){"use strict";var T=e(38663),Z=e.n(T),W=e(81262),K=e.n(W),x=e(59250),M=e(30887)}}]);
