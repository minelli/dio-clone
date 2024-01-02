import React from "react";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

function Input({ leftIcon, name, control, errorMessage, ...rest }: IInput) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        ></Controller>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </InputContainer>
    </>
  );
}

export default Input;
