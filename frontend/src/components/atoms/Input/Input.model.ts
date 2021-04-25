export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  inputId?: string;
  errorId?: string;
  label?: string;
  error?: string;
  required?: boolean;
  ariaInvalid?: boolean;
}
