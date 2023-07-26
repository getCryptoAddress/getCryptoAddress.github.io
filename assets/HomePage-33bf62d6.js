import{c as G,a as q,b as g,d as f,e as z,f as i,g as H,h as K,i as J,j as A,u as Q,k as W,l as U,m as $,n as X,r as Y,o as s,N as Z,p as ee,q as d,s as oe,t as re,v as ne,w as te,E as se,W as le,I as ie,S as ae,x as ce,_ as de,y as B,z as ue,A as _,B as he,C as ge,D as E,F as fe,G as T,H as pe}from"./index-9e848c44.js";const be=r=>{const{lineHeight:e,borderRadius:a,fontWeightStrong:v,baseColor:l,dividerColor:p,actionColor:w,textColor1:u,textColor2:t,closeColorHover:h,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:n,infoColor:o,successColor:x,warningColor:I,errorColor:y,fontSize:S}=r;return Object.assign(Object.assign({},q),{fontSize:S,lineHeight:e,titleFontWeight:v,borderRadius:a,border:`1px solid ${p}`,color:w,titleTextColor:u,iconColor:t,contentTextColor:t,closeBorderRadius:a,closeColorHover:h,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${g(l,f(o,{alpha:.25}))}`,colorInfo:g(l,f(o,{alpha:.08})),titleTextColorInfo:u,iconColorInfo:o,contentTextColorInfo:t,closeColorHoverInfo:h,closeColorPressedInfo:b,closeIconColorInfo:C,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${g(l,f(x,{alpha:.25}))}`,colorSuccess:g(l,f(x,{alpha:.08})),titleTextColorSuccess:u,iconColorSuccess:x,contentTextColorSuccess:t,closeColorHoverSuccess:h,closeColorPressedSuccess:b,closeIconColorSuccess:C,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${g(l,f(I,{alpha:.33}))}`,colorWarning:g(l,f(I,{alpha:.08})),titleTextColorWarning:u,iconColorWarning:I,contentTextColorWarning:t,closeColorHoverWarning:h,closeColorPressedWarning:b,closeIconColorWarning:C,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${g(l,f(y,{alpha:.25}))}`,colorError:g(l,f(y,{alpha:.08})),titleTextColorError:u,iconColorError:y,contentTextColorError:t,closeColorHoverError:h,closeColorPressedError:b,closeIconColorError:C,closeIconColorHoverError:m,closeIconColorPressedError:n})},ve={name:"Alert",common:G,self:be},Ce=ve,me=z("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),H("closable",[z("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),z("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),K({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),H("show-icon",[z("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),z("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[J("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),_e=Object.assign(Object.assign({},W.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),xe=A({name:"Alert",inheritAttrs:!1,props:_e,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:v,mergedRtlRef:l}=Q(r),p=W("Alert","-alert",me,Ce,r,e),w=U("Alert",l,e),u=$(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=p.value,{fontSize:x,borderRadius:I,titleFontWeight:y,lineHeight:S,iconSize:R,iconMargin:P,iconMarginRtl:k,closeIconSize:L,closeBorderRadius:j,closeSize:N,closeMargin:F,closeMarginRtl:V,padding:M}=o,{type:c}=r,{left:O,right:D}=ee(P);return{"--n-bezier":n,"--n-color":o[d("color",c)],"--n-close-icon-size":L,"--n-close-border-radius":j,"--n-close-color-hover":o[d("closeColorHover",c)],"--n-close-color-pressed":o[d("closeColorPressed",c)],"--n-close-icon-color":o[d("closeIconColor",c)],"--n-close-icon-color-hover":o[d("closeIconColorHover",c)],"--n-close-icon-color-pressed":o[d("closeIconColorPressed",c)],"--n-icon-color":o[d("iconColor",c)],"--n-border":o[d("border",c)],"--n-title-text-color":o[d("titleTextColor",c)],"--n-content-text-color":o[d("contentTextColor",c)],"--n-line-height":S,"--n-border-radius":I,"--n-font-size":x,"--n-title-font-weight":y,"--n-icon-size":R,"--n-icon-margin":P,"--n-icon-margin-rtl":k,"--n-close-size":N,"--n-close-margin":F,"--n-close-margin-rtl":V,"--n-padding":M,"--n-icon-margin-left":O,"--n-icon-margin-right":D}}),t=v?X("alert",$(()=>r.type[0]),u,r):void 0,h=Y(!0),b=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:w,mergedClsPrefix:e,mergedBordered:a,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(h.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:p,cssVars:v?void 0:u,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(Z,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,v={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},oe(this.$attrs,v)),this.closable&&s(re,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${e}-alert__border`}),this.showIcon&&s("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},ne(a.icon,()=>[s(te,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return s(ae,null);case"info":return s(ie,null);case"warning":return s(le,null);case"error":return s(se,null);default:return null}}})])),s("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ce(a.header,l=>{const p=l||this.title;return p?s("div",{class:`${e}-alert-body__title`},p):null}),a.default&&s("div",{class:`${e}-alert-body__content`},a))):null}})}});const Ie={},ye={class:"page-description"};function ze(r,e){return B(),ue("main",ye,[_("div",null,[he(r.$slots,"default",{},void 0,!0)])])}const we=de(Ie,[["render",ze],["__scopeId","data-v-519decd7"]]),Se=_("a",{href:"https://github.com/getCryptoAddress/getCryptoAddress.github.io",target:"_blank",rel:"noopener noreferrer"}," GitHub ",-1),Te=_("p",null," Welcome to our website where you can generate cryptocurrency addresses and create paper wallets for free. We offer a variety of paper wallet templates, as well as the opportunity to design your own unique wallet. ",-1),Pe=_("p",null,[T(" This project is open source, and all the code is available for review on "),_("a",{href:"https://github.com/getCryptoAddress/getCryptoAddress.github.io",target:"_blank",rel:"noopener noreferrer"}," GitHub "),T(". We invite you to support us by contributing to the code or making a donation. ")],-1),He=_("p",null," Enjoy a comfortable and secure cryptocurrency wallet creation experience! ",-1),Ee=A({__name:"HomePage",setup(r){return(e,a)=>(B(),ge(we,null,{default:E(()=>[fe(pe(xe),{title:"Beta",type:"info"},{default:E(()=>[T(" We are in beta. If you find a bug, please report it to us on "),Se]),_:1}),Te,Pe,He]),_:1}))}});export{Ee as default};
