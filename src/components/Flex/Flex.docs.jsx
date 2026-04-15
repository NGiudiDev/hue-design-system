import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { ThemeProvider } from "../ThemeProvider/ThemeProvider";
import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";

export const FlexDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Flex
        </Text>

        <Text margin="b-16 x-8">
          El componente Flex es un contenedor de layout basado en CSS Flexbox. Permite controlar la dirección, alineación horizontal y vertical de sus hijos de forma declarativa, usando las props <Text as="span" type="bodySemibold">direction</Text>, <Text as="span" type="bodySemibold">hAlign</Text> y <Text as="span" type="bodySemibold">vAlign</Text>.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Layout Declarativo
          </Text>

          <Text>
            Expone las propiedades de alineación y dirección de Flexbox como props explícitas, evitando la necesidad de escribir CSS personalizado para los casos de uso más comunes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Ancho Completo
          </Text>

          <Text>
            El contenedor ocupa siempre el 100% del ancho disponible, actuando como bloque contenedor de sus elementos hijos.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Espaciado del Sistema
          </Text>

          <Text>
            Las props <Text as="span" type="bodySemibold">margin</Text> y <Text as="span" type="bodySemibold">padding</Text> aceptan los tokens de espaciado del Design System, garantizando consistencia visual en toda la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Alineación Contextual
          </Text>

          <Text>
            Las props <Text as="span" type="bodySemibold">hAlign</Text> y <Text as="span" type="bodySemibold">vAlign</Text> se mapean automáticamente a las propiedades CSS correctas (<Text as="span" type="bodySemibold">align-items</Text> / <Text as="span" type="bodySemibold">justify-content</Text>) según la dirección activa.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Alineación según dirección
        </Text>

        <Text margin="b-16 x-8">
          El comportamiento de <Text as="span" type="bodySemibold">hAlign</Text> y <Text as="span" type="bodySemibold">vAlign</Text> varía según el valor de <Text as="span" type="bodySemibold">direction</Text>:
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            direction=&quot;row&quot; (por defecto)
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">hAlign</Text>: controla <Text as="span" type="captionSemibold">justify-content</Text> (eje principal vertical)
          </Text>

          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">vAlign</Text>: controla <Text as="span" type="captionSemibold">align-items</Text> (eje transversal horizontal)
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            direction=&quot;column&quot;
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">hAlign</Text>: controla <Text as="span" type="captionSemibold">align-items</Text> (eje transversal vertical)
          </Text>

          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">vAlign</Text>: controla <Text as="span" type="captionSemibold">justify-content</Text> (eje principal horizontal)
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Valores de alineación
        </Text>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Valores CSS válidos para hAlign y vAlign
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">flex-start</Text>: alinea los elementos al inicio del eje
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">center</Text>: centra los elementos (valor por defecto)
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">flex-end</Text>: alinea los elementos al final del eje
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">space-between</Text>: distribuye los elementos con espacio entre ellos
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">space-around</Text>: distribuye los elementos con espacio alrededor
          </Text>

          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">space-evenly</Text>: distribuye los elementos con espacio uniforme
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">
            &bull; Usar Flex para alinear y distribuir grupos de elementos relacionados
          </Text>

          <Text margin="b-4">
            &bull; Usar tokens de espaciado del sistema para margin y padding
          </Text>

          <Text margin="b-4">
            &bull; Combinar Flex con Box cuando se necesite un contenedor sin layout propio
          </Text>

          <Text>
            &bull; Definir siempre direction explícitamente para mayor claridad
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">
            &bull; Usar valores de spacing hardcodeados en lugar de los tokens del sistema
          </Text>

          <Text margin="b-4">
            &bull; Anidar múltiples Flex sin un propósito claro de layout
          </Text>

          <Text margin="b-4">
            &bull; Usar Flex cuando Grid sea más apropiado para layouts complejos de múltiples columnas
          </Text>

          <Text>
            &bull; Aplicar estilos CSS directos sobre el componente (usar styled-components cuando sea necesario)
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};