import React from "react";
import { useFormInputs } from "../../../utils/hooks/useFormInputs";
import { ListInputTextForm } from "../ListInputTextForm/ListInputTextForm";
import { ListSelectForm } from "../ListSelectForm/ListSelectForm";
import { InputCheckBoxForm } from "../../atoms/InputCheckBoxForm/InputCheckBoxForm";
import { Button } from "../../atoms/Button/Button";
import "./WhatMotivatesYou.scss";

export const WhatMotivatesYou = (props) => {
  const { title, subtitle, form, frequentQuestions, button } = props;
  const inputForms = useFormInputs(form);
  const { textInputs, selectInputs, checkboxInputs } = inputForms;

  const handleClick = () => {};

  return (
    <fieldset className="whatMotivatesYou">
      <h3 className="whatMotivatesYou__title">{title}</h3>
      <h4 className="whatMotivatesYou__subtitle">{subtitle}</h4>
      <div className="whatMotivatesYou__containerGrid">
        <ListInputTextForm textInputs={textInputs} />
        <ListSelectForm selectInputs={selectInputs} />
        {checkboxInputs?.map((input) => (
          <InputCheckBoxForm key={input.id} {...input}>
            {input.label}
          </InputCheckBoxForm>
        ))}
        <button className="whatMotivatesYou__recurrenceQuestions">
          {frequentQuestions.title}
        </button>
        <Button type="submit" title={button.title} handleClick={handleClick} />
      </div>
    </fieldset>
  );
};
