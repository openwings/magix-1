define("magix/magix",function(){var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u=function(){},v={tagName:s,rootId:"magix_vf_root",execError:u},h={}.hasOwnProperty,l=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=y.isObject(t)?g(e,t):m(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},d=function(e){var t=this;t.c=[],t.x=e||20,t.b=t.x+5},p=function(e){return new d(e)},m=function(e,t){return e?h.call(e,t):e},g=function(e,t,r){for(var n in t)r&&m(r,n)||(e[n]=t[n]);return e};g(d.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,m(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},set:function(e,t){var r=this,n=r.c;e=a+e;var i=n[e];if(!m(n,e)){if(n.length>=r.b){n.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var o=r.b-r.x;o--;)i=n.pop(),delete n[i.k]}i={},n.push(i),n[e]=i}return i.k=e,i.v=t,i.f=1,i.t=c++,i},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e])},has:function(e){return e=a+e,m(this.c,e)}});var x=p(60),w=p(),b=function(e,t,r,n,i,a){for(y.isArray(e)||(e=[e]),t&&(y.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=y.isFunction(a)&&a.apply(r,t)}catch(o){v.execError(o)}return i},y={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:g,has:m,safeExec:b,noop:u,config:l(v),start:function(e){var t=this;g(v,e),t.libRequire(v.iniFile,function(r){v=g(v,r,e),v.tagNameChanged=v.tagName!=s;var n=v.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(v.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)m(e,r)&&t.push(r);return t},local:l({}),path:function(i,a){var c=i+"\n"+a,s=w.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(r,n).replace(t,n)+f,a.charAt(0)==f){var u=o.test(i)?8:0,v=i.indexOf(f,u);s=i.substring(0,v)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");w.set(c,s)}return s},pathToObject:function(e,t){var c=x.get(e);if(!c){c={};var s={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var v=e.replace(u,n);if(u&&o.test(u)){var h=u.indexOf(f,8);u=-1==h?f:u.substring(h)}v.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}s[r]=n}),c[a]=u,c.params=s,x.set(e,c)}return c},objectToPath:function(e,t){var r,n=e[a],i=[],o=e.params;for(var c in o)r=o[c],t&&encodeURIComponent(r),i.push(c+"="+r);return i.length&&(n=n+"?"+i.join("&")),n},listToMap:function(e,t){var r,n,i,a={};if(y.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:p},C=Object.prototype.toString;return g(y,{libRequire:function(e,t){y.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==C.call(e)},isString:function(e){return"[object String]"==C.call(e)},isNumber:function(e){return"[object Number]"==C.call(e)},isRegExp:function(e){return"[object RegExp]"==C.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,y.mix(e.prototype,r),y.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o,c=window,f="",s="pathname",u=e.has,v=e.mix,h=document,l=/^UTF-8$/i.test(h.charset||h.characterSet||"UTF-8"),d=e.config(),p=e.cache(),m=e.cache(),g=/#.*$/,x=/^[^#]*#?!?/,w="params",b=d.nativeHistory,y=function(t,r,n){if(t){n=this[w],e.isArray(t)||(t=t.split(","));for(var i=0;t.length>i&&!(r=u(n,t[i]));i++);}return r},C=function(){return u(this,s)},E=function(){return u(this,"view")},V=function(){var e=this,t=e.hash,r=e.query;return t[s]!=r[s]},M=function(e){var t=this,r=t.hash,n=t.query;return r[w][e]!=n[w][e]},T=function(e){var t=this,r=t.hash;return u(r[w],e)},j=function(e){var t=this,r=t.query;return u(r[w],e)},I=function(e){var t=this,r=t[w];return r[e]},k=function(t){var r=e.pathToObject(t,l),n=r[s];return n&&o&&(r[s]=e.path(c.location[s],n)),r},O=v({getView:function(t,r){if(!i){i={rs:d.routes||{},nf:d.notFoundView};var n=d.defaultView;if(!n)throw Error("unset defaultView");i.home=n;var a=d.defaultPathname||f;i.rs[a]=n,i[s]=a}var o;t||(t=i[s]);var c=i.rs;return o=e.isFunction(c)?c.call(d,t,r):c[t],{view:o?o:i.nf||i.home,pathname:o||b?t:i.nf?t:i[s]}},start:function(){var e=O,t=c.history;a=b&&t.pushState,o=b&&!a,a?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=O,n=p.get(e);if(!n){var i=e.replace(g,f),a=e.replace(x,f),o=k(i),u=k(a),h={};v(h,o[w]),v(h,u[w]),n={pathnameDiff:V,paramDiff:M,hashOwn:T,queryOwn:j,get:I,href:e,srcQuery:i,srcHash:a,query:o,hash:u,params:h},p.set(e,n)}if(t&&!n.view){var l;l=b?n.hash[s]||n.query[s]:n.hash[s];var d=r.getView(l,n);v(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=m.get(i);if(a||(i=n+"\n"+i,a=m.get(i)),!a){var o,c,f;a={params:{}},c=e[s],f=t[s],c!=f&&(a[s]={from:c,to:f},o=1),c=e.view,f=t.view,c!=f&&(a.view={from:c,to:f},o=1);var u,v=e[w],h=t[w];for(u in v)c=v[u],f=h[u],v[u]!=h[u]&&(o=1,a[w][u]={from:c,to:f});for(u in h)c=v[u],f=h[u],v[u]!=h[u]&&(o=1,a[w][u]={from:c,to:f});a.occur=o,a.isParam=y,a.isPathname=C,a.isView=E,m.set(i,a)}return a},route:function(){var e=O,t=e.parseQH(0,1),i=n||{params:{},href:"~"},a=!n;n=t;var o=e.getChged(i,t);o.occur&&(r=t,e.fire("changed",{location:t,changed:o,force:a}))},navigate:function(t,n,i){var c=O;if(!n&&e.isObject(t)&&(n=t,t=f),n&&(t=e.objectToPath({params:n,pathname:t},l)),t){var h=k(t),d={};if(d[w]=v({},h[w]),d[s]=h[s],d[s]){if(o){var p=r.query;if(p&&(p=p[w]))for(var m in p)u(p,m)&&!u(d[w],m)&&(d[w][m]=f)}}else{var g=v({},r[w]);d[w]=v(g,d[w]),d[s]=r[s]}var x,b=e.objectToPath(d);x=a?b!=r.srcQuery:b!=r.srcHash,x&&(a?(c.poped=1,history[i?"replaceState":"pushState"](null,null,b),c.route()):(v(d,r,d),d.srcHash=b,d.hash={params:d[w],pathname:d[s]},c.fire("!ul",{loc:r=d}),b="#!"+b,i?location.replace(b):location.hash=b))}}},t);return O.useState=function(){var e=O,t=location.href;$(c).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},O.useHash=function(){$(c).on("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.listToMap(""),i=document.body,a={},o=String.fromCharCode(26),c="mx-owner",f="mx-ie",s={},u=65536,v=function(e){return e.id||(e.id="mx-e-"+u--)},h=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},l={process:function(e){for(var n=e.target||e.srcElement;n&&1!=n.nodeType;)n=n.parentNode;var a=n,u=e.type,l=s[u]||(s[u]=RegExp("(?:^|,)"+u+"(?:,|$)"));if(!l.test(h(n,f))){for(var d,p,m="mx-"+u,g=[];a&&a!=i&&(d=h(a,m),p=h(a,f),!d&&!l.test(p));)g.push(a),a=a.parentNode;if(d){var x,w=d.indexOf(o);w>-1&&(x=d.slice(0,w),d=d.slice(w));var b=h(a,c)||x;if(!b)for(var y=a,C=t.all();y&&y!=i;){if(r(C,y.id)){h(a,c,b=y.id);break}y=y.parentNode}if(!b)throw Error("miss "+c+":"+d);var E=t.get(b),V=E&&E.view;V&&V.processEvent({info:d,se:e,st:u,tId:v(n),cId:v(a)})}else for(var M;g.length;)M=g.shift(),p=h(M,f),l.test(p)||(p=p?p+","+u:u,h(M,f,p))}},on:function(e,r){var o=this;if(a[e])a[e]++;else{t=r,a[e]=1;var c=n[e];c?o.unbubble(0,i,e):i["on"+e]=function(e){e=e||window.event,e&&o.process(e)}}},un:function(e){var t=this,r=a[e];if(r>0){if(r--,!r){var o=n[e];o?t.unbubble(1,i,e):i["on"+e]=null}a[e]=r}}};return l.unbubble=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,l.process)},l}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),c=this,f=c[o];if(f){n||(n={}),n.type||(n.type=e);for(var s,u,v=f.length,h=v-1;v--;)s=a?v:h-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),h--),u.d||r(u.f,n,c)}i&&delete c[o]},on:function(r,n,i){var a=t(r),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o=document,c=65536,f=e.safeExec,s=[].slice,u=e.mix,v=e.config("tagName"),h=e.config("rootId"),l=!e.config("tagNameChanged"),d=e.has,p="mx-view",m=l?"mx-defer":"mx-vframe",g="alter",x="created",w=function(e){return"object"==typeof e?e:o.getElementById(e)},b=function(e,t,r){return r=w(e),r?r.getElementsByTagName(t):[]},y=function(e){return o.createElement(e)},C=function(e){return e.id||(e.id="magix_vf_"+c--)},E=function(e,t,r){if(e=w(e),t=w(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},V=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return u(M,{root:function(e,t){if(!n){a=t;var r=w(h);r||(r=y(v),r.id=h,o.body.insertBefore(r,o.body.firstChild)),n=new M(h),e.add(n)}return n}}),u(u(M.prototype,t),{mountView:function(t,n,i){var o=this,c=w(o.id);if(c._bak?c._chgd=1:(c._bak=1,c._tmpl=c.innerHTML.replace(V,"")),o.unmountView(),t){var s=e.pathToObject(t),v=s.pathname,h=--o.sign;e.libRequire(v,function(e){if(h==o.sign){var t=o.owner;r.prepare(e);var l=new e({owner:o,id:o.id,$:w,path:v,vom:t,location:a});o.view=l,l.on("interact",function(e){e.tmpl||(c._chgd&&(c.innerHTML=c._tmpl),o.mountZoneVframes(0,0,1)),l.on("rendered",function(){o.mountZoneVframes(0,0,1)}),l.on("prerender",function(){o.unmountZoneVframes(0,1)||o.cAlter()}),l.on("inited",function(){o.viewInited=1,o.fire("viewInited",{view:l}),i&&f(i,l,o)})},0),n=n||{},l.load(u(n,s.params,n))}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new M(e),a.pId=n.id,d(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=b(n,v),a=i.length,o={};if(a)for(var c,f,s,u,h=0;a>h;h++)if(c=i[h],f=C(c),!d(o,f)&&(s=c.getAttribute(p),u=!c.getAttribute(m),u=u==l,u||s)){r.mountVframe(f,s,t);for(var g,x=b(c,v),w=0,y=x.length;y>w;w++)g=x[w],s=g.getAttribute(p),u=!g.getAttribute(m),u=u==l,u||s||(o[C(g)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a),r.fire("destroy");var o=n.get(i.pId);o&&d(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,c={};for(i in o)E(i,e)&&(c[i]=1);r=c}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=s.call(arguments,1);return r.viewInited&&n[e]&&(t=f(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(x,e),t.fire(x,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!d(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(g,e),t.fire(g,e));var i=t.owner,a=i.get(t.pId);a&&d(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(t,r){var n=this,i=n.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(r),o={location:t,changed:r,prevent:function(){this.cs=[]},toChildren:function(t){t=t||[],e.isString(t)&&(t=t.split(",")),this.cs=t}};a&&f(i.locationChange,o,i);for(var c,s=o.cs||e.keys(n.cM),u=0,v=s.length,h=n.owner;v>u;u++)c=h.get(s[u]),c&&c.locChged(t,r)}}}),M}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],c=e.noop,f=e.mix,s={render:1,renderUI:1},u="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=e.cache(40),l=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,d=String.fromCharCode(26),p=function(){this.render()},m={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,x=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1};b.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[u]){e[u]=1,e.extend=t.extend;var n,o,f,h,l,p=e.prototype,m={};for(var g in p)if(i(p,g))if(n=p[g],o=g.match(w))for(f=o[1],h=o[2],h=h.split(a),l=h.length-1;l>-1;l--)o=h[l],m[o]=1,p[f+d+o]=n;else i(s,g)&&n!=c&&(p[g]=v(n));h&&(p.$evts=m)}},f(f(b.prototype,t),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,a=e.sign,c=i(e,"template"),f=function(i){if(a==e.sign){c||(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),n(e.render,o,e);var f=!t&&!e.rendered;f&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!c?e.fetchTmpl(f):f()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+d)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a))),n.locationChange==c&&(n.locationChange=p)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,i=e.se,a=h.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(x,function(e,t,r){a.p[t]=r}),h.set(r,a));var o=a.n+d+i.type,c=t[o];if(c){var s=m[a.f];s&&s.call(m,i),n(c,f({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:i,params:a.p},m),t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=e?r.un:r.on,a=t.vom;for(var o in n)i.call(r,o,a)}});var y,C="?t="+Date.now(),E={},V={};return b.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(i(E,t.path))e(E[t.path]);else{var a=t.path.indexOf("/");if(!y){var o=t.path.substring(0,a);y=require.s.contexts._.config.paths[o]}var c=t.path.substring(a+1),f=y+c+".html",s=V[f],u=function(r){e(E[t.path]=r)};s?s.push(u):(s=V[f]=[u],$.ajax({url:f+C,success:function(e){n(s,e),delete V[f]},error:function(e,t){n(s,t),delete V[f]}}))}},b.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,c=0,f=0,s={},u={},v=t.mix({all:function(){return s},add:function(e){n(s,e.id)||(a++,s[e.id]=e,e.owner=v,v.fire("add",{vframe:e}))},get:function(e){return s[e]},remove:function(e,t){var r=s[e];r&&(a--,t&&o--,delete s[e],v.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&v.fire("progress",{percent:c=e},f=1==e)}},root:function(){return e.root(v,u)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,i(u,r),!t){var n=v.root(),a=e.changed;a.isView()?n.mountView(r.view):n.locChged(r,a)}}},r);return v}),document.createElement("vframe");