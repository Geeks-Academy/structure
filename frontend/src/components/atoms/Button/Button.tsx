import { TButton } from './Button.model';
import { StyledButton } from './Button.styled';

const Button = ({ children, ...props }: TButton): JSX.Element => {
  return (
    <StyledButton {...props}>
      <span> {children} </span>
    </StyledButton>
  );
};

export default Button;
