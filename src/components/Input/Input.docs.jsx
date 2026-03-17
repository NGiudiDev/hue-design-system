import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const InputDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Input
        </Text>

        <Text margin="b-16 x-8">
          El componente Input es un campo de entrada de texto integrado con Formik
          para manejo de formularios. Soporta variantes de texto y contraseña, prefijos
          y sufijos configurables, validación automática y estados de error.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Integración con Formularios
          </Text>
          <Text>
            Diseñado para trabajar con Formik, conectándose automáticamente al estado
            del formulario mediante el hook useField para validación y manejo de valores.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Feedback Visual
          </Text>
          <Text>
            Proporciona estados visuales claros para errores, deshabilitado y campos
            opcionales, ayudando al usuario a completar formularios correctamente.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Prefijos y Sufijos
          </Text>
          <Text>
            Soporta íconos y texto como prefijo o sufijo para dar contexto adicional
            al campo (moneda, unidades, acciones de búsqueda, etc.).
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Variantes de Tipo
          </Text>
          <Text>
            Incluye variantes de texto plano y contraseña, con toggle automático
            de visibilidad para campos de contraseña.
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
            Etiquetas y Asociación
          </Text>
          <Text margin="b-8">
            El componente asocia automáticamente la etiqueta con el input mediante
            los atributos htmlFor e id, permitiendo que lectores de pantalla
            identifiquen correctamente cada campo.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Campos Obligatorios
          </Text>
          <Text margin="b-8">
            Los campos opcionales se marcan visualmente con el texto
            &quot;(Opcional)&quot;, siguiendo la convención de marcar la excepción
            en lugar de la regla.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          <Text margin="b-4">&bull; Siempre proporcionar una etiqueta descriptiva</Text>
          <Text margin="b-4">&bull; Usar helpText para instrucciones adicionales cuando sea necesario</Text>
          <Text margin="b-4">&bull; Incluir validación con mensajes de error claros y específicos</Text>
          <Text margin="b-4">&bull; Usar prefijos y sufijos para dar contexto al tipo de dato esperado</Text>
          <Text>&bull; Marcar campos opcionales con isOptional en lugar de marcar los obligatorios</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          <Text margin="b-4">&bull; No omitir el atributo id (necesario para accesibilidad)</Text>
          <Text margin="b-4">&bull; No usar el componente fuera de un contexto Formik</Text>
          <Text margin="b-4">&bull; No usar mensajes de error genéricos o poco descriptivos</Text>
          <Text margin="b-4">&bull; No deshabilitar campos sin indicar por qué al usuario</Text>
          <Text>&bull; No usar solo placeholder como sustituto de una etiqueta</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};