(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["memory"],{"0a49":function(t,e,a){var l=a("9b43"),o=a("626a"),i=a("4bf8"),r=a("9def"),n=a("cd1c");t.exports=function(t,e){var a=1==t,s=2==t,c=3==t,u=4==t,f=6==t,m=5==t||f,p=e||n;return function(e,n,d){for(var h,b,v=i(e),g=o(v),y=l(n,d,3),w=r(g.length),_=0,x=a?p(e,w):s?p(e,0):void 0;w>_;_++)if((m||_ in g)&&(h=g[_],b=y(h,_,v),t))if(a)x[_]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:x.push(h)}else if(u)return!1;return f?-1:c||u?u:x}}},1169:function(t,e,a){var l=a("2d95");t.exports=Array.isArray||function(t){return"Array"==l(t)}},"1af6":function(t,e,a){var l=a("63b6");l(l.S,"Array",{isArray:a("9003")})},7369:function(t,e,a){},7514:function(t,e,a){"use strict";var l=a("5ca1"),o=a("0a49")(5),i="find",r=!0;i in[]&&Array(1)[i](function(){r=!1}),l(l.P+l.F*r,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"830c":function(t,e,a){"use strict";a("ac6a");e["a"]={data:function(){return{tableData:[],loading:!0,multipleSelection:[],detail:[],total:0,page:1,pageSize:8}},created:function(){var t=this;this.$eventBus.$on("resize",function(){t.loading=!0,t.initList()})},mounted:function(){this.initList()},methods:{handleClick:function(t){for(var e in this.detail=[],t)this.detail.push({value:t[e],attr:e});this.$eventBus.$emit("openDialog",{data:this.detail,rules:this.rules,show:!0,filter:this.filter,block:this.showBlock})},initList:function(){var t=this;this.$api.hardwareAPI.getList({url:this.url,page:this.page,pageSize:this.pageSize}).then(function(e){0===e.code&&e.result&&e.result.length?(t.total=e.msg,t.tableData=[],t.tableData=e.result,t.loading=!1):t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},addItem:function(){this.$eventBus.$emit("addItem")},updateData:function(t){this.page=t,this.initList()},handleSelectionChange:function(t){this.multipleSelection=t},selectAll:function(){var t=this;this.tableData.forEach(function(e){t.$refs.tablelist.toggleRowSelection(e)})},delItem:function(t){var e=this,a=null;t?a=t.id:(a=[],this.multipleSelection.map(function(t){return a.push(t.id)}),a=a.join(",")),this.$api.hardwareAPI.delItem({url:this.url,id:a}).then(function(t){0==t.code?(e.$notify({title:"成功",message:"删除成功",type:"success"}),e.initList()):e.$notify({title:"失败",message:"删除失败",type:"error"})})},fmtstatus:function(t,e,a,l){return a?"正常":"禁用"}},beforeDestroy:function(){this.$eventBus.$off("resize")}}},a745:function(t,e,a){t.exports=a("f410")},cd1c:function(t,e,a){var l=a("e853");t.exports=function(t,e){return new(l(t))(e)}},cecc:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",[a("el-row",{staticClass:"mb-15"},[a("el-col",[a("el-button",[t._v("全选")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addItem}},[t._v("添加")]),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.delItem()}}},[t._v("删除")])],1)],1),a("el-row",[a("el-col",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"cputable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{fixed:"",type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"70"}}),a("el-table-column",{attrs:{prop:"name",label:"内存条名称",width:"480"}}),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"120"}}),a("el-table-column",{attrs:{prop:"price",label:"价格",width:"120"}}),a("el-table-column",{attrs:{prop:"capacity",label:"内存容量",width:"120"}}),a("el-table-column",{attrs:{prop:"frequency",label:"内存频率",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"显存类型",width:"120"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.delItem(e.row)}}},[t._v("删除")])]}}])})],1)],1)],1),a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.updateData}}),a("add-memory")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"添加内存条",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form,"label-width":"120px"}},[a("el-steps",{staticClass:"mb-15",attrs:{active:t.addActive}},[a("el-step",{attrs:{title:"1 重要参数"}}),a("el-step",{attrs:{title:"2 基础参数"}}),a("el-step",{attrs:{title:"3 完成"}})],1),1==t.addActive?[a("el-form-item",{attrs:{label:"内存条名称"}},[a("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"品牌"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"影驰",clearable:""},model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}})],1)],1),a("el-form-item",{attrs:{label:"价格",prop:"price",width:"100px",placeholder:"3999",rules:[{required:!0,message:"价格不能为空"},{type:"number",message:"价格必须为数字值"}]}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{type:"price",autocomplete:"off"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",t._n(e))},expression:"form.price"}})],1)],1),a("el-form-item",{attrs:{label:"内存容量"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"11(GB)",clearable:""},model:{value:t.form.capacity,callback:function(e){t.$set(t.form,"capacity",e)},expression:"form.capacity"}})],1)],1),a("el-form-item",{attrs:{label:"显卡类型"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"GDDR6",clearable:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1)],1)]:t._e(),2==t.addActive?[a("el-form-item",{attrs:{label:"针脚数"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"288pin",clearable:""},model:{value:t.form.stitch_count,callback:function(e){t.$set(t.form,"stitch_count",e)},expression:"form.stitch_count"}})],1)],1),a("el-form-item",{attrs:{label:"插槽类型"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",clearable:""},model:{value:t.form.slot_type,callback:function(e){t.$set(t.form,"slot_type",e)},expression:"form.slot_type"}})],1)],1),a("el-form-item",{attrs:{label:"插槽延迟"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"三风扇散热",clearable:""},model:{value:t.form.cl_delay,callback:function(e){t.$set(t.form,"cl_delay",e)},expression:"form.cl_delay"}})],1)],1),a("el-form-item",{attrs:{label:"内存主频"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"2400(MHz)",clearable:""},model:{value:t.form.frequency,callback:function(e){t.$set(t.form,"frequency",e)},expression:"form.frequency"}})],1)],1)]:t._e(),3==t.addActive?[a("el-form-item",{attrs:{label:"标签"}},[a("el-checkbox-group",{model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}},t._l(t.tags,function(t,e){return a("el-col",{key:e,attrs:{span:6}},[a("el-checkbox",{attrs:{name:"type",label:t.name}})],1)}),1)],1),a("el-form-item",{attrs:{label:"工作电压"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"12(V)",clearable:""},model:{value:t.form.work_voltage,callback:function(e){t.$set(t.form,"work_voltage",e)},expression:"form.work_voltage"}})],1)],1),a("el-form-item",{attrs:{label:"是否有散热片"}},[a("el-switch",{model:{value:t.form.radiating,callback:function(e){t.$set(t.form,"radiating",e)},expression:"form.radiating"}})],1),a("el-form-item",{attrs:{label:"图片上传"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"http://localhost:3000/upload","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"on-success":t.upload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]:t._e()],2),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.addActive>1,expression:"addActive>1"}],on:{click:t.preStep}},[t._v("上一步")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.addActive<3,expression:"addActive<3"}],attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:3==t.addActive,expression:"addActive==3"}],attrs:{type:"primary"},on:{click:t.submitCPU}},[t._v("确 定")])],1)],1)},r=[],n=a("f632"),s={name:"AddMemory",data:function(){return{form:{name:"",brand:"",price:"",type:"",capacity:"",image:"",frequency:"",stitch_count:"",slot_type:"",cl_delay:"",work_voltage:"",radiating:!1,tag:[]},url:"memory"}},mixins:[n["a"]]},c=s,u=(a("ea24"),a("2877")),f=Object(u["a"])(c,i,r,!1,null,"a3bae630",null),m=f.exports,p=a("830c"),d={name:"Memory",components:{AddMemory:m},data:function(){return{rules:{id:"ID",name:"内存条名称",brand:"品牌",price:"价格",type:"类型",capacity:"内存容量",image:"图片",frequency:"主频",status:"状态",stitch_count:"针脚数",slot_type:"插槽类型",cl_delay:"插槽延迟",work_voltage:"工作电压",radiating:"是否有散热片",tag:"标签"},filter:["id","image","status","hardware_name","tag"],url:"memory"}},mixins:[p["a"]]},h=d,b=Object(u["a"])(h,l,o,!1,null,"4b568e2c",null);e["default"]=b.exports},e853:function(t,e,a){var l=a("d3f4"),o=a("1169"),i=a("2b4c")("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),l(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},ea24:function(t,e,a){"use strict";var l=a("7369"),o=a.n(l);o.a},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f632:function(t,e,a){"use strict";var l=a("a745"),o=a.n(l);a("7f7f"),a("7514");e["a"]={data:function(){return{dialogFormVisible:!1,addActive:1,fileList:[]}},created:function(){var t=this;this.$eventBus.$on("addItem",function(){t.init()})},computed:{tags:function(){return this.$store.state.Tag}},methods:{init:function(t){this.dialogFormVisible=!0},nextStep:function(){this.addActive++},preStep:function(){this.addActive--},submitCPU:function(){var t=this,e=[];this.form.tag.map(function(a){e.push(t.tags.find(function(t){return t.name==a}).tid)}),this.form.tag=e.join(","),this.$api.hardwareAPI.createItem(this.url,this.form).then(function(e){0==e.code&&(t.dialogFormVisible=!1,t.initData(),t.$notify({title:"成功",message:"添加成功，请在列表也刷新查看",type:"success",duration:2e3}),t.$eventBus.$emit("resize"))})},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},upload:function(t,e,a){this.form.image="http://localhost:3000".concat(t.result)},initData:function(){for(var t in this.form)"boolean"==typeof this.form[t]?this.form[t]=!1:o()(this.form[t])?this.form[t]=[]:this.form[t]="";this.addActive=1,this.fileList=[]}}}}}]);