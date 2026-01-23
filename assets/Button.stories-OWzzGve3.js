import{j as e,T as g,r as c,a as l,m as p,l as b,P as r}from"./iframe-BZJsol1c.js";import{U as y,C as f,a as x}from"./blocks-Df3d3sc0.js";import{T as n,P as a}from"./Text-CRCib6v8.js";import{I as s}from"./Icon-Di0LVvow.js";import"./preload-helper-DoJ7B10h.js";import"./index-ZJ7R_Kfb.js";const h=()=>e.jsx(g,{children:e.jsxs(y,{children:[e.jsx(n,{margin:"b-16",type:"pageTitle",children:"Button"}),e.jsx(n,{margin:"b-16 x-8",children:"El componente Button es un elemento interactivo fundamental para desencadenar acciones en la interfaz. Proporciona múltiples variantes visuales, estados de carga, soporte para íconos y capacidades de personalización mientras mantiene accesibilidad y consistencia visual del Design System."}),e.jsx(n,{margin:"b-24",type:"title",children:"Principios"}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Jerarquía Visual Clara"}),e.jsx(n,{children:"Ofrece tres variantes (filled, outlined, text) que establecen diferentes niveles de prominencia para organizar la importancia de las acciones en la interfaz."})]}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Estados Interactivos"}),e.jsx(n,{children:"Incluye estados claros de hover, active, disabled y loading para proporcionar feedback visual inmediato sobre la interactividad y el estado de las acciones."})]}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Flexibilidad Funcional"}),e.jsx(n,{children:"Soporta íconos, indicadores de disclosure, estados de carga, ancho completo y diferentes tipos semánticos HTML para adaptarse a múltiples casos de uso."})]}),e.jsxs(a.Wrapper,{margin:"b-32 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Accesibilidad Integrada"}),e.jsx(n,{children:"Utiliza elementos button HTML semánticamente correctos con soporte para tipos de botón (button, submit, reset) y manejo adecuado de estados disabled."})]}),e.jsx(n,{type:"title",children:"Propiedades"}),e.jsx(f,{}),e.jsx(x,{}),e.jsx(n,{margin:"b-16",type:"title",children:"Accesibilidad"}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Semántica HTML"}),e.jsx(n,{margin:"b-8",children:"Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit, reset) para máxima compatibilidad con tecnologías asistivas."})]}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Estados Focusables"}),e.jsx(n,{margin:"b-8",children:"Todos los botones son navegables por teclado con indicadores visuales de focus y soporte completo para Enter y Space."})]}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Contraste Visual"}),e.jsx(n,{margin:"b-8",children:"Los colores del sistema tema garantizan contraste suficiente en todos los estados para cumplir con estándares WCAG."})]}),e.jsx(n,{margin:"b-16",type:"title",children:"Buenas Prácticas"}),e.jsxs(a.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"✅ Recomendado"}),e.jsx(n,{margin:"b-4",children:"• Usar un solo botón filled por vista para mantener jerarquía clara"},"rec-1"),e.jsx(n,{margin:"b-4",children:"• Agrupar botones relacionados con spacing consistente"},"rec-2"),e.jsx(n,{margin:"b-4",children:"• Usar isLoading para operaciones que toman tiempo"},"rec-3"),e.jsx(n,{margin:"b-4",children:"• Elegir íconos que refuercen el significado de la acción"},"rec-4"),e.jsx(n,{margin:"b-4",children:"• Usar disclosure solo cuando realmente haya contenido desplegable"},"rec-5"),e.jsx(n,{children:"• Mantener labels claros y descriptivos de la acción"},"rec-6")]}),e.jsxs(a.Wrapper,{margin:"x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"❌ Evitar"}),e.jsx(n,{margin:"b-4",children:"• No usar múltiples botones filled en la misma vista"},"avoid-1"),e.jsx(n,{margin:"b-4",children:"• No usar Button para navegación (usar links apropiados)"},"avoid-2"),e.jsx(n,{margin:"b-4",children:"• No deshabilitar botones sin explicar por qué"},"avoid-3"),e.jsx(n,{margin:"b-4",children:"• No usar íconos ambiguos o no relacionados con la acción"},"avoid-4"),e.jsx(n,{margin:"b-4",children:"• No agrupar botones sin espaciado visual"},"avoid-5"),e.jsx(n,{children:'• No usar labels demasiado genéricos como "Enviar" o "OK"'},"avoid-6")]})]})});h.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const j=l("span")`
  ${i=>`   
    align-items: center;
    display: flex;
    visibility: ${i.$isLoading?"hidden":"visible"};
  `}
`,v=l("button")`
  ${i=>c`
    align-items: center;
    background-color: ${i.theme.colors.primary.main};
    border: none;
    border-radius: 4px;
    box-shadow: ${i.theme.shadows.level1};
    color: ${i.theme.colors.white.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${i.theme.typography.bodySemibold.size};
    font-weight: ${i.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 20px;    
    position: relative;
    width: ${i.$fullWidth?"100%":"auto"};

    ${p(i)}

    &:hover:enabled {
      background-color: ${i.theme.colors.primary.middleHovered};
      box-shadow: ${i.theme.shadows.level2};
    }

    &:active:enabled {
      background-color: ${i.theme.colors.primary.darkPressed};
      box-shadow: ${i.theme.shadows.level3};
      color: ${i.theme.colors.white.main};
    }

    &:disabled {
      background-color: ${i.theme.colors.black.border};
      box-shadow: none;
    }
  `}
`,$=l("span")`
  ${i=>c`
    animation-name: ${i.theme.animations.spin};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${i.$isLoading?"block":"none"};
    left: calc(50% - 10px); /* 10px = half icon size */
    position: absolute;
    top: calc(50% - 10px); /* 10px = half icon size */
  `}
`,k=l("button")`
  ${i=>c`
    align-items: center;
    background-color: transparent;
    border-color: ${i.theme.colors.primary.main};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: ${i.theme.colors.primary.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${i.theme.typography.bodySemibold.size};
    font-weight: ${i.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 8px 19px;
    position: relative;
    width: ${i.$fullWidth?"100%":"auto"};

    ${p(i)}

    &:hover:enabled {
      background-color: ${i.theme.colors.primary.hovered};
      border-color: ${i.theme.colors.primary.middleHovered};
      color: ${i.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${i.theme.colors.primary.pressed};
      border-color: ${i.theme.colors.primary.darkPressed};
      color: ${i.theme.colors.primary.darkPressed};
    }

    &:disabled {
      border-color: ${i.theme.colors.black.disabled};
      color: ${i.theme.colors.black.disabled};
    }
  `}
`,P=l("button")`
  ${i=>c`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: ${i.theme.colors.primary.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${i.theme.typography.bodySemibold.size};
    font-weight: ${i.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 12px;
    position: relative;
    width: ${i.$fullWidth?"100%":"auto"};

    ${p(i)}

    &:hover:enabled {
      background-color: ${i.theme.colors.primary.hovered};
      color: ${i.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${i.theme.colors.primary.pressed};
      color: ${i.theme.colors.primary.darkPressed};
    }

    &:disabled {
      color: ${i.theme.colors.black.disabled};
    }
  `}
`,t={ContentWrapper:j,FilledButton:v,LoaderWrapper:$,OutlinedButton:k,TextButton:P},C={children:null,disabled:!1,disclosure:!1,fullWidth:!1,iconProps:{color:"currentColor",margin:"r-8",name:"",size:"minor"},id:null,kind:"filled",margin:"",onClick:null,type:"button"},u=i=>{const o=b.merge({},C,i);switch(o.kind){case"outlined":return e.jsx(t.OutlinedButton,{disabled:o.disabled,$disclosure:o.disclosure,$fullWidth:o.fullWidth,$iconProps:o.iconProps,id:o.id,$margin:o.margin,onClick:o.onClick,type:o.type,children:o.children});case"text":return e.jsx(t.TextButton,{disabled:o.disabled,$disclosure:o.disclosure,$fullWidth:o.fullWidth,$iconProps:o.iconProps,id:o.id,$margin:o.margin,onClick:o.onClick,type:o.type,children:o.children});default:return e.jsx(t.FilledButton,{disabled:o.disabled,$disclosure:o.disclosure,$fullWidth:o.fullWidth,$iconProps:o.iconProps,id:o.id,$margin:o.margin,onClick:o.onClick,type:o.type,children:o.children})}};u.propTypes={children:r.node,disabled:r.any,disclosure:r.bool,fullWidth:r.bool,iconProps:s.propTypes,id:r.string,kind:r.oneOf(["filled","outlined","text"]),margin:r.string,onClick:r.func,type:r.oneOf(["button","submit","reset"])};u.__docgenInfo={description:"",methods:[],displayName:"ButtonSelector",props:{children:{description:"",type:{name:"node"},required:!1},disabled:{description:"",type:{name:"any"},required:!1},disclosure:{description:"",type:{name:"bool"},required:!1},fullWidth:{description:"",type:{name:"bool"},required:!1},iconProps:{description:"",type:{name:"custom",raw:`{\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:"",type:{name:"string"},required:!1},kind:{description:"",type:{name:"enum",value:[{value:'"filled"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1}]},required:!1},margin:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1}}};const W={children:null,disabled:!1,disclosure:!1,fullWidth:!1,iconProps:{color:"currentColor",margin:"r-8",name:"",size:"minor"},id:null,isLoading:!1,kind:"filled",margin:"",onClick:null,type:"button"},m=i=>{const o=b.merge({},W,i);return e.jsxs(u,{disabled:o.disabled||o.isLoading,disclosure:o.disclosure,fullWidth:o.fullWidth,iconProps:o.iconProps,id:o.id,kind:o.kind,margin:o.margin,onClick:o.onClick,type:o.type,children:[e.jsx(t.LoaderWrapper,{$isLoading:o.isLoading,children:e.jsx(s,{color:"currentColor",name:"spinner",size:"minor"})}),e.jsxs(t.ContentWrapper,{$isLoading:o.isLoading,children:[o.iconProps.name&&e.jsx(s,{...o.iconProps}),o.children,o.disclosure&&e.jsx(s,{color:"currentColor",margin:"l-8",name:"downAngle",size:"minor"})]})]})};m.propTypes={children:r.node,disabled:r.any,disclosure:r.bool,fullWidth:r.bool,iconProps:s.propTypes,id:r.string,isLoading:r.bool,kind:r.oneOf(["filled","outlined","text"]),margin:r.string,onClick:r.func,type:r.oneOf(["button","submit","reset"])};m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{description:"",type:{name:"node"},required:!1},disabled:{description:"",type:{name:"any"},required:!1},disclosure:{description:"",type:{name:"bool"},required:!1},fullWidth:{description:"",type:{name:"bool"},required:!1},iconProps:{description:"",type:{name:"custom",raw:`{\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:"",type:{name:"string"},required:!1},isLoading:{description:"",type:{name:"bool"},required:!1},kind:{description:"",type:{name:"enum",value:[{value:'"filled"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1}]},required:!1},margin:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1}}};const B={argTypes:{children:{control:{type:"text"},description:"El contenido que se mostrará dentro del botón. Generalmente texto descriptivo de la acción."},disabled:{control:{type:"boolean"},description:"Deshabilita el botón, impidiendo la interacción del usuario y aplicando estilos visuales de estado deshabilitado."},disclosure:{control:{type:"boolean"},description:"Muestra un ícono de flecha hacia abajo (downAngle) al final del botón, indicando que desplegará contenido adicional."},fullWidth:{control:{type:"boolean"},description:"Hace que el botón ocupe el 100% del ancho disponible de su contenedor."},iconProps:{control:{type:"object"},description:"Propiedades que se pasan al componente Icon interno. Permite agregar un ícono al inicio del botón con opciones de personalización (name, color, size, margin)."},id:{control:{type:"text"},description:"Identificador único del botón para referencias en el DOM o pruebas automatizadas."},isLoading:{control:{type:"boolean"},description:"Muestra un spinner de carga y oculta el contenido del botón. Útil para indicar procesos asíncronos en curso."},kind:{control:{type:"select"},description:"Define el estilo visual del botón según su importancia en la jerarquía de acciones.",options:["filled","outlined","text"]},margin:{control:{type:"text"},description:"Establece el margen alrededor del botón. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4')."},onClick:{action:"clicked",control:{type:"none"},description:"Función callback ejecutada cuando el usuario hace clic en el botón."},type:{control:{type:"select"},description:"Define el tipo semántico del botón HTML. 'submit' envía formularios, 'reset' los resetea, 'button' es para acciones generales.",options:["button","submit","reset"]}},component:m,parameters:{docs:{page:h}},tags:["autodocs"],title:"Components/Button"},d={args:{children:"Button",disabled:!1,disclosure:!1,fullWidth:!1,iconProps:{color:"currentColor",margin:"r-8",name:"",size:"minor"},id:"button-example",isLoading:!1,kind:"filled",margin:"a-0",onClick:()=>alert("Button clicked!"),type:"button"},render:i=>e.jsx(m,{...i})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const E=["Playground"];export{d as Playground,E as __namedExportsOrder,B as default};
