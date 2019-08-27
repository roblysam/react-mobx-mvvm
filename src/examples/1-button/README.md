## A Simple Component

We'll start off with creating a simple Functional Component:
```tsx
import React from "react";

export function Button() {
    return <button>OK</button>;
}

```
The TypeScript signature of this function is `function Button(): JSX.Element` - it is a function that returns a JSX Element.

A typescript example:
```tsx
interface IButtonProps {
    id: string;
    viewModel?: IButtonViewModel;
}

export const Button: React.FC<IButtonProps> = ({ id, viewModel, children }) => {
    const owned = viewModel === undefined;
    const vm = useViewModel(viewModel || new ButtonViewModel(), owned);

    return (
        <button id={id} onClick={vm.handleClick}>
            {children}
        </button>
    );
};
```
