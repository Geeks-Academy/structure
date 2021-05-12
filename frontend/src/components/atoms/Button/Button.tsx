import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: TButton): JSX.Element => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
