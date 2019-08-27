# 1 Function Components
# 1.1 A simple component
We'll start off with creating a simple Functional Component:
```tsx
import React from "react";

export function Button() {
    return <button>OK</button>;
}

```
The TypeScript signature of this function is `function Button(): JSX.Element` - it is a function that returns a JSX Element.

It is important to note that case matters. Components that start with lower-case are reserved for HTML elements, while components starting with upper-case are React components.

## 1.2 Passing Props
React uses the props object to pass data into components.
```tsx
import React from "react";

export function Button(props) {
    return <button id={props.id}>{props.text}</button>;
}
```
In this example, the button's id and text are passed into the Button component. React uses curly braces for rendering *expressions* - so, for example, using an `if` block within the curly braces will not work, but calling a function will.

## 1.3 Arrow Function Components
The use of arrow functions for defining components have become popular since ES6. The 1.2 example can be rewritten as an arrow function:
```tsx
import React from "react";

export const Button = props => <button id={props.id}>{props.text}</button>;
```
If the component is composed of multiple lines of sub-components, then the returned expression needs to be wrapped in `()`:
```tsx
import React from "react";

export const Button = props => (
    <button id={props.id}>
        <span>Text: </span>
        {props.text}
    </button>
);

```
Alternatively, the arrow function can have a body defined (instead of returning an expression):
```tsx
import React from "react";

export const Button = props => {
    return (
        <button id={props.id}>
            <span>Text: </span>
            {props.text}
        </button>
    );
};

```
## 1.4 Adding typings
Typings can (and should) be added so that developers know what the component expects as prop parameters:
```tsx
import React from "react";

interface IButtonProps {
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<IButtonProps> = props => (
    <button id={props.id} style={props.style} className={props.className}>
        {props.children}
    </button>
);
```
`IButtonProps` defines the *shape* of props - here, id is a `string`, style is an optional `React.CSSProperties` object, and className is an optional string. In IDEs that support TypeScript (such as VSCode), the IDE will tell the developer using the Button component what properties are required, and in the case of style, the available properties must be CSSProperties.

**Note** also that props has an additional `children` property, which was not defined in `IButtonProps`. Because `Button` is of type `React.FC<IButtonProps>`, props is given the type `React.PropsWithChildren<IButtonProps>` which adds an optional `children` property of type `ReactNode`.

That's a lot to take in, but the takeaway is that `React.FC` functions have a `children` property added to whatever other properties defined in the props interface.

Here's example usage of this Button:
```tsx
export const App: React.FC = () => (
    <Button
        id="test_button"
        style={{
            backgroundColor: "yellow",
            border: "1px solid black",
            borderRadius: 5
        }}
        className="app-button offsetted"
    >
        <div>Hello</div>
        <div>World</div>
    </Button>
);
```
Props are often *destructured* as follows:
```tsx
import React from "react";

interface IButtonProps {
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({
    id,
    style,
    className,
    children
}) => (
    <button id={id} style={style} className={className}>
        {children}
    </button>
);
```