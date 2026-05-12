import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./react-C1q00N_b.js";import{d as r,f as i,n as a,p as o,t as s,u as c}from"./spacing-ByfHzs_K.js";import{t as l}from"./jsx-runtime-B-hFyic3.js";import{n as u,t as d}from"./Icon-DUIglM4Z.js";var f,p,m,h,g,_,v=t((()=>{c(),s(),f=i(`span`)`
  ${e=>r`   
    align-items: center;
    display: flex;
    visibility: ${e.$isLoading?`hidden`:`visible`};
  `}
`,p=i(`button`)`
  ${e=>r`
    align-items: center;
    background-color: ${e.theme.colors.primary.main};
    border: none;
    border-radius: 4px;
    box-shadow: ${e.theme.shadows.level1};
    color: ${e.theme.colors.white.main};
    cursor: pointer;
    display: inline-flex;
    font-family: ${e.theme.fontFamily};
    font-size: ${e.theme.typography.bodySemibold.size};
    font-weight: ${e.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 20px;    
    position: relative;
    transition: background-color 150ms ease, box-shadow 150ms ease, color 150ms ease, transform 100ms ease;
    width: ${e.$fullWidth?`100%`:`auto`};

    ${a(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.middleHovered};
      box-shadow: ${e.theme.shadows.level2};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.darkPressed};
      box-shadow: ${e.theme.shadows.level3};
      color: ${e.theme.colors.white.main};
      transform: scale(0.98);
    }

    &:disabled {
      background-color: ${e.theme.colors.black.border};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`,m=i(`span`)`
  ${e=>r`
    animation-name: ${e.theme.animations.spin};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${e.$isLoading?`block`:`none`};
    left: calc(50% - 10px); /* 10px = half icon size */
    position: absolute;
    top: calc(50% - 10px); /* 10px = half icon size */
  `}
`,h=i(`button`)`
  ${e=>r`
    align-items: center;
    background-color: transparent;
    border-color: ${e.theme.colors.primary.main};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: ${e.theme.colors.primary.main};
    cursor: pointer;
    display: inline-flex;
    font-family: ${e.theme.fontFamily};
    font-size: ${e.theme.typography.bodySemibold.size};
    font-weight: ${e.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 8px 19px;
    position: relative;
    transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease, transform 100ms ease;
    width: ${e.$fullWidth?`100%`:`auto`};

    ${a(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.hovered};
      border-color: ${e.theme.colors.primary.middleHovered};
      color: ${e.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.pressed};
      border-color: ${e.theme.colors.primary.darkPressed};
      color: ${e.theme.colors.primary.darkPressed};
      transform: scale(0.98);
    }

    &:disabled {
      border-color: ${e.theme.colors.black.disabled};
      color: ${e.theme.colors.black.disabled};
      cursor: not-allowed;
    }
  `}
`,g=i(`button`)`
  ${e=>r`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: ${e.theme.colors.primary.main};
    cursor: pointer;
    display: inline-flex;
    font-family: ${e.theme.fontFamily};
    font-size: ${e.theme.typography.bodySemibold.size};
    font-weight: ${e.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 12px;
    position: relative;
    transition: background-color 150ms ease, color 150ms ease, transform 100ms ease;
    width: ${e.$fullWidth?`100%`:`auto`};

    ${a(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.hovered};
      color: ${e.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.pressed};
      color: ${e.theme.colors.primary.darkPressed};
      transform: scale(0.98);
    }

    &:disabled {
      color: ${e.theme.colors.black.disabled};
      cursor: not-allowed;
    }
  `}
`,_={ContentWrapper:f,FilledButton:p,LoaderWrapper:m,OutlinedButton:h,TextButton:g}})),y,b,x,S=t((()=>{n(),y=e(o(),1),u(),v(),b=l(),x=e=>{let{children:t=null,disabled:n=!1,fullWidth:r=!1,id:i=null,kind:a=`filled`,margin:o=``,onClick:s=null,type:c=`button`}=e;switch(a){case`outlined`:return(0,b.jsx)(_.OutlinedButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t});case`text`:return(0,b.jsx)(_.TextButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t});default:return(0,b.jsx)(_.FilledButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t})}},x.propTypes={children:y.default.node,disabled:y.default.bool,disclosure:y.default.bool,fullWidth:y.default.bool,iconProps:d.propTypes,id:y.default.string,kind:y.default.oneOf([`filled`,`outlined`,`text`]),margin:y.default.string,onClick:y.default.func,type:y.default.oneOf([`button`,`submit`,`reset`])},x.__docgenInfo={description:``,methods:[],displayName:`ButtonSelector`,props:{children:{description:``,type:{name:`node`},required:!1},disabled:{description:``,type:{name:`bool`},required:!1},disclosure:{description:``,type:{name:`bool`},required:!1},fullWidth:{description:``,type:{name:`bool`},required:!1},iconProps:{description:``,type:{name:`custom`,raw:`{\r
  className: PropTypes.string,\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:``,type:{name:`string`},required:!1},kind:{description:``,type:{name:`enum`,value:[{value:`"filled"`,computed:!1},{value:`"outlined"`,computed:!1},{value:`"text"`,computed:!1}]},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"button"`,computed:!1},{value:`"submit"`,computed:!1},{value:`"reset"`,computed:!1}]},required:!1}}}})),C,w,T,E,D=t((()=>{n(),C=e(o(),1),S(),u(),v(),w=l(),T={color:`currentColor`,margin:`r-8`,name:``,size:`minor`},E=e=>{let{children:t=null,disabled:n=!1,disclosure:r=!1,fullWidth:i=!1,iconProps:a={},id:o=null,isLoading:s=!1,kind:c=`filled`,margin:l=``,onClick:u=null,type:f=`button`}=e,p={...T,...a};return(0,w.jsxs)(x,{disabled:n||s,disclosure:r,fullWidth:i,id:o,kind:c,margin:l,onClick:u,type:f,children:[(0,w.jsx)(_.LoaderWrapper,{$isLoading:s,children:(0,w.jsx)(d,{color:`currentColor`,name:`spinner`,size:`minor`})}),(0,w.jsxs)(_.ContentWrapper,{$isLoading:s,children:[p.name&&(0,w.jsx)(d,{...p}),t,r&&(0,w.jsx)(d,{color:`currentColor`,margin:`l-8`,name:`downAngle`,size:`minor`})]})]})},E.propTypes={children:C.default.node,disabled:C.default.bool,disclosure:C.default.bool,fullWidth:C.default.bool,iconProps:d.propTypes,id:C.default.string,isLoading:C.default.bool,kind:C.default.oneOf([`filled`,`outlined`,`text`]),margin:C.default.string,onClick:C.default.func,type:C.default.oneOf([`button`,`submit`,`reset`])},E.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{description:``,type:{name:`node`},required:!1},disabled:{description:``,type:{name:`bool`},required:!1},disclosure:{description:``,type:{name:`bool`},required:!1},fullWidth:{description:``,type:{name:`bool`},required:!1},iconProps:{description:``,type:{name:`custom`,raw:`{\r
  className: PropTypes.string,\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:``,type:{name:`string`},required:!1},isLoading:{description:``,type:{name:`bool`},required:!1},kind:{description:``,type:{name:`enum`,value:[{value:`"filled"`,computed:!1},{value:`"outlined"`,computed:!1},{value:`"text"`,computed:!1}]},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"button"`,computed:!1},{value:`"submit"`,computed:!1},{value:`"reset"`,computed:!1}]},required:!1}}}}));export{D as n,E as t};