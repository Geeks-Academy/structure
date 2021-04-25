import React from "react";
import { ICheckBox } from "./Checkbox.model";
import { StyledLabel, StyledInput, StyledWrapper } from "./Checkbox.styled";

const Checkbox = ({
  isChecked,
  label,
  name,
  onBlur,
  onChange,
  ...props
}: ICheckBox): JSX.Element => {
  return (
    <StyledWrapper {...props}>
      <StyledInput
        id={name}
        type="checkbox"
        checked={isChecked}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
      <StyledLabel htmlFor={name}> {label} </StyledLabel>
    </StyledWrapper>
  );
};

export default Checkbox;
