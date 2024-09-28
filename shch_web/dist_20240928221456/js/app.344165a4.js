(function(){"use strict";var e={3011:function(e,t,n){var o=n(2856),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("container-main",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[t("el-button",{attrs:{type:"text"},on:{click:e.handleJumpParentHome}},[e._v("主应用 home")])],1),t("el-breadcrumb-item",[t("el-button",{attrs:{type:"text"},on:{click:e.handleJumpParentAbout}},[e._v("主应用 about")])],1),t("el-breadcrumb-item",[t("el-button",{attrs:{type:"text"},on:{click:e.handleJumpChildVue}},[e._v("子应用 vue")])],1),t("el-breadcrumb-item",[t("el-button",{attrs:{type:"text"},on:{click:e.handleJumpChildReact}},[e._v("子应用 react")])],1)],1),t("div",{attrs:{id:"container-sub-app"}}),e._l(e.messages,(function(n){return t("div",{key:n.id},[e._v(" "+e._s(n.value)+" ")])})),t("el-form",{attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"消息："}},[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.newMessage,callback:function(t){e.newMessage=t},expression:"newMessage"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("发送")])],1)],1)],2),t("router-view")],1)},l=[],i=(n(4114),function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[t("el-menu",{attrs:{"default-openeds":["1","3"]}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-message"}),e._v("导航一")]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("分组一")]),t("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),t("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],2),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1),t("el-submenu",{attrs:{index:"1-4"}},[t("template",{slot:"title"},[e._v("选项4")]),t("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项4-1")])],2)],2),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),e._v("导航二")]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("分组一")]),t("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),t("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")])],2),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],1),t("el-submenu",{attrs:{index:"2-4"}},[t("template",{slot:"title"},[e._v("选项4")]),t("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项4-1")])],2)],2),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("导航三")]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("分组一")]),t("el-menu-item",{attrs:{index:"3-1"}},[e._v("选项1")]),t("el-menu-item",{attrs:{index:"3-2"}},[e._v("选项2")])],2),t("el-menu-item-group",{attrs:{title:"分组2"}},[t("el-menu-item",{attrs:{index:"3-3"}},[e._v("选项3")])],1),t("el-submenu",{attrs:{index:"3-4"}},[t("template",{slot:"title"},[e._v("选项4")]),t("el-menu-item",{attrs:{index:"3-4-1"}},[e._v("选项4-1")])],2)],2)],1)],1),t("el-container",[t("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[t("el-dropdown",[t("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("查看")]),t("el-dropdown-item",[e._v("新增")]),t("el-dropdown-item",[e._v("删除")])],1)],1),t("span",[e._v("王小虎")])],1),t("el-main",[e._t("default")],2)],1)],1)}),a=[],s={data(){const e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}},u=s,c=n(845),p=(0,c.A)(u,i,a,!1,null,"2b0683e0",null),d=p.exports,m={name:"App",components:{ContainerMain:d},data(){return{messages:[],newMessage:"",socket:null}},created(){},beforeDestroy(){},methods:{initializeWebSocketConnection(){this.socket=new WebSocket("ws://localhost:8083"),this.socket.onopen=()=>{console.log("WebSocket connection opened"),this.socket.send(JSON.stringify({value:this.newMessage}))},this.socket.onmessage=e=>{console.log("接收服务器传过来的 event.data::",e.data);const t=JSON.parse(e.data);this.messages.push(t.data)},this.socket.onerror=e=>{console.error("WebSocket Error:",e)},this.socket.onclose=()=>{console.log("WebSocket connection closed")}},sendMessage(){},handleJumpParentHome(){this.$router.push({path:"/"})},handleJumpParentAbout(){this.$router.push({path:"/about"})},handleJumpChildVue(){window.location.href="/child-app1/"},handleJumpChildReact(){window.location.href="/sub-app-react/"}}},f=m,h=(0,c.A)(f,r,l,!1,null,null,null),v=h.exports,b=n(1594),g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"})},_=[],y={name:"homeView"},w=y,x=(0,c.A)(w,g,_,!1,null,null,null),k=x.exports,A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[e._v("aboutView...")])},S=[],O={name:"aboutView"},C=O,M=(0,c.A)(C,A,S,!1,null,null,null),J=M.exports,j=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"container-sub-app"}})},P=[],T=n(4847),W=n(2280);const D={},N=(0,W.z)(D);N.onGlobalStateChange(((e,t)=>{console.log("主应用: 变更前"),console.log(t),console.log("主应用: 变更后"),console.log(e)})),N.setGlobalState({initialState:"主应用全局变量"}),N.offGlobalStateChange();var V=N,z={name:"microApp",mixins:[V],data(){return{microApp:null}},mounted(){const e=this.getMicroInfo();this.microApp=(0,T.Wz)(e)},beforeDestroy(){console.log("beforeDestroy...")},methods:{getMicroInfo(){const e=this.$route.path.split("/")[1];let t={};const n=window.location.host;for(let o=0;o<document.subApps.length;o++){const r=document.subApps[o];if(r.activeRule.includes(e)){t="string"!==typeof r.entry?{...r,entry:r.entry[n]?r.entry[n]:Object.values(r.entry)[0]}:{...r},t.props={token:{userInfo:{userName:"小明",userId:"123",date:(new Date).toLocaleString()}}},t.activeRule=[e];break}}return console.log("data::",t),t}}},I=z,R=(0,c.A)(I,j,P,!1,null,null,null),$=R.exports;o["default"].use(b.Ay);const{isNavigationFailure:F,NavigationFailureType:G}=b.Ay,E=b.Ay.prototype.push;b.Ay.prototype.push=function(e){return E.call(this,e).catch((e=>{if(F(e,G.aborted))throw e}))};const H=b.Ay.prototype.replace;b.Ay.prototype.replace=function(e){return H.call(this,e).catch((e=>{if(F(e,G.aborted))throw e}))};const L=[{path:"/",name:"home",component:k},{path:"/about/*",name:"about",component:J},{path:"/child-app1/*",name:"MicroApp",component:$},{path:"/sub-app-react/*",name:"MicroApp",component:$}],q=new b.Ay({mode:"history",routes:L});var B=q,K=n(4927),Q=n.n(K);o["default"].config.productionTip=!1,o["default"].use(Q()),new o["default"]({router:B,render:e=>e(v)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],l=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,i=o[0],a=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3011)}));o=n.O(o)})();
//# sourceMappingURL=app.344165a4.js.map