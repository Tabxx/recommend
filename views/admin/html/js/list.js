(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"0a49":function(t,e,a){var i=a("9b43"),s=a("626a"),o=a("4bf8"),n=a("9def"),r=a("cd1c");t.exports=function(t,e){var a=1==t,l=2==t,c=3==t,m=4==t,u=6==t,d=5==t||u,f=e||r;return function(e,r,p){for(var v,h,b=o(e),g=s(b),_=i(r,p,3),y=n(g.length),k=0,w=a?f(e,y):l?f(e,0):void 0;y>k;k++)if((d||k in g)&&(v=g[k],h=_(v,k,b),t))if(a)w[k]=h;else if(h)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:w.push(v)}else if(m)return!1;return u?-1:c||m?m:w}}},1169:function(t,e,a){var i=a("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"1af6":function(t,e,a){var i=a("63b6");i(i.S,"Array",{isArray:a("9003")})},3648:function(t,e,a){"use strict";var i=a("5366"),s=a.n(i);s.a},5366:function(t,e,a){},"6f6b":function(t,e,a){"use strict";var i=a("8284"),s=a.n(i);s.a},7514:function(t,e,a){"use strict";var i=a("5ca1"),s=a("0a49")(5),o="find",n=!0;o in[]&&Array(1)[o](function(){n=!1}),i(i.P+i.F*n,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},8284:function(t,e,a){},a6ff:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{staticClass:"mb-15"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addItem}},[t._v("添加")])],1),t._l(t.list,function(e,i){return a("el-col",{key:i,attrs:{span:7,offset:i%3?1:0}},[a("el-card",{staticClass:"card-container",attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[a("div",{on:{mouseenter:function(e){t.showmask=i},mouseleave:function(e){t.showmask=-1}}},[a("img",{staticClass:"image",attrs:{src:e.image}}),a("div",{staticStyle:{padding:"14px"}},[a("span",[t._v(t._s(e.name))]),a("div",{staticClass:"bottom clearfix"},[a("time",{staticClass:"time"},[t._v(t._s(e.intro))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showmask==i,expression:"showmask==index"}],staticClass:"mask"},[a("ul",[a("li",[t._v("CPU："+t._s(e.cpu))]),a("li",[t._v("显卡："+t._s(e.graphics))]),a("li",[t._v("主板："+t._s(e.mainboard))]),a("li",[t._v("硬盘："+t._s(e.harddisk))]),a("li",[t._v("内存条："+t._s(e.memory))])]),a("el-row",{staticClass:"total",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("span",{staticClass:"price"},[t._v("总价："+t._s(e.total)+"元")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return a.stopPropagation(),t.listinfo(e)}}},[t._v("查看详情")])],1)],1)])])],1)}),a("list-info"),a("add-list")],2)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.detail?a("el-dialog",{attrs:{title:"方案详情",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("img",{staticClass:"image",attrs:{src:t.detail.image}})]),a("el-col",{staticClass:"list-info",attrs:{span:14,offset:2}},[a("h2",[t._v(t._s(t.detail.name))]),a("div",{staticClass:"intro"},[t._v(t._s(t.detail.intro))]),a("div",{staticClass:"intro total"},[t._v("￥"),a("span",{staticClass:"price"},[t._v(t._s(t.detail.total))])])]),a("el-col",{staticClass:"list-content",attrs:{span:24}},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"硬件信息",name:"hardware"}},[a("el-row",[a("span",{staticClass:"label"},[t._v("CPU: ")]),a("span",{staticClass:"value"},[t._v(t._s(t.detail.cpu))])]),a("el-row",[a("span",{staticClass:"label"},[t._v("显卡: ")]),a("span",{staticClass:"value"},[t._v(t._s(t.detail.graphics))])]),a("el-row",[a("span",{staticClass:"label"},[t._v("内存条: ")]),a("span",{staticClass:"value"},[t._v(t._s(t.detail.memory))])]),a("el-row",[a("span",{staticClass:"label"},[t._v("硬盘: ")]),a("span",{staticClass:"value"},[t._v(t._s(t.detail.harddisk))])]),a("el-row",[a("span",{staticClass:"label"},[t._v("主板: ")]),a("span",{staticClass:"value"},[t._v(t._s(t.detail.mainboard))])])],1),a("el-tab-pane",{attrs:{label:"相关评论",name:"comment"}},[a("div",{staticClass:"comments block"},[t.activities.length?a("el-timeline",t._l(t.activities,function(e,i){return a("el-timeline-item",{key:i,attrs:{timestamp:t.$moment(1e3*e.time).format("YYYY-MM-DD HH:mm:ss"),placement:"top",reverse:"true"}},[a("el-card",[a("h4",[t._v(t._s(e.content))]),a("p",[t._v(t._s(e.username)+" 提交于 "+t._s(t.$moment(1e3*e.time).format("YYYY-MM-DD HH:mm:ss")))])])],1)}),1):a("div",{staticClass:"time",attrs:{type:"flex",justify:"center"}},[t._v("暂无评论")])],1)])],1)],1)],1)],1):t._e()},n=[],r={name:"ListInfo",data:function(){return{dialogFormVisible:!1,detail:{},activeName:"hardware",activities:[]}},created:function(){var t=this;this.$eventBus.$on("listinfo",function(e){t.init(e)})},methods:{init:function(t){this.detail=t,this.dialogFormVisible=!0,this.getComment()},getComment:function(t){var e=this;this.activities=[],this.$api.listAPI.getComment(this.detail.id).then(function(t){0==t.code&&t.result&&t.result.length&&(e.activities=t.result)})}},beforeDestroy:function(){this.$eventBus.$off("listinfo")}},l=r,c=(a("3648"),a("2877")),m=Object(c["a"])(l,o,n,!1,null,"49fd9c64",null),u=m.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"添加方案",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-steps",{staticClass:"mb-15",attrs:{active:t.addActive}},[a("el-step",{attrs:{title:"1 基本内容"}}),a("el-step",{attrs:{title:"2 硬件选择"}}),a("el-step",{attrs:{title:"3 完成"}})],1),a("el-form",{attrs:{model:t.form,"label-width":"120px"}},[1==t.addActive?[a("el-form-item",{attrs:{label:"方案标题"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"方案标题",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-form-item",{attrs:{label:"方案简介"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"100字左右"},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1)],1),a("el-form-item",{attrs:{label:"标签"}},[a("el-checkbox-group",{model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}},t._l(t.tags,function(t,e){return a("el-col",{key:e,attrs:{span:6}},[a("el-checkbox",{attrs:{name:"type",label:t.name}})],1)}),1)],1)]:t._e(),2==t.addActive?[a("el-form-item",{attrs:{label:"CPU"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.cpu,callback:function(e){t.$set(t.form,"cpu",e)},expression:"form.cpu"}},t._l(t.cpu,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}),1)],1),a("el-form-item",{attrs:{label:"显卡"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.graphics,callback:function(e){t.$set(t.form,"graphics",e)},expression:"form.graphics"}},t._l(t.graphics,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}),1)],1),a("el-form-item",{attrs:{label:"主板"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.mainboard,callback:function(e){t.$set(t.form,"mainboard",e)},expression:"form.mainboard"}},t._l(t.mainboard,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}),1)],1),a("el-form-item",{attrs:{label:"内存条"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.memory,callback:function(e){t.$set(t.form,"memory",e)},expression:"form.memory"}},t._l(t.memory,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}),1)],1),a("el-form-item",{attrs:{label:"硬盘"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.harddisk,callback:function(e){t.$set(t.form,"harddisk",e)},expression:"form.harddisk"}},t._l(t.harddisk,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}),1)],1)]:t._e(),3==t.addActive?[a("el-form-item",{attrs:{label:"总价"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.form.total,callback:function(e){t.$set(t.form,"total",e)},expression:"form.total"}})],1),a("el-form-item",{attrs:{label:"图片上传"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"http://localhost:3000/upload","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-success":t.upload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]:t._e()],2),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.addActive>1,expression:"addActive>1"}],on:{click:t.preStep}},[t._v("上一步")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.addActive<3,expression:"addActive<3"}],attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:3==t.addActive,expression:"addActive==3"}],attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)},f=[],p=(a("7f7f"),a("7514"),a("bd86")),v=a("f632"),h={name:"AddList",created:function(){var t=this;this.getHardWareList(),this.$eventBus.$on("addList",function(){t.dialogFormVisible=!0})},data:function(){return{form:Object(p["a"])({name:"",intro:"",cpu:"",graphics:"",mainboard:"",harddisk:"",memory:"",total:"",image:"",tag:[]},"total",0),dialogFormVisible:!1,addActive:1,cpu:[],graphics:[],mainboard:[],memory:[],harddisk:[]}},methods:{getHardWareList:function(){var t=this;this.$api.hardwareAPI.getAllList().then(function(e){0==e.code&&e.result&&(t.cpu=e.result.cpu,t.graphics=e.result.graphics,t.mainboard=e.result.mainboard,t.harddisk=e.result.harddisk,t.memory=e.result.memory)})},submit:function(){var t=this,e=[];this.form.tag.map(function(a){e.push(t.tags.find(function(t){return t.name==a}).tid)}),this.form.tag=e.join(","),this.calcTotal(1),this.$api.listAPI.addList(this.form).then(function(e){0==e.code&&(t.dialogFormVisible=!1,t.initData(),t.$notify({title:"成功",message:"添加成功，请在列表也刷新查看",type:"success",duration:2e3}),t.$eventBus.$emit("resize"))})},nextStep:function(){this.addActive++,3==this.addActive&&this.calcTotal()},calcTotal:function(t){var e=this,a=["cpu","memory","graphics","harddisk","mainboard"];this.$set(this.form,"total",0);for(var i=function(){var i=a[s];if(e.form[i]){var o=e[i].find(function(t){return t.id==e.form[i]});e.$set(e.form,"total",e.form.total+o.price),t&&(e.form[i]=o.name)}},s=0;s<a.length;s++)i()}},mixins:[v["a"]]},b=h,g=Object(c["a"])(b,d,f,!1,null,"3077c302",null),_=g.exports,y={name:"list",data:function(){return{currentDate:new Date,list:[],showmask:-1}},components:{ListInfo:u,AddList:_},created:function(){var t=this;this.$eventBus.$on("resize",function(){t.getData()})},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.listAPI.getList().then(function(e){0==e.code&&e.result&&e.result.length&&(t.list=e.result)})},listinfo:function(t){this.$eventBus.$emit("listinfo",t)},addItem:function(){this.$eventBus.$emit("addList")}},beforeDestroy:function(){this.$eventBus.$off("resize")}},k=y,w=(a("6f6b"),Object(c["a"])(k,i,s,!1,null,"35b430a1",null));e["default"]=w.exports},a745:function(t,e,a){t.exports=a("f410")},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},e853:function(t,e,a){var i=a("d3f4"),s=a("1169"),o=a("2b4c")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),i(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f632:function(t,e,a){"use strict";var i=a("a745"),s=a.n(i);a("7f7f"),a("7514");e["a"]={data:function(){return{dialogFormVisible:!1,addActive:1,fileList:[]}},created:function(){var t=this;this.$eventBus.$on("addItem",function(){t.init()})},computed:{tags:function(){return this.$store.state.Tag}},methods:{init:function(t){this.dialogFormVisible=!0},nextStep:function(){this.addActive++},preStep:function(){this.addActive--},submitCPU:function(){var t=this,e=[];this.form.tag.map(function(a){e.push(t.tags.find(function(t){return t.name==a}).tid)}),this.form.tag=e.join(","),this.$api.hardwareAPI.createItem(this.url,this.form).then(function(e){0==e.code&&(t.dialogFormVisible=!1,t.initData(),t.$notify({title:"成功",message:"添加成功，请在列表也刷新查看",type:"success",duration:2e3}),t.$eventBus.$emit("resize"))})},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},upload:function(t,e,a){this.form.image="http://localhost:3000".concat(t.result)},initData:function(){for(var t in this.form)"boolean"==typeof this.form[t]?this.form[t]=!1:s()(this.form[t])?this.form[t]=[]:this.form[t]="";this.addActive=1,this.fileList=[]}}}}}]);