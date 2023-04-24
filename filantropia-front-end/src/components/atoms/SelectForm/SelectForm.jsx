import { useField } from "formik";
import "./SelectForm.scss";

export const SelectForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`containerSelect containerSelect-${props.name}`}>
      <label
        className={`containerSelect__label`}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select className={`containerSelect__select`} {...field} {...props} />
      {meta.touched && meta.error && (
        <div className={`containerSelect__error`}>{meta.error}</div>
      )}
    </div>
  );
};
