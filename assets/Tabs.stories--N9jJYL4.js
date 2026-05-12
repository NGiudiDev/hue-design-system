import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./react-C1q00N_b.js";import{a as r,f as i,i as a,n as o,p as s,t as c,u as l}from"./spacing-ByfHzs_K.js";import{t as u}from"./jsx-runtime-B-hFyic3.js";import{c as d,i as f,n as p,s as m}from"./blocks-DyvKxrGa.js";import{a as h,n as g,o as _,t as v}from"./Text-CeVFLe4j.js";import{n as y,t as b}from"./Badge-At2h1QBm.js";import{n as x,t as S}from"./Icon-DUIglM4Z.js";var C,w,T=t((()=>{d(),_(),g(),r(),C=u(),w=()=>(0,C.jsx)(a,{children:(0,C.jsxs)(m,{children:[(0,C.jsx)(v,{margin:`b-16`,type:`pageTitle`,children:`Tabs`}),(0,C.jsx)(v,{margin:`b-16 x-8`,children:`El componente Tabs permite organizar contenido en secciones navegables mediante pestañas. Soporta íconos, contadores numéricos abreviados y gestiona el estado activo de forma interna, pudiendo sincronizarse con lógica externa a través del callback onClick.`}),(0,C.jsx)(v,{margin:`b-24`,type:`title`,children:`Principios`}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Estado Interno Controlable`}),(0,C.jsx)(v,{children:`Gestiona el tab activo internamente a partir de la prop active o del primer tab disponible. Notifica cambios externos mediante el callback onClick para sincronizar con el estado de la aplicación.`})]}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Composición Flexible`}),(0,C.jsx)(v,{children:`Cada tab soporta ícono, etiqueta de texto y contador numérico de forma independiente. Los elementos se muestran condicionalmente según las propiedades definidas en cada ítem del array.`})]}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Contadores Abreviados`}),(0,C.jsx)(v,{children:`Los contadores numéricos se formatean automáticamente con la utilidad formatNumberAbbreviation, mostrando valores como "1.2k", "500k" o "12.2B" para mantener el diseño compacto.`})]}),(0,C.jsxs)(h.Wrapper,{margin:`b-32 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Semántica de Accesibilidad`}),(0,C.jsx)(v,{children:`Cada tab renderiza con role="tab" y aria-selected para comunicar el estado activo a tecnologías asistivas, siguiendo el patrón ARIA de navegación por pestañas.`})]}),(0,C.jsx)(v,{type:`title`,children:`Propiedades`}),(0,C.jsx)(p,{}),(0,C.jsx)(f,{}),(0,C.jsx)(v,{margin:`b-16`,type:`title`,children:`Accesibilidad`}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Roles ARIA`}),(0,C.jsx)(v,{margin:`b-8`,children:`Cada pestaña utiliza role="tab" y aria-selected para indicar el estado activo. Para una implementación completa del patrón ARIA Tabs, se recomienda envolver el contenedor con role="tablist" y asociar cada panel con role="tabpanel".`})]}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`Identificadores`}),(0,C.jsx)(v,{margin:`b-8`,children:`La prop id de cada tab se aplica directamente al elemento DOM, facilitando la asociación con paneles de contenido mediante aria-controls y aria-labelledby.`})]}),(0,C.jsx)(v,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,C.jsxs)(h.Wrapper,{margin:`b-16 x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,C.jsx)(v,{margin:`b-4`,children:`• Definir siempre value único por tab para evitar conflictos de estado`}),(0,C.jsx)(v,{margin:`b-4`,children:`• Usar la prop active para sincronizar el tab inicial con el estado de la aplicación`}),(0,C.jsx)(v,{margin:`b-4`,children:`• Proporcionar label descriptivo y conciso en cada tab`}),(0,C.jsx)(v,{margin:`b-4`,children:`• Usar count solo cuando el número aporte información relevante al usuario`}),(0,C.jsx)(v,{margin:`b-4`,children:`• Combinar icon con label para mayor claridad visual`}),(0,C.jsx)(v,{children:`• Usar id en cada tab cuando se necesite asociar con paneles de contenido`})]}),(0,C.jsxs)(h.Wrapper,{margin:`x-8`,children:[(0,C.jsx)(v,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,C.jsx)(v,{margin:`b-4`,children:`• No repetir el mismo value en múltiples tabs`}),(0,C.jsx)(v,{margin:`b-4`,children:`• No usar labels muy largos que rompan el layout horizontal`}),(0,C.jsx)(v,{margin:`b-4`,children:`• No usar count con valores negativos o no numéricos`}),(0,C.jsx)(v,{margin:`b-4`,children:`• No usar Tabs para navegación entre páginas (usar Link o Router en su lugar)`}),(0,C.jsx)(v,{children:`• No omitir onClick si necesitás sincronizar el tab activo con lógica externa`})]})]})}),w.__docgenInfo={description:``,methods:[],displayName:`TabsDocs`}})),E,D,O,k=t((()=>{l(),c(),E=i(`div`)(e=>`
  border-bottom: 1px solid ${e.theme.colors.black.border};
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ${o(e)}
`),D=i(`div`)(e=>`
  align-items: center;
  border-bottom: ${e.$isActive?`2px solid ${e.theme.colors.primary.main}`:`2px solid transparent`};
  cursor: pointer;
  display: flex;
  padding: 12px 16px;
  
  "&:active": {
    background-color: ${e.theme.colors.black.surface};
  };

  "&:hover": {
    background-color: ${e.theme.colors.black.hovered};
  };
