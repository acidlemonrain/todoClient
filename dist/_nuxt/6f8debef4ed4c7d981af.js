(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(t,e,n){"use strict";n.r(e);var l=n(79),r=n.n(l);r.a.defaults.baseURL="http://106.15.183.147:9999";var o={data:function(){return{name:"",des:"",date:(new Date).toISOString().substr(0,10),menu:!1,form:!1,id:" ",todos:[]}},filters:{local:function(t){return new Date(t).toLocaleString()}},created:function(){var t=this;this.id=this.$route.params.id,r.a.get("/todo/"+this.id).then(function(e){t.todos=e.data.sort(function(a,b){return new Date(a.deadline)>new Date(b.deadline)}),console.log(e.data)})}},d=n(25),component=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",t._l(t.todos,function(e,l){return n("div",{key:e.id},[l%2==0?n("v-timeline-item",{attrs:{color:"purple lighten-2","fill-dot":"",right:""}},[n("v-card",[n("v-card-title",{staticClass:"purple lighten-1"},[n("h2",{staticClass:"white--text"},[t._v(t._s(e.name))])]),t._v(" "),n("v-container",[n("v-layout",[n("v-flex",[n("div",[t._v(t._s(e.des))]),t._v(" "),n("div",[n("i",{staticClass:"red--text"},[t._v(t._s(t._f("local")(e.deadline)))])])])],1)],1)],1)],1):t._e(),t._v(" "),l%2!=0?n("v-timeline-item",{attrs:{color:"amber lighten-1","fill-dot":"",left:""}},[n("v-card",[n("v-card-title",{staticClass:"orange lighten-1"},[n("h2",{staticClass:"white--text"},[t._v(t._s(e.name))])]),t._v(" "),n("v-container",[n("v-flex",[n("div",[t._v(t._s(e.des))]),t._v(" "),n("div",[n("i",{staticClass:"red--text"},[t._v(t._s(t._f("local")(e.deadline)))])])])],1)],1)],1):t._e()],1)}),0)},[],!1,null,null,null);e.default=component.exports}}]);