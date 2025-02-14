import{F as q,Ha as B,I as K,R as U,Ta as ee,_c as ne,aa as Y,ed as re,fa as j,i as G,ia as N,la as p,na as g,oa as f,qa as Q,qd as te,r as W,s as L,ta as Z,ua as H,w as P}from"./chunk-HPC372FG.js";var O=class{},D=class{},E=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let t=n.indexOf(":");if(t>0){let s=n.slice(0,t),i=n.slice(t+1).trim();this.addHeaderEntry(s,i)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,t)=>{this.addHeaderEntry(t,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,t])=>{this.setHeaderEntries(n,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){let n=new r;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,n);let s=(e.op==="a"?this.headers.get(n):void 0)||[];s.push(...t),this.headers.set(n,s);break;case"d":let i=e.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let o=this.headers.get(n);if(!o)return;o=o.filter(d=>i.indexOf(d)===-1),o.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,o)}break}}addHeaderEntry(e,n){let t=e.toLowerCase();this.maybeSetNormalizedName(e,t),this.headers.has(t)?this.headers.get(t).push(n):this.headers.set(t,[n])}setHeaderEntries(e,n){let t=(Array.isArray(n)?n:[n]).map(i=>i.toString()),s=e.toLowerCase();this.headers.set(s,t),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var z=class{encodeKey(e){return se(e)}encodeValue(e){return se(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function we(r,e){let n=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,d]=i==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],a=n.get(o)||[];a.push(d),n.set(o,a)}),n}var Re=/%(\d[a-f0-9])/gi,be={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function se(r){return encodeURIComponent(r).replace(Re,(e,n)=>be[n]??e)}function I(r){return`${r}`}var T=class r{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new z,e.fromString){if(e.fromObject)throw new j(2805,!1);this.map=we(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let t=e.fromObject[n],s=Array.isArray(t)?t.map(I):[I(t)];this.map.set(n,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(t=>{let s=e[t];Array.isArray(s)?s.forEach(i=>{n.push({param:t,value:i,op:"a"})}):n.push({param:t,value:s,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(t=>n+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new r({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=(e.op==="a"?this.map.get(e.param):void 0)||[];n.push(I(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],s=t.indexOf(I(e.value));s!==-1&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var X=class{map=new Map;set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Pe(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function oe(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function ie(r){return typeof Blob<"u"&&r instanceof Blob}function ae(r){return typeof FormData<"u"&&r instanceof FormData}function Ne(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var ce="Content-Type",ue="X-Request-URL",fe="text/plain",pe="application/json",Ae=`${pe}, ${fe}, */*`,A=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,n,t,s){this.url=n,this.method=e.toUpperCase();let i;if(Pe(this.method)||s?(this.body=t!==void 0?t:null,i=s):i=t,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new E,this.context??=new X,!this.params)this.params=new T,this.urlWithParams=n;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=n;else{let d=n.indexOf("?"),a=d===-1?"?":d<n.length-1?"&":"";this.urlWithParams=n+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||oe(this.body)||ie(this.body)||ae(this.body)||Ne(this.body)?this.body:this.body instanceof T?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ae(this.body)?null:ie(this.body)?this.body.type||null:oe(this.body)?null:typeof this.body=="string"?fe:this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?pe:null}clone(e={}){let n=e.method||this.method,t=e.url||this.url,s=e.responseType||this.responseType,i=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,d=e.withCredentials??this.withCredentials,a=e.reportProgress??this.reportProgress,u=e.headers||this.headers,v=e.params||this.params,y=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((w,m)=>w.set(m,e.setHeaders[m]),u)),e.setParams&&(v=Object.keys(e.setParams).reduce((w,m)=>w.set(m,e.setParams[m]),v)),new r(n,t,o,{params:v,headers:u,context:y,reportProgress:a,responseType:s,withCredentials:d,transferCache:i})}},b=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(b||{}),M=class{headers;status;statusText;url;ok;type;constructor(e,n=200,t="OK"){this.headers=e.headers||new E,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},C=class r extends M{constructor(e={}){super(e)}type=b.ResponseHeader;clone(e={}){return new r({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},k=class r extends M{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=b.Response;clone(e={}){return new r({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},x=class extends M{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Oe=200,Me=204;function S(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Ie=(()=>{class r{handler;constructor(n){this.handler=n}request(n,t,s={}){let i;if(n instanceof A)i=n;else{let a;s.headers instanceof E?a=s.headers:a=new E(s.headers);let u;s.params&&(s.params instanceof T?u=s.params:u=new T({fromObject:s.params})),i=new A(n,t,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=L(i).pipe(K(a=>this.handler.handle(a)));if(n instanceof A||s.observe==="events")return o;let d=o.pipe(q(a=>a instanceof k));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe(P(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return d.pipe(P(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return d.pipe(P(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return d.pipe(P(a=>a.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,t={}){return this.request("DELETE",n,t)}get(n,t={}){return this.request("GET",n,t)}head(n,t={}){return this.request("HEAD",n,t)}jsonp(n,t){return this.request("JSONP",n,{params:new T().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,t={}){return this.request("OPTIONS",n,t)}patch(n,t,s={}){return this.request("PATCH",n,S(s,t))}post(n,t,s={}){return this.request("POST",n,S(s,t))}put(n,t,s={}){return this.request("PUT",n,S(s,t))}static \u0275fac=function(t){return new(t||r)(g(O))};static \u0275prov=N({token:r,factory:r.\u0275fac})}return r})();var De=new p("");function ye(r,e){return e(r)}function ke(r,e){return(n,t)=>e.intercept(n,{handle:s=>r(s,t)})}function xe(r,e,n){return(t,s)=>H(n,()=>e(t,i=>r(i,s)))}var Fe=new p(""),J=new p(""),_e=new p(""),me=new p("",{providedIn:"root",factory:()=>!0});function Le(){let r=null;return(e,n)=>{r===null&&(r=(f(Fe,{optional:!0})??[]).reduceRight(ke,ye));let t=f(B);if(f(me)){let i=t.add();return r(e,n).pipe(U(()=>t.remove(i)))}else return r(e,n)}}var le=(()=>{class r extends O{backend;injector;chain=null;pendingTasks=f(B);contributeToStability=f(me);constructor(n,t){super(),this.backend=n,this.injector=t}handle(n){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(J),...this.injector.get(_e,[])]));this.chain=t.reduceRight((s,i)=>xe(s,i,this.injector),ye)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(U(()=>this.pendingTasks.remove(t)))}else return this.chain(n,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||r)(g(D),g(Z))};static \u0275prov=N({token:r,factory:r.\u0275fac})}return r})();var Ue=/^\)\]\}',?\n/,je=RegExp(`^${ue}:`,"m");function Be(r){return"responseURL"in r&&r.responseURL?r.responseURL:je.test(r.getAllResponseHeaders())?r.getResponseHeader(ue):null}var de=(()=>{class r{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new j(-2800,!1);let t=this.xhrFactory;return(t.\u0275loadImpl?W(t.\u0275loadImpl()):L(null)).pipe(Y(()=>new G(i=>{let o=t.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept",Ae),!n.headers.has(ce)){let c=n.detectContentTypeHeader();c!==null&&o.setRequestHeader(ce,c)}if(n.responseType){let c=n.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=n.serializeBody(),a=null,u=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new E(o.getAllResponseHeaders()),R=Be(o)||n.url;return a=new C({headers:l,status:o.status,statusText:c,url:R}),a},v=()=>{let{headers:c,status:l,statusText:R,url:$}=u(),h=null;l!==Me&&(h=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=h?Oe:0);let _=l>=200&&l<300;if(n.responseType==="json"&&typeof h=="string"){let Ee=h;h=h.replace(Ue,"");try{h=h!==""?JSON.parse(h):null}catch(ve){h=Ee,_&&(_=!1,h={error:ve,text:h})}}_?(i.next(new k({body:h,headers:c,status:l,statusText:R,url:$||void 0})),i.complete()):i.error(new x({error:h,headers:c,status:l,statusText:R,url:$||void 0}))},y=c=>{let{url:l}=u(),R=new x({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});i.error(R)},w=!1,m=c=>{w||(i.next(u()),w=!0);let l={type:b.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),n.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),i.next(l)},V=c=>{let l={type:b.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),i.next(l)};return o.addEventListener("load",v),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),n.reportProgress&&(o.addEventListener("progress",m),d!==null&&o.upload&&o.upload.addEventListener("progress",V)),o.send(d),i.next({type:b.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",v),o.removeEventListener("timeout",y),n.reportProgress&&(o.removeEventListener("progress",m),d!==null&&o.upload&&o.upload.removeEventListener("progress",V)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||r)(g(te))};static \u0275prov=N({token:r,factory:r.\u0275fac})}return r})(),ge=new p(""),Se="XSRF-TOKEN",ze=new p("",{providedIn:"root",factory:()=>Se}),Xe="X-XSRF-TOKEN",Ce=new p("",{providedIn:"root",factory:()=>Xe}),F=class{},Je=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,t,s){this.doc=n,this.platform=t,this.cookieName=s}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=re(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(t){return new(t||r)(g(ne),g(ee),g(ze))};static \u0275prov=N({token:r,factory:r.\u0275fac})}return r})();function Ve(r,e){let n=r.url.toLowerCase();if(!f(ge)||r.method==="GET"||r.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return e(r);let t=f(F).getToken(),s=f(Ce);return t!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,t)})),e(r)}var Te=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(Te||{});function $e(r,e){return{\u0275kind:r,\u0275providers:e}}function Tn(...r){let e=[Ie,de,le,{provide:O,useExisting:le},{provide:D,useFactory:()=>f(De,{optional:!0})??f(de)},{provide:J,useValue:Ve,multi:!0},{provide:ge,useValue:!0},{provide:F,useClass:Je}];for(let n of r)e.push(...n.\u0275providers);return Q(e)}var he=new p("");function En(){return $e(Te.LegacyInterceptors,[{provide:he,useFactory:Le},{provide:J,useExisting:he,multi:!0}])}export{Ie as a,Fe as b,Tn as c,En as d};
