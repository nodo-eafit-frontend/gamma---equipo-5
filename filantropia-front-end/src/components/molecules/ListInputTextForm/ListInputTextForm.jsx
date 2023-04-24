import React from "react";
import { InputTextForm } from "../../atoms/InputTextForm/InputTextForm";
import "./ListInputTextForm.scss"

export const ListInputTextForm = (props) => {
  const { textInputs } = props;
  return textInputs?.map((input) => (
    <InputTextForm {...input} key={input.id} />
  ));
};
