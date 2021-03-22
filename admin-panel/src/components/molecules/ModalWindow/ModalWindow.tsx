import { useOutsideClick } from "hooks";
import React, { useRef } from "react";
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
  title,
  isActive,
  description,
  handleCancel,
  handleConfirm,
}: IModalWindow) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => isActive && handleCancel());

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
          <StyledDeleteButton type="button" onClick={handleConfirm}>
            Delete
          </StyledDeleteButton>
        </StyledWrapper>
      </StyledWindow>
    </StyledContainer>
  );
};

export default ModalWindow;
