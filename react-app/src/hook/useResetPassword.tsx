import React from "react";
import { useForm } from "react-hook-form";
import { IResetPassword } from "../resetPassword/ResetPassword.type";
import { checkPassword } from "../util/validation";

export const useResetPassword = () => {
  const [errorState, setErrorState] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const initialState = {
    password: null,
  };
  const formMethods = useForm<IResetPassword>({
    defaultValues: initialState,
  });

  const validatePassword = (password: string) => {
    if (password === null || password === "") {
      setErrorState(true);
      setErrorMessage("This is required");
    } else {
      if (password.length < 8) {
        console.log("test");
        setErrorState(true);
        setErrorMessage("Password must be at least 8 characters");
      } else if (password.length <= 15) {
        if (checkPassword(password)) {
          setErrorState(false);
          setErrorMessage("");
        } else {
          setErrorState(true);
          setErrorMessage(
            "Password must have  one number and two special characters"
          );
        }
      } else {
        setErrorState(false);
        setErrorMessage("");
      }
    }
  };

  return {
    errorState,
    setErrorState,
    errorMessage,
    setErrorMessage,
    validatePassword,
    formMethods,
  };
};
