import { useField } from "formik";
import "./InputTextForm.scss";

export const InputTextForm = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`containerTextInput containerTextInput-${props.name}`}>
      <label
        htmlFor={props.id || props.name}
        className="containerTextInput__label"
      >
        {label}
      </label>
      <input
        className={`containerTextInput__input containerTextInput__input-${props.name}`}
        {...field}
        {...props}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <div className={`containerTextInput__error`}>{meta.error}</div>
      )}
    </div>
  );
};
