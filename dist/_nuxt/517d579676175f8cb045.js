(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("58514e66",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var o=n(200);n.n(o).a},204:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".form[data-v-702dca9a]{position:fixed;top:30%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:999;background-color:#000;padding:2rem}",""])},217:function(t,e,n){"use strict";n.r(e);n(17),n(43);var o=n(79),r=n.n(o);r.a.defaults.baseURL="http://localhost:7000";var c={data:function(){return{color:"green",switch1:!1,name:"",des:"",date:(new Date).toISOString().substr(0,10),menu:!1,form:!1,id:" ",todos:[]}},filters:{local:function(t){return new Date(t).toLocaleString()}},methods:{rmtodo:function(t){var e=this;r.a.get("/todo/rm/"+t).then(function(t){1==t.data&&(e.$toast("删除成功"),e.init())})},privacy:function(){var t=this,e="green"!=this.color,n=0==e?"grey":"green";r.a.post("/todolist/privacy/"+this.$route.params.id,{token:this.$store.state.token,value:e}).then(function(e){1==e.data?(t.$toast("修改成功"),t.color=n):t.$toast.error("服务器错误")}).catch(function(){t.$toast.error("服务器错误")})}},init:function(){var t=this;this.id=this.$route.params.id,r.a.get("/todo/"+this.id).then(function(e){t.todos=e.data})},add:function(){var t=this,e={listid:this.$route.params.id,name:this.name,des:this.des,token:this.$store.state.token,deadline:this.date};r.a.post("/todo/new",e).then(function(e){return t.form=!1,new Promise(function(t,n){t(e.data)})}).then(function(){t.init(),t.$toast("添加成功")})},created:function(){var t=this;this.id=this.$route.params.id,r.a.get("/todo/"+this.id).then(function(e){t.todos=e.data}),r.a.get("/todolist/"+this.id).then(function(e){0==e.data&&(t.color="gray"),1==e.data&&(t.color="green")})}},d=(n(203),n(25)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.form?n("div",{staticClass:"form"},[n("v-form",[n("v-text-field",{attrs:{label:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:"des",required:""},model:{value:t.des,callback:function(e){t.des=e},expression:"des"}}),t._v(" "),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({attrs:{label:"Picker in menu","prepend-icon":"event",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},o))]}}],null,!1,2227589515),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1),t._v(" "),n("v-layout",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(e){t.form=!t.form}}},[t._v("取消")]),t._v(" "),n("v-btn",{on:{click:t.add}},[t._v("确定")])],1)],1)],1):t._e(),t._v(" "),n("v-layout",{attrs:{"justify-center":""}},[n("v-container",{attrs:{fluid:""}},[n("v-btn",{attrs:{color:t.color},on:{click:t.privacy}},[t._v("对所有人可见")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{dark:"",fab:"",color:"pink"},on:{click:function(e){t.form=!t.form}}},[n("v-icon",[t._v("add")])],1)],1),t._v(" "),n("v-layout",{attrs:{"justify-space-around":"",wrap:""}},t._l(t.todos,function(e){return n("v-flex",{key:e.id,attrs:{lg5:""}},[n("v-card",{staticClass:"mb-3"},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),t._v(" "),n("div",[n("i",[t._v("type: "+t._s(e.des))])]),t._v(" "),n("div")])]),t._v(" "),n("v-card-actions",[n("i",[t._v("deadline: "+t._s(t._f("local")(e.deadline)))])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{on:{click:function(n){return t.rmtodo(e.id)}}},[t._v("删除")])],1)],1)],1)}),1)],1)},[],!1,null,"702dca9a",null);e.default=component.exports}}]);