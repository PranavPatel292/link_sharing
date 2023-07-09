import {
  Field,
  ErrorMessage,
  FieldProps,
  useFormikContext,
  FormikValues,
} from "formik";

interface TextInputProps extends FieldProps {
  placeHolder: string;
  icon: any;
  label: string;
  name: string;
  defaultValue?: string;
}

const TextInput = ({
  placeHolder,
  icon,
  label,
  name,
  defaultValue,
  ...rest
}: TextInputProps) => {
  const { errors, touched } = useFormikContext<FormikValues>();
  const showError = errors[name] && touched[name];

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-row space-x-2">
        {icon}
        <Field
          id={name}
          name={name}
          placeHolder={placeHolder}
          value={defaultValue}
          {...rest}
        />
      </div>
      {showError && (
        <ErrorMessage name={name} component="div" className="error-message" />
      )}
    </>
  );
};

export default TextInput;
