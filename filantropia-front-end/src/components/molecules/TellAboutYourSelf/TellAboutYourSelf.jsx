import { useFormInputs } from "../../../utils/hooks/useFormInputs";
import { ListInputTextForm } from "../ListInputTextForm/ListInputTextForm";
import { ListSelectForm } from "../ListSelectForm/ListSelectForm";
import { InputCalendarForm } from "../../atoms/InputCalendarForm/InputCalendarForm";
import "./TellAboutYourSelf.scss";

export const TellUsAboutYourself = (props) => {
  const { title, form } = props;
  const inputForms = useFormInputs(form);
  const { textInputs, selectInputs, calendarInputs } = inputForms;
  return (
    <fieldset className="tellUsAboutYourself">
      <h3 className="tellUsAboutYourself__title">{title}</h3>
      <div className="tellUsAboutYourself__containerGrid">
        <ListInputTextForm textInputs={textInputs} />
        <ListSelectForm selectInputs={selectInputs} />
        {calendarInputs?.map((input) => (
          <InputCalendarForm key={input.id} {...input} />
        ))}
      </div>
    </fieldset>
  );
};
