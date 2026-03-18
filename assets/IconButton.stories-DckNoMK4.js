import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,d as i,f as a,i as o,n as s,p as c,t as l,u}from"./spacing-CWM_BPBo.js";import{t as d}from"./jsx-runtime-DweqXWlm.js";import{n as f,t as p}from"./iframe-CpJrcPq9.js";import{c as m,i as h,n as g,s as _}from"./blocks-B7aBnu_Z.js";import{a as v,n as y,o as b,t as x}from"./Text-CV7_TDRk.js";import{n as S,t as C}from"./Icon-6eaxQtgc.js";import{n as w,t as T}from"./Grid-CnscmxTc.js";var E,D,O,k=t((()=>{i(),l(),E=u(`div`)(e=>`
  border-radius: 50%;
  background-color: ${e.theme.colors.secondary.main};
  height: 16px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 16px;
`),D=u(`button`)`
  ${e=>a`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 38px;
    justify-content: center;
    position: relative;
    width: 38px;

    ${s(e)}

    &:hover:enabled {
      background-color: ${e.$color===`white`?e.theme.colors.white.middleHovered:e.$color===`black`?e.theme.colors.black.middleHovered:e.theme.colors.primary.hovered};
    }

    &:active:enabled {
      background-color: ${e.$color===`white`?e.theme.colors.white.darkPressed:e.$color===`black`?e.theme.colors.black.dragged:e.theme.colors.primary.pressed};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      
      * {
        pointer-events: none;
      }
    }
  `}
`,O={Count:E,IconButton:D}})),A,j,M,N,P,F=t((()=>{e(n(),1),A=e(c(),1),S(),y(),k(),j=d(),M={name:`home`,size:`major`},N={black:`white.main`,primary:`primary.main`,white:`black.main`},P=e=>{let{color:t=`primary`,count:n=0,disabled:r=!1,icon:i={},id:a=null,margin:o=`a-0`,onClick:s,type:c=`button`}=e,l={...M,...i,color:N[t]};return(0,j.jsxs)(O.IconButton,{$color:t,disabled:r,id:a,$margin:o,onClick:s,type:c,children:[n>0&&(0,j.jsx)(O.Count,{children:(0,j.jsx)(x,{align:`center`,color:`white.main`,type:`captionRegular`,children:n>9?`+9`:n})}),(0,j.jsx)(C,{...l})]})},P.propTypes={color:A.default.oneOf([`black`,`primary`,`white`]),count:A.default.number,disabled:A.default.bool,icon:C.propTypes,id:A.default.string,margin:A.default.string,onClick:A.default.func.isRequired,type:A.default.oneOf([`button`,`submit`])},P.__docgenInfo={description:``,methods:[],displayName:`IconButton`,props:{color:{description:``,type:{name:`enum`,value:[{value:`"black"`,computed:!1},{value:`"primary"`,computed:!1},{value:`"white"`,computed:!1}]},required:!1},count:{description:``,type:{name:`number`},required:!1},disabled:{description:``,type:{name:`bool`},required:!1},icon:{description:``,type:{name:`custom`,raw:`{\r
  className: PropTypes.string,\r
  color: PropTypes.string,\r
  margin: PropTypes.string,\r
  name: PropTypes.string,\r
  onClick: PropTypes.func,\r
  size: PropTypes.oneOf(["minor", "major", "spot"]),\r
  spin: PropTypes.bool,\r
}`},required:!1},id:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},onClick:{description:``,type:{name:`func`},required:!0},type:{description:``,type:{name:`enum`,value:[{value:`"button"`,computed:!1},{value:`"submit"`,computed:!1}]},required:!1}}}})),I,L,R=t((()=>{e(n(),1),m(),f(),w(),F(),b(),y(),r(),I=d(),L=()=>(0,I.jsx)(o,{children:(0,I.jsxs)(_,{children:[(0,I.jsx)(x,{margin:`b-16`,type:`pageTitle`,children:`IconButton`}),(0,I.jsx)(x,{margin:`b-16 x-8`,children:`El componente IconButton es un botón circular interactivo que utiliza únicamente un ícono como representación visual. Está diseñado para acciones específicas y contextuales que no requieren texto descriptivo, proporcionando una interfaz limpia y eficiente en el uso del espacio.`}),(0,I.jsx)(x,{margin:`b-24`,type:`title`,children:`Principios`}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Compacto y Eficiente`}),(0,I.jsx)(x,{children:`Utiliza únicamente un ícono en un área circular de 38px, optimizando el espacio en interfaces densas mientras mantiene un área de interacción adecuada para accesibilidad.`})]}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Estados Visuales Claros`}),(0,I.jsx)(x,{children:`Proporciona feedback visual inmediato mediante estados hover, active y disabled con cambios de color de fondo que indican claramente la interactividad del botón.`})]}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Contador Integrado`}),(0,I.jsx)(x,{children:`Soporta un badge de notificación opcional en la esquina superior derecha para mostrar contadores (como notificaciones no leídas), limitando la visualización a "+9" para mantener la estética compacta.`})]}),(0,I.jsxs)(v.Wrapper,{margin:`b-32 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Variantes de Color`}),(0,I.jsx)(x,{children:`Ofrece tres variantes de color (primary, black, white) que se adaptan a diferentes fondos y contextos visuales, manteniendo contraste adecuado en todos los casos.`})]}),(0,I.jsx)(x,{type:`title`,children:`Propiedades`}),(0,I.jsx)(g,{}),(0,I.jsx)(h,{}),(0,I.jsx)(x,{margin:`b-16`,type:`title`,children:`Contador de Notificaciones`}),(0,I.jsx)(x,{margin:`b-8 x-8`,children:`El IconButton puede mostrar un contador de notificaciones en la esquina superior derecha:`}),(0,I.jsx)(v.Wrapper,{margin:`b-24 x-8`,children:(0,I.jsx)(v.Content,{children:(0,I.jsxs)(T.Container,{children:[(0,I.jsxs)(T.Item,{padding:`a-16`,xs:6,md:3,children:[(0,I.jsx)(x,{align:`center`,margin:`b-8`,type:`captionRegular`,children:`Sin contador`}),(0,I.jsx)(p,{style:{display:`flex`,justifyContent:`center`},children:(0,I.jsx)(P,{count:0,icon:{name:`home`},onClick:()=>{}})})]}),(0,I.jsxs)(T.Item,{padding:`a-16`,xs:6,md:3,children:[(0,I.jsx)(x,{align:`center`,margin:`b-8`,type:`captionRegular`,children:`1 notificación`}),(0,I.jsx)(p,{style:{display:`flex`,justifyContent:`center`},children:(0,I.jsx)(P,{count:1,icon:{name:`home`},onClick:()=>{}})})]}),(0,I.jsxs)(T.Item,{padding:`a-16`,xs:6,md:3,children:[(0,I.jsx)(x,{align:`center`,margin:`b-8`,type:`captionRegular`,children:`5 notificaciones`}),(0,I.jsx)(p,{style:{display:`flex`,justifyContent:`center`},children:(0,I.jsx)(P,{count:5,icon:{name:`home`},onClick:()=>{}})})]}),(0,I.jsxs)(T.Item,{padding:`a-16`,xs:6,md:3,children:[(0,I.jsx)(x,{align:`center`,margin:`b-8`,type:`captionRegular`,children:`Más de 9`}),(0,I.jsx)(p,{style:{display:`flex`,justifyContent:`center`},children:(0,I.jsx)(P,{count:15,icon:{name:`home`},onClick:()=>{}})})]})]})})}),(0,I.jsx)(x,{margin:`b-16`,type:`title`,children:`Accesibilidad`}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Semántica HTML`}),(0,I.jsx)(x,{margin:`b-8`,children:`Utiliza el elemento button HTML nativo con tipos semánticamente correctos (button, submit) para máxima compatibilidad con tecnologías asistivas.`})]}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Área de Interacción`}),(0,I.jsx)(x,{margin:`b-8`,children:`Mantiene un área de interacción de 38x38px que cumple con las recomendaciones de tamaño mínimo para touch targets (mínimo 44x44px en iOS, 48x48px en Android). Considerar aumentar el área si es necesario.`})]}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`Etiquetas Descriptivas`}),(0,I.jsx)(x,{margin:`b-8`,children:`IMPORTANTE: Siempre agregar un atributo aria-label descriptivo al IconButton para usuarios de lectores de pantalla, ya que no tiene texto visible. Ejemplo: aria-label="Abrir menú de notificaciones".`})]}),(0,I.jsx)(x,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,I.jsxs)(v.Wrapper,{margin:`b-16 x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,I.jsx)(x,{margin:`b-4`,children:`• Usar íconos universalmente reconocidos (home, search, menu, etc.)`}),(0,I.jsx)(x,{margin:`b-4`,children:`• Siempre incluir aria-label descriptivo para accesibilidad`}),(0,I.jsx)(x,{margin:`b-4`,children:`• Usar el contador solo para notificaciones o conteos relevantes`}),(0,I.jsx)(x,{margin:`b-4`,children:`• Elegir la variante de color apropiada según el fondo`}),(0,I.jsx)(x,{margin:`b-4`,children:`• Usar tooltips para aclarar la función del botón cuando sea necesario`}),(0,I.jsx)(x,{children:`• Deshabilitar el botón solo cuando la acción no esté disponible temporalmente`})]}),(0,I.jsxs)(v.Wrapper,{margin:`x-8`,children:[(0,I.jsx)(x,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,I.jsx)(x,{margin:`b-4`,children:`• No usar íconos ambiguos o poco conocidos`}),(0,I.jsx)(x,{margin:`b-4`,children:`• No omitir aria-label (crítico para accesibilidad)`}),(0,I.jsx)(x,{margin:`b-4`,children:`• No usar el contador para información que no sea numérica`}),(0,I.jsx)(x,{margin:`b-4`,children:`• No usar variantes de color con poco contraste respecto al fondo`}),(0,I.jsx)(x,{margin:`b-4`,children:`• No agrupar demasiados IconButtons sin separación visual`}),(0,I.jsx)(x,{children:`• No usar IconButton cuando el texto sea necesario para claridad`})]})]})}),L.__docgenInfo={description:``,methods:[],displayName:`IconButtonDocs`}})),z,B,V,H;t((()=>{e(n(),1),R(),F(),z=d(),B={argTypes:{color:{control:{type:`select`},description:`Define el color del ícono.`,options:[`black`,`primary`,`white`]},count:{control:{type:`number`},description:`Número que se muestra como contador en el botón (opcional).`},disabled:{control:{type:`boolean`},description:`Desactiva el botón cuando se establece en true.`},icon:{control:{type:`object`},description:`Objeto que define el ícono a mostrar (nombre y tamaño).`},id:{control:{type:`text`},description:`Identificador único para el botón.`},margin:{control:{type:`text`},description:`Define los márgenes alrededor del botón.`},onClick:{action:`clicked`,description:`Función que se ejecuta al hacer clic en el botón.`},type:{control:{type:`select`},description:`Define el tipo de botón: 'button' o 'submit'.`,options:[`button`,`submit`]}},component:P,parameters:{docs:{page:L}},tags:[`autodocs`],title:`Components/IconButton`},V={args:{color:`primary`,count:0,disabled:!1,icon:{name:`home`,size:`major`},margin:`a-0`,onClick:()=>{alert(`IconButton clicked!`)},type:`button`},render:e=>(0,z.jsx)(P,{...e})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Playground`]}))();export{V as Playground,H as __namedExportsOrder,B as default};