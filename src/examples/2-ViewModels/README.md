# 2 View Models
# 2.1 Handling onClick using a view model
We can handle the onClick event of the button in a separate view model:
```tsx
// Button.tsx
import React from "react";
import { ButtonVm } from "./ButtonVm";
import { useViewModel } from "@/core/hooks/useViewModel";

export const Button: React.FC = ({ children }) => {
    const vm = useViewModel(new ButtonVm());

    return <button onClick={vm.handleClick}>{children}</button>;
};
```
The new button code has two new imports: `ButtonVm` and `useViewModel`. The first is discussed below. `useViewModel` is a *hook* function defined in this project (under *core/hooks/useViewModel*) that returns a view-model object that is used for the lifetime of the `Button` component, and if the view-model has a `dispose()` function, `dispose()` is called when the component is unmounted.

If the view-model does not have a `dispose()` function (and we're sure it never will), then the following would suffice:
```tsx
// Button.tsx without the custom useViewModel
import React, { useRef } from "react";
import { ButtonVm } from "./ButtonVm";

export const Button: React.FC = ({ children }) => {
    const vm = useRef(new ButtonVm()).current;

    return <button onClick={vm.handleClick}>{children}</button>;
};
```
`useRef` is a built-in React hook that returns a "box" that lives for the lifetime of the component. More information is available in the [React Hooks Documentation](https://reactjs.org/docs/hooks-reference.html#useref).

The `ButtonVm` is defined as:
```tsx
// ButtonVm.tsx
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
```
This class simply increments a counter and logs the current number of clicks to the console.

# 2.2 Observing state changes
The `ButtonVm` can be modified (and simplified) so that `clickCount` is observable:
```tsx
import { action, observable } from "mobx";

export class ButtonVm {
    @observable clickCount = 0;

    @action.bound
    handleClick(e: React.MouseEvent) {
        this.clickCount++;
    }
}
```
`@observable` and `@action` are *decorators*. `@observable` makes clickCount and observable property, and *observers* will react to changes in clickCount. Observables should only be changed by `@action` functions - in this case, `@action.bound` makes the `handleClick` function an action that is bound to the instance of `ButtonVm` - note that there is no longer a constructor that manually binds `handleClick` to `this`.

`Button` can now be made an observer:
```tsx
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
```
The `observer` function is a function that takes a component and returns a new component that reacts to changes in any observables it uses. In this case, whenever `vm.clickCount` is updated, the component is re-rendered into React's Virtual DOM, and then actual changes are updated to the DOM.

This is where the `useRef` hook (which is what `useViewModel` is built from) becomes important - if the view-model was defined as follows:
```tsx
    const vm = new ButtonVm();
```
then `vm` would be re-created *every time vm.clickCount is updated*. That's not what we want, so we use a hook that ensures the view-model exists for the lifetime of the component (i.e. as long as it is mounted in the DOM).
