import styles from "./CustomInput.module.scss";

interface ICustomInput {
  type?: string;
  name: string;
  label: string;
  errorMessage: string;
  value: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
  onBlur: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void | undefined;
}
const CustomInput = ({
  type,
  name,
  label,
  value,
  errorMessage,
  onChange,
  onBlur,
}: ICustomInput) => {
  return (
    <div
      className={
        styles.container + " " + (errorMessage ? styles.error_container : "")
      }
    >
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={errorMessage ? styles.error_input : ""}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={errorMessage ? styles.error_input : ""}
        />
      )}
      <label
        className={
          (value ? styles.value_label : "") +
          " " +
          (errorMessage ? styles.error_label : "")
        }
      >
        {label}
      </label>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default CustomInput;
