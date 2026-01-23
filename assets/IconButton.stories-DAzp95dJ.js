import{a as p,m as x,r as h,l as g,j as e,P as t,T as y,B as s}from"./iframe-BZJsol1c.js";import{U as j,C as f,a as v}from"./blocks-Df3d3sc0.js";import{G as c}from"./Grid-BWKSGatR.js";import{I as u}from"./Icon-Di0LVvow.js";import{T as n,P as i}from"./Text-CRCib6v8.js";import"./preload-helper-DoJ7B10h.js";import"./index-ZJ7R_Kfb.js";const C=p("div")(o=>`
  border-radius: 50%;
  background-color: ${o.theme.colors.secondary.main};
  height: 16px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 16px;
`),k=p("button")`
  ${o=>h`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 38px;
    justify-content: center;
    position: relative;
    width: 38px;

    ${x(o)}

    &:hover:enabled {
      background-color: ${o.$color==="white"?o.theme.colors.white.middleHovered:o.$color==="black"?o.theme.colors.black.middleHovered:o.theme.colors.primary.hovered};
    }

    &:active:enabled {
      background-color: ${o.$color==="white"?o.theme.colors.white.darkPressed:o.$color==="black"?o.theme.colors.black.dragged:o.theme.colors.primary.pressed};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      
      * {
        pointer-events: none;
      }
    }
  `}
`,d={Count:C,IconButton:k},m={color:"primary",count:0,disabled:!1,icon:{name:"home",size:"major"},id:null,margin:"a-0",onClick:()=>{},type:"button"},I={black:"white.main",primary:"primary.main",white:"black.main"},a=o=>{const r=g.merge({},m,o,{icon:{color:I[o.color||m.color]}});return e.jsxs(d.IconButton,{$color:r.color,disabled:r.disabled,id:r.id,$margin:r.margin,onClick:r.onClick,type:r.type,children:[r.count>0&&e.jsx(d.Count,{children:e.jsx(n,{align:"center",color:"white",type:"captionRegular",children:r.count>9?"+9":r.count})}),e.jsx(u,{...r.icon})]})};a.propTypes={color:t.oneOf(["black","primary","white"]),count:t.number,disabled:t.bool,icon:u.propTypes,id:t.string,margin:t.string,onClick:t.func.isRequired,type:t.oneOf(["button","submit"])};a.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{color:{description:"",type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"primary"',computed:!1},{value:'"white"',computed:!1}]},required:!1},count:{description:"",type:{name:"number"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},icon:{description:"",type:{name:"custom",raw:`{\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:"",type:{name:"string"},required:!1},margin:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!0},type:{description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1}]},required:!1}}};const b=()=>e.jsx(y,{children:e.jsxs(j,{children:[e.jsx(n,{margin:"b-16",type:"pageTitle",children:"IconButton"}),e.jsx(n,{margin:"b-16 x-8",children:"El componente IconButton es un botón circular interactivo que utiliza únicamente un ícono como representación visual. Está diseñado para acciones específicas y contextuales que no requieren texto descriptivo, proporcionando una interfaz limpia y eficiente en el uso del espacio."}),e.jsx(n,{margin:"b-24",type:"title",children:"Principios"}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Compacto y Eficiente"}),e.jsx(n,{children:"Utiliza únicamente un ícono en un área circular de 38px, optimizando el espacio en interfaces densas mientras mantiene un área de interacción adecuada para accesibilidad."})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Estados Visuales Claros"}),e.jsx(n,{children:"Proporciona feedback visual inmediato mediante estados hover, active y disabled con cambios de color de fondo que indican claramente la interactividad del botón."})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Contador Integrado"}),e.jsx(n,{children:'Soporta un badge de notificación opcional en la esquina superior derecha para mostrar contadores (como notificaciones no leídas), limitando la visualización a "+9" para mantener la estética compacta.'})]}),e.jsxs(i.Wrapper,{margin:"b-32 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Variantes de Color"}),e.jsx(n,{children:"Ofrece tres variantes de color (primary, black, white) que se adaptan a diferentes fondos y contextos visuales, manteniendo contraste adecuado en todos los casos."})]}),e.jsx(n,{type:"title",children:"Propiedades"}),e.jsx(f,{}),e.jsx(v,{}),e.jsx(n,{margin:"b-16",type:"title",children:"Contador de Notificaciones"}),e.jsx(n,{margin:"b-8 x-8",children:"El IconButton puede mostrar un contador de notificaciones en la esquina superior derecha:"}),e.jsx(i.Wrapper,{margin:"b-24 x-8",children:e.jsx(i.Content,{children:e.jsxs(c.Container,{children:[e.jsxs(c.Item,{padding:"a-16",xs:6,md:3,children:[e.jsx(n,{align:"center",margin:"b-8",type:"captionRegular",children:"Sin contador"}),e.jsx(s,{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{count:0,icon:{name:"home"},onClick:()=>{}})})]}),e.jsxs(c.Item,{padding:"a-16",xs:6,md:3,children:[e.jsx(n,{align:"center",margin:"b-8",type:"captionRegular",children:"1 notificación"}),e.jsx(s,{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{count:1,icon:{name:"home"},onClick:()=>{}})})]}),e.jsxs(c.Item,{padding:"a-16",xs:6,md:3,children:[e.jsx(n,{align:"center",margin:"b-8",type:"captionRegular",children:"5 notificaciones"}),e.jsx(s,{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{count:5,icon:{name:"home"},onClick:()=>{}})})]}),e.jsxs(c.Item,{padding:"a-16",xs:6,md:3,children:[e.jsx(n,{align:"center",margin:"b-8",type:"captionRegular",children:"Más de 9"}),e.jsx(s,{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{count:15,icon:{name:"home"},onClick:()=>{}})})]})]})})}),e.jsx(n,{margin:"b-16",type:"title",children:"Accesibilidad"}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Semántica HTML"}),e.jsx(n,{margin:"b-8",children:"Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit) para máxima compatibilidad con tecnologías asistivas."})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Área de Interacción"}),e.jsx(n,{margin:"b-8",children:"Mantiene un área de interacción de 38x38px que cumple con las recomendaciones de tamaño mínimo para touch targets (mínimo 44x44px en iOS, 48x48px en Android). Considerar aumentar el área si es necesario."})]}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"Etiquetas Descriptivas"}),e.jsx(n,{margin:"b-8",children:'IMPORTANTE: Siempre agregar un atributo aria-label descriptivo al IconButton para usuarios de lectores de pantalla, ya que no tiene texto visible. Ejemplo: aria-label="Abrir menú de notificaciones".'})]}),e.jsx(n,{margin:"b-16",type:"title",children:"Buenas Prácticas"}),e.jsxs(i.Wrapper,{margin:"b-16 x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"✅ Recomendado"}),e.jsx(n,{margin:"b-4",children:"• Usar íconos universalmente reconocidos (home, search, menu, etc.)"}),e.jsx(n,{margin:"b-4",children:"• Siempre incluir aria-label descriptivo para accesibilidad"}),e.jsx(n,{margin:"b-4",children:"• Usar el contador solo para notificaciones o conteos relevantes"}),e.jsx(n,{margin:"b-4",children:"• Elegir la variante de color apropiada según el fondo"}),e.jsx(n,{margin:"b-4",children:"• Usar tooltips para aclarar la función del botón cuando sea necesario"}),e.jsx(n,{children:"• Deshabilitar el botón solo cuando la acción no esté disponible temporalmente"})]}),e.jsxs(i.Wrapper,{margin:"x-8",children:[e.jsx(n,{margin:"b-8",type:"bodySemibold",children:"❌ Evitar"}),e.jsx(n,{margin:"b-4",children:"• No usar íconos ambiguos o poco conocidos"}),e.jsx(n,{margin:"b-4",children:"• No omitir aria-label (crítico para accesibilidad)"}),e.jsx(n,{margin:"b-4",children:"• No usar el contador para información que no sea numérica"}),e.jsx(n,{margin:"b-4",children:"• No usar variantes de color con poco contraste respecto al fondo"}),e.jsx(n,{margin:"b-4",children:"• No agrupar demasiados IconButtons sin separación visual"}),e.jsx(n,{children:"• No usar IconButton cuando el texto sea necesario para claridad"})]})]})});b.__docgenInfo={description:"",methods:[],displayName:"IconButtonDocs"};const N={argTypes:{color:{control:{type:"select"},description:"Define el color del ícono.",options:["black","primary","white"]},count:{control:{type:"number"},description:"Número que se muestra como contador en el botón (opcional)."},disabled:{control:{type:"boolean"},description:"Desactiva el botón cuando se establece en true."},icon:{control:{type:"object"},description:"Objeto que define el ícono a mostrar (nombre y tamaño)."},id:{control:{type:"text"},description:"Identificador único para el botón."},margin:{control:{type:"text"},description:"Define los márgenes alrededor del botón."},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el botón."},type:{control:{type:"select"},description:"Define el tipo de botón: 'button' o 'submit'.",options:["button","submit"]}},component:a,parameters:{docs:{page:b}},tags:["autodocs"],title:"Components/IconButton"},l={args:{color:"primary",count:0,disabled:!1,icon:{name:"home",size:"major"},margin:"a-0",onClick:()=>{alert("IconButton clicked!")},type:"button"},render:o=>e.jsx(a,{...o})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    count: 0,
    disabled: false,
    icon: {
      name: "home",
      size: "major"
    },
    margin: "a-0",
    onClick: () => {
      alert("IconButton clicked!");
    },
    type: "button"
  },
  render: args => <IconButton {...args} />
}`,...l.parameters?.docs?.source}}};const O=["Playground"];export{l as Playground,O as __namedExportsOrder,N as default};
