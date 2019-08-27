import { action, observable } from "mobx";
import { ButtonViewModel, IButtonViewModel } from "../1-button";

export class SimplePageViewModel {
    constructor() {
        this.count = 0;
    }

    buttonViewModel: IButtonViewModel = new ButtonViewModel(
        this.incrementCount
    );

    @observable count = 0;

    @action.bound incrementCount() {
        this.count++;
    }
}

export interface ISimplePageViewModel extends SimplePageViewModel {}
