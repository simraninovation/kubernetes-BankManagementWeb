"use strict";(self.webpackChunkc360_web=self.webpackChunkc360_web||[]).push([[745],{1745:(Z,A,l)=>{l.r(A),l.d(A,{PayeeDetailsModule:()=>te});var g=l(6895),d=l(4006),e=l(4650),b=l(5529),D=l(3753),v=l(4080),E=l(2198),x=l(7625),R=l(2986),T=l(2687),u=l(8184);const f=["dialog"];function r(n,s){}class c{constructor(){this.animation=!0,this.backdrop=!0,this.ignoreBackdropClick=!1,this.keyboard=!0,this.modalClass="",this.containerClass="",this.data=null}}class h{constructor(s,t){this._overlayRef=s,this._container=t,this.onClose$=new b.xQ,this.onClose=this.onClose$.asObservable()}close(s){this._container._close(),setTimeout(()=>{this._container._restoreScrollbar(),this.onClose$.next(s),this.onClose$.complete(),this._overlayRef.detach(),this._overlayRef.dispose()},this._container.MODAL_TRANSITION)}}let _=(()=>{class n{constructor(t,i,o,a){this._document=t,this._elementRef=i,this._renderer=o,this._focusTrapFactory=a,this._destroy$=new b.xQ,this.backdropClick$=new b.xQ,this.BACKDROP_TRANSITION=150,this.MODAL_TRANSITION=200,this.modal=!0}get hasAnimation(){return this._config.animation}ngOnInit(){this._updateContainerClass(),this._renderer.setStyle(this._elementRef.nativeElement,"display","block"),this._previouslyFocusedElement=this._document.activeElement,this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._config.animation?setTimeout(()=>{this._renderer.addClass(this._elementRef.nativeElement,"show"),setTimeout(()=>{this._focusTrap.focusInitialElementWhenReady()},this.MODAL_TRANSITION)},this.BACKDROP_TRANSITION):this._focusTrap.focusInitialElementWhenReady()}ngAfterViewInit(){const t=this._document.body.offsetWidth;this._renderer.addClass(this._document.body,"modal-open"),this._renderer.setStyle(this._document.body,"padding-right",this._document.body.offsetWidth-t+"px"),this._config.ignoreBackdropClick||(0,D.R)(this._elementRef.nativeElement,"mousedown").pipe((0,E.h)(o=>{const a=o.target,m=this.modalDialog.nativeElement,C=a!==m,F=!m.contains(a);return C&&F}),(0,x.R)(this._destroy$)).subscribe(o=>{this.backdropClick$.next(o)})}ngOnDestroy(){this._previouslyFocusedElement.focus(),this._focusTrap.destroy(),this._destroy$.next(),this._destroy$.complete()}_updateContainerClass(){""===this._config.containerClass||this._config.containerClass.length&&0===this._config.containerClass.length||this._config.containerClass.split(" ").forEach(i=>{this._renderer.addClass(this._elementRef.nativeElement,i)})}_close(){this._config.animation&&this._renderer.removeClass(this._elementRef.nativeElement,"show");const t=Array.from(this._elementRef.nativeElement.querySelectorAll("iframe")),i=Array.from(this._elementRef.nativeElement.querySelectorAll("video"));t.forEach(o=>{const a=o.getAttribute("src");this._renderer.setAttribute(o,"src",a)}),i.forEach(o=>{o.pause()})}_restoreScrollbar(){this._renderer.removeClass(this._document.body,"modal-open"),this._renderer.removeStyle(this._document.body,"padding-right")}attachComponentPortal(t){return this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.attachTemplatePortal(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.K0),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(T.vO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mdb-modal-container"]],viewQuery:function(t,i){if(1&t&&(e.Gf(v.Pl,7),e.Gf(f,7)),2&t){let o;e.iGM(o=e.CRH())&&(i._portalOutlet=o.first),e.iGM(o=e.CRH())&&(i.modalDialog=o.first)}},hostVars:4,hostBindings:function(t,i){2&t&&e.ekj("modal",i.modal)("fade",i.hasAnimation)},decls:4,vars:2,consts:[["dialog",""],[1,"modal-content"],["cdkPortalOutlet",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",null,0)(2,"div",1),e.YNc(3,r,0,0,"ng-template",2),e.qZA()()),2&t&&e.Tol("modal-dialog"+(i._config.modalClass?" "+i._config.modalClass:""))},dependencies:[v.Pl],encapsulation:2}),n})(),p=(()=>{class n{constructor(t,i,o,a){this._document=t,this._overlay=i,this._injector=o,this._cfr=a}open(t,i){const o=new c;i=i?Object.assign(o,i):o;const a=this._createOverlay(i),m=this._createContainer(a,i),C=this._createContent(t,m,a,i);return this._registerListeners(C,i,m),C}_createOverlay(t){const i=this._getOverlayConfig(t);return this._overlay.create(i)}_getOverlayConfig(t){return new u.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:this._overlay.scrollStrategies.noop(),hasBackdrop:t.backdrop,backdropClass:"mdb-backdrop"})}_createContainer(t,i){const o=new v.C5(_,null,this._injector,this._cfr),a=t.attach(o);return a.instance._config=i,a.instance}_createContent(t,i,o,a){const m=new h(o,i);if(t instanceof e.Rgc)i.attachTemplatePortal(new v.UE(t,null,{$implicit:a.data,modalRef:m}));else{const C=this._createInjector(a,m,i),F=i.attachComponentPortal(new v.C5(t,a.viewContainerRef,C));a.data&&Object.assign(F.instance,{...a.data})}return m}_createInjector(t,i,o){return e.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:_,useValue:o},{provide:h,useValue:i}]})}_registerListeners(t,i,o){o.backdropClick$.pipe((0,R.q)(1)).subscribe(()=>{t.close()}),i.keyboard&&(0,D.R)(o._elementRef.nativeElement,"keydown").pipe((0,E.h)(a=>"Escape"===a.key),(0,R.q)(1)).subscribe(()=>{t.close()})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.K0),e.LFG(u.aV),e.LFG(e.zs3),e.LFG(e._Vd))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p],imports:[u.U8,v.eL]}),n})();var y=l(529);let w=(()=>{class n{constructor(t){this.http=t,this.data1=new b.xQ,this.baseUrl="http://localhost:8088"}gettPayeeDetails(t){const i=this.baseUrl+"/payee/account/"+t,o={Authorization:"Bearer "+localStorage.getItem("token")};return this.http.get(i,{headers:o})}createPayee(t){const i=this.baseUrl+"/payee/create";let a={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};return this.http.post(i,t,a)}deleteById(t){let o={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};return this.http.delete(this.baseUrl+"/payee/delete/"+t,o)}setexistPayeeDetails(t){console.log(t),this.data1.next(t)}getexistPayeeDetails(){return this.data1}update(t){const i=this.baseUrl+"/payee/update";let a={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};return this.http.put(i,t,a)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var P=l(9643),I=l(1281),O=l(9349);const B=["notchLeading"],N=["notchMiddle"],U=["*"];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n}),n})(),L=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","mdbLabel",""]],exportAs:["mdbLabel"]}),n})(),z=(()=>{class n{constructor(t,i,o,a){this._renderer=t,this._contentObserver=i,this._elementRef=o,this._ngZone=a,this.outline=!0,this._destroy$=new b.xQ,this._notchLeadingLength=9,this._labelMarginLeft=0,this._labelGapPadding=8,this._labelScale=.8,this._recalculateGapWhenVisible=!1}get input(){return this._formControl.input}ngAfterContentInit(){this._label?this._updateBorderGap():this._renderer.addClass(this.input,"placeholder-active"),this._updateLabelActiveState(),this._label&&this._contentObserver.observe(this._label.nativeElement).pipe((0,x.R)(this._destroy$)).subscribe(()=>{this._updateBorderGap()}),this._formControl.stateChanges.pipe((0,x.R)(this._destroy$)).subscribe(()=>{this._updateLabelActiveState(),this._label&&this._updateBorderGap()}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe((0,x.R)(this._destroy$)).subscribe(()=>{this._label&&this._recalculateGapWhenVisible&&this._updateBorderGap()})})}ngOnDestroy(){this._destroy$.next(),this._destroy$.unsubscribe()}_getLabelWidth(){return this._label.nativeElement.clientWidth*this._labelScale+this._labelGapPadding}_updateBorderGap(){if(this._isHidden())return void(this._recalculateGapWhenVisible=!0);const t=`${this._labelMarginLeft+this._notchLeadingLength}px`,i=`${this._getLabelWidth()}px`;this._notchLeading.nativeElement.style.width=t,this._notchMiddle.nativeElement.style.width=i,this._label.nativeElement.style.marginLeft=`${this._labelMarginLeft}px`,this._recalculateGapWhenVisible=!1}_updateLabelActiveState(){this._isLabelActive()?this._renderer.addClass(this.input,"active"):this._renderer.removeClass(this.input,"active")}_isLabelActive(){return this._formControl&&this._formControl.labelActive}_isHidden(){const t=this._elementRef.nativeElement;return!t.offsetHeight&&!t.offsetWidth}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj),e.Y36(P.yq),e.Y36(e.SBq),e.Y36(e.R0b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mdb-form-control"]],contentQueries:function(t,i,o){if(1&t&&(e.Suo(o,S,7),e.Suo(o,L,7,e.SBq)),2&t){let a;e.iGM(a=e.CRH())&&(i._formControl=a.first),e.iGM(a=e.CRH())&&(i._label=a.first)}},viewQuery:function(t,i){if(1&t&&(e.Gf(B,7),e.Gf(N,7)),2&t){let o;e.iGM(o=e.CRH())&&(i._notchLeading=o.first),e.iGM(o=e.CRH())&&(i._notchMiddle=o.first)}},hostVars:2,hostBindings:function(t,i){2&t&&e.ekj("form-outline",i.outline)},ngContentSelectors:U,decls:7,vars:0,consts:[[1,"form-notch"],[1,"form-notch-leading"],["notchLeading",""],[1,"form-notch-middle"],["notchMiddle",""],[1,"form-notch-trailing"]],template:function(t,i){1&t&&(e.F$t(),e.Hsn(0),e.TgZ(1,"div",0),e._UZ(2,"div",1,2)(4,"div",3,4)(6,"div",5),e.qZA())},encapsulation:2,changeDetection:0}),n})(),G=(()=>{class n{constructor(t,i,o,a){this._elementRef=t,this._renderer=i,this._ngControl=o,this._autofill=a,this.stateChanges=new b.xQ,this._focused=!1,this._autofilled=!1,this._color="",this._disabled=!1,this._readonly=!1}ngAfterViewInit(){this._color=getComputedStyle(this._elementRef.nativeElement).color,"date"===this._elementRef.nativeElement.type&&this._updateTextColorForDateType(),this._autofill.monitor(this.input).subscribe(t=>{this._autofilled=t.isAutofilled,this.stateChanges.next()})}get disabled(){return this._ngControl&&null!==this._ngControl.disabled?this._ngControl.disabled:this._disabled}set disabled(t){this._disabled=(0,I.Ig)(t)}get readonly(){return this._readonly}set readonly(t){t?this._renderer.setAttribute(this._elementRef.nativeElement,"readonly",""):this._renderer.removeAttribute(this._elementRef.nativeElement,"readonly"),this._readonly=(0,I.Ig)(t)}get value(){return this._elementRef.nativeElement.value}set value(t){t!==this.value&&(this._elementRef.nativeElement.value=t,this._value=t,this.stateChanges.next())}_updateTextColorForDateType(){const t=getComputedStyle(this._elementRef.nativeElement).color;this._color="rgba(0, 0, 0, 0)"!==t?t:this._color,this._renderer.setStyle(this._elementRef.nativeElement,"color",this.labelActive?this._color:"transparent")}_onFocus(){this._focused=!0,"date"===this._elementRef.nativeElement.type&&this._updateTextColorForDateType(),this.stateChanges.next()}_onBlur(){this._focused=!1,"date"===this._elementRef.nativeElement.type&&this._updateTextColorForDateType(),this.stateChanges.next()}ngDoCheck(){const t=this._elementRef.nativeElement.value;this._currentNativeValue!==t&&(this._currentNativeValue=t,this.stateChanges.next())}get hasValue(){return""!==this._elementRef.nativeElement.value}get focused(){return this._focused}get autofilled(){return this._autofilled}get input(){return this._elementRef.nativeElement}get labelActive(){return this.focused||this.hasValue||this.autofilled}ngOnDestroy(){this._autofill.stopMonitoring(this.input)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(d.a5,10),e.Y36(O.Lq))},n.\u0275dir=e.lG2({type:n,selectors:[["","mdbInput",""]],hostVars:1,hostBindings:function(t,i){1&t&&e.NdJ("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),2&t&&e.Ikx("disabled",i.disabled)},inputs:{disabled:"disabled",readonly:"readonly",value:"value"},exportAs:["mdbInput"],features:[e._Bn([{provide:S,useExisting:n}])]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,d.u5]}),n})();function $(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onSubmit(o.payeeForm))}),e._uU(1,"Save changes"),e.qZA()}}function V(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onUpdate(o.payeeForm))}),e._uU(1,"update changes"),e.qZA()}}let H=(()=>{class n{constructor(t,i,o){this.formBuilder=t,this.modalRef=i,this.payeedetails=o,this.payeeForm=d.nJ}ngOnInit(){console.log(this.existpayeeDetails),this.createform()}createform(){console.log("here is"),this.payeeForm=this.formBuilder.group({accountNumber:[this.existpayeeDetails?.accountNumber?this.existpayeeDetails.accountNumber:null,[d.kI.required]],ifsc:[this.existpayeeDetails?.ifsc?this.existpayeeDetails.ifsc:null,[d.kI.required]],name:[this.existpayeeDetails?.name?this.existpayeeDetails.name:null,[d.kI.required]]})}onSubmit(t){console.log(t.value);let i=localStorage.getItem("accountId");this.payeeDetails=t.value,this.payeeDetails.accountId={id:i},console.log(this.payeeDetails),this.payeedetails.createPayee(this.payeeDetails).subscribe(),this.modalRef.close(),window.location.reload()}onUpdate(t){this.payeeDetails={id:this.existpayeeDetails?.id,ifsc:t.value.ifsc,name:t.value.name,accountNumber:t.value.accountNumber},console.log(this.payeeDetails),this.payeedetails.update(this.payeeDetails).subscribe(i=>{}),this.modalRef.close(),window.location.reload()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.QS),e.Y36(h),e.Y36(w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addpayee"]],decls:23,vars:3,consts:[[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"formGroup","ngSubmit"],[1,"modal-body"],["mdbLabel","","for","form1",1,"form-label"],["mdbInput","","type","text","id","form1","formControlName","accountNumber",1,"form-control"],["mdbInput","","type","text","id","form1","formControlName","ifsc",1,"form-control"],["mdbInput","","type","text","id","form1","formControlName","name",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2,"Add Details for payee"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return i.modalRef.close()}),e.qZA()(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmit(i.payeeForm)}),e.TgZ(5,"div",4)(6,"mdb-form-control")(7,"label",5),e._uU(8,"Account Number"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"mdb-form-control")(11,"label",5),e._uU(12,"IFSC"),e.qZA(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"mdb-form-control")(15,"label",5),e._uU(16,"Name"),e.qZA(),e._UZ(17,"input",8),e.qZA()()(),e.TgZ(18,"div",9)(19,"button",10),e.NdJ("click",function(){return i.modalRef.close()}),e._uU(20," Close "),e.qZA(),e.YNc(21,$,2,0,"button",11),e.YNc(22,V,2,0,"button",11),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",i.payeeForm),e.xp6(17),e.Q6J("ngIf",!i.existpayeeDetails),e.xp6(1),e.Q6J("ngIf",i.existpayeeDetails))},dependencies:[g.O5,z,G,L,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],styles:[".mat-toolbar[_ngcontent-%COMP%]{margin:-24x;width:auto;margin-bottom:10px}.margin-form-field[_ngcontent-%COMP%]{padding:5p}mat-hint[_ngcontent-%COMP%]{color:red}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#212121;color:#fff}"]}),n})();var Y=l(5159),k=l(9636);const J=function(n,s){return{accountNumber:n,ifsc:s}},W=function(n){return["/app/transfer",n]};function q(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",10),e._uU(9,"Transfer"),e.qZA()(),e.TgZ(10,"td")(11,"button",11),e.NdJ("click",function(){const a=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteById(a.id))}),e._uU(12,"Delete"),e.qZA()(),e.TgZ(13,"td")(14,"button",11),e.NdJ("click",function(){const a=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.update(a))}),e._uU(15,"Update"),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.accountNumber),e.xp6(2),e.Oqu(t.ifsc),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("routerLink",e.VKq(7,W,e.WLB(4,J,t.accountNumber,t.ifsc)))}}let Q=(()=>{class n{constructor(t,i,o){this.payeeDetailsService=t,this.accountService=i,this.modalService=o,this.modalRef=null,this.addpayee=!1}handleAction(t){this.addpayee=!0,this.modalService.open(H)}ngOnInit(){this.rows=[];let t=localStorage.getItem("user");null!=t&&(t=JSON.parse(t).id),console.log(t),this.getpayeeDetails(t)}getpayeeDetails(t){this.accountService.getAccountDetails(t).subscribe(i=>{console.log(i[0]),this.payeeDetailsService.gettPayeeDetails(i[0].id).subscribe(a=>{this.rows=a,console.log(this.rows)})})}deleteById(t){this.payeeDetailsService.deleteById(t).subscribe(i=>{this.ngOnInit()})}update(t){this.payeeDetailsService.setexistPayeeDetails(t),console.log(t),this.modalService.open(H,{data:{existpayeeDetails:t}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w),e.Y36(Y.B),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-payee-details"]],decls:21,vars:1,consts:[[1,"btn","btn-dark",2,"margin","5px",3,"click"],[1,"backdrop"],[1,""],[1,"col-md-12"],[1,"tile"],[1,"card-body"],[1,"table","table-bordered","table-striped",2,"width","100%"],[1,"thead-dark"],["scope","col"],[4,"ngFor","ngForOf"],["mat-button","","routerLinkActive","router-link-active",1,"menu-button",3,"routerLink"],["mat-button","",1,"menu-button",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.handleAction("1")}),e._uU(1,"Add Payee"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),e._uU(6,"Payee Details"),e.qZA(),e.TgZ(7,"div",5)(8,"table",6)(9,"thead",7)(10,"tr")(11,"th",8),e._uU(12,"Account Number "),e.qZA(),e.TgZ(13,"th",8),e._uU(14,"IFSC"),e.qZA(),e.TgZ(15,"th",8),e._uU(16,"Name"),e.qZA(),e.TgZ(17,"th",8),e._uU(18,"Action"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,q,16,9,"tr",9),e.qZA()()()()()()),2&t&&(e.xp6(20),e.Q6J("ngForOf",i.rows))},dependencies:[g.sg,k.rH,k.Od]}),n})();var K=l(2143),X=l(5412);const ee=[{path:"",component:Q}];let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,K.p0,y.JF,M,X.Is,j,d.UX,d.u5,k.Bz.forChild(ee)]}),n})()},9349:(Z,A,l)=>{l.d(A,{Ky:()=>T,Lq:()=>E});var g=l(3353),d=l(4650),e=l(1281),b=l(8896),D=l(5529);const v=(0,g.i$)({passive:!0});let E=(()=>{class u{constructor(r,c){this._platform=r,this._ngZone=c,this._monitoredElements=new Map}monitor(r){if(!this._platform.isBrowser)return b.E;const c=(0,e.fI)(r),h=this._monitoredElements.get(c);if(h)return h.subject;const _=new D.xQ,p="cdk-text-field-autofilled",M=y=>{"cdk-text-field-autofill-start"!==y.animationName||c.classList.contains(p)?"cdk-text-field-autofill-end"===y.animationName&&c.classList.contains(p)&&(c.classList.remove(p),this._ngZone.run(()=>_.next({target:y.target,isAutofilled:!1}))):(c.classList.add(p),this._ngZone.run(()=>_.next({target:y.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{c.addEventListener("animationstart",M,v),c.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(c,{subject:_,unlisten:()=>{c.removeEventListener("animationstart",M,v)}}),_}stopMonitoring(r){const c=(0,e.fI)(r),h=this._monitoredElements.get(c);h&&(h.unlisten(),h.subject.complete(),c.classList.remove("cdk-text-field-autofill-monitored"),c.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(c))}ngOnDestroy(){this._monitoredElements.forEach((r,c)=>this.stopMonitoring(c))}}return u.\u0275fac=function(r){return new(r||u)(d.LFG(g.t4),d.LFG(d.R0b))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),T=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({}),u})()}}]);