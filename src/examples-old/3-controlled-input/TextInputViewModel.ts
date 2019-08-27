import { observable, action } from "mobx";

export class TextInputViewModel {
    @observable value = "";

    @action.bound handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.value = e.target.value;
    }
}

export interface ITextInputViewModel extends TextInputViewModel {}
