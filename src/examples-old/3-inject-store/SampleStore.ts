import { action } from "mobx";

export class SampleStore {
    @action.bound addName(name: string) {}
}
