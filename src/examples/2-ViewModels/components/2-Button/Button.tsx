import React from "react";
import { observer } from "mobx-react";
import { ButtonVm } from "./ButtonVm";
import { useViewModel } from "@/core/hooks/useViewModel";

export const Button: React.FC = observer(({ children }) => {
    const vm = useViewModel(new ButtonVm());

    return (
        <button onClick={vm.handleClick}>
            <div>{children}</div>
            <div>{vm.clickCount}</div>
        </button>
    );
});
