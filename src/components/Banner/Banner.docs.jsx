import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const BannerDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Banner
        </Text>

        <Text margin="b-16 x-8">
          El componente Banner muestra mensajes contextuales al usuario con distintos niveles de importancia: informativo, exitoso, de advertencia, de error o destacado. Combina un ícono representativo con un título y una descripción opcional.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Comunicación Clara
          </Text>

          <Text>
            Cada tipo de banner comunica un estado semántico específico mediante color e ícono, permitiendo al usuario identificar rápidamente la naturaleza del mensaje.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contenido Flexible
          </Text>

          <Text>
            El título es obligatorio, pero la descripción es opcional. Cuando no hay descripción, el título adopta un estilo más destacado. Tanto el título como la descripción aceptan nodos React, permitiendo contenido enriquecido.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Tokens del Tema
          </Text>

          <Text>
            Los colores del banner se derivan de tokens del sistema de diseño, garantizando consistencia visual con el resto de los componentes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Variantes de Tipo
          </Text>

          <Text>
            Soporta cinco tipos: <Text type="bodySemibold">info</Text>, <Text type="bodySemibold">success</Text>, <Text type="bodySemibold">warning</Text>, <Text type="bodySemibold">error</Text> y <Text type="bodySemibold">highlight</Text>. Cada uno aplica automáticamente el color e ícono correspondiente.
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

          <Text>
            Todos los tipos de banner utilizan combinaciones de color que cumplen con los estándares de contraste WCAG, asegurando legibilidad para usuarios con dificultades visuales.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Ícono Complementario
          </Text>

          <Text>
            El ícono acompaña visualmente al texto sin reemplazarlo. El mensaje siempre debe ser comprensible únicamente por su contenido textual, sin depender del ícono.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Elegir el tipo que mejor represente la naturaleza del mensaje (ej: &apos;error&apos; para fallos, &apos;success&apos; para confirmaciones)</Text>
          <Text margin="b-4">&bull; Mantener el título breve y directo</Text>
          <Text margin="b-4">&bull; Usar la descripción para ampliar el contexto cuando sea necesario</Text>
          <Text margin="b-4">&bull; Usar el sistema de spacing para controlar márgenes</Text>
          <Text>&bull; Usar &apos;highlight&apos; para mensajes promocionales o de atención especial</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">&bull; No usar colores hardcodeados en lugar de los tipos predefinidos</Text>
          <Text margin="b-4">&bull; No omitir el título, ya que es el mensaje principal del banner</Text>
          <Text margin="b-4">&bull; No usar Banner para contenido interactivo complejo (usar Modal en su lugar)</Text>
          <Text>&bull; No acumular múltiples banners del mismo tipo sin jerarquía visual</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};
