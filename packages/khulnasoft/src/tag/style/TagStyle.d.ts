/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.khulnasoft.com/tag)
 *
 * @module tagstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum TagClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tag',
    /**
     * Class name of the icon element
     */
    icon = 'p-tag-icon',
    /**
     * Class name of the label element
     */
    label = 'p-tag-label'
}

export interface TagStyle extends BaseStyle {}
