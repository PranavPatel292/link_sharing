import {
  Field,
  ErrorMessage,
  FieldProps,
  useFormikContext,
  FormikValues,
} from "formik";

interface DropDownProps extends FieldProps {
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string; icon: any }[];
  defaultValue?: string;
}

const DropDown = ({
  name,
  label,
  placeholder,
  options,
  defaultValue,
  ...rest
}: DropDownProps) => {
  const { errors, touched } = useFormikContext<FormikValues>();
  const showError = errors[name] && touched[name];

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        id={name}
        name={name}
        className="select select-bordered w-full"
        value={defaultValue}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            <div className="flex flex-row space-x-3">
              {option.icon}
              {option.label}
            </div>
          </option>
        ))}
      </Field>
      {showError && (
        <ErrorMessage name={name} component="div" className="error-message" />
      )}
    </>
  );
};

export default DropDown;
