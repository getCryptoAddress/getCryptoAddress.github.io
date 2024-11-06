import{D as U}from"./DonationList-Ds8bebyM.js";import{d as X,c as Y,a as g,b as h,e as x,f as a,g as $,h as Z,i as ee,j as k,u as oe,k as L,l as re,m as W,n as ne,r as te,o as l,N as se,p as le,q as d,s as ie,t as ae,v as ce,w as de,E as ue,W as fe,I as ge,S as he,x as ve,_ as j,y as E,z as N,A as z,B as be,C as pe,D as R,F as w,G as P,H as A}from"./index-Qa7pNrPl.js";function Ce(n){const{lineHeight:e,borderRadius:o,fontWeightStrong:p,baseColor:i,dividerColor:v,actionColor:S,textColor1:u,textColor2:s,closeColorHover:f,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:t,infoColor:r,successColor:I,warningColor:y,errorColor:_,fontSize:T}=n;return Object.assign(Object.assign({},Y),{fontSize:T,lineHeight:e,titleFontWeight:p,borderRadius:o,border:`1px solid ${v}`,color:S,titleTextColor:u,iconColor:s,contentTextColor:s,closeBorderRadius:o,closeColorHover:f,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:t,borderInfo:`1px solid ${g(i,h(r,{alpha:.25}))}`,colorInfo:g(i,h(r,{alpha:.08})),titleTextColorInfo:u,iconColorInfo:r,contentTextColorInfo:s,closeColorHoverInfo:f,closeColorPressedInfo:b,closeIconColorInfo:C,closeIconColorHoverInfo:m,closeIconColorPressedInfo:t,borderSuccess:`1px solid ${g(i,h(I,{alpha:.25}))}`,colorSuccess:g(i,h(I,{alpha:.08})),titleTextColorSuccess:u,iconColorSuccess:I,contentTextColorSuccess:s,closeColorHoverSuccess:f,closeColorPressedSuccess:b,closeIconColorSuccess:C,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:t,borderWarning:`1px solid ${g(i,h(y,{alpha:.33}))}`,colorWarning:g(i,h(y,{alpha:.08})),titleTextColorWarning:u,iconColorWarning:y,contentTextColorWarning:s,closeColorHoverWarning:f,closeColorPressedWarning:b,closeIconColorWarning:C,closeIconColorHoverWarning:m,closeIconColorPressedWarning:t,borderError:`1px solid ${g(i,h(_,{alpha:.25}))}`,colorError:g(i,h(_,{alpha:.08})),titleTextColorError:u,iconColorError:_,contentTextColorError:s,closeColorHoverError:f,closeColorPressedError:b,closeIconColorError:C,closeIconColorHoverError:m,closeIconColorPressedError:t})}const me={name:"Alert",common:X,self:Ce},xe=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[a("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),$("closable",[x("alert-body",[a("title",`
 padding-right: 24px;
 `)])]),a("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),Z({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
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
 `),a("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),$("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),$("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[ee("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]),Ie=Object.assign(Object.assign({},L.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ye=k({name:"Alert",inheritAttrs:!1,props:Ie,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:o,inlineThemeDisabled:p,mergedRtlRef:i}=oe(n),v=L("Alert","-alert",xe,me,n,e),S=re("Alert",i,e),u=W(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=v.value,{fontSize:I,borderRadius:y,titleFontWeight:_,lineHeight:T,iconSize:F,iconMargin:H,iconMarginRtl:V,closeIconSize:D,closeBorderRadius:M,closeSize:O,closeMargin:G,closeMarginRtl:q,padding:K}=r,{type:c}=n,{left:J,right:Q}=le(H);return{"--n-bezier":t,"--n-color":r[d("color",c)],"--n-close-icon-size":D,"--n-close-border-radius":M,"--n-close-color-hover":r[d("closeColorHover",c)],"--n-close-color-pressed":r[d("closeColorPressed",c)],"--n-close-icon-color":r[d("closeIconColor",c)],"--n-close-icon-color-hover":r[d("closeIconColorHover",c)],"--n-close-icon-color-pressed":r[d("closeIconColorPressed",c)],"--n-icon-color":r[d("iconColor",c)],"--n-border":r[d("border",c)],"--n-title-text-color":r[d("titleTextColor",c)],"--n-content-text-color":r[d("contentTextColor",c)],"--n-line-height":T,"--n-border-radius":y,"--n-font-size":I,"--n-title-font-weight":_,"--n-icon-size":F,"--n-icon-margin":H,"--n-icon-margin-rtl":V,"--n-close-size":O,"--n-close-margin":G,"--n-close-margin-rtl":q,"--n-padding":K,"--n-icon-margin-left":J,"--n-icon-margin-right":Q}}),s=p?ne("alert",W(()=>n.type[0]),u,n):void 0,f=te(!0),b=()=>{const{onAfterLeave:t,onAfterHide:r}=n;t&&t(),r&&r()};return{rtlEnabled:S,mergedClsPrefix:e,mergedBordered:o,visible:f,handleCloseClick:()=>{var t;Promise.resolve((t=n.onClose)===null||t===void 0?void 0:t.call(n)).then(r=>{r!==!1&&(f.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:v,cssVars:p?void 0:u,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),l(se,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:o}=this,p={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},ie(this.$attrs,p)),this.closable&&l(ae,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${e}-alert__border`}),this.showIcon&&l("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},ce(o.icon,()=>[l(de,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return l(he,null);case"info":return l(ge,null);case"warning":return l(fe,null);case"error":return l(ue,null);default:return null}}})])),l("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ve(o.header,i=>{const v=i||this.title;return v?l("div",{class:`${e}-alert-body__title`},v):null}),o.default&&l("div",{class:`${e}-alert-body__content`},o))):null}})}}),_e={},ze={href:"https://github.com/getCryptoAddress/getCryptoAddress.github.io",target:"_blank",rel:"noopener noreferrer"};function we(n,e){return E(),N("a",ze,"GitHub")}const B=j(_e,[["render",we]]),Se={},Te={class:"page-description"};function $e(n,e){return E(),N("main",Te,[z("div",null,[be(n.$slots,"default",{},void 0,!0)])])}const Pe=j(Se,[["render",$e],["__scopeId","data-v-32db2691"]]),We=k({__name:"HomePage",setup(n){return(e,o)=>(E(),pe(Pe,null,{default:R(()=>[w(A(ye),{title:"Beta",type:"info"},{default:R(()=>[o[0]||(o[0]=P(" We are in beta. If you find a bug, please report it to us on ")),w(B)]),_:1}),o[3]||(o[3]=z("p",null," Welcome to our website where you can generate cryptocurrency addresses and create paper wallets for free. We offer a variety of paper wallet templates, as well as the opportunity to design your own unique wallet. ",-1)),z("p",null,[o[1]||(o[1]=P(" This project is open source, and all the code is available for review on ")),w(B),o[2]||(o[2]=P(". We invite you to support us by contributing to the code or making a donation. "))]),o[4]||(o[4]=z("h3",null,"Donation List",-1)),w(A(U)),o[5]||(o[5]=z("p",null," Enjoy a comfortable and secure cryptocurrency wallet creation experience! ",-1))]),_:1}))}});export{We as default};
