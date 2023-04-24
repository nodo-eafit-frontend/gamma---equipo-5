import React from "react";
import { SelectForm } from "../../atoms/SelectForm/SelectForm";
import "./ListSelectForm.scss";

export const ListSelectForm = (props) => {
  const { selectInputs } = props;
  return selectInputs.map((input) => {
    return (
      <SelectForm {...input} key={input.id}>
        {input.options?.map((option) => (
          <option
            key={`option-${option.id}`}
            label={option.label}
            value={option.value}
          />
        ))}
      </SelectForm>
    );
  });
};
