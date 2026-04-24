import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const MapDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Map
        </Text>

        <Text margin="b-16 x-8">
          El componente Map renderiza un mapa interactivo basado en Google Maps a través de React Leaflet, con soporte para marcadores personalizados, íconos Lottie y un listado lateral de ubicaciones. Está diseñado para mostrar puntos geográficos de forma clara y accesible.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Marcadores Personalizables
          </Text>

          <Text>
            Cada marcador acepta una posición geográfica, un nodo React como ítem de lista y opcionalmente un ícono animado Lottie. Los marcadores arrastrables permiten interacción directa del usuario con el mapa.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Listado Lateral
          </Text>

          <Text>
            La prop <Text as="span" type="bodySemibold">showList</Text> activa un panel lateral que lista todos los marcadores usando el nodo React provisto en <Text as="span" type="bodySemibold">listItem</Text>. Esto facilita la navegación cuando hay múltiples puntos en el mapa.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Dimensiones Configurables
          </Text>

          <Text>
            El mapa acepta <Text as="span" type="bodySemibold">width</Text> y <Text as="span" type="bodySemibold">height</Text> como strings CSS (ej: &apos;100%&apos;, &apos;400px&apos;), permitiendo adaptarlo a cualquier contenedor del layout.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Zoom Controlado
          </Text>

          <Text>
            Por defecto el scroll del mouse no controla el zoom para evitar interferir con el scroll de la página. Puede habilitarse con la prop <Text as="span" type="bodySemibold">enableZoom</Text> cuando sea necesaria la exploración libre del mapa.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Marcadores
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estructura de un marcador
          </Text>

          <Text margin="b-4">Cada objeto del array <Text type="bodySemibold">markers</Text> acepta las siguientes propiedades:</Text>
          <Text margin="b-4">&bull; <Text type="bodySemibold">position</Text> (requerido): array [lat, lng] con las coordenadas geográficas.</Text>
          <Text margin="b-4">&bull; <Text type="bodySemibold">listItem</Text>: nodo React que se muestra en el listado lateral.</Text>
          <Text margin="b-4">&bull; <Text type="bodySemibold">draggable</Text>: permite arrastrar el marcador en el mapa.</Text>
          <Text>&bull; <Text type="bodySemibold">lottieIcon</Text>: JSON de animación Lottie para reemplazar el ícono por defecto.</Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Listado como Alternativa
          </Text>

          <Text>
            Usar <Text type="bodySemibold">showList</Text> junto con contenido descriptivo en <Text type="bodySemibold">listItem</Text> provee una alternativa textual accesible para usuarios que no pueden interactuar con el mapa visual.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Zoom por Scroll
          </Text>

          <Text>
            Se recomienda mantener <Text type="bodySemibold">enableZoom</Text> en <Text type="bodySemibold">false</Text> por defecto para no interrumpir el flujo de scroll de la página, especialmente en dispositivos móviles.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Proveer siempre coordenadas válidas en <Text type="bodySemibold">center</Text> y en cada <Text type="bodySemibold">position</Text> de los marcadores</Text>
          <Text margin="b-4">&bull; Usar <Text type="bodySemibold">showList</Text> cuando hay muchos marcadores para facilitar la navegación</Text>
          <Text margin="b-4">&bull; Definir <Text type="bodySemibold">listItem</Text> con contenido descriptivo para cada marcador</Text>
          <Text>&bull; Ajustar el nivel de <Text type="bodySemibold">zoom</Text> al contexto geográfico mostrado</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">&bull; No pasar arrays vacíos en <Text type="bodySemibold">position</Text> ni coordenadas fuera de rango</Text>
          <Text margin="b-4">&bull; No habilitar <Text type="bodySemibold">enableZoom</Text> en páginas donde el scroll sea la principal forma de navegación</Text>
          <Text margin="b-4">&bull; No usar <Text type="bodySemibold">showList</Text> sin proveer <Text type="bodySemibold">listItem</Text> en los marcadores</Text>
          <Text>&bull; No usar dimensiones fijas en píxeles cuando el mapa debe ser responsivo</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};