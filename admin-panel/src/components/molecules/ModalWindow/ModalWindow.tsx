import React from "react";
import { IModalWindow } from "./ModalWindow.model";
import {
  StyledDeleteButton,
  StyledCancelButton,
  StyledContainer,
  StyledParagraph,
  StyledWrapper,
  StyledWindow,
  StyledTitle,
} from "./ModalWindow.styled";

const ModalWindow = ({
  isActive,
  description,
  handleCancel,
  handleConfirm,
}: IModalWindow) => {
  if (!isActive) return <></>;
  return (
    <StyledContainer>
      <StyledWindow>
        <StyledWrapper>
          <StyledTitle> Delete </StyledTitle>
        </StyledWrapper>
        <StyledWrapper>
          <StyledParagraph> {description} </StyledParagraph>
        </StyledWrapper>
        <StyledWrapper>
          <StyledCancelButton type="button" onClick={handleCancel}>
            Cancel
          </StyledCancelButton>
          <StyledDeleteButton type="button" onClick={handleConfirm}>
            Delete
          </StyledDeleteButton>
        </StyledWrapper>
      </StyledWindow>
    </StyledContainer>
  );
};

export default ModalWindow;
