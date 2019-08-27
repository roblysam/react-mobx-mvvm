import React from "react";
import { TextInput } from "./TextInput";
import { TextInputViewModel } from "./TextInputViewModel";
import { Observer } from "mobx-react";

export const TextInputStory = () => {
    const textInputViewModel = new TextInputViewModel();

    return (
        <div>
            <TextInput id="test" viewModel={textInputViewModel} />
            <Observer>{() => <span>{textInputViewModel.value}</span>}</Observer>
        </div>
    );
};
