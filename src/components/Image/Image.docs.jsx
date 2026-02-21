import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const ImageDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Image
        </Text>

        <Text margin="b-16 x-8">
          El componente Image permite mostrar imágenes optimizadas, responsivas y con soporte para diferentes formas y tamaños. Ofrece integración con el sistema de tokens para controlar dimensiones, bordes y estilos, asegurando consistencia visual y accesibilidad en el Design System.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Optimización y Responsividad
          </Text>

          <Text>
            Permite definir tamaños y formas usando tokens del sistema, adaptándose a diferentes layouts y dispositivos sin perder calidad visual.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Integración con el Tema
          </Text>

          <Text>
            Utiliza el sistema de tokens para bordes, radio y colores de fondo, garantizando alineación con el resto de componentes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Accesibilidad
          </Text>

          <Text>
            Soporta atributos alt y roles para asegurar que las imágenes sean comprensibles por tecnologías asistivas.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Espaciado Sistemático
          </Text>

          <Text>
            Utiliza el sistema de spacing unificado para padding y margin, garantizando alineación correcta con otros componentes del Design System.
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
            Texto Alternativo
          </Text>

          <Text margin="b-8">
            Siempre define el atributo alt para describir el contenido de la imagen.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica
          </Text>

          <Text margin="b-8">
            Image renderiza una etiqueta img o picture según la configuración, permitiendo el uso de atributos de accesibilidad estándar (alt, role, aria-*).
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Usar tokens de tamaño y forma del tema en lugar de valores hardcodeados</Text>
          
          <Text margin="b-4">&bull; Definir siempre el atributo alt</Text>
          
          <Text margin="b-4">&bull; Utilizar el sistema de spacing para alinear imágenes con otros componentes</Text>
          
          <Text margin="b-4">&bull; Aprovechar las props de forma (shape) y tamaño (size) para mantener consistencia visual</Text>
          
          <Text>&bull; Usar imágenes optimizadas y de buena calidad</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">&bull; No dejar el atributo alt vacío en imágenes informativas</Text>
          
          <Text margin="b-4">&bull; No usar valores de tamaño hardcodeados</Text>
          
          <Text margin="b-4">&bull; No distorsionar la imagen forzando proporciones incorrectas</Text>
          
          <Text margin="b-4">&bull; No usar imágenes de baja resolución</Text>
          
          <Text>&bull; No olvidar el sistema de spacing para separación</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};