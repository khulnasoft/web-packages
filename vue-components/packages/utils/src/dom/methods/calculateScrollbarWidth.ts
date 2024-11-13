import addStyle from './addStyle';

let calculatedScrollbarWidth: number | undefined = undefined;

export default function calculateScrollbarWidth(element?: HTMLElement): number {
    if (element) {
        let style = getComputedStyle(element);

        return element.offsetWidth - element.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
    } else {
        if (calculatedScrollbarWidth != null) return calculatedScrollbarWidth;

        let scrollDiv = document.createElement('div');

        addStyle(scrollDiv, {
            width: '100px',
            height: '100px',
            overflow: 'scroll',
            position: 'absolute',
            top: '-9999px'
        });
        document.body.appendChild(scrollDiv);

        let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        document.body.removeChild(scrollDiv);

        calculatedScrollbarWidth = scrollbarWidth;

        return scrollbarWidth;
    }
}
