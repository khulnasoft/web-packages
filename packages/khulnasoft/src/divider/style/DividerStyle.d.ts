/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://khulnasoft.com/divider)
 *
 * @module dividerstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum DividerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-divider',
    /**
     * Class name of the content element
     */
    content = 'p-divider-content'
}

export interface DividerStyle extends BaseStyle {}
