import React from 'react';
import { StyledButton } from './Button.styled';
import { IButton } from './Button.model'

const Button = ({
    children,
    onClick,
    ...props
}: IButton) => {

    return (
        <StyledButton
            onClick={onClick}
            {...props}>
            <span> {children} </span>
        </StyledButton>
    );
};

export default Button;

