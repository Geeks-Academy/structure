import React from "react";
import { IInput } from "./InputWrapper.model";
import {
  StyledInput,
  StyledLabel,
  StyledContainer,
  StyledLeftWrapper,
  StyledErrorMessage,
  StyledRightWrapper,
} from "./InputWrapper.styled";

const InputField = ({
  name,
  type,
  value,
  label,
  error,
  onBlur,
  inputId,
  errorId,
  touched,
  onChange,
  isRequired,
  ariaInvalid,
  ...props
}: IInput) => {
  return (
    // <StyledContainer {...props}>
    //   <StyledLeftWrapper>
    //     <StyledLabel> {label}</StyledLabel>
    //   </StyledLeftWrapper>
    //   <StyledRightWrapper>
    //     <StyledInput
    //       id={inputId}
    //       name={name}
    //       type={type}
    //       value={value}
    //       aria-describedby={errorId}
    //       onChange={onChange}
    //       onBlur={onBlur}
    //       required={isRequired}
    //       error={!!error}
    //     />
    //     {error && touched && (
    //       <StyledErrorMessage id={errorId}> {error} </StyledErrorMessage>
    //     )}
    //   </StyledRightWrapper>
    // </StyledContainer>
    <div className="flex flex-col mb-4 md:w-1/2">
      <div>
        <label
          className="mb-2 font-bold text-lg text-grey-darkest md:ml-2"
          htmlFor="last_name"
        >
          {label}
        </label>
      </div>
      <div>
        <input
          className="border py-2 px-3 text-grey-darkest md:ml-2"
          id={inputId}
          name={name}
          type={type}
          value={value}
          aria-describedby={errorId}
          onChange={onChange}
          onBlur={onBlur}
          required={isRequired}
          
        />
        {error && touched && <span id={errorId}> {error} </span>}
      </div>
    </div>
  );
};

export default InputField;
