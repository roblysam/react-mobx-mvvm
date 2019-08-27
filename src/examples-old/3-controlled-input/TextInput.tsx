import React from "react";
import { observer } from "mobx-react";
import { ITextInputViewModel, TextInputViewModel } from "./TextInputViewModel";
import { useViewModel } from "@/core/hooks/useViewModel";

interface ITextInputProps {
    id: string;
    viewModel?: ITextInputViewModel;
}

export const TextInput: React.FC<ITextInputProps> = observer(
    ({ id, viewModel }) => {
        const vm = useViewModel(viewModel, TextInputViewModel);
        return <input value={vm.value} onChange={vm.handleChange} />;
    }
);
