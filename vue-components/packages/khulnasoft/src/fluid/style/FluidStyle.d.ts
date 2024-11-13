/**
 *
 * Fluid is a layout component to make descendant components span full width of their container.
 *
 * [Live Demo](https://www.khulnasoft.com/fluid/)
 *
 * @module fluidstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum FluidClasses {
    /**
     * Class name of the root element
     */
    root = 'p-fluid'
}

export interface FluidStyle extends BaseStyle {}
