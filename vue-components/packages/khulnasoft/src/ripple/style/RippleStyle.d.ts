/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://khulnasoft.com/ripple)
 *
 * @module ripplestyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum RippleClasses {
    /**
     * Class name of the root element
     */
    root = 'p-ink'
}

export interface RippleStyle extends BaseStyle {}
