import React, { ChangeEvent } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { IResetPassword } from "./ResetPassword.type";
import { useResetPassword } from "../hook/useResetPassword";

const ResetPassword = () => {
  const { errorState, errorMessage, formMethods, validatePassword } =
    useResetPassword();
  const { reset, register, handleSubmit } = formMethods;
  const resetPassword = async (data: IResetPassword) => {
    if (!errorState) {
      alert("Reset Password Successful");
      reset();
    }
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(resetPassword)}>
          <Grid container>
            <Grid item>
              <TextField
                {...register("password")}
                name="password"
                placeholder="Enter password"
                type="password"
                required={true}
                onChange={(e) => validatePassword(e.target.value)}
                helperText={
                  errorState ? (
                    <span style={{ color: "red" }}>{errorMessage}</span>
                  ) : (
                    ""
                  )
                }
              />
            </Grid>
            <Grid item>
              <Button name="reset" type="submit" disabled={errorState}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default ResetPassword;
