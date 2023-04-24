import React from "react";
import { InputCheckBoxForm } from "../../atoms/InputCheckBoxForm/InputCheckBoxForm";
import "./ListInputCheckBoxForm.scss";

export const ListInputCheckBoxForm = (props) => {
  const { checkboxInputs } = props;
  return checkboxInputs?.map((input) => (
    <InputCheckBoxForm key={input.id} {...input} />
  ));
};
