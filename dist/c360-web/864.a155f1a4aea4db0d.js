"use strict";(self.webpackChunkc360_web=self.webpackChunkc360_web||[]).push([[864],{1864:(g,l,o)=>{o.r(l),o.d(l,{AccountBalanceModule:()=>h});var s=o(6895),t=o(4650),u=o(5159);function r(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const c=e.$implicit;t.xp6(2),t.Oqu(c.id),t.xp6(2),t.Oqu(c.balance)}}let d=(()=>{class n{constructor(c){this.accountService=c}ngOnInit(){this.rows=[];let c=localStorage.getItem("user");null!=c&&(c=JSON.parse(c).id),console.log(c),this.accountService.getAccountDetails(c).subscribe(a=>{this.rows=a,console.log(this.rows)})}}return n.\u0275fac=function(c){return new(c||n)(t.Y36(u.B))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-account-balance"]],decls:15,vars:1,consts:[[1,"backdrop"],[1,""],[1,"col-md-12"],[1,"tile"],[1,"card-body"],[1,"table","table-bordered","table-striped",2,"width","100%"],[1,"thead-dark"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(c,a){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Balance Details"),t.qZA(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),t._uU(10,"Account "),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Balance"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,r,5,2,"tr",8),t.qZA()()()()()()),2&c&&(t.xp6(14),t.Q6J("ngForOf",a.rows))},dependencies:[s.sg]}),n})();var i=o(529),p=o(9636),m=o(2143);const A=[{path:"",component:d}];let h=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,m.p0,i.JF,p.Bz.forChild(A)]}),n})()}}]);