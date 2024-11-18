import { useEffect, useState } from "react";
import ContactLinks from "../ContactLinks/ContactLinks";
import PageName from "../helpers/PageName/PageName";
import styles from "./Contacts.module.scss";
import CustomInput from "../CustomInput/CustomInput";

const Contacts = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("Cannot be empty");
  const [nameDirty, setNameDirty] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("Cannot be empty");
  const [emailDirty, setEmailDirty] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("Cannot be empty");
  const [messageDirty, setMessageDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || messageError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, messageError]);

  const onSendHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValid);
  };

  const onBlurHandler = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    switch (name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "message":
        setMessageDirty(true);
        break;
    }
  };

  const onChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "name":
        setName(value);
        if (!value) {
          setNameError("Cannot be empty");
        } else if (value.split("").length < 2) {
          setNameError("Min 2 symbol");
        } else {
          setNameError("");
        }
        break;
      case "email":
        {
          setEmail(value);
          const re = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
          if (!value) {
            setEmailError("Cannot be empty");
          } else if (!re.test(String(value).toLocaleLowerCase())) {
            setEmailError("Not valid email");
          } else {
            setEmailError("");
          }
        }
        break;
      case "message":
        setMessage(value);
        if (!value) {
          setMessageError("Cannot be empty");
        } else if (value.split("").length < 10) {
          setMessageError("Min 10 symbol");
        } else if (value.split("").length > 1000) {
          setMessageError("Max 1000 symbol");
        } else {
          setMessageError("");
        }
        break;
    }
  };

  return (
    <div className={styles.container}>
      <PageName pageName="Contacts" />
      <div className={styles.inner_container}>
        <h1>Contacts</h1>
        <form onSubmit={onSendHandler} className={styles.form}>
          <CustomInput
            name="name"
            label="Name"
            value={name || ""}
            errorMessage={nameDirty && nameError ? nameError : ""}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <CustomInput
            name="email"
            label="Email"
            value={email || ""}
            errorMessage={emailDirty && emailError ? emailError : ""}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <CustomInput
            type="textarea"
            name="message"
            label="Message"
            value={message || ""}
            errorMessage={messageDirty && messageError ? messageError : ""}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />

          <button type="submit" disabled={!formValid}>
            Send
          </button>
        </form>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contacts;
