import React from "react";

import { Formik, Form } from "formik";

import { InputDocs } from "./Input.docs";
import { InputText } from "./internal/components/InputText/InputText";
import { Input } from "./Input";

import * as yup from "yup";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Desactiva el campo de entrada cuando se establece en true.",
    },
    helpText: {
      control: { type: "text" },
      description: "Texto de ayuda que se muestra debajo de la etiqueta.",
    },
    id: {
      control: { type: "text" },
      description: "Identificador único del input. Obligatorio para accesibilidad.",
    },
    isOptional: {
      control: { type: "boolean" },
      description: "Indica si el campo es opcional. Muestra el texto '(Opcional)' junto a la etiqueta.",
    },
    label: {
      control: { type: "text" },
      description: "Etiqueta descriptiva del campo.",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema.",
    },
    name: {
      control: { type: "text" },
      description: "Nombre del campo para Formik. Obligatorio.",
    },
    padding: {
      control: { type: "text" },
      description: "Establece el padding del componente. Acepta tokens de espaciado del sistema.",
    },
    prefix: {
      control: { type: "object" },
      description: "Configuración del prefijo del input (texto o ícono).",
    },
    suffix: {
      control: { type: "object" },
      description: "Configuración del sufijo del input (texto o ícono).",
    },
    type: {
      control: { type: "select" },
      description: "Tipo de input: texto plano o contraseña.",
      options: ["text", "password"],
    },
  },
  component: Input,
  parameters: {
    docs: {
      page: InputDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Input",
};

const formValidationSchema = yup.object().shape({
  input_name: yup
    .string().required("El nombre es obligatorio")
    .min(8, "El nombre debe tener al menos 8 dígitos"),
});

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    disabled: false,
    error: null,
    helpText: "This is some help text.",
    id: "id_del_input",
    isOptional: true,
    label: "Label",
    margin: "b-20",
    name: "input_name",
    onChange: () => {},
    padding: "a-0",
    prefix: {
      text: "AR$",
      type: "text",
    },
    suffix: {
      icon: {
        name: "search",
      },
      type: "icon",
    },
    type: "password",
  },
  render: (args) => (
    <>
      <Formik
        initialValues={{ input_name: "" }}
        validationSchema={formValidationSchema}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <Form>
          <Input {...args} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <InputText {...args} />
    </>
  ),
};

export default meta;