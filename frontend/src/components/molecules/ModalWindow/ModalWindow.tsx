import { useRef } from 'react';
import { useOutsideClick } from 'hooks';
import { IModalWindow } from './ModalWindow.model';
import {
  StyledButton,
  StyledCancelButton,
  StyledContainer,
  StyledParagraph,
  StyledTitle,
  StyledWindow,
  StyledWrapper,
} from './ModalWindow.styled';

const ModalWindow = ({
  title,
  isActive,
  description,
  handleCancel,
  handleConfirm,
}: IModalWindow): JSX.Element => {
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
          <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
          <StyledButton title={title} onClick={handleConfirm}>
            {title}
          </StyledButton>
        </StyledWrapper>
      </StyledWindow>
    </StyledContainer>
  );
};

export default ModalWindow;
