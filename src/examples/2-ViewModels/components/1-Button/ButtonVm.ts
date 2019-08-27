export class ButtonVm {
    constructor() {
        // handleClick needs to be bound to this so that this.clickCount
        // is available
        this.handleClick = this.handleClick.bind(this);
    }

    clickCount = 0;

    handleClick(e: React.MouseEvent) {
        this.clickCount++;
        console.log(`Click count: ${this.clickCount}`);
    }
}
