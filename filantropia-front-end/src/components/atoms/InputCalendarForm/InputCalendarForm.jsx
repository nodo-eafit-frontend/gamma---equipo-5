import { DatePicker } from "antd";
import { useField } from "formik";
import moment from "moment";
import "./InputCalendarForm.scss";

export const InputCalendarForm = ({ label, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const onChange = (date, dateString) => {
    helpers.setValue(dateString);
  };

  const onBlur = () => {
    helpers.setTouched(true);
  };

  return (
    <div className={`containerCalendarInput containerCalendarInput-${name}`}>
      <label className={`containerCalendarInput__label`} htmlFor={name}>
        {label}
      </label>
      <DatePicker
        id={name}
        {...field}
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={field.value ? moment(field.value) : null}
        format="DD/MM/YYYY"
      />
      {meta.touched && meta.error && (
        <div className={`containerCalendarInput__error`}>{meta.error}</div>
      )}
    </div>
  );
};
