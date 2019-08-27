import React from "react";
import { IButtonViewModel, ButtonViewModel } from "./ButtonViewModel";
import { useViewModel } from "@/core/hooks/useViewModel";

interface IButtonProps {
    id: string;
    viewModel?: IButtonViewModel;
}

export const Button: React.FC<IButtonProps> = ({ id, viewModel, children }) => {
    const owned = viewModel === undefined;
    const vm = useViewModel(viewModel || new ButtonViewModel(), owned);

    return (
        <button id={id} onClick={vm.handleClick}>
            {children}
        </button>
    );
};

export const SimpleButton = ({ id, viewModel, children }) => {
    const owned = viewModel === undefined;
    const vm = useViewModel(viewModel || new ButtonViewModel(), owned);

    return (
        <button id={id} onClick={vm.handleClick}>
            {children}
        </button>
    );
};