`),O={TabsContainer:E,Tab:D}})),A,j=t((()=>{A=e=>{let t=[``,`k`,`m`,`b`,`t`],n=0;for(;Math.abs(e)>=1e3&&n<t.length-1;)e/=1e3,n++;return`${e.toFixed(0)}${t[n]}`}})),M,N,P,F,I=t((()=>{M=e(n(),1),N=e(s(),1),y(),x(),g(),k(),j(),P=u(),F=e=>{let{active:t=null,className:n=null,margin:r=`a-0`,onClick:i=null,tabs:a=[]}=e,[o,s]=(0,M.useState)(t||a[0]?.value),c=e=>{if(o===e.value)return null;s(e.value),i?.(e.value)};return(0,P.jsx)(O.TabsContainer,{className:n,$margin:r,children:a?.map(e=>{if(!e)return null;let t=o===e.value;return(0,P.jsxs)(O.Tab,{"aria-selected":t?`true`:`false`,id:e.id,$isActive:t,onClick:()=>c(e),role:`tab`,children:[e&&e.icon&&(0,P.jsx)(S,{color:t?`primary`:`black`,margin:`r-12`,name:e.icon,size:`minor`}),(0,P.jsx)(v,{color:t?`primary`:`black.light`,margin:`r-4`,type:t?`bodySemibold`:`bodyRegular`,children:e.label}),e&&e.count!=null&&(0,P.jsx)(b,{children:A(e.count)})]},e.value)})})},F.propTypes={active:N.default.string,className:N.default.string,margin:N.default.string,onClick:N.default.func,tabs:N.default.arrayOf(N.default.shape({count:N.default.number,icon:N.default.string,id:N.default.string,label:N.default.string.isRequired,value:N.default.string.isRequired}))},F.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{active:{description:``,type:{name:`string`},required:!1},className:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!1},tabs:{description:``,type:{name:`arrayOf`,value:{name:`shape`,value:{count:{name:`number`,required:!1},icon:{name:`string`,required:!1},id:{name:`string`,required:!1},label:{name:`string`,required:!0},value:{name:`string`,required:!0}}}},required:!1}}}})),L,R,z,B;t((()=>{T(),I(),L=u(),R={component:F,parameters:{docs:{page:w}},tags:[`autodocs`],title:`Components/Tabs`},z={args:{active:``,className:``,margin:`a-16`,onClick:null,tabs:[{count:122e3,label:`Label 1`,value:`value`},{count:5e5,label:`Label 2`,value:`value2`},{count:122e8,label:`Label 3 con texto largo`,value:`value3`},{icon:`truck`,label:`Label 3`,value:`value4`}]},render:e=>(0,L.jsx)(F,{...e})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    active: "",
    className: "",
    margin: "a-16",
    onClick: null,
    tabs: [{
      count: 122000,
      label: "Label 1",
      value: "value"
    }, {
      count: 500000,
      label: "Label 2",
      value: "value2"
    }, {
      count: 12200000000,
      label: "Label 3 con texto largo",
      value: "value3"
    }, {
      icon: "truck",
      label: "Label 3",
      value: "value4"
    }]
  },
  render: args => <Tabs {...args} />
}`,...z.parameters?.docs?.source}}},B=[`Playground`]}))();export{z as Playground,B as __namedExportsOrder,R as default};