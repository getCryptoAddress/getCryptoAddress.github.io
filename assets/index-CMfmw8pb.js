var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ce,function(){return function r(n,o,i){var s=window,a="application/octet-stream",c=i||a,l=n,d=!o&&!i&&l,f=document.createElement("a"),b=function(u){return String(u)},w=s.Blob||s.MozBlob||s.WebKitBlob||b,S=o||"download",p,$;if(w=w.call?w.bind(s):Blob,String(this)==="true"&&(l=[l,c],c=l[0],l=l[1]),d&&d.length<2048&&(S=d.split("/").pop().split("?")[0],f.href=d,f.href.indexOf(d)!==-1)){var E=new XMLHttpRequest;return E.open("GET",d,!0),E.responseType="blob",E.onload=function(u){r(u.target.response,S,a)},setTimeout(function(){E.send()},0),E}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l))if(l.length>1024*1024*1.999&&w!==b)l=D(l),c=l.type||a;else return navigator.msSaveBlob?navigator.msSaveBlob(D(l),S):v(l);else if(/([\x80-\xff])/.test(l)){var R=0,I=new Uint8Array(l.length),se=I.length;for(R;R<se;++R)I[R]=l.charCodeAt(R);l=new w([I],{type:c})}p=l instanceof w?l:new w([l],{type:c});function D(u){var y=u.split(/[:;,]/),x=y[1],ae=y[2]=="base64"?atob:decodeURIComponent,U=ae(y.pop()),F=U.length,C=0,V=new Uint8Array(F);for(C;C<F;++C)V[C]=U.charCodeAt(C);return new w([V],{type:x})}function v(u,y){if("download"in f)return f.href=u,f.setAttribute("download",S),f.className="download-js-link",f.innerHTML="downloading...",f.style.display="none",document.body.appendChild(f),setTimeout(function(){f.click(),document.body.removeChild(f),y===!0&&setTimeout(function(){s.URL.revokeObjectURL(f.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(u)&&(u="data:"+u.replace(/^data:([\w\/\-\+]+)/,a)),window.open(u)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=u),!0;var x=document.createElement("iframe");document.body.appendChild(x),!y&&/^data:/.test(u)&&(u="data:"+u.replace(/^data:([\w\/\-\+]+)/,a)),x.src=u,setTimeout(function(){document.body.removeChild(x)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(p,S);if(s.URL)v(s.URL.createObjectURL(p),!0);else{if(typeof p=="string"||p.constructor===b)try{return v("data:"+c+";base64,"+s.btoa(p))}catch{return v("data:"+c+","+encodeURIComponent(p))}$=new FileReader,$.onload=function(u){v(this.result)},$.readAsDataURL(p)}return!0}})})(N);var ue=N.exports;const H=le(ue);var j=function(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},fe=function(){function e(t,r,n){this.name=t,this.version=r,this.os=n,this.type="browser"}return e}(),de=function(){function e(t,r,n,o){this.name=t,this.version=r,this.os=n,this.bot=o,this.type="bot-device"}return e}(),he=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),ge=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,me=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,G=3,we=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",ge]],z=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function pe(e){return e!==""&&we.reduce(function(t,r){var n=r[0],o=r[1];if(t)return t;var i=o.exec(e);return!!i&&[n,i]},!1)}function ye(e){var t=pe(e);if(!t)return null;var r=t[0],n=t[1];if(r==="searchbot")return new he;var o=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);o?o.length<G&&(o=j(j([],o,!0),Se(G-o.length),!0)):o=[];var i=o.join("."),s=be(e),a=me.exec(e);return a&&a[1]?new de(r,i,s,a[1]):new fe(r,i,s)}function be(e){for(var t=0,r=z.length;t<r;t++){var n=z[t],o=n[0],i=n[1],s=i.exec(e);if(s)return o}return null}function Se(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}const Ee={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_NONCE:"s1pfczz0bb",VITE_TRACKER_WEBSITE_ID:"7df5cbae-d6f2-44b1-9aec-956a13891bb1"},{SSR:Re}=Ee;let W=null;function ve(){return Re?null:(W||(W=Object.freeze(ye(navigator.userAgent))),W)}function xe(){const e=ve();return e?.name==="safari"||e?.os==="iOS"}function Ce(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),t&&(n.href=t),o.href=e,o.href}const Te=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function m(e){const t=[];for(let r=0,n=e.length;r<n;r++)t.push(e[r]);return t}function A(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function Ae(e){const t=A(e,"border-left-width"),r=A(e,"border-right-width");return e.clientWidth+t+r}function Pe(e){const t=A(e,"border-top-width"),r=A(e,"border-bottom-width");return e.clientHeight+t+r}function ee(e,t={}){const r=t.width||Ae(e),n=t.height||Pe(e);return{width:r,height:n}}function Oe(){let e,t;try{t=process}catch{}const r=t&&t.env?t.env.devicePixelRatio:null;return r&&(e=parseInt(r,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const g=16384;function $e(e){(e.width>g||e.height>g)&&(e.width>g&&e.height>g?e.width>e.height?(e.height*=g/e.width,e.width=g):(e.width*=g/e.height,e.height=g):e.width>g?(e.height*=g/e.width,e.width=g):(e.width*=g/e.height,e.height=g))}function P(e){return new Promise((t,r)=>{const n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function Ie(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function We(e,t,r){const n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${r}`),o.setAttribute("viewBox",`0 0 ${t} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),Ie(o)}const h=(e,t)=>{if(e instanceof t)return!0;const r=Object.getPrototypeOf(e);return r===null?!1:r.constructor.name===t.name||h(r,t)};function Le(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function _e(e){return m(e).map(t=>{const r=e.getPropertyValue(t),n=e.getPropertyPriority(t);return`${t}: ${r}${n?" !important":""};`}).join(" ")}function Be(e,t,r){const n=`.${e}:${t}`,o=r.cssText?Le(r):_e(r);return document.createTextNode(`${n}{${o}}`)}function X(e,t,r){const n=window.getComputedStyle(e,r),o=n.getPropertyValue("content");if(o===""||o==="none")return;const i=Te();try{t.className=`${t.className} ${i}`}catch{return}const s=document.createElement("style");s.appendChild(Be(i,r,n)),t.appendChild(s)}function Me(e,t){X(e,t,":before"),X(e,t,":after")}const K="application/font-woff",q="image/jpeg",ke={woff:K,woff2:K,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:q,jpeg:q,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function De(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function M(e){const t=De(e).toLowerCase();return ke[t]||""}function Ue(e){return e.split(/,/)[1]}function _(e){return e.search(/^(data:)/)!==-1}function Fe(e,t){return`data:${t};base64,${e}`}async function te(e,t,r){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const o=await n.blob();return new Promise((i,s)=>{const a=new FileReader;a.onerror=s,a.onloadend=()=>{try{i(r({res:n,result:a.result}))}catch(c){s(c)}},a.readAsDataURL(o)})}const L={};function Ve(e,t,r){let n=e.replace(/\?.*/,"");return r&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function k(e,t,r){const n=Ve(e,t,r.includeQueryParams);if(L[n]!=null)return L[n];r.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{const i=await te(e,r.fetchRequestInit,({res:s,result:a})=>(t||(t=s.headers.get("Content-Type")||""),Ue(a)));o=Fe(i,t)}catch(i){o=r.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;i&&(s=typeof i=="string"?i:i.message),s&&console.warn(s)}return L[n]=o,o}async function He(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):P(t)}async function je(e,t){if(e.currentSrc){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,s?.drawImage(e,0,0,i.width,i.height);const a=i.toDataURL();return P(a)}const r=e.poster,n=M(r),o=await k(r,n,t);return P(o)}async function Ge(e){var t;try{if(!((t=e?.contentDocument)===null||t===void 0)&&t.body)return await O(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function ze(e,t){return h(e,HTMLCanvasElement)?He(e):h(e,HTMLVideoElement)?je(e,t):h(e,HTMLIFrameElement)?Ge(e):e.cloneNode(!1)}const Xe=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Ke(e,t,r){var n,o;let i=[];return Xe(e)&&e.assignedNodes?i=m(e.assignedNodes()):h(e,HTMLIFrameElement)&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?i=m(e.contentDocument.body.childNodes):i=m(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),i.length===0||h(e,HTMLVideoElement)||await i.reduce((s,a)=>s.then(()=>O(a,r)).then(c=>{c&&t.appendChild(c)}),Promise.resolve()),t}function qe(e,t){const r=t.style;if(!r)return;const n=window.getComputedStyle(e);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):m(n).forEach(o=>{let i=n.getPropertyValue(o);o==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),h(e,HTMLIFrameElement)&&o==="display"&&i==="inline"&&(i="block"),o==="d"&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),r.setProperty(o,i,n.getPropertyPriority(o))})}function Je(e,t){h(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),h(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Qe(e,t){if(h(e,HTMLSelectElement)){const r=t,n=Array.from(r.children).find(o=>e.value===o.getAttribute("value"));n&&n.setAttribute("selected","")}}function Ye(e,t){return h(t,Element)&&(qe(e,t),Me(e,t),Je(e,t),Qe(e,t)),t}async function Ze(e,t){const r=e.querySelectorAll?e.querySelectorAll("use"):[];if(r.length===0)return e;const n={};for(let i=0;i<r.length;i++){const a=r[i].getAttribute("xlink:href");if(a){const c=e.querySelector(a),l=document.querySelector(a);!c&&l&&!n[a]&&(n[a]=await O(l,t,!0))}}const o=Object.values(n);if(o.length){const i="http://www.w3.org/1999/xhtml",s=document.createElementNS(i,"svg");s.setAttribute("xmlns",i),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";const a=document.createElementNS(i,"defs");s.appendChild(a);for(let c=0;c<o.length;c++)a.appendChild(o[c]);e.appendChild(s)}return e}async function O(e,t,r){return!r&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>ze(n,t)).then(n=>Ke(e,n,t)).then(n=>Ye(e,n)).then(n=>Ze(n,t))}const ne=/url\((['"]?)([^'"]+?)\1\)/g,Ne=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,et=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function tt(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function nt(e){const t=[];return e.replace(ne,(r,n,o)=>(t.push(o),r)),t.filter(r=>!_(r))}async function rt(e,t,r,n,o){try{const i=r?Ce(t,r):t,s=M(t);let a;return o||(a=await k(i,s,n)),e.replace(tt(t),`$1${a}$3`)}catch{}return e}function ot(e,{preferredFontFormat:t}){return t?e.replace(et,r=>{for(;;){const[n,,o]=Ne.exec(r)||[];if(!o)return"";if(o===t)return`src: ${n};`}}):e}function re(e){return e.search(ne)!==-1}async function oe(e,t,r){if(!re(e))return e;const n=ot(e,r);return nt(n).reduce((i,s)=>i.then(a=>rt(a,s,t,r)),Promise.resolve(n))}async function T(e,t,r){var n;const o=(n=t.style)===null||n===void 0?void 0:n.getPropertyValue(e);if(o){const i=await oe(o,null,r);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function it(e,t){await T("background",e,t)||await T("background-image",e,t),await T("mask",e,t)||await T("mask-image",e,t)}async function st(e,t){const r=h(e,HTMLImageElement);if(!(r&&!_(e.src))&&!(h(e,SVGImageElement)&&!_(e.href.baseVal)))return;const n=r?e.src:e.href.baseVal,o=await k(n,M(n),t);await new Promise((i,s)=>{e.onload=i,e.onerror=s;const a=e;a.decode&&(a.decode=i),a.loading==="lazy"&&(a.loading="eager"),r?(e.srcset="",e.src=o):e.href.baseVal=o})}async function at(e,t){const n=m(e.childNodes).map(o=>ie(o,t));await Promise.all(n).then(()=>e)}async function ie(e,t){h(e,Element)&&(await it(e,t),await st(e,t),await at(e,t))}function ct(e,t){const{style:r}=e;t.backgroundColor&&(r.backgroundColor=t.backgroundColor),t.width&&(r.width=`${t.width}px`),t.height&&(r.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(o=>{r[o]=n[o]}),e}const J={};async function Q(e){let t=J[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},J[e]=t,t}async function Y(e,t){let r=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map(async s=>{let a=s.replace(n,"$1");return a.startsWith("https://")||(a=new URL(a,e.url).href),te(a,t.fetchRequestInit,({result:c})=>(r=r.replace(s,`url(${c})`),[s,c]))});return Promise.all(i).then(()=>r)}function Z(e){if(e==null)return[];const t=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(r,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=o.exec(n);if(c===null)break;t.push(c[0])}n=n.replace(o,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",a=new RegExp(s,"gi");for(;;){let c=i.exec(n);if(c===null){if(c=a.exec(n),c===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;t.push(c[0])}return t}async function lt(e,t){const r=[],n=[];return e.forEach(o=>{if("cssRules"in o)try{m(o.cssRules||[]).forEach((i,s)=>{if(i.type===CSSRule.IMPORT_RULE){let a=s+1;const c=i.href,l=Q(c).then(d=>Y(d,t)).then(d=>Z(d).forEach(f=>{try{o.insertRule(f,f.startsWith("@import")?a+=1:o.cssRules.length)}catch(b){console.error("Error inserting rule from remote css",{rule:f,error:b})}})).catch(d=>{console.error("Error loading remote css",d.toString())});n.push(l)}})}catch(i){const s=e.find(a=>a.href==null)||document.styleSheets[0];o.href!=null&&n.push(Q(o.href).then(a=>Y(a,t)).then(a=>Z(a).forEach(c=>{s.insertRule(c,o.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(e.forEach(o=>{if("cssRules"in o)try{m(o.cssRules||[]).forEach(i=>{r.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${o.href}`,i)}}),r))}function ut(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>re(t.style.getPropertyValue("src")))}async function ft(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=m(e.ownerDocument.styleSheets),n=await lt(r,t);return ut(n)}async function dt(e,t){const r=await ft(e,t);return(await Promise.all(r.map(o=>{const i=o.parentStyleSheet?o.parentStyleSheet.href:null;return oe(o.cssText,i,t)}))).join(`
`)}async function ht(e,t){const r=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await dt(e,t);if(r){const n=document.createElement("style"),o=document.createTextNode(r);n.appendChild(o),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function gt(e,t={}){const{width:r,height:n}=ee(e,t),o=await O(e,t,!0);return await ht(o,t),await ie(o,t),ct(o,t),await We(o,r,n)}async function mt(e,t={}){const{width:r,height:n}=ee(e,t),o=await gt(e,t),i=await P(o),s=document.createElement("canvas"),a=s.getContext("2d"),c=t.pixelRatio||Oe(),l=t.canvasWidth||r,d=t.canvasHeight||n;return s.width=l*c,s.height=d*c,t.skipAutoScale||$e(s),s.style.width=`${l}`,s.style.height=`${d}`,t.backgroundColor&&(a.fillStyle=t.backgroundColor,a.fillRect(0,0,s.width,s.height)),a.drawImage(i,0,0,s.width,s.height),s}async function B(e,t=0,r=1){const n=await mt(e);return await new Promise(o=>setTimeout(o,r)),t>0?B(e,t-1,r):n}function wt(e){return e.toDataURL("image/jpeg",1)}function pt(e){return e.toDataURL()}async function yt(e,t,r,n=!1){const o=n&&xe()?await B(e,10,150):await B(e);switch(t){case"PNG":return H(pt(o),`${r}.png`);case"JPEG":return H(wt(o),`${r}.jpeg`)}}export{ce as c,yt as d,le as g,xe as i};
