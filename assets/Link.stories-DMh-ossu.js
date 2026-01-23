import{j as e,T as d,a as p,l as m,P as s}from"./iframe-BfEVEUym.js";import{U as g,C as h,a as b}from"./blocks-NoWBXSJr.js";import{T as n,P as i}from"./Text-Zkta_WuU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rTVfIfWj.js";const c=()=>e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(n,{margin:"b-16",type:"pageTitle",children:"Link"}),e.jsx(n,{margin:"b-16 x-8",children:"El componente Link proporciona una forma consistente de crear enlaces navegables dentro del design system. Soporta diferentes estilos tipográficos, navegación en nueva pestaña y mantiene los estados de interacción estándar."}),e.jsx(n,{margin:"b-24",type:"title",children:"Principios"}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Accesibilidad"}),e.jsx(n,{children:'Los enlaces incluyen automáticamente los atributos de seguridad necesarios cuando se abren en nueva pestaña (rel="noopener noreferrer").'})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Consistencia Visual"}),e.jsx(n,{children:"Utiliza los tokens tipográficos del sistema para mantener coherencia con el resto de componentes de texto."})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Estados Interactivos"}),e.jsx(n,{children:"Proporciona estados claros para hover, active y visited siguiendo las convenciones web estándar."})]}),e.jsx(n,{type:"title",children:"Propiedades"}),e.jsx(h,{}),e.jsx(b,{}),e.jsx(n,{margin:"b-16",type:"title",children:"Buenas Prácticas"}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"✅ Recomendado"}),e.jsx(n,{margin:"b-4",children:"• Usar openInNewTab=true para enlaces externos o documentos"}),e.jsx(n,{margin:"b-4",children:"• Elegir el tipo tipográfico apropiado según el contexto"}),e.jsx(n,{margin:"b-4",children:"• Proporcionar texto descriptivo que indique el destino"}),e.jsx(n,{margin:"b-4",children:"• Usar bodySemibold para enlaces importantes o call-to-action"}),e.jsx(n,{margin:"b-4",children:"• Usar captionRegular para enlaces secundarios o de pie de página"})]}),e.jsxs(i.Wrapper,{margin:"x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"❌ Evitar"}),e.jsx(n,{margin:"b-4",children:'• Usar "Clic aquí" o texto genérico poco descriptivo'}),e.jsx(n,{margin:"b-4",children:"• Abrir enlaces internos en nueva pestaña sin motivo"}),e.jsx(n,{margin:"b-4",children:"• Usar tipos tipográficos inconsistentes con el contexto"}),e.jsx(n,{margin:"b-4",children:"• Enlaces sin href válido (usar Button para acciones)"}),e.jsx(n,{margin:"b-4",children:"• Sobrecargar una página con demasiados enlaces destacados"})]})]})});c.__docgenInfo={description:"",methods:[],displayName:"LinkDocs"};const u=p("a")(o=>{const r=o.theme.typography[o.$type]||o.theme.typography.bodyRegular;return`
    background-color: transparent;
    color: ${a=>a.theme.colors.link.main};
    font-family: Public Sans, sans-serif;
    font-size: ${r.size};
    font-weight: ${r.weight};
    line-height: ${r.lineHeight};
    text-decoration: underline;

    &:hover {
      color: ${a=>a.theme.colors.link.hovered};
    }

    &:active {
      color: ${a=>a.theme.colors.link.pressed};
    }

    &:visited {
      color: ${a=>a.theme.colors.link.visited};
    }
  `}),y={LinkContainer:u},x={children:null,href:null,openInNewTab:!1,type:"bodyRegular"},l=o=>{const r=m.merge({},x,o);return e.jsx(y.LinkContainer,{href:r.href,target:r.openInNewTab?"_blank":void 0,rel:r.openInNewTab?"noopener noreferrer":void 0,$type:r.type,children:r.children})};l.propTypes={children:s.node,href:s.string,openInNewTab:s.bool,type:s.string};l.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{description:"",type:{name:"node"},required:!1},href:{description:"",type:{name:"string"},required:!1},openInNewTab:{description:"",type:{name:"bool"},required:!1},type:{description:"",type:{name:"string"},required:!1}}};const P={argTypes:{children:{control:{type:"text"},description:"Contenido que se renderiza dentro del enlace. Puede ser cualquier elemento React válido."},href:{control:{type:"text"},description:"URL a la que apunta el enlace. Debe ser una cadena válida."},openInNewTab:{control:{type:"boolean"},description:"Determina si el enlace se abre en una nueva pestaña del navegador. Cuando es true, se añaden automáticamente los atributos target='_blank' y rel='noopener noreferrer' por seguridad."},type:{control:{type:"text"},description:"Define el estilo tipográfico del enlace usando los tokens del sistema. Acepta valores como 'bodyRegular', 'bodySemibold', 'captionRegular', etc."}},component:l,parameters:{docs:{page:c}},tags:["autodocs"],title:"Components/Link"},t={args:{children:"Este es un enlace",href:"https://google.com",openInNewTab:!1,type:"bodyRegular"},render:o=>e.jsx(l,{...o})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Este es un enlace",
    href: "https://google.com",
    openInNewTab: false,
    type: "bodyRegular"
  },
  render: args => <Link {...args} />
}`,...t.parameters?.docs?.source}}};const L=["Playground"];export{t as Playground,L as __namedExportsOrder,P as default};
