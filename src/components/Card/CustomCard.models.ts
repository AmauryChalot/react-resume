import {ReactNode} from "react";

export interface CustomCardProps {
    title: ReactNode | string;
    content: ReactNode | string;
    id?: string;
    highlighted?: boolean;
}