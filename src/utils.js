import classNames from "classnames";

export function classGenerator(block) {
    return (element, modifiers = [], ...classes) => {
        let blockElement = block;
        if (typeof element === 'object') {
            modifiers = element;
            element = undefined;
        }
        if (element) {
            blockElement = element && `${block}__${element}`;
        }
        const modifiresClass = Object.entries(modifiers)
            .map( ([modifier, value]) => value ? `${blockElement}--${modifier}` : undefined);
        return classNames(
            blockElement,
            ...modifiresClass,
            ...classes
        )
    }
}