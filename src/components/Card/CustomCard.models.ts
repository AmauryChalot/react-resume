import {ReactNode} from "react";

export interface CustomCardProps {
    title: ReactNode | string;
    content: ReactNode | string;
    index: number;
    scrolledSectionsState: [number, React.Dispatch<React.SetStateAction<number>>];
    id?: string;
    highlighted?: boolean;
}