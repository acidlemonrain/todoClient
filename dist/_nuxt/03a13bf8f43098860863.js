(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(t,e,n){"use strict";n.r(e);n(17);var o=n(79),r=n.n(o);r.a.defaults.baseURL="http://106.15.183.147:7000";var v={data:function(){return{user:{},todolist:[]}},created:function(){var t=this;r.a.post("/user/info",{token:this.$store.state.token}).then(function(e){return new Promise(function(n,o){t.user=e.data,n(t.user)})}).then(function(e){r.a.post("/user/todolist",{token:t.$store.state.token}).then(function(e){t.todolist=e.data,console.log(e.data)})})}},l=n(25),component=Object(l.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"justify-content-center":"",wrap:""}},[n("v-flex",{staticClass:"mb-2",attrs:{lg10:""}},[n("v-card",[n("v-container",[n("v-layout",[n("v-flex",[n("div",[n("h1",{staticClass:"headline"},[t._v("基本信息：")])])])],1)],1),t._v(" "),n("v-card-title",[n("div",[n("h3",{staticClass:"headline"},[t._v("用户名："+t._s(t.user.username))]),t._v(" "),n("div",[n("h5",[t._v("ID"+t._s(t.user.userid))])])])])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{"justify-content-center":"",wrap:""}},[n("v-flex",{attrs:{lg10:""}},[n("v-expansion-panel",[n("v-expansion-panel-content",{attrs:{"expand-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-spacer"),t._v(" "),n("div",[t._v("\n              我的备忘录\n              "),n("v-icon",[t._v("event")])],1)]},proxy:!0}])},[t._v(" "),n("v-layout",{staticClass:"grey darken-2",attrs:{"justify-space-around":"",wrap:""}},[n("v-flex",{attrs:{lg12:""}},[n("v-layout",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{to:"/newtodo"}},[t._v("创建备忘录")])],1)],1),t._v(" "),t._l(t.todolist,function(e){return n("v-flex",{key:e.id,attrs:{lg5:""}},[n("v-card",{staticClass:"my-2"},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),t._v(" "),n("div",[n("i",[t._v("author: "+t._s(e.username))])]),t._v(" "),n("div",[n("i",[t._v("type: "+t._s(e.type))])])])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange",to:"/showtodo/"+e.id,router:""}},[t._v("查看备忘录")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"orange",to:"/todo/"+e.id,router:""}},[t._v("修改")])],1)],1)],1)})],2)],1)],1)],1)],1)],1)},[],!1,null,"80f91ea4",null);e.default=component.exports}}]);