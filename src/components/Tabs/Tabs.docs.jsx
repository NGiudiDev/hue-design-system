import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const TabsDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Tabs
        </Text>

        <Text margin="b-16 x-8">
          El componente Tabs permite organizar contenido en secciones navegables mediante pestañas. Soporta íconos, contadores numéricos abreviados y gestiona el estado activo de forma interna, pudiendo sincronizarse con lógica externa a través del callback onClick.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estado Interno Controlable
          </Text>

          <Text>
            Gestiona el tab activo internamente a partir de la prop active o del primer tab disponible. Notifica cambios externos mediante el callback onClick para sincronizar con el estado de la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición Flexible
          </Text>

          <Text>
            Cada tab soporta ícono, etiqueta de texto y contador numérico de forma independiente. Los elementos se muestran condicionalmente según las propiedades definidas en cada ítem del array.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Contadores Abreviados
          </Text>

          <Text>
            Los contadores numéricos se formatean automáticamente con la utilidad formatNumberAbbreviation, mostrando valores como &quot;1.2k&quot;, &quot;500k&quot; o &quot;12.2B&quot; para mantener el diseño compacto.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica de Accesibilidad
          </Text>

          <Text>
            Cada tab renderiza con role=&quot;tab&quot; y aria-selected para comunicar el estado activo a tecnologías asistivas, siguiendo el patrón ARIA de navegación por pestañas.
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
            Roles ARIA
          </Text>

          <Text margin="b-8">
            Cada pestaña utiliza role=&quot;tab&quot; y aria-selected para indicar el estado activo. Para una implementación completa del patrón ARIA Tabs, se recomienda envolver el contenedor con role=&quot;tablist&quot; y asociar cada panel con role=&quot;tabpanel&quot;.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Identificadores
          </Text>

          <Text margin="b-8">
            La prop id de cada tab se aplica directamente al elemento DOM, facilitando la asociación con paneles de contenido mediante aria-controls y aria-labelledby.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>

          <Text margin="b-4">&bull; Definir siempre value único por tab para evitar conflictos de estado</Text>
          <Text margin="b-4">&bull; Usar la prop active para sincronizar el tab inicial con el estado de la aplicación</Text>
          <Text margin="b-4">&bull; Proporcionar label descriptivo y conciso en cada tab</Text>
          <Text margin="b-4">&bull; Usar count solo cuando el número aporte información relevante al usuario</Text>
          <Text margin="b-4">&bull; Combinar icon con label para mayor claridad visual</Text>
          <Text>&bull; Usar id en cada tab cuando se necesite asociar con paneles de contenido</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>

          <Text margin="b-4">&bull; No repetir el mismo value en múltiples tabs</Text>
          <Text margin="b-4">&bull; No usar labels muy largos que rompan el layout horizontal</Text>
          <Text margin="b-4">&bull; No usar count con valores negativos o no numéricos</Text>
          <Text margin="b-4">&bull; No usar Tabs para navegación entre páginas (usar Link o Router en su lugar)</Text>
          <Text>&bull; No omitir onClick si necesitás sincronizar el tab activo con lógica externa</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};