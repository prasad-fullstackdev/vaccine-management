(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{reqa:function(t,e,i){"use strict";i.r(e),i.d(e,"ReportsModule",(function(){return vt}));var o=i("M0ag"),n=i("mrSG"),c=i("84Y0"),r=i("wgH9"),a=i("Ujtm"),s=i("wbvY"),l=i("hJeS"),b=i("fXoL"),d=i("+803"),u=i("ofXK"),h=i("XiUz"),p=i("kmnG"),g=i("d3UM"),f=i("3Pt+"),C=i("FKr1"),v=i("qFsG"),m=i("bTqV"),V=i("lDv4"),L=i("Wp6s"),R=i("jaxi"),U=i("NFeN"),q=i("Qu3c");function x(t,e){1&t&&b.Qb(0,"app-loader")}function k(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.districtId),b.Cb(1),b.Sc(" ",t.districtName," ")}}function S(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.talukaId),b.Cb(1),b.Sc(" ",t.talukaName," ")}}function O(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.vaccineCenterId),b.Cb(1),b.Sc(" ",t.vaccineCenterName," ")}}function w(t,e){if(1&t){const t=b.Wb();b.Tb(0),b.Vb(1,"mat-icon",19),b.dc("click",(function(){return b.Dc(t),b.hc(2).onDownload()})),b.Qc(2," download "),b.Ub(),b.Sb()}}function I(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"th"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(1),b.Db("colspan",t.ageGroupList.length+1),b.Cb(1),b.Sc(" ",t.vaccineName," ")}}function y(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"th"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.ageGroupName," ")}}function M(t,e){if(1&t&&(b.Tb(0),b.Oc(1,y,3,1,"ng-container",23),b.Vb(2,"th"),b.Qc(3,"Total"),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(1),b.qc("ngForOf",t.ageGroupList)}}function D(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"td"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.secondDoseRequiredAllTotal," ")}}function Q(t,e){if(1&t&&(b.Tb(0),b.Oc(1,D,3,1,"ng-container",23),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(1),b.qc("ngForOf",t.ageGroupList),b.Cb(2),b.Rc(t.allTotal)}}function P(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"td"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.secondDoseRequired," ")}}function F(t,e){if(1&t&&(b.Tb(0),b.Oc(1,P,3,1,"ng-container",23),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(1),b.qc("ngForOf",t.ageGroupList),b.Cb(2),b.Rc(t.totalSecondDoseRequired)}}function T(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"tr"),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Oc(4,F,4,2,"ng-container",23),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(3),b.Rc(t.reportDate),b.Cb(1),b.qc("ngForOf",t.vaccineCompanyList)}}function j(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"td"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.secondDoseRequiredAllTotal," ")}}function _(t,e){if(1&t&&(b.Tb(0),b.Oc(1,j,3,1,"ng-container",23),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(1),b.qc("ngForOf",t.ageGroupList),b.Cb(2),b.Rc(t.allTotal)}}function N(t,e){if(1&t&&(b.Vb(0,"tbody"),b.Vb(1,"tr"),b.Vb(2,"th",22),b.Qc(3,"Date"),b.Ub(),b.Oc(4,I,3,2,"ng-container",23),b.Ub(),b.Vb(5,"tr"),b.Oc(6,M,4,1,"ng-container",23),b.Ub(),b.Vb(7,"tr",24),b.Vb(8,"td"),b.Qc(9),b.Ub(),b.Oc(10,Q,4,2,"ng-container",23),b.Ub(),b.Oc(11,T,5,2,"ng-container",23),b.Vb(12,"tr",24),b.Vb(13,"td"),b.Qc(14),b.Ub(),b.Oc(15,_,4,2,"ng-container",23),b.Ub(),b.Ub()),2&t){const t=b.hc(3);b.Cb(4),b.qc("ngForOf",t.firstProjectionRecord.vaccineCompanyList),b.Cb(2),b.qc("ngForOf",t.firstProjectionRecord.vaccineCompanyList),b.Cb(3),b.Rc(t.totalRecord.reportDate),b.Cb(1),b.qc("ngForOf",t.totalRecord.vaccineCompanyList),b.Cb(1),b.qc("ngForOf",t.requiredVialDayWise),b.Cb(3),b.Rc(t.totalRecord.reportDate),b.Cb(1),b.qc("ngForOf",t.totalRecord.vaccineCompanyList)}}function G(t,e){if(1&t&&(b.Vb(0,"div",20),b.Vb(1,"table",21),b.Vb(2,"caption"),b.Qc(3,"Day Wise Monthly Projection Report"),b.Ub(),b.Oc(4,N,16,7,"tbody",0),b.Ub(),b.Ub()),2&t){const t=b.hc(2);b.Cb(4),b.qc("ngIf",t.firstProjectionRecord)}}function $(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"th"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.ageGroupName," ")}}function A(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"td"),b.Qc(2),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(" ",t.secondDoseRequiredAllTotal," ")}}function W(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"tr"),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Oc(4,A,3,1,"ng-container",23),b.Vb(5,"td"),b.Qc(6),b.Ub(),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(3),b.Sc(" ",t.vaccineName," "),b.Cb(1),b.qc("ngForOf",t.ageGroupList),b.Cb(2),b.Sc(" ",t.allTotal," ")}}function E(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"tr"),b.Oc(2,$,3,1,"ng-container",23),b.Vb(3,"th"),b.Qc(4,"Total"),b.Ub(),b.Ub(),b.Oc(5,W,7,3,"ng-container",23),b.Sb()),2&t){const t=b.hc(3);b.Cb(2),b.qc("ngForOf",t.totalRecord.vaccineCompanyList[0].ageGroupList),b.Cb(3),b.qc("ngForOf",t.totalRecord.vaccineCompanyList)}}function J(t,e){if(1&t&&(b.Vb(0,"div",20),b.Vb(1,"table",25),b.Vb(2,"caption"),b.Qc(3,"Monthly Projection Report"),b.Ub(),b.Vb(4,"tr"),b.Vb(5,"th",22),b.Qc(6,"Vaccine/AgeGroup"),b.Ub(),b.Ub(),b.Oc(7,E,6,2,"ng-container",0),b.Ub(),b.Ub()),2&t){const t=b.hc(2);b.Cb(7),b.qc("ngIf",t.totalRecord&&t.totalRecord.vaccineCompanyList.length>0)}}function z(t,e){if(1&t){const t=b.Wb();b.Vb(0,"div",2),b.Vb(1,"mat-card",12),b.Vb(2,"mat-card-subtitle"),b.Qc(3,"Project Report"),b.Ub(),b.Vb(4,"div",13),b.Vb(5,"mat-button-toggle-group",14),b.dc("ngModelChange",(function(e){return b.Dc(t),b.hc().projectionReportView=e})),b.Vb(6,"mat-button-toggle",15),b.dc("change",(function(e){return b.Dc(t),b.hc().onViewChange(e.value)})),b.Vb(7,"mat-icon"),b.Qc(8,"calendar_today"),b.Ub(),b.Vb(9,"span",16),b.Qc(10,"Monthly"),b.Ub(),b.Ub(),b.Vb(11,"mat-button-toggle",17),b.dc("change",(function(e){return b.Dc(t),b.hc().onViewChange(e.value)})),b.Vb(12,"mat-icon"),b.Qc(13,"calendar_view_day"),b.Ub(),b.Vb(14,"span",16),b.Qc(15,"Day Wise"),b.Ub(),b.Ub(),b.Ub(),b.Oc(16,w,3,0,"ng-container",0),b.Ub(),b.Oc(17,G,5,1,"div",18),b.Oc(18,J,8,1,"div",18),b.Ub(),b.Ub()}if(2&t){const t=b.hc();b.Cb(5),b.qc("ngModel",t.projectionReportView),b.Cb(11),b.qc("ngIf",t.projectionReportView==t.monthView),b.Cb(1),b.qc("ngIf",t.projectionReportView==t.dayView),b.Cb(1),b.qc("ngIf",t.projectionReportView==t.monthView)}}let X=(()=>{class t{constructor(t,e,i,o){this.reportService=t,this.lookupService=e,this.authService=i,this.sharedService=o,this.monthView="MonthView",this.dayView="DayView",this.projectionReportView=this.monthView,this.districtList=[],this.talukaList=[],this.vaccineCenterList=[],this.districtId=0,this.talukaId=0,this.vaccineCenterId=0,this.projectionDate="",this.requestReport=new l.d,this.requiredVialDayWise=[],this.requiredVialMonthWise=[],this.firstProjectionRecord=null,this.totalRecord=null,this.isShowLoader=!1}ngOnInit(){this.getDistrictList(!1),this.requestReport=new l.d,this.requestReport.districtId=this.authService.loggedInUser.districtId,this.requestReport.talukaId=this.authService.loggedInUser.talukaId,this.requestReport.vaccineCenterId=this.authService.loggedInUser.vaccineCenterId;const t=new Date,e=t.getFullYear(),i=t.getMonth()+1+1;this.requestReport.vaccinationDate=e+"-"+(i+"").padStart(2,"0"),this.getProjectionReport(),this.loadLookups()}onViewChange(t){console.log(t)}loadLookups(){return Object(n.a)(this,void 0,void 0,(function*(){this.requestReport.districtId>0&&(yield this.getTalukaList(this.requestReport.districtId,!1)),this.requestReport.talukaId>0&&(yield this.getVaccineCenterListList(this.requestReport.talukaId))}))}getProjectionReport(){const t=JSON.parse(JSON.stringify(this.requestReport));t.vaccinationDate=this.sharedService.formatDate(new Date(t.vaccinationDate)),this.isShowLoader=!0,this.reportService.getProjectionReport(t).subscribe(t=>{this.isShowLoader=!1,console.log("projectionReportResponse",t),this.requiredVialDayWise=t.requiredVialDayWise,this.firstProjectionRecord=t.requiredVialDayWise[0];const e=new l.h;e.reportDate="Total",e.vaccineCompanyList=[],this.firstProjectionRecord.vaccineCompanyList.forEach(t=>{t.ageGroupList.forEach((t,e)=>{t.secondDoseRequiredAllTotal=0,t.approxRequiredVialsAllTotal=0}),t.allTotal=0,e.vaccineCompanyList.push(t)}),this.requiredVialDayWise.forEach(t=>{t.vaccineCompanyList.forEach((t,i)=>{t.totalSecondDoseRequired=0,t.totalApproxRequiredVials=0,t.ageGroupList.forEach((o,n)=>{t.totalSecondDoseRequired+=o.secondDoseRequired,t.totalApproxRequiredVials+=o.approxRequiredVials,e.vaccineCompanyList[i].ageGroupList[n].secondDoseRequiredAllTotal+=o.secondDoseRequired,e.vaccineCompanyList[i].ageGroupList[n].approxRequiredVialsAllTotal+=o.approxRequiredVials,e.vaccineCompanyList[i].allTotal+=o.secondDoseRequired})})}),this.totalRecord=e,console.log("totalRecord",this.totalRecord),console.log("requiredVialDayWise",this.requiredVialDayWise)},t=>{this.isShowLoader=!1,console.error("error",t)})}onViewProjection(){this.getProjectionReport()}onDistrictChange(t){console.log("onDistrictChange",t),this.getTalukaList(t)}onTalukaChange(t){console.log("onTalukaChange",t),this.getVaccineCenterListList(t)}onVaccineCenterChange(t){console.log("onVaccineCenterChange",t)}getDistrictList(t=!0){this.lookupService.getDistrictList().subscribe(e=>{console.log("districtList",e),this.districtList=e,t&&(this.talukaList=[],this.vaccineCenterList=[])},t=>{console.error("error",t)})}getTalukaList(t,e=!0){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getTalukaList(t).subscribe(t=>{console.log("talukaList",t),this.talukaList=t,e&&(this.vaccineCenterList=[])},t=>{console.error("error",t)})}))}getVaccineCenterListList(t){this.lookupService.getVaccineCenterList(t).subscribe(t=>{console.log("vaccineCenterList",t),this.vaccineCenterList=t},t=>{console.error("error",t)})}onDownload(){this.sharedService.printToPdf("#tbl-month-wise-report","MonthlyProjectionReport.pdf")}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(a.a),b.Pb(r.a),b.Pb(c.a),b.Pb(s.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-projection-report"]],decls:38,vars:9,consts:[[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","100",1,"matero-col"],["fxLayout","row","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["fxFlex","20","fxFlex.lt-sm","100"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","month","placeholder","Vaccination Date",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"],["class","matero-col","fxFlex","100","fxFlex.gt-sm","100",4,"ngIf"],[3,"value"],[1,"height-100"],["id","dashboardview-toggler-container","fxLayout","row wrap",1,"matero-row"],["name","ProjectionReportView","aria-label","Projection Report View",3,"ngModel","ngModelChange"],["value","MonthView","aria-label","Grid View",3,"change"],[1,"m-l-8"],["value","DayView","aria-label","Chart View",3,"change"],["class","matero-row m-t-20","fxLayout","row wrap",4,"ngIf"],["matTooltip","Download Monthly Projection Report",1,"download-icon",3,"click"],["fxLayout","row wrap",1,"matero-row","m-t-20"],["id","tbl-day-wise-report"],["rowspan","2"],[4,"ngFor","ngForOf"],[1,"total-row"],["id","tbl-month-wise-report"]],template:function(t,e){1&t&&(b.Qb(0,"breadcrumb"),b.Oc(1,x,1,0,"app-loader",0),b.Vb(2,"div",1),b.Vb(3,"div",2),b.Vb(4,"div",3),b.Vb(5,"div",4),b.Vb(6,"div",5),b.Vb(7,"mat-form-field"),b.Vb(8,"mat-label"),b.Qc(9,"Select District"),b.Ub(),b.Vb(10,"mat-select",6),b.dc("selectionChange",(function(t){return e.onDistrictChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.districtId=t})),b.Oc(11,k,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(12,"div",5),b.Vb(13,"mat-form-field"),b.Vb(14,"mat-label"),b.Qc(15,"Select Taluka"),b.Ub(),b.Vb(16,"mat-select",6),b.dc("selectionChange",(function(t){return e.onTalukaChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.talukaId=t})),b.Vb(17,"mat-option"),b.Qc(18,"-- None --"),b.Ub(),b.Oc(19,S,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(20,"div",5),b.Vb(21,"mat-form-field"),b.Vb(22,"mat-label"),b.Qc(23,"Select Vaccine Center"),b.Ub(),b.Vb(24,"mat-select",6),b.dc("selectionChange",(function(t){return e.onVaccineCenterChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.vaccineCenterId=t})),b.Vb(25,"mat-option"),b.Qc(26,"-- None --"),b.Ub(),b.Oc(27,O,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(28,"div",5),b.Vb(29,"mat-form-field"),b.Vb(30,"mat-label"),b.Qc(31,"Vaccination Date"),b.Ub(),b.Vb(32,"input",8),b.dc("ngModelChange",(function(t){return e.requestReport.vaccinationDate=t})),b.Ub(),b.Ub(),b.Ub(),b.Vb(33,"div",5),b.Vb(34,"button",9),b.dc("click",(function(){return e.onViewProjection()})),b.Qc(35," View Projection "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(36,"div",1),b.Oc(37,z,19,4,"div",10),b.Ub()),2&t&&(b.Cb(1),b.qc("ngIf",e.isShowLoader),b.Cb(9),b.qc("ngModel",e.requestReport.districtId),b.Cb(1),b.qc("ngForOf",e.districtList),b.Cb(5),b.qc("ngModel",e.requestReport.talukaId),b.Cb(3),b.qc("ngForOf",e.talukaList),b.Cb(5),b.qc("ngModel",e.requestReport.vaccineCenterId),b.Cb(3),b.qc("ngForOf",e.vaccineCenterList),b.Cb(5),b.qc("ngModel",e.requestReport.vaccinationDate),b.Cb(5),b.qc("ngIf",e.requiredVialDayWise.length>0))},directives:[d.a,u.t,h.f,h.e,h.b,h.g,p.c,p.g,g.a,f.v,f.y,u.s,C.o,v.b,f.e,m.b,V.a,L.a,L.l,R.b,R.a,U.a,q.a],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin-right:8px;margin-top:8px}.height-100[_ngcontent-%COMP%]{height:100%}table[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}caption[_ngcontent-%COMP%]{font-weight:700;font-size:18px;text-align:left}caption[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;background-color:#04aa6d;color:#fff;text-align:center}.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:center;font-weight:700;background-color:#00bcd4}#dashboardview-toggler-container[_ngcontent-%COMP%]{display:flex;position:absolute;justify-content:center;align-items:center;margin:auto;top:0;left:0;right:0}.m-t-20[_ngcontent-%COMP%]{margin-top:20px!important}.download-icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:15px;right:15px;color:#3f51b5}"]}),t})();var H=i("tyNb");function Y(t,e){1&t&&b.Qb(0,"app-loader")}function B(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.districtId),b.Cb(1),b.Sc(" ",t.districtName," ")}}function K(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.talukaId),b.Cb(1),b.Sc(" ",t.talukaName," ")}}function Z(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.vaccineCenterId),b.Cb(1),b.Sc(" ",t.vaccineCenterName," ")}}let tt=(()=>{class t{constructor(t,e,i,o){this.reportService=t,this.lookupService=e,this.authService=i,this.ngZone=o,this.chart1=null,this.chart2=null,this.isShowLoader=!1,this.districtList=[],this.talukaList=[],this.vaccineCenterList=[],this.requestReport=new l.d,this.vaccinationReportResponse=new l.i}ngOnInit(){this.getDistrictList(!1),this.requestReport=new l.d,this.requestReport.districtId=this.authService.loggedInUser.districtId,this.requestReport.talukaId=this.authService.loggedInUser.talukaId,this.requestReport.vaccineCenterId=this.authService.loggedInUser.vaccineCenterId,this.requestReport.vaccinationDate=null,this.getVaccinationReport(),this.loadLookups()}loadLookups(){return Object(n.a)(this,void 0,void 0,(function*(){this.requestReport.districtId>0&&(yield this.getTalukaList(this.requestReport.districtId,!1)),this.requestReport.talukaId>0&&(yield this.getVaccineCenterListList(this.requestReport.talukaId))}))}ngAfterViewInit(){return Object(n.a)(this,void 0,void 0,(function*(){}))}getVaccinationReport(){this.isShowLoader=!0,this.reportService.getVaccinationReport(this.requestReport).subscribe(t=>{this.isShowLoader=!1,this.vaccinationReportResponse=t,console.log("vaccinationReportResponse",this.vaccinationReportResponse);const e=this.reportService.vaccinationChartOptions;e.series=[],e.xaxis.categories=[];const i={},o={};this.vaccinationReportResponse.vaccineViseSummary.forEach(t=>{null==i[t.vaccineName]&&(i[t.vaccineName]=[]),i[t.vaccineName].push(t.firstDose),i[t.vaccineName].push(t.secondDose),o[t.ageGroupId]=t.ageGroupName}),Object.keys(i).forEach(t=>{e.series.push({name:t,data:i[t]})}),Object.keys(o).forEach(t=>{e.xaxis.categories.push(o[t]+" First Dose"),e.xaxis.categories.push(o[t]+" Second Dose")}),this.chart2=new ApexCharts(document.querySelector("#chart2"),e),this.chart2.render()},t=>{this.isShowLoader=!1,console.error("error",t)})}onDistrictChange(t){console.log("onDistrictChange",t),this.requestReport.talukaId=0,this.requestReport.vaccineCenterId=0,this.getTalukaList(t)}onTalukaChange(t){console.log("onTalukaChange",t),this.requestReport.vaccineCenterId=0,this.getVaccineCenterListList(t)}onVaccineCenterChange(t){console.log("onVaccineCenterChange",t)}getDistrictList(t=!0){this.lookupService.getDistrictList().subscribe(e=>{console.log("districtList",e),this.districtList=e,t&&(this.talukaList=[],this.vaccineCenterList=[])},t=>{console.error("error",t)})}getTalukaList(t,e=!0){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getTalukaList(t).subscribe(t=>{console.log("talukaList",t),this.talukaList=t,e&&(this.vaccineCenterList=[])},t=>{console.error("error",t)})}))}getVaccineCenterListList(t){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getVaccineCenterList(t).subscribe(t=>{console.log("vaccineCenterList",t),this.vaccineCenterList=t},t=>{console.error("error",t)})}))}onReloadReport(){this.chart1&&this.chart1.destroy(),this.chart2&&this.chart2.destroy(),this.getVaccinationReport()}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(a.a),b.Pb(r.a),b.Pb(c.a),b.Pb(b.B))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-vaccination-report"]],decls:37,vars:8,consts:[[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","60",1,"matero-col"],["fxLayout","row","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["fxFlex","25","fxFlex.lt-sm","100"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"height-100"],["id","chart2"],[3,"value"]],template:function(t,e){1&t&&(b.Qb(0,"breadcrumb"),b.Oc(1,Y,1,0,"app-loader",0),b.Vb(2,"div",1),b.Vb(3,"div",2),b.Vb(4,"div",3),b.Vb(5,"div",4),b.Vb(6,"div",5),b.Vb(7,"mat-form-field"),b.Vb(8,"mat-label"),b.Qc(9,"Select District"),b.Ub(),b.Vb(10,"mat-select",6),b.dc("selectionChange",(function(t){return e.onDistrictChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.districtId=t})),b.Oc(11,B,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(12,"div",5),b.Vb(13,"mat-form-field"),b.Vb(14,"mat-label"),b.Qc(15,"Select Taluka"),b.Ub(),b.Vb(16,"mat-select",6),b.dc("selectionChange",(function(t){return e.onTalukaChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.talukaId=t})),b.Vb(17,"mat-option"),b.Qc(18,"-- None --"),b.Ub(),b.Oc(19,K,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(20,"div",5),b.Vb(21,"mat-form-field"),b.Vb(22,"mat-label"),b.Qc(23,"Select Vaccine Center"),b.Ub(),b.Vb(24,"mat-select",6),b.dc("selectionChange",(function(t){return e.onVaccineCenterChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.vaccineCenterId=t})),b.Vb(25,"mat-option"),b.Qc(26,"-- None --"),b.Ub(),b.Oc(27,Z,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(28,"div",5),b.Vb(29,"button",8),b.dc("click",(function(){return e.onReloadReport()})),b.Qc(30," Reload Report "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(31,"div",1),b.Vb(32,"div",2),b.Vb(33,"mat-card",9),b.Vb(34,"mat-card-subtitle"),b.Qc(35,"Vaccination Report"),b.Ub(),b.Qb(36,"div",10),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Cb(1),b.qc("ngIf",e.isShowLoader),b.Cb(9),b.qc("ngModel",e.requestReport.districtId),b.Cb(1),b.qc("ngForOf",e.districtList),b.Cb(5),b.qc("ngModel",e.requestReport.talukaId),b.Cb(3),b.qc("ngForOf",e.talukaList),b.Cb(5),b.qc("ngModel",e.requestReport.vaccineCenterId),b.Cb(3),b.qc("ngForOf",e.vaccineCenterList),b.Cb(2),b.qc("disabled",e.isShowLoader))},directives:[d.a,u.t,h.f,h.e,h.b,h.g,p.c,p.g,g.a,f.v,f.y,u.s,C.o,m.b,L.a,L.l,V.a],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin-right:8px;margin-top:8px}.height-100[_ngcontent-%COMP%]{height:100%}"]}),t})();function et(t,e){1&t&&b.Qb(0,"app-loader")}function it(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.districtId),b.Cb(1),b.Sc(" ",t.districtName," ")}}function ot(t,e){if(1&t&&(b.Vb(0,"mat-option",11),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.talukaId),b.Cb(1),b.Sc(" ",t.talukaName," ")}}function nt(t,e){if(1&t&&(b.Tb(0),b.Vb(1,"tr"),b.Vb(2,"td"),b.Qc(3),b.Ub(),b.Vb(4,"td"),b.Qc(5),b.Ub(),b.Vb(6,"td"),b.Qc(7),b.Ub(),b.Vb(8,"td"),b.Qc(9),b.Ub(),b.Ub(),b.Sb()),2&t){const t=e.$implicit;b.Cb(3),b.Sc(" ",t.districtName," "),b.Cb(2),b.Sc(" ",t.talukaName," "),b.Cb(2),b.Sc(" ",t.vaccineCenterName," "),b.Cb(2),b.Sc(" ",t.totalVaccinated," ")}}function ct(t,e){1&t&&(b.Vb(0,"tr"),b.Vb(1,"td",12),b.Qc(2,"No record found"),b.Ub(),b.Ub())}let rt=(()=>{class t{constructor(t,e,i,o){this.reportService=t,this.lookupService=e,this.authService=i,this.sharedService=o,this.isShowLoader=!1,this.districtList=[],this.talukaList=[],this.vaccineCenterList=[],this.districtId=0,this.talukaId=0,this.vaccineCenterId=0,this.projectionDate="",this.requestReport=new l.d,this.vaccineCenterDetailList=[]}ngOnInit(){this.getDistrictList(!1),this.requestReport=new l.d,this.requestReport.districtId=this.authService.loggedInUser.districtId,this.requestReport.talukaId=this.authService.loggedInUser.talukaId,this.getVaccineCenterReport(),this.loadLookups()}loadLookups(){return Object(n.a)(this,void 0,void 0,(function*(){this.requestReport.districtId>0&&(yield this.getTalukaList(this.requestReport.districtId,!1))}))}onDistrictChange(t){console.log("onDistrictChange",t),this.getTalukaList(t)}onTalukaChange(t){console.log("onTalukaChange",t),this.requestReport.talukaId=t,this.getVaccineCenterReport()}getDistrictList(t=!0){this.lookupService.getDistrictList().subscribe(e=>{console.log("districtList",e),this.districtList=e,t&&(this.talukaList=[],this.vaccineCenterList=[])},t=>{console.error("error",t)})}getTalukaList(t,e=!0){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getTalukaList(t).subscribe(t=>{console.log("talukaList",t),this.talukaList=t,e&&(this.vaccineCenterList=[])},t=>{console.error("error",t)})}))}getVaccineCenterReport(){this.isShowLoader=!0,this.reportService.getVaccineCenterReport(this.requestReport).subscribe(t=>{this.isShowLoader=!1,console.log("vaccineCenterReportResponse",t),this.vaccineCenterDetailList=t.vaccineCenterDetailList},t=>{this.isShowLoader=!1,console.error("error",t)})}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(a.a),b.Pb(r.a),b.Pb(c.a),b.Pb(s.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-vaccine-center-report"]],decls:38,vars:7,consts:[[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","100",1,"matero-col"],["fxLayout","row","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["fxFlex","20","fxFlex.lt-sm","100"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"height-100"],["id","tbl-vaccine-center-report"],[4,"ngFor","ngForOf"],[3,"value"],["colspan","4"]],template:function(t,e){1&t&&(b.Qb(0,"breadcrumb"),b.Oc(1,et,1,0,"app-loader",0),b.Vb(2,"div",1),b.Vb(3,"div",2),b.Vb(4,"div",3),b.Vb(5,"div",4),b.Vb(6,"div",5),b.Vb(7,"mat-form-field"),b.Vb(8,"mat-label"),b.Qc(9,"Select District"),b.Ub(),b.Vb(10,"mat-select",6),b.dc("selectionChange",(function(t){return e.onDistrictChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.districtId=t})),b.Oc(11,it,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(12,"div",5),b.Vb(13,"mat-form-field"),b.Vb(14,"mat-label"),b.Qc(15,"Select Taluka"),b.Ub(),b.Vb(16,"mat-select",6),b.dc("selectionChange",(function(t){return e.onTalukaChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.talukaId=t})),b.Vb(17,"mat-option"),b.Qc(18,"-- None --"),b.Ub(),b.Oc(19,ot,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Qb(20,"div",5),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(21,"div",1),b.Vb(22,"div",2),b.Vb(23,"mat-card",8),b.Vb(24,"table",9),b.Vb(25,"caption"),b.Qc(26,"Vaccine Center Report"),b.Ub(),b.Vb(27,"tr"),b.Vb(28,"th"),b.Qc(29,"District"),b.Ub(),b.Vb(30,"th"),b.Qc(31,"Taluka"),b.Ub(),b.Vb(32,"th"),b.Qc(33,"Center Name"),b.Ub(),b.Vb(34,"th"),b.Qc(35,"Total Vaccination"),b.Ub(),b.Ub(),b.Oc(36,nt,10,4,"ng-container",10),b.Oc(37,ct,3,0,"tr",0),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Cb(1),b.qc("ngIf",e.isShowLoader),b.Cb(9),b.qc("ngModel",e.requestReport.districtId),b.Cb(1),b.qc("ngForOf",e.districtList),b.Cb(5),b.qc("ngModel",e.requestReport.talukaId),b.Cb(3),b.qc("ngForOf",e.talukaList),b.Cb(17),b.qc("ngForOf",e.vaccineCenterDetailList),b.Cb(1),b.qc("ngIf",!e.isShowLoader&&0==e.vaccineCenterDetailList.length))},directives:[d.a,u.t,h.f,h.e,h.b,h.g,p.c,p.g,g.a,f.v,f.y,u.s,C.o,L.a,V.a],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin-right:8px;margin-top:8px}.height-100[_ngcontent-%COMP%]{height:100%}table[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:center;width:25%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}caption[_ngcontent-%COMP%]{font-weight:700;font-size:18px;text-align:left}caption[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;background-color:#04aa6d;color:#fff;text-align:center}.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:center;font-weight:700;background-color:#00bcd4}#dashboardview-toggler-container[_ngcontent-%COMP%]{display:flex;position:absolute;justify-content:center;align-items:center;margin:auto;top:0;left:0;right:0}.m-t-20[_ngcontent-%COMP%]{margin-top:20px!important}.download-icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:15px;right:15px;color:#3f51b5}"]}),t})();var at=i("tgey");function st(t,e){1&t&&b.Qb(0,"app-loader")}function lt(t,e){if(1&t&&(b.Vb(0,"mat-option",13),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.districtId),b.Cb(1),b.Sc(" ",t.districtName," ")}}function bt(t,e){if(1&t&&(b.Vb(0,"mat-option",13),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.talukaId),b.Cb(1),b.Sc(" ",t.talukaName," ")}}function dt(t,e){if(1&t&&(b.Vb(0,"mat-option",13),b.Qc(1),b.Ub()),2&t){const t=e.$implicit;b.qc("value",t.vaccineCenterId),b.Cb(1),b.Sc(" ",t.vaccineCenterName," ")}}let ut=(()=>{class t{constructor(t,e,i,o){this.reportService=t,this.lookupService=e,this.authService=i,this.ngZone=o,this.chart1=null,this.chart2=null,this.isShowLoader=!1,this.districtList=[],this.talukaList=[],this.vaccineCenterList=[],this.requestReport=new l.f,this.vialStockReportResponse=new ht}ngOnInit(){this.getDistrictList(!1),this.requestReport=new l.d,this.requestReport.districtId=this.authService.loggedInUser.districtId,this.requestReport.talukaId=this.authService.loggedInUser.talukaId,this.requestReport.vaccineCenterId=this.authService.loggedInUser.vaccineCenterId,this.requestReport.vaccinationDate=null,this.getVaccinationReport(),this.loadLookups()}loadLookups(){return Object(n.a)(this,void 0,void 0,(function*(){this.requestReport.districtId>0&&(yield this.getTalukaList(this.requestReport.districtId,!1)),this.requestReport.talukaId>0&&(yield this.getVaccineCenterListList(this.requestReport.talukaId))}))}ngAfterViewInit(){return Object(n.a)(this,void 0,void 0,(function*(){}))}getVaccinationReport(){this.isShowLoader=!0,this.reportService.getVialStockReport(this.requestReport).subscribe(t=>{this.isShowLoader=!1,console.log("vialStockReportResponse",t),this.vialStockReportResponse=t,this.vialStockReportResponse.vaccineViseSummary.forEach(t=>{t.remaining=t.received-(t.used+t.damage)}),gt.series=[],gt.xaxis.categories=[];const e={},i={};this.vialStockReportResponse.vaccineViseSummary.forEach(t=>{null==e[t.vaccineName]&&(e[t.vaccineName]=[]),e[t.vaccineName].push(t.used+t.damage),i[t.ageGroupId]=t.ageGroupName});const o=Object.keys(e),n=[];o.forEach(t=>{n.push({name:t,data:e[t]})}),Object.keys(i).forEach(t=>{gt.xaxis.categories.push(i[t])}),gt.series=n,console.log("categories",Object.keys(e)),console.log("seriesList",n),this.chart1=new ApexCharts(document.querySelector("#chart1"),gt),this.chart1.render();const c={};this.vialStockReportResponse.vaccineViseSummary.forEach(t=>{null==c[t.vaccineName]&&(c[t.vaccineName]=0),c[t.vaccineName]+=t.remaining}),pt.series=[],pt.xaxis.categories=[];const r={name:"Available",data:[]},a=Object.keys(c);a.forEach(t=>{r.data.push(c[t])}),pt.series.push(r),pt.xaxis.categories=a,this.chart2=new ApexCharts(document.querySelector("#chart2"),pt),this.chart2.render()},t=>{this.isShowLoader=!1,console.error("error",t)})}onDistrictChange(t){console.log("onDistrictChange",t),this.requestReport.talukaId=0,this.requestReport.vaccineCenterId=0,this.getTalukaList(t)}onTalukaChange(t){console.log("onTalukaChange",t),this.requestReport.vaccineCenterId=0,this.getVaccineCenterListList(t)}onVaccineCenterChange(t){console.log("onVaccineCenterChange",t)}getDistrictList(t=!0){this.lookupService.getDistrictList().subscribe(e=>{console.log("districtList",e),this.districtList=e,t&&(this.talukaList=[],this.vaccineCenterList=[])},t=>{console.error("error",t)})}getTalukaList(t,e=!0){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getTalukaList(t).subscribe(t=>{console.log("talukaList",t),this.talukaList=t,e&&(this.vaccineCenterList=[])},t=>{console.error("error",t)})}))}getVaccineCenterListList(t){return Object(n.a)(this,void 0,void 0,(function*(){this.lookupService.getVaccineCenterList(t).subscribe(t=>{console.log("vaccineCenterList",t),this.vaccineCenterList=t},t=>{console.error("error",t)})}))}onReloadReport(){this.chart1&&this.chart1.destroy(),this.chart2&&this.chart2.destroy(),this.getVaccinationReport()}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(a.a),b.Pb(r.a),b.Pb(c.a),b.Pb(b.B))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-vials-report"]],decls:42,vars:8,consts:[[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","center",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","60",1,"matero-col"],["fxLayout","row","fxLayoutGap","8px grid"],["fxFlex","100","fxFlex.lt-sm","100"],["fxFlex","25","fxFlex.lt-sm","100"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","click"],["fxFlex","100","fxFlex.gt-sm","50",1,"matero-col"],[1,"height-100"],["id","chart1"],["id","chart2"],[3,"value"]],template:function(t,e){1&t&&(b.Qb(0,"page-header"),b.Oc(1,st,1,0,"app-loader",0),b.Vb(2,"div",1),b.Vb(3,"div",2),b.Vb(4,"div",3),b.Vb(5,"div",4),b.Vb(6,"div",5),b.Vb(7,"mat-form-field"),b.Vb(8,"mat-label"),b.Qc(9,"Select District"),b.Ub(),b.Vb(10,"mat-select",6),b.dc("selectionChange",(function(t){return e.onDistrictChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.districtId=t})),b.Oc(11,lt,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(12,"div",5),b.Vb(13,"mat-form-field"),b.Vb(14,"mat-label"),b.Qc(15,"Select Taluka"),b.Ub(),b.Vb(16,"mat-select",6),b.dc("selectionChange",(function(t){return e.onTalukaChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.talukaId=t})),b.Vb(17,"mat-option"),b.Qc(18,"-- None --"),b.Ub(),b.Oc(19,bt,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(20,"div",5),b.Vb(21,"mat-form-field"),b.Vb(22,"mat-label"),b.Qc(23,"Select Vaccine Center"),b.Ub(),b.Vb(24,"mat-select",6),b.dc("selectionChange",(function(t){return e.onVaccineCenterChange(t.value)}))("ngModelChange",(function(t){return e.requestReport.vaccineCenterId=t})),b.Vb(25,"mat-option"),b.Qc(26,"-- None --"),b.Ub(),b.Oc(27,dt,2,2,"mat-option",7),b.Ub(),b.Ub(),b.Ub(),b.Vb(28,"div",5),b.Vb(29,"button",8),b.dc("click",(function(){return e.onReloadReport()})),b.Qc(30," Reload Report "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(31,"div",1),b.Vb(32,"div",9),b.Vb(33,"mat-card",10),b.Vb(34,"mat-card-subtitle"),b.Qc(35,"Vaccine Usage Report"),b.Ub(),b.Qb(36,"div",11),b.Ub(),b.Ub(),b.Vb(37,"div",9),b.Vb(38,"mat-card",10),b.Vb(39,"mat-card-subtitle"),b.Qc(40,"Vaccine Available Report"),b.Ub(),b.Qb(41,"div",12),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Cb(1),b.qc("ngIf",e.isShowLoader),b.Cb(9),b.qc("ngModel",e.requestReport.districtId),b.Cb(1),b.qc("ngForOf",e.districtList),b.Cb(5),b.qc("ngModel",e.requestReport.talukaId),b.Cb(3),b.qc("ngForOf",e.talukaList),b.Cb(5),b.qc("ngModel",e.requestReport.vaccineCenterId),b.Cb(3),b.qc("ngForOf",e.vaccineCenterList),b.Cb(2),b.qc("disabled",e.isShowLoader))},directives:[at.a,u.t,h.f,h.e,h.b,h.g,p.c,p.g,g.a,f.v,f.y,u.s,C.o,m.b,L.a,L.l,V.a],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin-right:8px;margin-top:8px}.height-100[_ngcontent-%COMP%]{height:100%}"]}),t})();class ht{}const pt={series:[],chart:{type:"bar",height:430},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},dataLabels:{enabled:!1,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},tooltip:{shared:!0,intersect:!1},xaxis:{categories:[]}},gt={series:[],chart:{type:"bar",height:430},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},dataLabels:{enabled:!1,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},tooltip:{shared:!0,intersect:!1},xaxis:{categories:[]}},ft=[{path:"vaccination-report",component:tt,data:{title:"Vaccination Report"}},{path:"vials-report",component:ut,data:{title:"Vials Report"}},{path:"projection-report",component:X,data:{title:"Projection Report"}},{path:"vaccine-center-report",component:rt,data:{title:"VaccineCenter Report"}},{path:"**",redirectTo:"vaccination-report"}];let Ct=(()=>{class t{}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(e){return new(e||t)},imports:[[H.j.forChild(ft)],H.j]}),t})(),vt=(()=>{class t{}return t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({factory:function(e){return new(e||t)},imports:[[o.b,Ct]]}),t})()}}]);