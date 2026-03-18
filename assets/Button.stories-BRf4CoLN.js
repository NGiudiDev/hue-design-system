import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,d as i,f as a,i as o,n as s,p as c,t as l,u}from"./spacing-CWM_BPBo.js";import{t as d}from"./jsx-runtime-DweqXWlm.js";import{c as f,i as p,n as m,s as h}from"./blocks-B7aBnu_Z.js";import{a as g,n as _,o as v,t as y}from"./Text-CV7_TDRk.js";import{n as b,t as x}from"./Icon-6eaxQtgc.js";var S,C,w=t((()=>{e(n(),1),f(),v(),_(),r(),S=d(),C=()=>(0,S.jsx)(o,{children:(0,S.jsxs)(h,{children:[(0,S.jsx)(y,{margin:`b-16`,type:`pageTitle`,children:`Button`}),(0,S.jsx)(y,{margin:`b-16 x-8`,children:`El componente Button es un elemento interactivo fundamental para desencadenar acciones en la interfaz. Proporciona múltiples variantes visuales, estados de carga, soporte para íconos y capacidades de personalización mientras mantiene accesibilidad y consistencia visual del Design System.`}),(0,S.jsx)(y,{margin:`b-24`,type:`title`,children:`Principios`}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Jerarquía Visual Clara`}),(0,S.jsx)(y,{children:`Ofrece tres variantes (filled, outlined, text) que establecen diferentes niveles de prominencia para organizar la importancia de las acciones en la interfaz.`})]}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Estados Interactivos`}),(0,S.jsx)(y,{children:`Incluye estados claros de hover, active, disabled y loading para proporcionar feedback visual inmediato sobre la interactividad y el estado de las acciones.`})]}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Flexibilidad Funcional`}),(0,S.jsx)(y,{children:`Soporta íconos, indicadores de disclosure, estados de carga, ancho completo y diferentes tipos semánticos HTML para adaptarse a múltiples casos de uso.`})]}),(0,S.jsxs)(g.Wrapper,{margin:`b-32 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Accesibilidad Integrada`}),(0,S.jsx)(y,{children:`Utiliza elementos button HTML semánticamente correctos con soporte para tipos de botón (button, submit, reset) y manejo adecuado de estados disabled.`})]}),(0,S.jsx)(y,{type:`title`,children:`Propiedades`}),(0,S.jsx)(m,{}),(0,S.jsx)(p,{}),(0,S.jsx)(y,{margin:`b-16`,type:`title`,children:`Accesibilidad`}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Semántica HTML`}),(0,S.jsx)(y,{margin:`b-8`,children:`Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit, reset) para máxima compatibilidad con tecnologías asistivas.`})]}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Estados Focusables`}),(0,S.jsx)(y,{margin:`b-8`,children:`Todos los botones son navegables por teclado con indicadores visuales de focus y soporte completo para Enter y Space.`})]}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`Contraste Visual`}),(0,S.jsx)(y,{margin:`b-8`,children:`Los colores del sistema tema garantizan contraste suficiente en todos los estados para cumplir con estándares WCAG.`})]}),(0,S.jsx)(y,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,S.jsxs)(g.Wrapper,{margin:`b-16 x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,S.jsx)(y,{margin:`b-4`,children:`• Usar un solo botón filled por vista para mantener jerarquía clara`},`rec-1`),(0,S.jsx)(y,{margin:`b-4`,children:`• Agrupar botones relacionados con spacing consistente`},`rec-2`),(0,S.jsx)(y,{margin:`b-4`,children:`• Usar isLoading para operaciones que toman tiempo`},`rec-3`),(0,S.jsx)(y,{margin:`b-4`,children:`• Elegir íconos que refuercen el significado de la acción`},`rec-4`),(0,S.jsx)(y,{margin:`b-4`,children:`• Usar disclosure solo cuando realmente haya contenido desplegable`},`rec-5`),(0,S.jsx)(y,{children:`• Mantener labels claros y descriptivos de la acción`},`rec-6`)]}),(0,S.jsxs)(g.Wrapper,{margin:`x-8`,children:[(0,S.jsx)(y,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,S.jsx)(y,{margin:`b-4`,children:`• No usar múltiples botones filled en la misma vista`},`avoid-1`),(0,S.jsx)(y,{margin:`b-4`,children:`• No usar Button para navegación (usar links apropiados)`},`avoid-2`),(0,S.jsx)(y,{margin:`b-4`,children:`• No deshabilitar botones sin explicar por qué`},`avoid-3`),(0,S.jsx)(y,{margin:`b-4`,children:`• No usar íconos ambiguos o no relacionados con la acción`},`avoid-4`),(0,S.jsx)(y,{margin:`b-4`,children:`• No agrupar botones sin espaciado visual`},`avoid-5`),(0,S.jsx)(y,{children:`• No usar labels demasiado genéricos como "Enviar" o "OK"`},`avoid-6`)]})]})}),C.__docgenInfo={description:``,methods:[],displayName:`ButtonDocs`}})),T,E,D,O,k,A,j=t((()=>{i(),l(),T=u(`span`)`
  ${e=>`   
    align-items: center;
    display: flex;
    visibility: ${e.$isLoading?`hidden`:`visible`};
  `}
`,E=u(`button`)`
  ${e=>a`
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
    width: ${e.$fullWidth?`100%`:`auto`};

    ${s(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.middleHovered};
      box-shadow: ${e.theme.shadows.level2};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.darkPressed};
      box-shadow: ${e.theme.shadows.level3};
      color: ${e.theme.colors.white.main};
    }

    &:disabled {
      background-color: ${e.theme.colors.black.border};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`,D=u(`span`)`
  ${e=>a`
    animation-name: ${e.theme.animations.spin};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${e.$isLoading?`block`:`none`};
    left: calc(50% - 10px); /* 10px = half icon size */
    position: absolute;
    top: calc(50% - 10px); /* 10px = half icon size */
  `}
`,O=u(`button`)`
  ${e=>a`
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
    width: ${e.$fullWidth?`100%`:`auto`};

    ${s(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.hovered};
      border-color: ${e.theme.colors.primary.middleHovered};
      color: ${e.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.pressed};
      border-color: ${e.theme.colors.primary.darkPressed};
      color: ${e.theme.colors.primary.darkPressed};
    }

    &:disabled {
      border-color: ${e.theme.colors.black.disabled};
      color: ${e.theme.colors.black.disabled};
      cursor: not-allowed;
    }
  `}
`,k=u(`button`)`
  ${e=>a`
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
    width: ${e.$fullWidth?`100%`:`auto`};

    ${s(e)}

    &:hover:enabled {
      background-color: ${e.theme.colors.primary.hovered};
      color: ${e.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${e.theme.colors.primary.pressed};
      color: ${e.theme.colors.primary.darkPressed};
    }

    &:disabled {
      color: ${e.theme.colors.black.disabled};
      cursor: not-allowed;
    }
  `}
`,A={ContentWrapper:T,FilledButton:E,LoaderWrapper:D,OutlinedButton:O,TextButton:k}})),M,N,P,F=t((()=>{e(n(),1),M=e(c(),1),b(),j(),N=d(),P=e=>{let{children:t=null,disabled:n=!1,fullWidth:r=!1,id:i=null,kind:a=`filled`,margin:o=``,onClick:s=null,type:c=`button`}=e;switch(a){case`outlined`:return(0,N.jsx)(A.OutlinedButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t});case`text`:return(0,N.jsx)(A.TextButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t});default:return(0,N.jsx)(A.FilledButton,{disabled:n,$fullWidth:r,id:i,$margin:o,onClick:s,type:c,children:t})}},P.propTypes={children:M.default.node,disabled:M.default.bool,disclosure:M.default.bool,fullWidth:M.default.bool,iconProps:x.propTypes,id:M.default.string,kind:M.default.oneOf([`filled`,`outlined`,`text`]),margin:M.default.string,onClick:M.default.func,type:M.default.oneOf([`button`,`submit`,`reset`])},P.__docgenInfo={description:``,methods:[],displayName:`ButtonSelector`,props:{children:{description:``,type:{name:`node`},required:!1},disabled:{description:``,type:{name:`bool`},required:!1},disclosure:{description:``,type:{name:`bool`},required:!1},fullWidth:{description:``,type:{name:`bool`},required:!1},iconProps:{description:``,type:{name:`custom`,raw:`{\r
  className: PropTypes.string,\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:``,type:{name:`string`},required:!1},kind:{description:``,type:{name:`enum`,value:[{value:`"filled"`,computed:!1},{value:`"outlined"`,computed:!1},{value:`"text"`,computed:!1}]},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"button"`,computed:!1},{value:`"submit"`,computed:!1},{value:`"reset"`,computed:!1}]},required:!1}}}})),I,L,R,z,B=t((()=>{e(n(),1),I=e(c(),1),F(),b(),j(),L=d(),R={color:`currentColor`,margin:`r-8`,name:``,size:`minor`},z=e=>{let{children:t=null,disabled:n=!1,disclosure:r=!1,fullWidth:i=!1,iconProps:a={},id:o=null,isLoading:s=!1,kind:c=`filled`,margin:l=``,onClick:u=null,type:d=`button`}=e,f={...R,...a};return(0,L.jsxs)(P,{disabled:n||s,disclosure:r,fullWidth:i,id:o,kind:c,margin:l,onClick:u,type:d,children:[(0,L.jsx)(A.LoaderWrapper,{$isLoading:s,children:(0,L.jsx)(x,{color:`currentColor`,name:`spinner`,size:`minor`})}),(0,L.jsxs)(A.ContentWrapper,{$isLoading:s,children:[f.name&&(0,L.jsx)(x,{...f}),t,r&&(0,L.jsx)(x,{color:`currentColor`,margin:`l-8`,name:`downAngle`,size:`minor`})]})]})},z.propTypes={children:I.default.node,disabled:I.default.bool,disclosure:I.default.bool,fullWidth:I.default.bool,iconProps:x.propTypes,id:I.default.string,isLoading:I.default.bool,kind:I.default.oneOf([`filled`,`outlined`,`text`]),margin:I.default.string,onClick:I.default.func,type:I.default.oneOf([`button`,`submit`,`reset`])},z.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{description:``,type:{name:`node`},required:!1},disabled:{description:``,type:{name:`bool`},required:!1},disclosure:{description:``,type:{name:`bool`},required:!1},fullWidth:{description:``,type:{name:`bool`},required:!1},iconProps:{description:``,type:{name:`custom`,raw:`{\r
  className: PropTypes.string,\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:``,type:{name:`string`},required:!1},isLoading:{description:``,type:{name:`bool`},required:!1},kind:{description:``,type:{name:`enum`,value:[{value:`"filled"`,computed:!1},{value:`"outlined"`,computed:!1},{value:`"text"`,computed:!1}]},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"button"`,computed:!1},{value:`"submit"`,computed:!1},{value:`"reset"`,computed:!1}]},required:!1}}}})),V,H,U,W;t((()=>{e(n(),1),w(),B(),V=d(),H={argTypes:{children:{control:{type:`text`},description:`El contenido que se mostrará dentro del botón. Generalmente texto descriptivo de la acción.`},disabled:{control:{type:`boolean`},description:`Deshabilita el botón, impidiendo la interacción del usuario y aplicando estilos visuales de estado deshabilitado.`},disclosure:{control:{type:`boolean`},description:`Muestra un ícono de flecha hacia abajo (downAngle) al final del botón, indicando que desplegará contenido adicional.`},fullWidth:{control:{type:`boolean`},description:`Hace que el botón ocupe el 100% del ancho disponible de su contenedor.`},iconProps:{control:{type:`object`},description:`Propiedades que se pasan al componente Icon interno. Permite agregar un ícono al inicio del botón con opciones de personalización (name, color, size, margin).`},id:{control:{type:`text`},description:`Identificador único del botón para referencias en el DOM o pruebas automatizadas.`},isLoading:{control:{type:`boolean`},description:`Muestra un spinner de carga y oculta el contenido del botón. Útil para indicar procesos asíncronos en curso.`},kind:{control:{type:`select`},description:`Define el estilo visual del botón según su importancia en la jerarquía de acciones.`,options:[`filled`,`outlined`,`text`]},margin:{control:{type:`text`},description:`Establece el margen alrededor del botón. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').`},onClick:{action:`clicked`,control:{type:`none`},description:`Función callback ejecutada cuando el usuario hace clic en el botón.`},type:{control:{type:`select`},description:`Define el tipo semántico del botón HTML. 'submit' envía formularios, 'reset' los resetea, 'button' es para acciones generales.`,options:[`button`,`submit`,`reset`]}},component:z,parameters:{docs:{page:C}},tags:[`autodocs`],title:`Components/Button`},U={args:{children:`Button`,disabled:!1,disclosure:!1,fullWidth:!1,iconProps:{color:`currentColor`,margin:`r-8`,name:``,size:`minor`},id:`button-example`,isLoading:!1,kind:`filled`,margin:`a-0`,onClick:()=>alert(`Button clicked!`),type:`button`},render:e=>(0,V.jsx)(z,{...e})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    disabled: false,
    disclosure: false,
    fullWidth: false,
    iconProps: {
      color: "currentColor",
      margin: "r-8",
      name: "",
      size: "minor"
    },
    id: "button-example",
    isLoading: false,
    kind: "filled",
    margin: "a-0",
    onClick: () => alert("Button clicked!"),
    type: "button"
  },
  render: args => <Button {...args} />
}`,...U.parameters?.docs?.source}}},W=[`Playground`]}))();export{U as Playground,W as __namedExportsOrder,H as default};