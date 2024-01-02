import { ReactNode } from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode,
    name: string,
    control: any,
    errorMessage?: string
}