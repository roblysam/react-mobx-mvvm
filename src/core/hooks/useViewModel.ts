import { useEffect, useRef } from "react";

/**
 *
 * @param viewModel The viewModel to use for the lifetime of the component
 * @param owned Defaults to true; if true, and viewModel has a dispose() function, then viewModel.dispose()
 *      is called when the component is unmounted
 */
export function useViewModel<T>(viewModel: T, owned: boolean = true) {
    const ref = useRef(viewModel);

    useEffect(
        () => () => {
            const current: any = ref.current;
            if (owned && current && typeof current.dispose === "function") {
                current.dispose();
            }
        },
        []
    );

    return ref.current;
}
