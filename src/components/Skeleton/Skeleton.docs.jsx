import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const SkeletonDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Skeleton
        </Text>

        <Text margin="b-16 x-8">
          El componente Skeleton representa un placeholder visual animado que indica al usuario que el contenido está cargando. Ofrece dos variantes: rectangular y circular, permitiendo replicar la estructura del contenido final durante la carga.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Feedback Visual
          </Text>

          <Text>
            Proporciona una indicación clara de que el contenido está cargando, mejorando la percepción de velocidad y evitando saltos de layout.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Formas Adaptables
          </Text>

          <Text>
            Ofrece variantes rectangular y circular para representar distintos tipos de contenido: textos, imágenes, avatares, etc.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Animación Continua
          </Text>

          <Text>
            Utiliza una animación de shimmer lineal y continua que comunica actividad sin distraer al usuario.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Dimensiones Flexibles
          </Text>

          <Text>
            El skeleton rectangular acepta ancho y alto personalizados, permitiendo replicar con precisión la estructura del contenido que reemplaza.
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
            Indicador de Carga
          </Text>

          <Text margin="b-8">
            Skeleton actúa como indicador visual de carga. Para una mejor accesibilidad, considerar agregar aria-busy y aria-label en el contenedor padre para comunicar el estado de carga a lectores de pantalla.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Replicar la estructura del contenido final con las dimensiones correctas</Text>
          <Text margin="b-4">&bull; Usar tipo &apos;circle&apos; para avatares e íconos</Text>
          <Text margin="b-4">&bull; Usar tipo &apos;rect&apos; para textos y bloques de contenido</Text>
          <Text margin="b-4">&bull; Combinar múltiples skeletons para representar layouts complejos</Text>
          <Text>&bull; Utilizar el sistema de spacing para mantener consistencia con el componente real</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">&bull; No usar skeletons para contenido que ya está disponible</Text>
          <Text margin="b-4">&bull; No usar dimensiones que no coincidan con el contenido final</Text>
          <Text>&bull; No usar skeleton como decoración permanente</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};