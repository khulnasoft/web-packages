/**
 *
 * ImageCompare compares two images side by side with a slider.
 *
 * [Live Demo](https://www.khulnasoft.com/imagecompare/)
 *
 * @module imagecomparestyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum ImageCompareClasses {
    /**
     * Class name of the root element
     */
    root = 'p-imagecompare',
    /**
     * Class name of the slider element
     */
    slider = 'p-imagecompare-slider'
}

export interface ImageCompareStyle extends BaseStyle {}
