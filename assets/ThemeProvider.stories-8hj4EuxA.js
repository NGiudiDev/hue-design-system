import{j as e,T as a}from"./iframe-BZJsol1c.js";import{U as t,a as d}from"./blocks-Df3d3sc0.js";import{T as r,P as o}from"./Text-CRCib6v8.js";import"./preload-helper-DoJ7B10h.js";import"./index-ZJ7R_Kfb.js";const s=()=>e.jsx(a,{children:e.jsxs(t,{children:[e.jsx(r,{margin:"b-16",type:"pageTitle",children:"ThemeProvider"}),e.jsx(r,{margin:"b-16 x-8",children:"ThemeProvider es el componente proveedor de tema que debe envolver toda la aplicación para proporcionar acceso a los tokens de diseño del Design System. Utiliza el ThemeProvider de styled-components para hacer disponibles colores, tipografía, espaciado, sombras y otros elementos del tema a todos los componentes."}),e.jsx(r,{margin:"b-24",type:"title",children:"Principios"}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"Proveedor Central"}),e.jsx(r,{children:"Actúa como fuente única de verdad para todos los tokens de diseño, garantizando consistencia en toda la aplicación."})]}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"Acceso Universal"}),e.jsx(r,{children:"Proporciona acceso a los tokens del tema a través de props.theme en todos los styled-components y componentes del sistema."})]}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"Optimización de Recursos"}),e.jsx(r,{children:"Incluye preconexiones a Google Fonts y optimizaciones de carga para mejorar el rendimiento de la aplicación."})]}),e.jsxs(o.Wrapper,{margin:"b-32 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"Estructura Sistemática"}),e.jsx(r,{children:"Organiza los tokens en categorías lógicas (colores, tipografía, espaciado) para facilitar su uso y mantenimiento."})]}),e.jsx(r,{type:"title",children:"Propiedades"}),e.jsx(d,{}),e.jsx(r,{margin:"b-16",type:"title",children:"Configuración e Instalación"}),e.jsx(r,{margin:"b-16",type:"bodySemibold",children:"Configuración Básica"}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",children:"ThemeProvider debe envolver el componente raíz de tu aplicación para proporcionar acceso global al tema."}),e.jsx(r,{as:"pre",margin:"b-8",children:`  import React from "react";

  import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
  import { MainContent } from "./components/MainContent";

  function App() {
    return (
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    );
  }

  export default App;
  `})]}),e.jsx(r,{margin:"b-16",type:"bodySemibold",children:"Acceso al Tema en Styled-Components"}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",children:"Una vez configurado ThemeProvider, todos los styled-components tienen acceso automático al tema a través de props."}),e.jsx(r,{as:"pre",margin:"b-8",children:`import styled from "styled-components";

  const StyledComponent = styled.div\`
  /* Acceso a colores */
  color: \${props => props.theme.colors.primary.main};
  background-color: \${props => props.theme.colors.white.surface};

  /* Acceso a tipografía */
  font-size: \${props => props.theme.typography.title.size};
  font-weight: \${props => props.theme.typography.title.weight};
  line-height: \${props => props.theme.typography.title.lineHeight};

  /* Acceso a sombras */
  box-shadow: \${props => props.theme.shadows.level2};

  /* Media queries con breakpoints */
  @media (min-width: \${props => props.theme.breakpoints.md}) {
    font-size: \${props => props.theme.typography.pageTitle.size};
  }
  \`;`})]}),e.jsx(r,{margin:"b-16",type:"bodySemibold",children:"Uso con Hook useTheme"}),e.jsxs(o.Wrapper,{margin:"b-24 x-8",children:[e.jsx(r,{margin:"b-8",children:"Para acceder al tema en componentes funcionales sin styled-components."}),e.jsx(r,{as:"pre",margin:"b-8",children:`import React from "react";
  import { useTheme } from "styled-components";

  const MyComponent = () => {
  const theme = useTheme();

  const dynamicStyles = {
    color: theme.colors.primary.main,
    fontSize: theme.typography.bodyRegular.size,
    boxShadow: theme.shadows.level1,
  };

  return (
    <div style={dynamicStyles}>
      Contenido con estilos del tema
    </div>
  );
  };`})]}),e.jsx(r,{margin:"b-16",type:"title",children:"Buenas Prácticas"}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"✅ Recomendado"}),e.jsx(r,{margin:"b-4",children:"• Envolver toda la aplicación con ThemeProvider en el componente raíz"}),e.jsx(r,{margin:"b-4",children:"• Usar tokens del tema en lugar de valores hardcodeados"}),e.jsx(r,{margin:"b-4",children:"• Acceder al tema a través de props.theme en styled-components"}),e.jsx(r,{margin:"b-4",children:"• Mantener los archivos de tema organizados por categoría"}),e.jsx(r,{margin:"b-4",children:"• Documentar tokens personalizados cuando extendas el tema"}),e.jsx(r,{children:"• Usar useTheme hook para acceso al tema en componentes funcionales"})]}),e.jsxs(o.Wrapper,{margin:"b-16 x-8",children:[e.jsx(r,{margin:"b-8",type:"bodySemibold",children:"❌ Evitar"}),e.jsx(r,{margin:"b-4",children:"• No anidar múltiples ThemeProvider sin propósito específico"}),e.jsx(r,{margin:"b-4",children:"• No acceder directamente a archivos de tema fuera de ThemeProvider"}),e.jsx(r,{margin:"b-4",children:"• No usar valores hardcodeados cuando existan tokens equivalentes"}),e.jsx(r,{margin:"b-4",children:"• No modificar el objeto tema directamente en tiempo de ejecución"}),e.jsx(r,{children:"• No omitir ThemeProvider en aplicaciones que usan el Design System"})]})]})});s.__docgenInfo={description:"",methods:[],displayName:"ThemeProviderDocs"};const g={argTypes:{children:{control:{type:"text"},description:"Los componentes de la aplicación que necesitan acceso al tema del Design System."}},component:a,parameters:{docs:{page:s}},tags:["autodocs"],title:"Foundation/ThemeProvider"},n={args:{children:"Contenido envuelto en ThemeProvider"},render:i=>e.jsx(a,{children:e.jsxs(o.Wrapper,{children:[e.jsx(r,{type:"title",margin:"b-16",children:i.children}),e.jsx(r,{children:"Este contenido tiene acceso a todos los tokens del tema."})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Contenido envuelto en ThemeProvider"
  },
  render: args => <ThemeProvider>\r
      <Panel.Wrapper>\r
        <Text type="title" margin="b-16">{args.children}</Text>\r
        <Text>Este contenido tiene acceso a todos los tokens del tema.</Text>\r
      </Panel.Wrapper>\r
    </ThemeProvider>
}`,...n.parameters?.docs?.source}}};const x=["Playground"];export{n as Playground,x as __namedExportsOrder,g as default};
