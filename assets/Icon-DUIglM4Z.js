import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./react-C1q00N_b.js";import{d as r,f as i,n as a,o,p as s,s as c,t as l,u}from"./spacing-ByfHzs_K.js";import{t as d}from"./jsx-runtime-B-hFyic3.js";import{i as f,r as p}from"./Text-CeVFLe4j.js";var m,h,g,_,v,y=t((()=>{u(),l(),f(),m={minor:`20px`,major:`24px`,spot:`36px`},h={minor:`16px`,major:`20px`,spot:`32px`},g=i(`svg`)`
  display: block;
  fill: ${e=>p(e.theme.colors,e.$color)||e.theme.colors.black.main};
  height: ${e=>h[e.$size]};
  width: ${e=>h[e.$size]};
`,_=i(`div`)`
  align-items: center;
  cursor: ${e=>e.onClick?`pointer`:`default`};
  display: inline-flex;
  height: ${e=>m[e.$size]};
  justify-content: center;
  width: ${e=>m[e.$size]};
  
  ${e=>e.$spin&&r`
    animation: ${e.theme.animations.spin} 1s linear infinite;
  `}
  
  ${e=>a(e)}

  &:focus-visible {
    border-radius: 4px;
    outline: 2px solid ${e=>e.theme.colors.highlight.main};
    outline-offset: 2px;
  }
`,v={IconItem:g,IconWrapper:_}})),b,x,S,C=t((()=>{n(),b=e(s(),1),y(),c(),x=d(),S=e=>{let{className:t=null,color:n=`black.main`,margin:r=`a-0`,name:i=`home`,onClick:a=null,size:s=`major`,spin:c=!1}=e,l=o[i];return l?(0,x.jsx)(v.IconWrapper,{"aria-label":a?i:void 0,className:t,$margin:r,onClick:a,onKeyDown:a?e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),a(e))}:void 0,role:a?`button`:void 0,$size:s,$spin:c,tabIndex:a?0:void 0,children:(0,x.jsx)(v.IconItem,{$color:n,$size:s,viewBox:l.viewBox,children:(0,x.jsx)(`path`,{d:l.path})})}):(console.warn(`Icon "${i}" not found`),null)},S.propTypes={className:b.default.string,color:b.default.string,margin:b.default.string,name:b.default.string,onClick:b.default.func,size:b.default.oneOf([`minor`,`major`,`spot`]),spin:b.default.bool},S.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{className:{description:``,type:{name:`string`},required:!1},color:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},name:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},size:{description:``,type:{name:`enum`,value:[{value:`"minor"`,computed:!1},{value:`"major"`,computed:!1},{value:`"spot"`,computed:!1}]},required:!1},spin:{description:``,type:{name:`bool`},required:!1}}}}));export{C as n,S as t};