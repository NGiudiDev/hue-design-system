import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{c as r,d as i,f as a,l as o,n as s,p as c,r as l,t as u,u as d}from"./spacing-CWM_BPBo.js";import{t as f}from"./jsx-runtime-DweqXWlm.js";var p,m,h,g,_=t((()=>{i(),u(),p=d(`div`)`
  flex-grow: 1;

  ${e=>l(e)}
  ${e=>s(e)}
`,m=d(`div`)`
  margin-top: auto;
  width: 100%;
  
  ${e=>l(e)}
  ${e=>s(e)}
`,h=d(`div`)` 
  background-color: ${e=>e.theme.colors.white.surface};

  border: ${e=>e.$borderless?`none`:`1px solid ${e.theme.colors.black.border}`};
  
  border-radius: 4px;
  box-shadow: ${e=>e.onClick&&e.theme.shadows.level1};
  box-sizing: border-box;
  cursor: ${e=>e.onClick?`pointer`:`default`};
  display: flex;
  flex-direction: column;
  width: ${e=>e.width};
  
  ${e=>e.$isFullHeight&&`
    height: 100%;
  `}
  
  ${e=>l(e)}
  ${e=>s(e)}
`,g={Content:p,Footer:m,Wrapper:h}})),v,y,b,x=t((()=>{e(n(),1),v=e(c(),1),_(),y=f(),b=e=>{let{children:t=null,margin:n=`a-0`,padding:r=`a-0`}=e;return(0,y.jsx)(g.Content,{$margin:n,$padding:r,children:t})},b.propTypes={children:v.default.node,margin:v.default.string,padding:v.default.string},b.__docgenInfo={description:``,methods:[],displayName:`PanelContent`,props:{children:{description:``,type:{name:`node`},required:!1},margin:{description:``,type:{name:`string`},required:!1},padding:{description:``,type:{name:`string`},required:!1}}}})),S,C,w,T=t((()=>{e(n(),1),S=e(c(),1),_(),C=f(),w=e=>{let{children:t=null,margin:n=`a-0`,padding:r=`a-0`}=e;return(0,C.jsx)(g.Footer,{$margin:n,$padding:r,children:t})},w.propTypes={children:S.default.node,margin:S.default.string,padding:S.default.string},w.__docgenInfo={description:``,methods:[],displayName:`PanelFooter`,props:{children:{description:``,type:{name:`node`},required:!1},margin:{description:``,type:{name:`string`},required:!1},padding:{description:``,type:{name:`string`},required:!1}}}})),E,D,O,k=t((()=>{e(n(),1),E=e(c(),1),_(),D=f(),O=e=>{let{borderless:t=!1,children:n=null,isFullHeight:r=!1,margin:i=`a-0`,onClick:a=null,padding:o=`a-16`}=e;return(0,D.jsx)(g.Wrapper,{$borderless:t,$isFullHeight:r,$margin:i,onClick:a,$padding:o,children:n})},O.propTypes={borderless:E.default.bool,children:E.default.node,isFullHeight:E.default.bool,margin:E.default.string,onClick:E.default.func,padding:E.default.string},O.__docgenInfo={description:``,methods:[],displayName:`PanelWrapper`,props:{borderless:{description:``,type:{name:`bool`},required:!1},children:{description:``,type:{name:`node`},required:!1},isFullHeight:{description:``,type:{name:`bool`},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},padding:{description:``,type:{name:`string`},required:!1}}}})),A,j=t((()=>{x(),T(),k(),A={Content:b,Footer:w,Wrapper:O}})),M,N=t((()=>{M=(e,t)=>{if(!t)return e.black.main;if(t.includes(`.`)){let[n,r]=t.split(`.`);return e[n]?.[r]||e.black.main}return e[t]?e[t].main||e[t]:t}})),P,F,I,L,R=t((()=>{i(),u(),N(),P=e=>{let t=e.theme.typography[e.$type]||e.theme.typography.bodyRegular;return a`
    color: ${M(e.theme.colors,e.$color)||e.theme.colors.black.main};
    font-family: ${e.theme.fontFamily};
    font-size: ${t.size};
    font-weight: ${t.weight};
    line-height: ${t.lineHeight};
    text-align: ${e.$align};
    text-decoration: ${e.$decoration===`none`?`none`:e.$decoration};
    margin: 0;
    padding: 0;
    
    ${s(e)}
    ${l(e)}
    
    /* Improve text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    /* Handle long text gracefully */
    word-wrap: break-word;
    overflow-wrap: break-word;
  `},F=d(`p`)`
  ${e=>a`
    ${P(e)}
  `}
`,I=d(`label`)`
  ${e=>a`
    display: inline-block;
    cursor: pointer;
    user-select: none;
    
    /* Improve accessibility */
    &:focus-visible {
      outline: 2px solid ${e.theme.colors.highlight.main};
      outline-offset: 2px;
      border-radius: 2px;
    }
    
    /* Hover state for better UX */
    &:hover {
      opacity: 0.8;
    }
    
    ${P(e)}
  `}
`,L={LabelWrapper:I,TextWrapper:F}})),z,B,V,H=t((()=>{e(n(),1),z=e(c(),1),R(),r(),B=f(),V=e=>{let{align:t=`start`,as:n=`p`,children:r,className:i=``,color:a=`black`,decoration:s=`none`,htmlFor:c=``,margin:l=`a-0`,padding:u=`a-0`,type:d=`bodyRegular`}=e,f=d;o[f]||(console.warn(`Typography type "${f}" not found. Using default "bodyRegular".`),f=`bodyRegular`);let p=n===`label`?{htmlFor:c}:{},m={$align:t,children:r,className:i,$color:a,$decoration:s,$margin:l,$padding:u,$type:f};return n===`label`?(0,B.jsx)(L.LabelWrapper,{...p,...m}):(0,B.jsx)(L.TextWrapper,{as:n,...m})},V.propTypes={align:z.default.oneOf([`start`,`center`,`end`]),as:z.default.oneOf([`p`,`span`,`label`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),children:z.default.node.isRequired,className:z.default.string,color:z.default.string,decoration:z.default.oneOf([`none`,`underline`,`line-through`]),htmlFor:z.default.string,margin:z.default.string,padding:z.default.string,type:z.default.oneOf(Object.keys(o))},V.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{align:{description:``,type:{name:`enum`,value:[{value:`"start"`,computed:!1},{value:`"center"`,computed:!1},{value:`"end"`,computed:!1}]},required:!1},as:{description:``,type:{name:`enum`,value:[{value:`"p"`,computed:!1},{value:`"span"`,computed:!1},{value:`"label"`,computed:!1},{value:`"h1"`,computed:!1},{value:`"h2"`,computed:!1},{value:`"h3"`,computed:!1},{value:`"h4"`,computed:!1},{value:`"h5"`,computed:!1},{value:`"h6"`,computed:!1}]},required:!1},children:{description:``,type:{name:`node`},required:!0},className:{description:``,type:{name:`string`},required:!1},color:{description:``,type:{name:`string`},required:!1},decoration:{description:``,type:{name:`enum`,value:[{value:`"none"`,computed:!1},{value:`"underline"`,computed:!1},{value:`"line-through"`,computed:!1}]},required:!1},htmlFor:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},padding:{description:``,type:{name:`string`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"bodyRegular"`,computed:!1},{value:`"bodySemibold"`,computed:!1},{value:`"captionRegular"`,computed:!1},{value:`"captionSemibold"`,computed:!1},{value:`"pageTitle"`,computed:!1},{value:`"subtitle"`,computed:!1},{value:`"title"`,computed:!1}]},required:!1}}}}));export{A as a,N as i,H as n,j as o,M as r,V as t};