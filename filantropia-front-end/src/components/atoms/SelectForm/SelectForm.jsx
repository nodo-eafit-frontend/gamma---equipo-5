import { useField } from "formik";
import "./SelectForm.scss";

export const SelectForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
