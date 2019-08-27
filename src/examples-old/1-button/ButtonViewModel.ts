export class ButtonViewModel {
    constructor(handleClick?: React.MouseEventHandler) {
        this.handleClick = handleClick;
    }

    readonly handleClick?: React.MouseEventHandler;
}

// export an interface that matches the default ButtonViewModel class
export interface IButtonViewModel extends ButtonViewModel {}
