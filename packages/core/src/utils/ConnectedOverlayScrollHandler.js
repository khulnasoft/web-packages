import { getScrollableParents } from '@khulnasoft/utils/dom';

export default class ConnectedOverlayScrollHandler {
    constructor(element, listener = () => {}) {
        this.element = element;
        this.listener = listener;
    }

    bindScrollListener() {
        this.scrollableParents = getScrollableParents(this.element);

        for (let i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
    }

    unbindScrollListener() {
        if (this.scrollableParents) {
            for (let i = 0; i < this.scrollableParents.length; i++) {
                this.scrollableParents[i].removeEventListener('scroll', this.listener);
            }
        }
    }

    destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
    }
}
