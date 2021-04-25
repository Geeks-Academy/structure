import { useRef } from "react";
import { useOutsideClick } from "hooks";
import { colors } from "styles/colors";
import { BUTTON_TITLE } from "Types/enums";
import { IModalWindow } from "./ModalWindow.model";
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

  const handleButtonColor = (buttonTitle: string) => {
    if (buttonTitle === BUTTON_TITLE.DELETE) {
      return colors.background.red;
    } else {
      return colors.background.blue;
    }
  };
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
          <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
          <StyledButton
            bgColor={handleButtonColor(title)}
            onClick={handleConfirm}
          >
            {title}
          </StyledButton>
        </StyledWrapper>
      </StyledWindow>
    </StyledContainer>
  );
};

export default ModalWindow;
