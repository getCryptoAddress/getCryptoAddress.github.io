import{u as qe,a as Je,e as Ze,i as X,j as ee,_ as et,b as ae,f as ie,d as tt}from"./downloadHtmlAsPng-577d82eb.js";import{d as P,g as b,C as ge,bA as te,I as E,A as be,H as nt,aO as ot,a6 as we,l as ye,al as rt,a8 as G,aa as at,ab as it,a9 as st,ag as q,ah as se,p as x,aj as lt,ak as _e,af as dt,ai as xe,s as g,bB as V,t as M,v as L,u as A,ao as ct,ar as ut,G as Se,bC as ft,E as le,D as de,aE as ce,J as vt,as as ht,at as mt,O as F,aD as pt,a1 as gt,o as T,c as W,a as Y,bt,bc as U,an as $e,_ as ne,b as N,bD as wt,aQ as J,aS as yt,aR as Z,aH as Te,w as j,aK as R,aL as z,$ as Ee,aT as Ie,e as ke,aN as _t,bE as xt,bf as St,r as $t,bk as Tt}from"./index-7959f200.js";const Et=P({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=b(!!e.show),n=b(null),i=ge(te);let d=0,f="",u=null;const h=b(!1),v=b(!1),c=E(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:m,mergedRtlRef:w}=be(e),S=nt("Drawer",w,m),y=r=>{v.value=!0,d=c.value?r.clientY:r.clientX,f=document.body.style.cursor,document.body.style.cursor=c.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",$),document.body.addEventListener("mouseleave",s),document.body.addEventListener("mouseup",I)},C=()=>{u!==null&&(window.clearTimeout(u),u=null),v.value?h.value=!0:u=window.setTimeout(()=>{h.value=!0},300)},B=()=>{u!==null&&(window.clearTimeout(u),u=null),h.value=!1},{doUpdateHeight:D,doUpdateWidth:_}=i,$=r=>{var a,p;if(v.value)if(c.value){let k=((a=n.value)===null||a===void 0?void 0:a.offsetHeight)||0;const O=d-r.clientY;k+=e.placement==="bottom"?O:-O,D(k),d=r.clientY}else{let k=((p=n.value)===null||p===void 0?void 0:p.offsetWidth)||0;const O=d-r.clientX;k+=e.placement==="right"?O:-O,_(k),d=r.clientX}},I=()=>{v.value&&(d=0,v.value=!1,document.body.style.cursor=f,document.body.removeEventListener("mousemove",$),document.body.removeEventListener("mouseup",I),document.body.removeEventListener("mouseleave",s))},s=I;ot(()=>{e.show&&(t.value=!0)}),we(()=>e.show,r=>{r||I()}),ye(()=>{I()});const l=E(()=>{const{show:r}=e,a=[[se,r]];return e.showMask||a.push([rt,e.onClickoutside,void 0,{capture:!0}]),a});function o(){var r;t.value=!1,(r=e.onAfterLeave)===null||r===void 0||r.call(e)}return qe(E(()=>e.blockScroll&&t.value)),G(at,n),G(it,null),G(st,null),{bodyRef:n,rtlEnabled:S,mergedClsPrefix:i.mergedClsPrefixRef,isMounted:i.isMountedRef,mergedTheme:i.mergedThemeRef,displayed:t,transitionName:E(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:o,bodyDirectives:l,handleMousedownResizeTrigger:y,handleMouseenterResizeTrigger:C,handleMouseleaveResizeTrigger:B,isDragging:v,isHoverOnResizeTrigger:h}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?q(x("div",{role:"none"},x(lt,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>x(_e,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>q(x("div",dt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?x("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?x("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):x(xe,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[se,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:It,cubicBezierEaseOut:kt}=V;function zt({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-right"}={}){return[g(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${It}`}),g(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${kt}`}),g(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),g(`&.${n}-transition-enter-from`,{transform:"translateX(100%)"}),g(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),g(`&.${n}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ct,cubicBezierEaseOut:Mt}=V;function Ot({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-left"}={}){return[g(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Ct}`}),g(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Mt}`}),g(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),g(`&.${n}-transition-enter-from`,{transform:"translateX(-100%)"}),g(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),g(`&.${n}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Rt,cubicBezierEaseOut:Pt}=V;function Bt({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-top"}={}){return[g(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Rt}`}),g(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Pt}`}),g(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),g(`&.${n}-transition-enter-from`,{transform:"translateY(-100%)"}),g(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),g(`&.${n}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Dt,cubicBezierEaseOut:Lt}=V;function jt({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-bottom"}={}){return[g(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Dt}`}),g(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Lt}`}),g(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),g(`&.${n}-transition-enter-from`,{transform:"translateY(100%)"}),g(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),g(`&.${n}-transition-leave-to`,{transform:"translateY(100%)"})]}const Wt=g([M("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[zt(),Ot(),Bt(),jt(),L("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),L("native-scrollbar",[M("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),A("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[L("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),M("drawer-content-wrapper",`
 box-sizing: border-box;
 `),M("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[L("native-scrollbar",[M("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),M("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),M("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),M("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),M("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),L("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),L("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[A("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),L("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),L("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[A("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),g("body",[g(">",[M("drawer-container",{position:"fixed"})])]),M("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[g("> *",{pointerEvents:"all"})]),M("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[L("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),ct({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Ft=Object.assign(Object.assign({},Se.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Nt=P({name:"Drawer",inheritAttrs:!1,props:Ft,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:i}=be(e),d=ut(),f=Se("Drawer","-drawer",Wt,ft,e,t),u=b(e.defaultWidth),h=b(e.defaultHeight),v=le(de(e,"width"),u),c=le(de(e,"height"),h),m=E(()=>{const{placement:l}=e;return l==="top"||l==="bottom"?"":ce(v.value)}),w=E(()=>{const{placement:l}=e;return l==="left"||l==="right"?"":ce(c.value)}),S=l=>{const{onUpdateWidth:o,"onUpdate:width":r}=e;o&&F(o,l),r&&F(r,l),u.value=l},y=l=>{const{onUpdateHeight:o,"onUpdate:width":r}=e;o&&F(o,l),r&&F(r,l),h.value=l},C=E(()=>[{width:m.value,height:w.value},e.drawerStyle||""]);function B(l){const{onMaskClick:o,maskClosable:r}=e;r&&$(!1),o&&o(l)}const D=Je();function _(l){var o;(o=e.onEsc)===null||o===void 0||o.call(e),e.show&&e.closeOnEsc&&Ze(l)&&!D.value&&$(!1)}function $(l){const{onHide:o,onUpdateShow:r,"onUpdate:show":a}=e;r&&F(r,l),a&&F(a,l),o&&!l&&F(o,l)}G(te,{isMountedRef:d,mergedThemeRef:f,mergedClsPrefixRef:t,doUpdateShow:$,doUpdateHeight:y,doUpdateWidth:S});const I=E(()=>{const{common:{cubicBezierEaseInOut:l,cubicBezierEaseIn:o,cubicBezierEaseOut:r},self:{color:a,textColor:p,boxShadow:k,lineHeight:O,headerPadding:Pe,footerPadding:Be,bodyPadding:De,titleFontSize:Le,titleTextColor:je,titleFontWeight:We,headerBorderBottom:Fe,footerBorderTop:Ne,closeIconColor:Ae,closeIconColorHover:Ue,closeIconColorPressed:He,closeColorHover:Xe,closeColorPressed:Ge,closeIconSize:Ye,closeSize:Ve,closeBorderRadius:Qe,resizableTriggerColorHover:Ke}}=f.value;return{"--n-line-height":O,"--n-color":a,"--n-text-color":p,"--n-box-shadow":k,"--n-bezier":l,"--n-bezier-out":r,"--n-bezier-in":o,"--n-header-padding":Pe,"--n-body-padding":De,"--n-footer-padding":Be,"--n-title-text-color":je,"--n-title-font-size":Le,"--n-title-font-weight":We,"--n-header-border-bottom":Fe,"--n-footer-border-top":Ne,"--n-close-icon-color":Ae,"--n-close-icon-color-hover":Ue,"--n-close-icon-color-pressed":He,"--n-close-size":Ve,"--n-close-color-hover":Xe,"--n-close-color-pressed":Ge,"--n-close-icon-size":Ye,"--n-close-border-radius":Qe,"--n-resize-trigger-color-hover":Ke}}),s=i?vt("drawer",void 0,I,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:C,handleMaskClick:B,handleEsc:_,mergedTheme:f,cssVars:i?void 0:I,themeClass:s?.themeClass,onRender:s?.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return x(mt,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),q(x("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?x(_e,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?x("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,x(Et,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[ht,{zIndex:this.zIndex,enabled:this.show}]])}})}}),At={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Ut=P({name:"DrawerContent",props:At,setup(){const e=ge(te,null);e||pt("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:i,bodyStyle:d,bodyContentStyle:f,headerStyle:u,footerStyle:h,scrollbarProps:v,closable:c,$slots:m}=this;return x("div",{role:"none",class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},m.header||e||c?x("div",{class:`${t}-drawer-header`,style:u,role:"none"},x("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},m.header!==void 0?m.header():e),c&&x(gt,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?x("div",{class:`${t}-drawer-body`,style:d,role:"none"},x("div",{class:`${t}-drawer-body-content-wrapper`,style:f,role:"none"},m)):x(xe,Object.assign({themeOverrides:i.peerOverrides.Scrollbar,theme:i.peers.Scrollbar},v,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:f}),m),m.footer?x("div",{class:`${t}-drawer-footer`,style:h,role:"none"},m.footer()):null)}}),Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Xt=Y("g",{fill:"none"},[Y("path",{d:"M3.5 13h9a.5.5 0 0 1 .09.992L12.5 14h-9a.5.5 0 0 1-.09-.992L3.5 13h9h-9zM7.91 1.008L8 1a.5.5 0 0 1 .492.41l.008.09v8.792l2.682-2.681a.5.5 0 0 1 .638-.058l.07.058a.5.5 0 0 1 .057.638l-.058.069l-3.535 3.536a.5.5 0 0 1-.638.057l-.07-.057l-3.535-3.536a.5.5 0 0 1 .638-.765l.069.058L7.5 10.292V1.5a.5.5 0 0 1 .41-.492L8 1l-.09.008z",fill:"currentColor"})],-1),Gt=[Xt],ze=P({name:"ArrowDownload16Regular",render:function(t,n){return T(),W("svg",Ht,Gt)}});function Yt(e){return new Promise(t=>{const n=new Image;n.onload=function(){t({width:n.width,height:n.height,src:e})},n.src=e})}function Vt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var oe=Vt,Qt=typeof X=="object"&&X&&X.Object===Object&&X,Kt=Qt,qt=Kt,Jt=typeof self=="object"&&self&&self.Object===Object&&self,Zt=qt||Jt||Function("return this")(),Ce=Zt,en=Ce,tn=function(){return en.Date.now()},nn=tn,on=/\s/;function rn(e){for(var t=e.length;t--&&on.test(e.charAt(t)););return t}var an=rn,sn=an,ln=/^\s+/;function dn(e){return e&&e.slice(0,sn(e)+1).replace(ln,"")}var cn=dn,un=Ce,fn=un.Symbol,Me=fn,ue=Me,Oe=Object.prototype,vn=Oe.hasOwnProperty,hn=Oe.toString,H=ue?ue.toStringTag:void 0;function mn(e){var t=vn.call(e,H),n=e[H];try{e[H]=void 0;var i=!0}catch{}var d=hn.call(e);return i&&(t?e[H]=n:delete e[H]),d}var pn=mn,gn=Object.prototype,bn=gn.toString;function wn(e){return bn.call(e)}var yn=wn,fe=Me,_n=pn,xn=yn,Sn="[object Null]",$n="[object Undefined]",ve=fe?fe.toStringTag:void 0;function Tn(e){return e==null?e===void 0?$n:Sn:ve&&ve in Object(e)?_n(e):xn(e)}var En=Tn;function In(e){return e!=null&&typeof e=="object"}var kn=In,zn=En,Cn=kn,Mn="[object Symbol]";function On(e){return typeof e=="symbol"||Cn(e)&&zn(e)==Mn}var Rn=On,Pn=cn,he=oe,Bn=Rn,me=0/0,Dn=/^[-+]0x[0-9a-f]+$/i,Ln=/^0b[01]+$/i,jn=/^0o[0-7]+$/i,Wn=parseInt;function Fn(e){if(typeof e=="number")return e;if(Bn(e))return me;if(he(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=he(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Pn(e);var n=Ln.test(e);return n||jn.test(e)?Wn(e.slice(2),n?2:8):Dn.test(e)?me:+e}var Nn=Fn,An=oe,K=nn,pe=Nn,Un="Expected a function",Hn=Math.max,Xn=Math.min;function Gn(e,t,n){var i,d,f,u,h,v,c=0,m=!1,w=!1,S=!0;if(typeof e!="function")throw new TypeError(Un);t=pe(t)||0,An(n)&&(m=!!n.leading,w="maxWait"in n,f=w?Hn(pe(n.maxWait)||0,t):f,S="trailing"in n?!!n.trailing:S);function y(o){var r=i,a=d;return i=d=void 0,c=o,u=e.apply(a,r),u}function C(o){return c=o,h=setTimeout(_,t),m?y(o):u}function B(o){var r=o-v,a=o-c,p=t-r;return w?Xn(p,f-a):p}function D(o){var r=o-v,a=o-c;return v===void 0||r>=t||r<0||w&&a>=f}function _(){var o=K();if(D(o))return $(o);h=setTimeout(_,B(o))}function $(o){return h=void 0,S&&i?y(o):(i=d=void 0,u)}function I(){h!==void 0&&clearTimeout(h),c=0,i=v=d=h=void 0}function s(){return h===void 0?u:$(K())}function l(){var o=K(),r=D(o);if(i=arguments,d=this,v=o,r){if(h===void 0)return C(v);if(w)return clearTimeout(h),h=setTimeout(_,t),y(v)}return h===void 0&&(h=setTimeout(_,t)),u}return l.cancel=I,l.flush=s,l}var Re=Gn;const Yn=ee(Re),xo=bt("paperWallet",()=>{const e=Yn(r,200,{leading:!0,trailing:!1}),t=b([]);function n(a){e(),t.value=[...a]}function i(a){e(),t.value=t.value.map(p=>p.id===a.id?a:p)}function d(a){e(),t.value=t.value.filter(p=>p.id!==a.id)}function f(a){const p=t.value.findIndex(O=>O.id===a.id);if(p===0)return;e();const k=t.value[p-1];t.value[p-1]=a,t.value[p]=k}function u(a){const p=t.value.findIndex(O=>O.id===a.id);if(p===t.value.length-1)return;e();const k=t.value[p+1];t.value[p+1]=a,t.value[p]=k}async function h(a="Text"){const p={id:`${Date.now()}`,type:"TEXT",text:a,align:"center",alignLast:"auto",color:"#333333FF",size:16,weight:400,position:{x:10,y:10,width:300,rotate:0,transformOrigin:"center center"}};e(),t.value.push(p)}async function v(a=""){const{width:p}=await Yt(a),k={id:`${Date.now()}`,type:"IMAGE",src:a,position:{x:0,y:0,width:p,rotate:0,transformOrigin:"center center"}};e(),t.value.push(k)}async function c(a="QrCode"){const p={id:`${Date.now()}`,type:"QR_CODE",text:a,color:"#000000FF",background:"#00000000",position:{x:0,y:0,width:100,rotate:0,transformOrigin:"center center"}};e(),t.value.push(p)}const m=E(()=>[...t.value].reverse());function w(a){n([...a].reverse())}const S=b("EDIT");function y(a){S.value=a}const C=b(null),B=E(()=>t.value.find(a=>a.id===C.value)||null);function D(a){if(!a){C.value=null;return}C.value=a.id}const _=b([]),$=b([]);function I(){if(!_.value.length)return;const a=_.value.splice(-1)[0];a&&($.value.push(t.value),t.value=a)}function s(){if(!$.value.length)return;const a=$.value.splice(-1)[0];a&&(_.value.push(t.value),t.value=a)}function l(){for(;_.value.length>=15;)_.value.shift();_.value.push([...t.value])}function o(){$.value=[]}function r(){l(),o()}return{items:t,canvasMode:S,selectedItemId:C,undoStack:_,redoStack:$,selectedItem:B,revertedItems:m,setItems:n,setRevertedItems:w,updateItem:i,addItemText:h,addItemImage:v,addItemQRCode:c,removeItem:d,moveItemUp:u,moveItemDown:f,setCanvasMode:y,setSelectItem:D,undo:I,redo:s}}),Vn=["innerHTML"],Qn=["innerHTML"],Kn="plaintext-only",qn=P({__name:"PaperWalletCanvasText",props:{item:{}},emits:["updateText"],setup(e,{emit:t}){const n=e,i=E(()=>({cursor:"move",position:"absolute",fontSize:n.item.size+"px",fontWeight:n.item.weight,textAlign:n.item.align,textAlignLast:n.item.alignLast,color:n.item.color,left:n.item.position.x+"px",top:n.item.position.y+"px",width:n.item.position.width+"px",overflowWrap:"anywhere",userSelect:"none",transform:`rotate(${n.item.position.rotate}deg)`,transformOrigin:n.item.position.transformOrigin,lineHeight:"normal"})),d=b(),f=b(!1),u=b(""),h=E(()=>n.item.text.replace(/\n/g,"<br>"));function v(w){const S=w.target?.textContent||"";t("updateText",S)}function c(){f.value=!0,u.value=n.item.text,$e(()=>{const w=d.value;if(!w)return;w.focus();const S=document.createRange();S.selectNodeContents(w),S.collapse(!1);const y=window.getSelection();y&&(y.removeAllRanges(),y.addRange(S))})}function m(){f.value=!1}return(w,S)=>f.value?(T(),W("div",{key:1,contenteditable:Kn,onBlur:m,onInput:v,style:U(i.value),ref_key:"editRef",ref:d,innerHTML:u.value,class:"paper-wallet-canvas-text__editable"},null,44,Qn)):(T(),W("div",{key:0,onDblclick:c,style:U(i.value),innerHTML:h.value},null,44,Vn))}});const Jn=ne(qn,[["__scopeId","data-v-75e3ff99"]]),Zn=["src"],eo=P({__name:"PaperWalletCanvasImage",props:{item:{}},emits:["load"],setup(e,{emit:t}){const n=e,i=E(()=>({cursor:"move",position:"absolute",left:n.item.position.x+"px",top:n.item.position.y+"px",width:n.item.position.width+"px",overflowWrap:"anywhere",userSelect:"none",transform:`rotate(${n.item.position.rotate}deg)`,transformOrigin:n.item.position.transformOrigin}));return(d,f)=>(T(),W("img",{src:d.item.src,alt:"",draggable:"false",style:U(i.value),onLoad:f[0]||(f[0]=u=>t("load",d.item))},null,44,Zn))}}),to=P({__name:"PaperWalletCanvasQrCode",props:{item:{}},setup(e){const t=e,n=E(()=>({cursor:"move",position:"absolute",left:t.item.position.x+"px",top:t.item.position.y+"px",width:t.item.position.width+"px",overflowWrap:"anywhere",userSelect:"none",transform:`rotate(${t.item.position.rotate}deg)`,transformOrigin:t.item.position.transformOrigin,lineHeight:0}));return(i,d)=>(T(),N(et,{text:i.item.text,width:i.item.position.width,style:U(n.value),background:i.item.background,color:i.item.color},null,8,["text","width","style","background","color"]))}}),no=P({__name:"PaperWalletCanvas",props:{items:{},view:{},isEditMode:{type:Boolean},selectedItemId:{}},emits:["updateItem","select","load"],setup(e,{expose:t,emit:n}){const i=e,d=b(null);let f=!1,u=null,h=0,v=0;function c(s,l){i.isEditMode&&(f=!0,u=s,n("select",s),h=s.position.x-l.clientX,v=s.position.y-l.clientY,addEventListener("mouseup",m))}function m(){f=!1,u=null,removeEventListener("mouseup",m)}function w(s,l){!i.isEditMode||l.touches.length>1||(f=!0,u=s,n("select",s),h=s.position.x-l.touches[0].clientX,v=s.position.y-l.touches[0].clientY,addEventListener("touchend",y),addEventListener("touchcancel",y))}function S(s){if(!f||!u||s.touches.length>1)return;s.preventDefault();const l=B(h+s.touches[0].clientX,v+s.touches[0].clientY,u);n("updateItem",l)}function y(){f=!1,u=null,removeEventListener("touchend",y),removeEventListener("touchcancel",y)}wt(()=>{removeEventListener("mouseup",m),removeEventListener("touchend",y),removeEventListener("touchcancel",y)});function C(s){if(!f||!u)return;const l=B(h+s.clientX,v+s.clientY,u);n("updateItem",l)}function B(s,l,o){return{...o,position:{...o.position,x:s,y:l}}}function D(s,l){const o={...s,text:l};n("updateItem",o)}const _=b([]),$=E(()=>new Set(i.items.filter(s=>s.type==="IMAGE").map(s=>s.id)));function I(s){_.value=[..._.value,s.id].filter(l=>$.value.has(l))}return we(()=>d.value&&_.value.length===$.value.size,s=>{s&&n("load")},{immediate:!0}),t({targetElement:d}),(s,l)=>(T(),W("div",{class:Te(["paper-wallet-canvas",{"paper-wallet-canvas--edit-mode":s.view==="EDIT","paper-wallet-canvas--print-mode":s.view==="PRINT"}]),onMousemove:C,onTouchmove:S,ref_key:"targetElement",ref:d},[(T(!0),W(J,null,yt(s.items,o=>(T(),W(J,{key:o.id},[o.type==="TEXT"?(T(),N(Jn,{key:0,item:o,onMousedown:r=>c(o,r),onTouchstart:r=>w(o,r),onUpdateText:r=>D(o,r),"data-selected-item":s.selectedItemId===o.id},null,8,["item","onMousedown","onTouchstart","onUpdateText","data-selected-item"])):Z("",!0),o.type==="IMAGE"?(T(),N(eo,{key:1,item:o,"data-selected-item":s.selectedItemId===o.id,onMousedown:r=>c(o,r),onTouchstart:r=>w(o,r),onLoad:I},null,8,["item","data-selected-item","onMousedown","onTouchstart"])):o.type==="QR_CODE"?(T(),N(to,{key:2,item:o,onMousedown:r=>c(o,r),onTouchstart:r=>w(o,r),"data-selected-item":s.selectedItemId===o.id},null,8,["item","onMousedown","onTouchstart","data-selected-item"])):Z("",!0)],64))),128))],34))}});const oo=ne(no,[["__scopeId","data-v-400b4352"]]);const ro=P({__name:"PaperWalletDownloadForm",props:{loading:{type:Boolean}},emits:["submit"],setup(e,{emit:t}){const n=b("PNG"),i=b("PRINT"),d=[{label:"Download as PNG",value:"PNG"},{label:"Download as JPEG",value:"JPEG"}],f=[{label:"Print Mode",value:"PRINT"},{label:"Preview Mode",value:"VIEW"},{label:"Edit Mode",value:"EDIT"}];async function u(){t("submit",{typeOfDownload:n.value,canvasMode:i.value})}return(h,v)=>(T(),N(z(_t),null,{default:j(()=>[R(z(ae),{trigger:"hover",options:d,value:n.value,"onUpdate:value":v[0]||(v[0]=c=>n.value=c),"consistent-menu-width":!1,style:{minWidth:"170px"}},null,8,["value"]),R(z(ae),{trigger:"hover",options:f,value:i.value,"onUpdate:value":v[1]||(v[1]=c=>i.value=c),"consistent-menu-width":!1,style:{minWidth:"170px"}},null,8,["value"]),R(z(Ee),{loading:h.loading,onClick:u},{icon:j(()=>[R(z(Ie),null,{default:j(()=>[R(z(ze))]),_:1})]),default:j(()=>[ke(" Download ")]),_:1},8,["loading"])]),_:1}))}});var ao=Re,io=oe,so="Expected a function";function lo(e,t,n){var i=!0,d=!0;if(typeof e!="function")throw new TypeError(so);return io(n)&&(i="leading"in n?!!n.leading:i,d="trailing"in n?!!n.trailing:d),ao(e,t,{leading:i,maxWait:t,trailing:d})}var co=lo;const uo=ee(co),fo={class:"resizable-paper-wallet-wrapper"},vo=P({__name:"ResizablePaperWalletWrapper",props:{bordered:{type:Boolean}},setup(e){const t=e,n=b(),i=xt(),d=b(1),f=b("auto"),u=E(()=>({"resizable-paper-wallet-wrapper__container":!0,"resizable-paper-wallet-wrapper__bordered":t.bordered,"resizable-paper-wallet-wrapper__bordered--dark":t.bordered&&i.value}));function h(c){return Math.max(0,...[...c.children].map(m=>m instanceof HTMLDivElement?m.offsetWidth:0))}const v=uo(()=>{if(!n.value){console.error("Container not found");return}const c=h(n.value);if(!c)return;const m=n.value.offsetWidth/c;d.value=m<1?m:1,f.value=`${n.value.offsetHeight*d.value}px`},100);return St(()=>{window.addEventListener("resize",v),v()}),ye(()=>{window.removeEventListener("resize",v)}),(c,m)=>(T(),W("div",fo,[Y("div",{ref:"container",class:Te(u.value),style:U({height:f.value})},[Y("div",{class:"resizable-paper-wallet-wrapper__area",ref_key:"area",ref:n,style:U({transform:`scale(${d.value})`})},[$t(c.$slots,"default",{},void 0,!0)],4)],6)]))}});const So=ne(vo,[["__scopeId","data-v-6d560681"]]);function ho(e,t){switch(t){case"PNG":return ie(e,"paper-wallet");case"JPEG":return ie(e,"paper-wallet")}}var Q={exports:{}};Q.exports=re;Q.exports.isMobile=re;Q.exports.default=re;const mo=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,po=/CrOS/,go=/android|ipad|playbook|silk/i;function re(e){e||(e={});let t=e.ua;if(!t&&typeof navigator<"u"&&(t=navigator.userAgent),t&&t.headers&&typeof t.headers["user-agent"]=="string"&&(t=t.headers["user-agent"]),typeof t!="string")return!1;let n=mo.test(t)&&!po.test(t)||!!e.tablet&&go.test(t);return!n&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&t.indexOf("Macintosh")!==-1&&t.indexOf("Safari")!==-1&&(n=!0),n}var bo=Q.exports;const wo=ee(bo),$o=P({__name:"DownloadPaperWallet",props:{items:{}},setup(e){const t=tt(),n=b(),i=b(!1),d=b(!1),f=b("PNG"),u=b("PRINT");async function h(c){u.value=c.canvasMode,f.value=c.typeOfDownload,d.value=!0}async function v(){await $e(),await new Promise(c=>setTimeout(c,wo()?500:1));try{let c=n.value?.targetElement;if(!c){d.value=!1,t.error("Problem with canvas element");return}await ho(c,f.value)}catch(c){t.error(typeof c=="string"?c:"Something went wrong")}finally{d.value=!1}}return(c,m)=>(T(),W(J,null,[R(z(Ee),{onClick:m[0]||(m[0]=w=>i.value=!i.value)},{icon:j(()=>[R(z(Ie),null,{default:j(()=>[R(z(ze))]),_:1})]),default:j(()=>[ke(" Download Image ")]),_:1}),R(z(Nt),{show:i.value,"onUpdate:show":m[1]||(m[1]=w=>i.value=w),height:320,placement:"bottom"},{default:j(()=>[R(z(Ut),{title:"Download paper wallet",closable:""},{default:j(()=>[R(z(ro),{loading:d.value,onSubmit:h},null,8,["loading"])]),_:1})]),_:1},8,["show"]),(T(),N(Tt,{to:"body"},[d.value?(T(),N(z(oo),{key:0,items:c.items,view:u.value,ref_key:"canvasEl",ref:n,onLoad:v},null,8,["items","view"])):Z("",!0)]))],64))}});export{Ut as N,oo as P,So as R,$o as _,Nt as a,xo as u};
