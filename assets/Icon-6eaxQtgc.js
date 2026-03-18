import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{d as r,f as i,n as a,o,p as s,s as c,t as l,u}from"./spacing-CWM_BPBo.js";import{t as d}from"./jsx-runtime-DweqXWlm.js";import{i as f,r as p}from"./Text-CV7_TDRk.js";var m,h,g,_,v,y=t((()=>{r(),l(),f(),m={minor:`20px`,major:`24px`,spot:`36px`},h={minor:`16px`,major:`20px`,spot:`32px`},g=u(`svg`)`
  height: ${e=>h[e.$size]};
  width: ${e=>h[e.$size]};
  fill: ${e=>p(e.theme.colors,e.$color)||e.theme.colors.black.main};
  display: block;
`,_=u(`div`)`
  align-items: center;
  display: inline-flex;
  height: ${e=>m[e.$size]};
  justify-content: center;
  width: ${e=>m[e.$size]};
  cursor: ${e=>e.onClick?`pointer`:`default`};
  
  ${e=>e.$spin&&i`
    animation: ${e.theme.animations.spin} 1s linear infinite;
  `}
  
  ${e=>a(e)}
`,v={IconItem:g,IconWrapper:_}})),b,x,S,C=t((()=>{e(n(),1),b=e(s(),1),y(),c(),x=d(),S=e=>{let{className:t=null,color:n=`black.main`,margin:r=`a-0`,name:i=`home`,onClick:a=null,size:s=`major`,spin:c=!1}=e,l=o[i];return l?(0,x.jsx)(v.IconWrapper,{className:t,$margin:r,onClick:a,$size:s,$spin:c,children:(0,x.jsx)(v.IconItem,{$color:n,$size:s,viewBox:l.viewBox,children:(0,x.jsx)(`path`,{d:l.path})})}):(console.warn(`Icon "${i}" not found`),null)},S.propTypes={className:b.default.string,color:b.default.string,margin:b.default.string,name:b.default.string,onClick:b.default.func,size:b.default.oneOf([`minor`,`major`,`spot`]),spin:b.default.bool},S.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{className:{description:``,type:{name:`string`},required:!1},color:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},name:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},size:{description:``,type:{name:`enum`,value:[{value:`"minor"`,computed:!1},{value:`"major"`,computed:!1},{value:`"spot"`,computed:!1}]},required:!1},spin:{description:``,type:{name:`bool`},required:!1}}}}));export{C as n,S as t};