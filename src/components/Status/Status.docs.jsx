import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const StatusDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Status
        </Text>

        <Text margin="b-16 x-8">
          El componente Status muestra un estado visual compuesto por un ícono circular y textos informativos (título y subtítulo). Es ideal para representar estados de procesos, envíos, notificaciones o cualquier flujo que requiera feedback visual al usuario.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición Clara
          </Text>

          <Text>
            Combina un ícono circular con texto principal y secundario, proporcionando contexto visual y textual de manera equilibrada.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Variantes Visuales
          </Text>

          <Text>
            Soporta modo invertido (borde sin fondo) y estado deshabilitado, adaptando automáticamente los colores del ícono y texto.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Skeleton Integrado
          </Text>

          <Text>
            Incluye un componente StatusSkeleton que replica la estructura del Status para estados de carga, manteniendo consistencia visual durante la carga de datos.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Tokens del Tema
          </Text>

          <Text>
            Utiliza exclusivamente tokens de color del tema para garantizar consistencia con el resto del Design System.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contraste de Color
          </Text>

          <Text margin="b-8">
            El ícono utiliza combinaciones de color que cumplen con los estándares WCAG. En modo normal, el ícono blanco contrasta con el fondo de color. En modo invertido, el ícono hereda el color del token.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estado Deshabilitado
          </Text>

          <Text margin="b-8">
            Cuando está deshabilitado, tanto el ícono como el texto cambian a un color de baja opacidad, comunicando visualmente que el elemento no está activo.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Usar tokens de color del tema (ej: &apos;primary&apos;, &apos;success&apos;, &apos;error&apos;)</Text>
          <Text margin="b-4">&bull; Proporcionar siempre un título descriptivo</Text>
          <Text margin="b-4">&bull; Usar el modo invertido para estados secundarios o menos prominentes</Text>
          <Text margin="b-4">&bull; Utilizar StatusSkeleton durante la carga de datos</Text>
          <Text>&bull; Combinar con el sistema de spacing para alineación consistente</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">&bull; No usar nombres de íconos que no existen en el tema</Text>
          <Text margin="b-4">&bull; No usar colores hardcodeados en lugar de tokens</Text>
          <Text margin="b-4">&bull; No omitir título y subtítulo simultáneamente</Text>
          <Text>&bull; No usar Status para acciones interactivas (usar Button en su lugar)</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};