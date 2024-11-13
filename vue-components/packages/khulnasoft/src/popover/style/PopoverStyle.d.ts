/**
 *
 * Popover is a container component positioned as connected to its target.
 *
 * [Live Demo](https://khulnasoft.com/popover)
 *
 * @module popoverstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum PopoverClasses {
    /**
     * Class name of the root element
     */
    root = 'p-popover',
    /**
     * Class name of the content element
     */
    content = 'p-popover-content'
}

export interface PopoverStyle extends BaseStyle {}
