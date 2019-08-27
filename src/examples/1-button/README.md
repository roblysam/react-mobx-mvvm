## A Simple Component

We'll start off with creating a simple Functional Component:
```tsx
import React from "react";

export function Button() {
    return <button>OK</button>;
}

```
The TypeScript signature of this function is `function Button(): JSX.Element` - it is a function that returns a JSX Element.

It is important to note that case matters. Components that start with lower-case are reserved for HTML elements, while components starting with upper-case are React components.

```tsx

```

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
