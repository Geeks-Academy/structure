import { ButtonHTMLAttributes } from 'react';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement>;
