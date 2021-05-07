import { StyledError } from './ErrorMessage.styled';

interface IProps {
  children: string;
}

const ErrorMessage = ({ children }: IProps): JSX.Element => {
  return <StyledError>{children}</StyledError>;
};

export default ErrorMessage;
