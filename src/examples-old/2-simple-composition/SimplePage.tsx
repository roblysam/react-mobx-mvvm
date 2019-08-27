import React from "react";
import { observer } from "mobx-react";
import { Button } from "../1-button";
import {
    SimplePageViewModel,
    ISimplePageViewModel
} from "./SimplePageViewModel";
import { useViewModel } from "@/core/hooks/useViewModel";

interface ISimplePage {
    viewModel?: ISimplePageViewModel;
}

export const SimplePage: React.FC<ISimplePage> = observer(({ viewModel }) => {
    const vm = useViewModel(viewModel, SimplePageViewModel);
    return (
        <div>
            <Button id="inc" viewModel={vm.buttonViewModel}>
                Increment Counter
            </Button>
            <span>&nbsp;{vm.count}</span>
        </div>
    );
});
