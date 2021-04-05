import { ChangeEvent } from "react";

export interface ICheckBox {
    checked: boolean;
    label: string;
    name: string;
    onBlur: (e: ChangeEvent) => void;
    onChange: (e: ChangeEvent) => void;
}