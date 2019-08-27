import React from "react";
import { ButtonVm } from "./ButtonVm";
import { useViewModel } from "@/core/hooks/useViewModel";

export const Button: React.FC = ({ children }) => {
    const vm = useViewModel(new ButtonVm());

    return <button onClick={vm.handleClick}>{children}</button>;
};
