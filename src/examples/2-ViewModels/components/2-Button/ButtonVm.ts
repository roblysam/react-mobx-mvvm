import { action, observable } from "mobx";

export class ButtonVm {
    @observable clickCount = 0;

    @action.bound
    handleClick(e: React.MouseEvent) {
        this.clickCount++;
    }
}
