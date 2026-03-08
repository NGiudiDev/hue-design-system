import React from "react";

import { Formik, Form } from "formik";

import { InputText } from "./internal/components/InputText/InputText";
import { Input } from "./Input";

import * as yup from "yup";

const meta = {
  component: Input,
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
    margin: "t-20",
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