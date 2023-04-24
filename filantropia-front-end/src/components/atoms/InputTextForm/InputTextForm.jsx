import { useField } from "formik";
import "./InputTextForm.scss";

export const InputTextForm = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`input-${props.name}`}
        {...field}
        {...props}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <div className={`error-${props.name}`}>{meta.error}</div>
      )}
    </>
  );
};
