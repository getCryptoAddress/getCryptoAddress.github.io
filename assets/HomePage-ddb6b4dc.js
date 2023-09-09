import{D as U}from"./DonationList-339c8a29.js";import{c as X,a as Y,b as h,d as g,e as y,f as i,g as H,h as Z,i as ee,j as k,u as oe,k as L,l as re,m as W,n as ne,r as te,o as s,N as se,p as le,q as d,s as ie,t as ae,v as ce,w as de,E as ue,W as fe,I as he,S as ge,x as ve,_ as j,y as P,z as N,A as z,B as be,C as pe,D as A,F as w,G as T,H as B}from"./index-2af5e715.js";const Ce=r=>{const{lineHeight:e,borderRadius:a,fontWeightStrong:p,baseColor:l,dividerColor:v,actionColor:$,textColor1:u,textColor2:t,closeColorHover:f,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:n,infoColor:o,successColor:_,warningColor:x,errorColor:I,fontSize:S}=r;return Object.assign(Object.assign({},Y),{fontSize:S,lineHeight:e,titleFontWeight:p,borderRadius:a,border:`1px solid ${v}`,color:$,titleTextColor:u,iconColor:t,contentTextColor:t,closeBorderRadius:a,closeColorHover:f,closeColorPressed:b,closeIconColor:C,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${h(l,g(o,{alpha:.25}))}`,colorInfo:h(l,g(o,{alpha:.08})),titleTextColorInfo:u,iconColorInfo:o,contentTextColorInfo:t,closeColorHoverInfo:f,closeColorPressedInfo:b,closeIconColorInfo:C,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${h(l,g(_,{alpha:.25}))}`,colorSuccess:h(l,g(_,{alpha:.08})),titleTextColorSuccess:u,iconColorSuccess:_,contentTextColorSuccess:t,closeColorHoverSuccess:f,closeColorPressedSuccess:b,closeIconColorSuccess:C,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${h(l,g(x,{alpha:.33}))}`,colorWarning:h(l,g(x,{alpha:.08})),titleTextColorWarning:u,iconColorWarning:x,contentTextColorWarning:t,closeColorHoverWarning:f,closeColorPressedWarning:b,closeIconColorWarning:C,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${h(l,g(I,{alpha:.25}))}`,colorError:h(l,g(I,{alpha:.08})),titleTextColorError:u,iconColorError:I,contentTextColorError:t,closeColorHoverError:f,closeColorPressedError:b,closeIconColorError:C,closeIconColorHoverError:m,closeIconColorPressedError:n})},me={name:"Alert",common:X,self:Ce},_e=me,xe=y("alert",`
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
 `),H("closable",[y("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),y("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),Z({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
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
 `),H("show-icon",[y("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[ee("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),Ie=Object.assign(Object.assign({},L.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ye=k({name:"Alert",inheritAttrs:!1,props:Ie,setup(r){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:p,mergedRtlRef:l}=oe(r),v=L("Alert","-alert",xe,_e,r,e),$=re("Alert",l,e),u=W(()=>{const{common:{cubicBezierEaseInOut:n},self:o}=v.value,{fontSize:_,borderRadius:x,titleFontWeight:I,lineHeight:S,iconSize:D,iconMargin:E,iconMarginRtl:F,closeIconSize:V,closeBorderRadius:M,closeSize:O,closeMargin:G,closeMarginRtl:q,padding:K}=o,{type:c}=r,{left:J,right:Q}=le(E);return{"--n-bezier":n,"--n-color":o[d("color",c)],"--n-close-icon-size":V,"--n-close-border-radius":M,"--n-close-color-hover":o[d("closeColorHover",c)],"--n-close-color-pressed":o[d("closeColorPressed",c)],"--n-close-icon-color":o[d("closeIconColor",c)],"--n-close-icon-color-hover":o[d("closeIconColorHover",c)],"--n-close-icon-color-pressed":o[d("closeIconColorPressed",c)],"--n-icon-color":o[d("iconColor",c)],"--n-border":o[d("border",c)],"--n-title-text-color":o[d("titleTextColor",c)],"--n-content-text-color":o[d("contentTextColor",c)],"--n-line-height":S,"--n-border-radius":x,"--n-font-size":_,"--n-title-font-weight":I,"--n-icon-size":D,"--n-icon-margin":E,"--n-icon-margin-rtl":F,"--n-close-size":O,"--n-close-margin":G,"--n-close-margin-rtl":q,"--n-padding":K,"--n-icon-margin-left":J,"--n-icon-margin-right":Q}}),t=p?ne("alert",W(()=>r.type[0]),u,r):void 0,f=te(!0),b=()=>{const{onAfterLeave:n,onAfterHide:o}=r;n&&n(),o&&o()};return{rtlEnabled:$,mergedClsPrefix:e,mergedBordered:a,visible:f,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(o=>{o!==!1&&(f.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:v,cssVars:p?void 0:u,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(se,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,p={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},ie(this.$attrs,p)),this.closable&&s(ae,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${e}-alert__border`}),this.showIcon&&s("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},ce(a.icon,()=>[s(de,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return s(ge,null);case"info":return s(he,null);case"warning":return s(fe,null);case"error":return s(ue,null);default:return null}}})])),s("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ve(a.header,l=>{const v=l||this.title;return v?s("div",{class:`${e}-alert-body__title`},v):null}),a.default&&s("div",{class:`${e}-alert-body__content`},a))):null}})}}),ze={},we={href:"https://github.com/getCryptoAddress/getCryptoAddress.github.io",target:"_blank",rel:"noopener noreferrer"};function $e(r,e){return P(),N("a",we,"GitHub")}const R=j(ze,[["render",$e]]);const Se={},Te={class:"page-description"};function Pe(r,e){return P(),N("main",Te,[z("div",null,[be(r.$slots,"default",{},void 0,!0)])])}const Ee=j(Se,[["render",Pe],["__scopeId","data-v-32db2691"]]),He=z("p",null," Welcome to our website where you can generate cryptocurrency addresses and create paper wallets for free. We offer a variety of paper wallet templates, as well as the opportunity to design your own unique wallet. ",-1),We=z("h3",null,"Donation List",-1),Ae=z("p",null," Enjoy a comfortable and secure cryptocurrency wallet creation experience! ",-1),ke=k({__name:"HomePage",setup(r){return(e,a)=>(P(),pe(Ee,null,{default:A(()=>[w(B(ye),{title:"Beta",type:"info"},{default:A(()=>[T(" We are in beta. If you find a bug, please report it to us on "),w(R)]),_:1}),He,z("p",null,[T(" This project is open source, and all the code is available for review on "),w(R),T(". We invite you to support us by contributing to the code or making a donation. ")]),We,w(B(U)),Ae]),_:1}))}});export{ke as default};
