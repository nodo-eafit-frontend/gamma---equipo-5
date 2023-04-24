import { useEffect, useState } from "react";

const INITIAL_VALUES = {
  textInputs: [],
  selectInputs: [],
  emailInputs: [],
  numberInputs: [],
  calendarInputs: [],
  checkboxInputs: [],
};

export const useFormInputs = (form) => {
  const [inputsForm, setInputsForm] = useState(INITIAL_VALUES);
  const textInputs = form?.filter(
    (input) =>
      input.type === "text" || input.type === "number" || input.type === "email"
  );
  const selectInputs = form?.filter((input) => input.type === "select");
  // const emailInputs = form?.filter((input) => input.type === "email");
  // const numberInputs = form?.filter((input) => input.type === "number");
  const calendarInputs = form?.filter((input) => input.type === "calendar");
  const checkboxInputs = form?.filter((input) => input.type === "checkbox");

  useEffect(() => {
    setInputsForm({
      textInputs,
      selectInputs,
      calendarInputs,
      checkboxInputs,
    });
  }, []);
  return inputsForm;
};
