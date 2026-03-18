import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,d as i,i as a,p as o,u as s}from"./spacing-CWM_BPBo.js";import{t as c}from"./jsx-runtime-DweqXWlm.js";import{c as l,i as u,n as d,s as f}from"./blocks-B7aBnu_Z.js";import{a as p,n as m,o as h,t as g}from"./Text-CV7_TDRk.js";var _,v,y=t((()=>{e(n(),1),l(),h(),m(),r(),_=c(),v=()=>(0,_.jsx)(a,{children:(0,_.jsxs)(f,{children:[(0,_.jsx)(g,{margin:`b-16`,type:`pageTitle`,children:`Link`}),(0,_.jsx)(g,{margin:`b-16 x-8`,children:`El componente Link proporciona una forma consistente de crear enlaces navegables dentro del design system. Soporta diferentes estilos tipográficos, navegación en nueva pestaña y mantiene los estados de interacción estándar.`}),(0,_.jsx)(g,{margin:`b-24`,type:`title`,children:`Principios`}),(0,_.jsxs)(p.Wrapper,{margin:`b-16 x-8`,children:[(0,_.jsx)(g,{margin:`b-8`,type:`bodySemibold`,children:`Accesibilidad`}),(0,_.jsx)(g,{children:`Los enlaces incluyen automáticamente los atributos de seguridad necesarios cuando se abren en nueva pestaña (rel="noopener noreferrer").`})]}),(0,_.jsxs)(p.Wrapper,{margin:`b-16 x-8`,children:[(0,_.jsx)(g,{margin:`b-8`,type:`bodySemibold`,children:`Consistencia Visual`}),(0,_.jsx)(g,{children:`Utiliza los tokens tipográficos del sistema para mantener coherencia con el resto de componentes de texto.`})]}),(0,_.jsxs)(p.Wrapper,{margin:`b-16 x-8`,children:[(0,_.jsx)(g,{margin:`b-8`,type:`bodySemibold`,children:`Estados Interactivos`}),(0,_.jsx)(g,{children:`Proporciona estados claros para hover, active y visited siguiendo las convenciones web estándar.`})]}),(0,_.jsx)(g,{type:`title`,children:`Propiedades`}),(0,_.jsx)(d,{}),(0,_.jsx)(u,{}),(0,_.jsx)(g,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,_.jsxs)(p.Wrapper,{margin:`b-16 x-8`,children:[(0,_.jsx)(g,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Usar openInNewTab=true para enlaces externos o documentos`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Elegir el tipo tipográfico apropiado según el contexto`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Proporcionar texto descriptivo que indique el destino`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Usar bodySemibold para enlaces importantes o call-to-action`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Usar captionRegular para enlaces secundarios o de pie de página`})]}),(0,_.jsxs)(p.Wrapper,{margin:`x-8`,children:[(0,_.jsx)(g,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Usar "Clic aquí" o texto genérico poco descriptivo`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Abrir enlaces internos en nueva pestaña sin motivo`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Usar tipos tipográficos inconsistentes con el contexto`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Enlaces sin href válido (usar Button para acciones)`}),(0,_.jsx)(g,{margin:`b-4`,children:`• Sobrecargar una página con demasiados enlaces destacados`})]})]})}),v.__docgenInfo={description:``,methods:[],displayName:`LinkDocs`}})),b,x,S=t((()=>{i(),b=s(`a`)(e=>{let t=e.theme.typography[e.$type]||e.theme.typography.bodyRegular;return`
    background-color: transparent;
    color: ${e.theme.colors.link.main};
    font-family: ${e.theme.fontFamily};
    font-size: ${t.size};
    font-weight: ${t.weight};
    line-height: ${t.lineHeight};
    text-decoration: underline;

    &:hover {
      color: ${e.theme.colors.link.hovered};
    }

    &:active {
      color: ${e.theme.colors.link.pressed};
    }

    &:visited {
      color: ${e.theme.colors.link.visited};
    }
  `}),x={LinkContainer:b}})),C,w,T,E=t((()=>{e(n(),1),C=e(o(),1),S(),w=c(),T=e=>{let{children:t=null,href:n=null,openInNewTab:r=!1,type:i=`bodyRegular`}=e;return(0,w.jsx)(x.LinkContainer,{href:n,target:r?`_blank`:void 0,rel:r?`noopener noreferrer`:void 0,$type:i,children:t})},T.propTypes={children:C.default.node,href:C.default.string,openInNewTab:C.default.bool,type:C.default.string},T.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{children:{description:``,type:{name:`node`},required:!1},href:{description:``,type:{name:`string`},required:!1},openInNewTab:{description:``,type:{name:`bool`},required:!1},type:{description:``,type:{name:`string`},required:!1}}}})),D,O,k,A;t((()=>{e(n(),1),y(),E(),D=c(),O={argTypes:{children:{control:{type:`text`},description:`Contenido que se renderiza dentro del enlace. Puede ser cualquier elemento React válido.`},href:{control:{type:`text`},description:`URL a la que apunta el enlace. Debe ser una cadena válida.`},openInNewTab:{control:{type:`boolean`},description:`Determina si el enlace se abre en una nueva pestaña del navegador. Cuando es true, se añaden automáticamente los atributos target='_blank' y rel='noopener noreferrer' por seguridad.`},type:{control:{type:`text`},description:`Define el estilo tipográfico del enlace usando los tokens del sistema. Acepta valores como 'bodyRegular', 'bodySemibold', 'captionRegular', etc.`}},component:T,parameters:{docs:{page:v}},tags:[`autodocs`],title:`Components/Link`},k={args:{children:`Este es un enlace`,href:`https://google.com`,openInNewTab:!1,type:`bodyRegular`},render:e=>(0,D.jsx)(T,{...e})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Este es un enlace",
    href: "https://google.com",
    openInNewTab: false,
    type: "bodyRegular"
  },
  render: args => <Link {...args} />
}`,...k.parameters?.docs?.source}}},A=[`Playground`]}))();export{k as Playground,A as __namedExportsOrder,O as default};