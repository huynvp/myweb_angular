(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/nV1":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),a=t("mrSG"),u=t("U3xU"),r=t("yfIo"),s=t("AytR");class o extends r.a{constructor(l,n,t,e){super(l,n),this.router=l,this.http=n,this.user=t,this.spinner=e,this.checkStatus=0,this.loadTable=!0}ngOnInit(){const l=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return a.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.ngOnInit.call(this);case 2:this.DrawDataTable();case 3:case"end":return n.stop()}}),n,this)})))}DrawDataTable(){const l=this;this.dataTable=$("#data_table_log").DataTable({processing:!0,serverSide:!0,searching:!0,paging:!0,order:[],ajax:{url:s.a.baseUrl+"/projectLogs",headers:{Authorization:"Bearer ".concat(localStorage.access_token)}},drawCallback:function(){$("#data_table_log").addClass("table"),$("#data_table_log").addClass("table-bordered"),$("#data_table_log").addClass("table-hover"),$("#data_table_log").addClass("table-striped"),$("#data_table_log").children("thead").addClass("bg-info text-white"),l.loadTable&&($("#data_table_log").on("click",".delete",(function(){l.deleteProject($(this).data("id"))})),$("#data_table_log").on("click",".detail",(function(){l.router.navigate(["/admin/logDebug/detail",$(this).data("id")])}))),l.loadTable=!1},columns:[{data:"key",name:"key",title:"ID"},{data:"name",name:"name",title:"Name"},{data:"status",name:"status",title:"Status"},{data:"enable",name:"enable",title:"Enable"},{data:"createdAt",name:"created_at",title:"Created At"},{title:"Select"}],columnDefs:[{targets:2,render:function(l){return 1==l?'<button class="btn btn-sm btn-success">Active</button>':'<button class="btn btn-sm btn-danger">Deactive</button>'}},{targets:4,render:function(l){return new Date(l).toLocaleDateString("en-GB")+" "+new Date(l).toLocaleTimeString("en-GB")}},{targets:5,render:function(l,n,t){return'<div class="dropdown">\n              <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                Action\n              </button>\n              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n                <span class="dropdown-item delete" data-id="'.concat(t.key,'">Delete</span>\n                <span class="dropdown-item detail" data-id="').concat(t.key,'">View Log</span>\n              </div>\n            </div>')}}]})}resetData(){this.txtAddName=""}changeStatus(){this.checkStatus=0==this.checkStatus?1:0,console.log(this.checkStatus)}addProject(){return a.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return this.spinner.show(),n={Name:this.txtAddName,Status:this.checkStatus},l.next=4,this.user.addNewProject(n).then(l=>{$.notify({message:l.message},{type:"success"})}).catch(l=>{$.notify({message:l.error.message},{type:"danger"})});case 4:this.dataTable.ajax.reload(null,!1),this.spinner.hide(),this.resetData();case 7:case"end":return l.stop()}}),l,this)})))}deleteProject(l){return a.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.spinner.show(),n.next=3,this.user.deleteProject(l).then(l=>{$.notify({message:l.message},{type:"success"})}).catch(l=>{$.notify({message:l.error.message},{type:"danger"})});case 3:this.dataTable.ajax.reload(null,!1),this.spinner.hide();case 5:case"end":return n.stop()}}),n,this)})))}}var i=t("PSD3"),c=t.n(i);class d extends r.a{constructor(l,n,t,e,a,u){super(l,n),this.router=l,this.http=n,this.user=t,this.activatedRoute=e,this.location=a,this.spinner=u,this.checkStatus=0,this.loadTable=!0,this.id_arr=[]}ngOnInit(){const l=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return a.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.ngOnInit.call(this);case 2:this.activatedRoute.params.subscribe(l=>{this.id=l.id}),this.DrawDataTable();case 4:case"end":return n.stop()}}),n,this)})))}refreshTable(){this.dataTable.ajax.reload(null,!1)}DrawDataTable(){const l=this;this.dataTable=$("#data_table_log").DataTable({processing:!0,serverSide:!0,searching:!0,paging:!0,order:[],ajax:{url:s.a.baseUrl+"/projectLogs/"+this.id+"/logs",headers:{Authorization:"Bearer ".concat(localStorage.access_token)}},drawCallback:function(){$("#data_table_log").addClass("table"),$("#data_table_log").addClass("table-bordered"),$("#data_table_log").addClass("table-hover"),$("#data_table_log").addClass("table-striped"),$("#data_table_log").children("thead").addClass("bg-info text-white"),l.loadTable&&($("#data_table_log").on("click",".check",(function(){l.id_arr=[];const n=$(".check");n.length>0&&n.map((n,t)=>{1==t.checked&&l.id_arr.push(t.value)})})),$("#data_table_log").on("click","#checkAll",(function(){l.id_arr=[];const n=$(".check");0!=$("#checkAll")[0].checked?n.length>0&&n.map((n,t)=>{t.checked=!0,l.id_arr.push(t.value)}):n.length>0&&n.map((l,n)=>{n.checked=!1})}))),l.loadTable=!1},columns:[{data:"content",name:"content",title:"Content"},{data:"type",name:"type",title:"Type"},{data:"createdAt",name:"created_at",title:"Created At"},{title:'<input type="checkbox" id="checkAll" value="${row.id}">'}],columnDefs:[{targets:2,render:function(l){return new Date(l).toLocaleDateString("en-GB")+" "+new Date(l).toLocaleTimeString("en-GB")}},{targets:3,orderable:!1,render:function(l,n,t){return'<input type="checkbox" class="check" value="'.concat(t.id,'">')}}]})}deleteMuity(){c.a.fire({title:"Are you sure delete log checked?",text:"You won't be able to revert this!",showCancelButton:!0}).then(l=>a.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=l.value,!n.t0){n.next=8;break}return this.spinner.show(),$("#checkAll")[0].checked=!1,n.next=6,this.user.deleteLogs(this.id,this.id_arr).then(l=>{$.notify({message:l.message},{type:"success"})}).catch(l=>{$.notify({message:l.error.message},{type:"danger"})});case 6:this.dataTable.ajax.reload(null,!1),this.spinner.hide();case 8:case"end":return n.stop()}}),n,this)}))))}goBack(){this.location.back()}}class b{}var g=t("pMnS"),h=t("s7LF"),p=t("IheW"),m=t("iInd"),f=t("7g+E"),v=e.pb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{margin-top:1%}.btn-actived[_ngcontent-%COMP%]{background:gray;color:#ddd}"]],data:{}});function k(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Log debug"])),(l()(),e.rb(2,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["data-target","#modalAddProject"],["data-toggle","modal"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.resetData()&&e),e}),null,null)),(l()(),e.Kb(-1,null,[" Add new project\n"])),(l()(),e.rb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,1,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e.rb(7,0,null,null,0,"table",[["id","data_table_log"]],null,null,null,null,null)),(l()(),e.rb(8,0,null,null,34,"div",[["class","modal fade"],["id","modalAddProject"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,33,"div",[["class","modal-dialog"]],null,null,null,null,null)),(l()(),e.rb(10,0,null,null,32,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),e.rb(11,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Add new project"])),(l()(),e.rb(14,0,null,null,1,"button",[["class","close"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\xd7"])),(l()(),e.rb(16,0,null,null,21,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e.rb(17,0,null,null,20,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var a=!0;return"submit"===n&&(a=!1!==e.Db(l,19).onSubmit(t)&&a),"reset"===n&&(a=!1!==e.Db(l,19).onReset()&&a),a}),null,null)),e.qb(18,16384,null,0,h.z,[],null,null),e.qb(19,4210688,null,0,h.n,[[8,null],[8,null]],null,null),e.Hb(2048,null,h.c,null,[h.n]),e.qb(21,16384,null,0,h.m,[[4,h.c]],null,null),(l()(),e.rb(22,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(23,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Name"])),(l()(),e.rb(25,0,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var a=!0,u=l.component;return"input"===n&&(a=!1!==e.Db(l,26)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Db(l,26).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Db(l,26)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Db(l,26)._compositionEnd(t.target.value)&&a),"ngModelChange"===n&&(a=!1!==(u.txtAddName=t)&&a),a}),null,null)),e.qb(26,16384,null,0,h.d,[e.C,e.k,[2,h.a]],null,null),e.Hb(1024,null,h.j,(function(l){return[l]}),[h.d]),e.qb(28,671744,null,0,h.o,[[2,h.c],[8,null],[8,null],[6,h.j]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),e.Fb(29,{standalone:0}),e.Hb(2048,null,h.k,null,[h.o]),e.qb(31,16384,null,0,h.l,[[4,h.k]],null,null),(l()(),e.rb(32,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(33,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Status"])),(l()(),e.rb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(36,0,null,null,0,"input",[["type","checkbox"]],null,[[null,"change"]],(function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.changeStatus()&&e),e}),null,null)),(l()(),e.Kb(-1,null,[" Active "])),(l()(),e.rb(38,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e.rb(39,0,null,null,1,"button",[["class","btn btn-success"],["data-dismiss","modal"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addProject()&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Add"])),(l()(),e.rb(41,0,null,null,1,"button",[["class","btn btn-danger"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Cancel"]))],(function(l,n){var t=n.component.txtAddName,e=l(n,29,0,!0);l(n,28,0,t,e)}),(function(l,n){l(n,17,0,e.Db(n,21).ngClassUntouched,e.Db(n,21).ngClassTouched,e.Db(n,21).ngClassPristine,e.Db(n,21).ngClassDirty,e.Db(n,21).ngClassValid,e.Db(n,21).ngClassInvalid,e.Db(n,21).ngClassPending),l(n,25,0,e.Db(n,31).ngClassUntouched,e.Db(n,31).ngClassTouched,e.Db(n,31).ngClassPristine,e.Db(n,31).ngClassDirty,e.Db(n,31).ngClassValid,e.Db(n,31).ngClassInvalid,e.Db(n,31).ngClassPending)}))}var _=e.nb("log-debug-user-admin",o,(function(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,2,"log-debug-user-admin",[],null,null,null,k,v)),e.Hb(512,null,u.a,u.a,[p.c]),e.qb(2,245760,null,0,o,[m.k,p.c,u.a,f.c],null,null)],(function(l,n){l(n,2,0)}),null)}),{},{},[]),w=t("SVse"),D=e.pb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{margin-top:1%}.btn-actived[_ngcontent-%COMP%]{background:gray;color:#ddd}.btn[_ngcontent-%COMP%]{margin:1%}"]],data:{}});function y(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Log debug detail"])),(l()(),e.rb(2,0,null,null,2,"button",[["class","btn btn-sm btn-warning"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goBack()&&e),e}),null,null)),(l()(),e.rb(3,0,null,null,0,"i",[["class","fas fa-chevron-circle-left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Go Back\n"])),(l()(),e.rb(5,0,null,null,2,"button",[["class","btn btn-sm btn-primary"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.refreshTable()&&e),e}),null,null)),(l()(),e.rb(6,0,null,null,0,"i",[["class","fas fa-sync-alt"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Refresh Data\n"])),(l()(),e.rb(8,0,null,null,2,"button",[["class","btn btn-sm btn-danger"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.deleteMuity()&&e),e}),null,null)),(l()(),e.rb(9,0,null,null,0,"i",[["class","fas fa-trash-alt"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Delete Muilty\n"])),(l()(),e.rb(11,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,1,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,0,"table",[["id","data_table_log"]],null,null,null,null,null))],null,null)}var C=e.nb("log-detail-user-admin",d,(function(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,2,"log-detail-user-admin",[],null,null,null,y,D)),e.Hb(512,null,u.a,u.a,[p.c]),e.qb(2,245760,null,0,d,[m.k,p.c,u.a,m.a,w.g,f.c],null,null)],(function(l,n){l(n,2,0)}),null)}),{},{},[]),x=t("PjcS"),A=t("Q6Ar"),B=t("axVG");t.d(n,"LogDebugUserAdminModuleNgFactory",(function(){return S}));var S=e.ob(b,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[g.a,_,C]],[3,e.j],e.v]),e.Bb(4608,w.m,w.l,[e.s,[2,w.B]]),e.Bb(4608,h.x,h.x,[]),e.Bb(4608,h.f,h.f,[]),e.Bb(1073742336,m.o,m.o,[[2,m.t],[2,m.k]]),e.Bb(1073742336,w.b,w.b,[]),e.Bb(1073742336,h.w,h.w,[]),e.Bb(1073742336,h.h,h.h,[]),e.Bb(1073742336,x.b,x.b,[]),e.Bb(1073742336,h.s,h.s,[]),e.Bb(1073742336,A.b,A.b,[]),e.Bb(1073742336,B.a,B.a,[]),e.Bb(1073742336,b,b,[]),e.Bb(1024,m.i,(function(){return[[{path:"",component:o},{path:"detail/:id",component:d}]]}),[])])}))}}]);