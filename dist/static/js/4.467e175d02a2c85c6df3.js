webpackJsonp([4],{NZ1b:function(e,s){},ZZZ8:function(e,s,t){t("hSSI");var a=t("AKd3").Object;e.exports=function(e){return a.getOwnPropertyNames(e)}},hSSI:function(e,s,t){t("t+Om")("getOwnPropertyNames",function(){return t("7J6k").f})},ohRs:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("p00s"),c=t.n(a),i=t("aA9S"),o=t.n(i),l=t("5eyz"),n={props:{caseObj:{type:Object,required:!0}},name:"step1",data:function(){return{msg:"step1",tabIndex:1,closable:!1,currentTabName:"1",labelPosition:"top",centerDialogVisible:!1,closeDialog:!1,checkSuspectInfoFromList:[],checkedInfo:"",checkAll:!1,editableTabsList:[{caseNumber:this.caseObj.caseNumber,sort:"1",suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}],copyEditableTabsList:[{caseNumber:this.caseObj.caseNumber,sort:"1",suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}],saveFlag:!0}},mounted:function(){var e=this;this.$nextTick(function(){window.checkIsSave=function(s,t){e.next(s,t)},e.editableTabsList1=o()([],e.editableTabsList),e.getSuspectsBaseInfo()})},methods:{handleCheckAllChange:function(e){this.checkAll=!this.checkAll,this.checkAll?this.checkSuspectInfoFromList.forEach(function(e,s){e.isChecked=!0}):this.checkSuspectInfoFromList.forEach(function(e,s){e.isChecked=!1})},handleCheckedOneChange:function(e){if(this.checkSuspectInfoFromList.forEach(function(s,t){s.suspectIdNumber===e.suspectIdNumber&&(s.isChecked=e.isChecked)}),e.isChecked){var s=0;this.checkSuspectInfoFromList.forEach(function(e,t){!0===e.isChecked&&(s+=1)}),s===this.checkSuspectInfoFromList.length&&(this.checkAll=!0)}else{var t=this.checkSuspectInfoFromList.length;this.checkSuspectInfoFromList.forEach(function(e,s){e.isChecked||(t-=1)}),this.checkSuspectInfoFromList.length>t&&(this.checkAll=!1)}},canel:function(){this.centerDialogVisible=!1,this.closable=!0;var e=parseInt(this.editableTabsList[this.editableTabsList.length-1].sort)+1+"";this.editableTabsList.push({caseNumber:this.caseObj.caseNumber,sort:e,suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}),this.currentTabName=e},confirm:function(){var e=this,s=0,t="";this.checkSuspectInfoFromList.forEach(function(a,c){""===a.suspectAdults&&(a.suspectAdults="否"),""===a.supporterOfTheDisabled&&(a.supporterOfTheDisabled="否"),""===a.suspectEscape&&(a.suspectEscape="否"),""===a.suspectPregnantWoman&&(a.suspectPregnantWoman="否"),""===a.suspectChase&&(a.suspectChase="否"),""===a.suspectMajorDisease&&(a.suspectMajorDisease="否"),a.isChecked&&(t=parseInt(e.editableTabsList[e.editableTabsList.length-1].sort)+1+"",s+=1,a.sort=t,e.editableTabsList.push(a))}),0!==s?(this.centerDialogVisible=!1,this.closable=!0,this.currentTabName=t):this.$message({message:"请选择要添加的嫌疑人",type:"warning",duration:2e3})},next:function(e,s){var t=this;this.isObjEqual(this.copyEditableTabsList,this.editableTabsList)?s?eDossier&&eDossier.close():e?this.$router.push({path:e}):this.$router.push({name:"step2"}):this.$confirm("有修改的嫌疑人信息未保存, 是否保存?","",{confirmButtonText:"保存",cancelButtonText:"取消",closeOnClickModal:!1,center:!0,showClose:!1}).then(function(){t.onSubmit(e,s)}).catch(function(){s?eDossier&&eDossier.close():e?t.$router.push({path:e}):t.$router.push({name:"step2"})})},onSubmit:function(e,s){var t=this,a=!0;this.editableTabsList.forEach(function(e,s){if(""===e.suspectName)return a=!1,t.$message({message:"犯罪嫌疑人姓名不能不空",type:"warning",duration:2e3}),!1}),a&&this.saveOrUpdateSuspectsBaseInfo(e,s)},addTab:function(e){var s=this,t={caseNumber:this.caseObj.caseNumber,userId:localCache.getItem("userId")};Object(l.h)({method:"post",url:"/api/4static/suspectsBaseInfo/checkSuspectInfoFromJzData",headers:{contentType:"application/json"},data:t}).then(function(e){if("200"===e.data.code)if(e.data.data.length>0)s.centerDialogVisible=!0,s.checkSuspectInfoFromList=e.data.data,s.checkSuspectInfoFromList.forEach(function(e,s){e.isChecked=!1});else{var t=parseInt(s.editableTabsList[s.editableTabsList.length-1].sort)+1+"";s.editableTabsList.push({caseNumber:s.caseObj.caseNumber,sort:t,suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}),s.closable=!0,s.currentTabName=t}})},removeTab:function(e){var s=this.editableTabsList;2===s.length&&(this.closable=!1);var t=this.currentTabName;t===e&&s.forEach(function(a,c){if(a.sort===e){var i=s[c+1]||s[c-1];i&&(t=i.sort)}}),this.currentTabName=t,this.editableTabsList=s.filter(function(s){return s.sort!==e})},getSuspectsBaseInfo:function(){var e=this,s={caseNumber:this.caseObj.caseNumber,userId:localCache.getItem("userId")};Object(l.h)({method:"post",url:"/api/4static/suspectsBaseInfo/getSuspectsBaseInfo",headers:{contentType:"application/json"},data:s}).then(function(s){e.copyEditableTabsList=[],"200"===s.data.code&&s.data.data&&s.data.data.length>0?(e.editableTabsList=s.data.data,e.saveFlag&&e.saveOrUpdateSuspectsBaseInfo(),"1"===e.currentTabName&&(e.currentTabName=e.editableTabsList[0].sort),1===e.editableTabsList.length?e.closable=!1:e.closable=!0,e.tabIndex=e.editableTabsList.length,e.editableTabsList.forEach(function(s,t){""===s.suspectName&&(s.suspectName="嫌疑人"),""===s.suspectAdults&&(s.suspectAdults="否"),""===s.supporterOfTheDisabled&&(s.supporterOfTheDisabled="否"),""===s.suspectEscape&&(s.suspectEscape="否"),""===s.suspectPregnantWoman&&(s.suspectPregnantWoman="否"),""===s.suspectChase&&(s.suspectChase="否"),""===s.suspectMajorDisease&&(s.suspectMajorDisease="否"),e.copyEditableTabsList.push(o()({},s))})):"200"!==s.data.code||s.data.data?"500"===s.data.code?(e.closable=!1,e.copyEditableTabsList=[{caseNumber:e.caseObj.caseNumber,sort:"1",suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}],e.$message({message:s.data.msg,type:"error",duration:2e3})):"200"===s.data.code&&s.data.data&&0===s.data.data.length&&(e.closable=!1,e.copyEditableTabsList=[{caseNumber:e.caseObj.caseNumber,sort:"1",suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}]):(e.closable=!1,e.copyEditableTabsList=[{caseNumber:e.caseObj.caseNumber,sort:"1",suspectName:"嫌疑人",suspectAdults:"否",supporterOfTheDisabled:"否",suspectMajorDisease:"否",suspectEscape:"否",suspectPregnantWoman:"否",suspectChase:"否",suspectBaseInfo:""}])})},saveOrUpdateSuspectsBaseInfo:function(e,s){var t=this;if(localCache.getItem("userId")){this.editableTabsList.forEach(function(e,s){e.createUser=localCache.getItem("userId")});var a={suspectsBaseInfoVos:this.editableTabsList};Object(l.h)({method:"post",url:"/api/4static/suspectsBaseInfo/saveOrUpdateSuspectsBaseInfos",headers:{contentType:"application/json"},data:a}).then(function(a){"200"===a.data.code?(t.saveFlag||t.$message({message:"保存犯罪嫌疑人基本信息成功",type:"success",duration:2e3}),t.saveFlag=!1,t.getSuspectsBaseInfo(),s?eDossier&&eDossier.close():e&&t.$router.push({path:e})):(t.saveFlag||t.$message({message:a.data.msg,type:"success",duration:2e3}),t.saveFlag=!1)})}else this.$message({message:"userId为空",type:"error",duration:2e3})},addSubTab:function(e){var s=this,t="";if(this.editableTabsList.forEach(function(s,a){s.sort===e&&(t=s.suspectBaseInfo)}),t&&""!==t){var a={suspectBaseInfo:t};Object(l.h)({method:"post",url:"/api/4static/suspectsBaseInfo/dataExtraction",headers:{contentType:"application/json"},data:a}).then(function(e){"200"===e.data.code?(s.editableTabsList.forEach(function(t){t.sort===s.currentTabName&&(e.data.data.suspectName&&(t.suspectName=e.data.data.suspectName),e.data.data.suspectAdults&&(t.suspectAdults=e.data.data.suspectAdults))}),e.data.data.suspectName?s.$message({message:"嫌疑人基本信息填充成功",type:"success",duration:2e3}):s.$message({message:"请完善基本信息",type:"warning",duration:2e3})):s.$message({message:"嫌疑人基本信息填充失败",type:"error",duration:2e3})})}else this.$message({message:"嫌疑人基本信息不能为空",type:"warning",duration:2e3})},isObjEqual:function(e,s){var t=c()(this.editableTabsList1[0]);if(e.length!==s.length)return!1;for(var a=0;a<10;a++)for(var i=t[a],o=0;o<e.length;o++)if(e[o][i]!==s[o][i])return!1;return!0}}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"step-wrap",attrs:{id:"step1"}},[t("el-tabs",{attrs:{closable:e.closable},on:{"tab-remove":e.removeTab},model:{value:e.currentTabName,callback:function(s){e.currentTabName=s},expression:"currentTabName"}},e._l(e.editableTabsList,function(s){return t("el-tab-pane",{key:s.sort,attrs:{label:s.suspectName,name:s.sort}},[t("div",{staticClass:"step-body-wrap"},[t("el-form",{ref:"form",refInFor:!0,attrs:{"label-position":e.labelPosition,model:s.contentForm,"label-width":"80px"}},[t("el-row",[t("el-col",{staticStyle:{"padding-right":"40px"},attrs:{span:8}},[t("div",{},[t("el-form-item",{attrs:{label:"姓名",title:"姓名"}},[t("el-input",{attrs:{maxlength:"50"},model:{value:s.suspectName,callback:function(t){e.$set(s,"suspectName",t)},expression:"item.suspectName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否系生活不能自理的唯一抚养人",title:"是否系生活不能自理的唯一抚养人"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.supporterOfTheDisabled,callback:function(t){e.$set(s,"supporterOfTheDisabled",t)},expression:"item.supporterOfTheDisabled"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否成年人",title:"是否成年人"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.suspectAdults,callback:function(t){e.$set(s,"suspectAdults",t)},expression:"item.suspectAdults"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1)]),e._v(" "),t("el-col",{staticStyle:{padding:"0 20px"},attrs:{span:8}},[t("div",{},[t("el-form-item",{attrs:{label:"是否有重大疾病",title:"是否有重大疾病"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.suspectMajorDisease,callback:function(t){e.$set(s,"suspectMajorDisease",t)},expression:"item.suspectMajorDisease"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否在逃",title:"是否在逃"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.suspectEscape,callback:function(t){e.$set(s,"suspectEscape",t)},expression:"item.suspectEscape"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1)]),e._v(" "),t("el-col",{staticStyle:{"padding-left":"40px"},attrs:{span:8}},[t("div",{},[t("el-form-item",{attrs:{label:"是否怀孕、哺乳婴儿的妇女",title:"是否怀孕、哺乳婴儿的妇女"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.suspectPregnantWoman,callback:function(t){e.$set(s,"suspectPregnantWoman",t)},expression:"item.suspectPregnantWoman"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"是否追捕的犯罪嫌疑人",title:"是否追捕的犯罪嫌疑人"}},[t("el-select",{attrs:{placeholder:""},model:{value:s.suspectChase,callback:function(t){e.$set(s,"suspectChase",t)},expression:"item.suspectChase"}},[t("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1)])],1),e._v(" "),t("el-row",[t("h3",{staticClass:"h3-title"},[t("p",{staticStyle:{"font-size":"14px",color:"#333","font-weight":"400","margin-bottom":"0"}},[e._v("基本信息快速填充")]),e._v(" "),t("small",{staticStyle:{"font-size":"12px",color:"#999","font-weight":"400","margin-bottom":"0"}},[e._v("系统自动获取嫌疑人基本信息在下表，并完成上方表单的填充，您也可以手动修改")]),e._v(" "),t("span",{staticClass:"btn-wrap"},[t("el-button",{staticStyle:{color:"#42a0f8"},attrs:{size:"small"},on:{click:function(s){e.addSubTab(e.currentTabName)}}},[e._v("确定")])],1)]),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-input",{staticStyle:{"font-size":"14px",color:"#999","margin-bottom":"10px"},attrs:{type:"textarea",maxlength:"2048",rows:"10"},model:{value:s.suspectBaseInfo,callback:function(t){e.$set(s,"suspectBaseInfo",t)},expression:"item.suspectBaseInfo"}})],1)],1)],1)],1)])})),e._v(" "),t("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.centerDialogVisible,width:"550px","close-on-click-modal":e.closeDialog,center:""},on:{"update:visible":function(s){e.centerDialogVisible=s}}},[t("div",{staticClass:"yofc-dialog-header",attrs:{slot:"title"},slot:"title"},[t("h1",[e._v("添加嫌疑人")])]),e._v(" "),t("p",[e._v("系统检测到有新的嫌疑人信息,如需导入请选择并点击确定按钮 "),t("a",{staticStyle:{float:"right"},attrs:{href:"javascript:void(0)",title:e.checkAll},on:{click:e.handleCheckAllChange}},[e._v("全选")])]),e._v(" "),t("div",e._l(e.checkSuspectInfoFromList,function(s,a){return t("span",{key:a,staticStyle:{display:"inline-block",width:"100px","margin-bottom":"20px"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.isChecked,expression:"item.isChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.isChecked)?e._i(s.isChecked,null)>-1:s.isChecked},on:{change:[function(t){var a=s.isChecked,c=t.target,i=!!c.checked;if(Array.isArray(a)){var o=e._i(a,null);c.checked?o<0&&e.$set(s,"isChecked",a.concat([null])):o>-1&&e.$set(s,"isChecked",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(s,"isChecked",i)},function(t){e.handleCheckedOneChange(s)}]}}),e._v(" "),t("em",{staticStyle:{"vertical-align":"middle","font-style":"normal"},attrs:{title:s.suspectName}},[e._v(e._s(s.suspectName))])])})),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},on:{click:function(s){e.canel()}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.confirm()}}},[e._v("确 定")])],1)]),e._v(" "),t("el-button",{staticClass:"addBtn",attrs:{type:"text"},on:{click:function(s){e.addTab(e.currentTabName)}}},[t("i",{staticClass:"iconfont",attrs:{title:"新增嫌疑人"}},[e._v("")])]),e._v(" "),t("div",{staticClass:"step-footer-wrap"},[t("el-button",{attrs:{size:"small"},on:{click:function(s){e.onSubmit()}}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.next()}}},[e._v("下一步")])],1)],1)},staticRenderFns:[]};var u=t("C7Lr")(n,r,!1,function(e){t("NZ1b")},null,null);s.default=u.exports},p00s:function(e,s,t){e.exports={default:t("ZZZ8"),__esModule:!0}}});
//# sourceMappingURL=4.467e175d02a2c85c6df3.js.map