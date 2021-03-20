import React from 'react';
import { StyledButton } from './Button.styled';
import { IButton } from './Button.model'

const Button = ({
    type,
    children,
    onClick,
    ...props
}: IButton) => {

    return (
        <StyledButton
            onClick={onClick}
            type={type}
            {...props}>
            <span> {children} </span>
        </StyledButton>
    );
};

export default Button;

