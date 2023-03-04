import React from "react";

export interface SidePanelProps {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}