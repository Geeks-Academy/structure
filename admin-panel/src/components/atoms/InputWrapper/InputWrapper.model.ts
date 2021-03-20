export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputId?: string;
    errorId?: string;
    label: string;
    error?: any;
    touched?: any;
    isRequired?: boolean;
    ariaInvalid?: boolean;
};