"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2693],{2693:(R,d,r)=>{r.r(d),r.d(d,{RegistroPageModule:()=>M});var c=r(177),l=r(4341),a=r(4742),m=r(8986),h=r(467),u=r(2453),e=r(4438),p=r(5766);const f=[{path:"",component:(()=>{class s{constructor(i,o){this.authService=i,this.router=o,this.username="",this.email="",this.password="",this.confirmPassword=""}onRegister(){var i=this;return(0,h.A)(function*(){if(i.email.trim()&&i.password.trim()&&i.confirmPassword.trim())if(i.password===i.confirmPassword)try{i.isMobileDevice()?yield u.LS.authenticate({reason:"Register biometric data",cancelTitle:"Cancel",iosFallbackTitle:"Use passcode",androidTitle:"Register with biometrics"}):console.log("Simulando autenticaci\xf3n biom\xe9trica");const o=btoa(i.email.trim());(yield i.authService.registerUser(i.email,i.password,o))&&(alert("Registro exitoso"),i.router.navigate(["/login"]))}catch(o){o instanceof u.el?o.code!==u.UK.userCancel&&alert(`Biometric registration failed: ${o.message}`):alert("Error en el registro biom\xe9trico.")}else alert("Las contrase\xf1as no coinciden.");else alert("Todos los campos son obligatorios.")})()}isMobileDevice(){return/Android|iPhone|iPad|iPod/.test(navigator.userAgent)}static{this.\u0275fac=function(o){return new(o||s)(e.rXU(p.u),e.rXU(m.Ix))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-registro"]],decls:24,vars:4,consts:[[3,"submit"],["position","floating"],["type","text","name","username","required","",3,"ngModelChange","ngModel"],["type","email","name","email","required","",3,"ngModelChange","ngModel"],["type","password","name","password","required","",3,"ngModelChange","ngModel"],["type","password","name","confirmPassword","required","",3,"ngModelChange","ngModel"],["expand","full","type","submit"]],template:function(o,n){1&o&&(e.j41(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),e.EFF(4,"Crear Cuenta"),e.k0s()()(),e.j41(5,"form",0),e.bIt("submit",function(){return n.onRegister()}),e.j41(6,"ion-item")(7,"ion-label",1),e.EFF(8,"Nombre"),e.k0s(),e.j41(9,"ion-input",2),e.mxI("ngModelChange",function(t){return e.DH7(n.username,t)||(n.username=t),t}),e.k0s()(),e.j41(10,"ion-item")(11,"ion-label",1),e.EFF(12,"Correo Electr\xf3nico"),e.k0s(),e.j41(13,"ion-input",3),e.mxI("ngModelChange",function(t){return e.DH7(n.email,t)||(n.email=t),t}),e.k0s()(),e.j41(14,"ion-item")(15,"ion-label",1),e.EFF(16,"Contrase\xf1a"),e.k0s(),e.j41(17,"ion-input",4),e.mxI("ngModelChange",function(t){return e.DH7(n.password,t)||(n.password=t),t}),e.k0s()(),e.j41(18,"ion-item")(19,"ion-label",1),e.EFF(20,"Confirmar Contrase\xf1a"),e.k0s(),e.j41(21,"ion-input",5),e.mxI("ngModelChange",function(t){return e.DH7(n.confirmPassword,t)||(n.confirmPassword=t),t}),e.k0s()(),e.j41(22,"ion-button",6),e.EFF(23,"Registrarse"),e.k0s()()()),2&o&&(e.R7$(9),e.R50("ngModel",n.username),e.R7$(4),e.R50("ngModel",n.email),e.R7$(4),e.R50("ngModel",n.password),e.R7$(4),e.R50("ngModel",n.confirmPassword))},dependencies:[l.qT,l.BC,l.cb,l.YS,l.vS,l.cV,a.Jm,a.W9,a.eU,a.$w,a.uz,a.he,a.BC,a.ai,a.Gw]})}}return s})()}];let C=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[m.iI.forChild(f),m.iI]})}}return s})(),M=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[c.MD,l.YN,a.bv,C]})}}return s})()}}]);