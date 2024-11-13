/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.khulnasoft.com/togglebutton/)
 *
 * @module togglebuttonstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum ToggleButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-togglebutton',
    /**
     * Class name of the icon element
     */
    icon = 'p-togglebutton-icon',
    /**
     * Class name of the label element
     */
    label = 'p-togglebutton-label'
}

export interface ToggleButtonStyle extends BaseStyle {}
