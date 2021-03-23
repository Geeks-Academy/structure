import { useOutsideClick } from "hooks";
import React, { useRef } from "react";
import { colors } from "styles/colors";
import { IModalWindow, TButton } from "./ModalWindow.model";
import {
  StyledCancelButton,
  StyledContainer,
  StyledParagraph,
  StyledWrapper,
  StyledWindow,
  StyledButton,
  StyledTitle,
} from "./ModalWindow.styled";

const ModalWindow = ({
  title,
  isActive,
  description,
  handleCancel,
  handleConfirm,
}: IModalWindow) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => isActive && handleCancel());

  const handleButtonColor = (buttonTitle: TButton) => {
    if(buttonTitle === 'Delete') {
      return colors.background.red;
    } else {
      return colors.background.blue;
    }
  }
  if (!isActive) return <></>;
  return (
    <StyledContainer>
      <StyledWindow ref={modalRef}>
        <StyledWrapper>
          <StyledTitle> {title} </StyledTitle>
        </StyledWrapper>
        <StyledWrapper>
          <StyledParagraph> {description} </StyledParagraph>
        </StyledWrapper>
        <StyledWrapper>
          <StyledCancelButton type="button" onClick={handleCancel}>
            Cancel
          </StyledCancelButton>
          <StyledButton bgColor={handleButtonColor(title)} type="button" onClick={handleConfirm}>
            {title}
          </StyledButton>
        </StyledWrapper>
      </StyledWindow>
    </StyledContainer>
  );
};

export default ModalWindow;
