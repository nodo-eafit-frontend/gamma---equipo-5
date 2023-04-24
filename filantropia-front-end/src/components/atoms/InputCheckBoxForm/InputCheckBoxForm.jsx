import { useField } from "formik";
import "./InputCheckBoxForm.scss";

export const InputCheckBoxForm = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <div
      className={`containerCheckboxInput containerCheckboxInput-${props.name}`}
    >
      <label className={`containerCheckboxInput__label`}>
        <input
          className={`containerCheckboxInput__input`}
          {...field}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={`containerCheckboxInput__error`}>{meta.error}</div>
      ) : null}
    </div>
  );
};
