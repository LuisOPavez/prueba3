"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7522],{7522:(l,s,e)=>{e.r(s),e.d(s,{BiometricAuthNative:()=>c});var n=e(467),i=e(3240),o=e(67);class c extends i.k{constructor(t){super();const r=t;this.checkBiometry=r.checkBiometry,this.internalAuthenticate=r.internalAuthenticate}checkBiometry(){return(0,n.A)(function*(){return Promise.resolve({isAvailable:!1,strongBiometryIsAvailable:!1,biometryType:o.me.none,biometryTypes:[],deviceIsSecure:!1,reason:"",code:o.UK.none,strongReason:"",strongCode:o.UK.none})})()}internalAuthenticate(t){return(0,n.A)(function*(){})()}setBiometryType(t){return(0,n.A)(function*(){console.warn("setBiometryType() is web only")})()}setBiometryIsEnrolled(t){return(0,n.A)(function*(){console.warn("setBiometryEnrolled() is web only")})()}setDeviceIsSecure(t){return(0,n.A)(function*(){console.warn("setDeviceIsSecure() is web only")})()}}}}]);