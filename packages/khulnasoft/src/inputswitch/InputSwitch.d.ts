/**
 *
 * InputSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.khulnasoft.com/toggleswitch/)
 *
 * @module inputswitch
 *
 */
import type { DefineComponent, EmitFn } from '@khulnasoft/core';
import * as ToggleSwitch from 'khulnasoft/toggleswitch';
/**
 * Custom passthrough(pt) option method.
 */
export interface InputSwitchPassThroughMethodOptions extends ToggleSwitch.ToggleSwitchPassThroughMethodOptions {}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputSwitchProps.pt}
 */
export interface InputSwitchPassThroughOptions extends ToggleSwitch.ToggleSwitchPassThroughOptions {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputSwitchPassThroughAttributes extends ToggleSwitch.ToggleSwitchPassThroughAttributes {}

/**
 * Defines valid properties in InputSwitch component.
 */
export interface InputSwitchProps extends ToggleSwitch.ToggleSwitchProps {}

/**
 * Defines current options in InputSwitch component.
 */
export interface InputSwitchContext extends ToggleSwitch.ToggleSwitchContext {}

export interface InputSwitchSlots extends ToggleSwitch.ToggleSwitchSlots {}

/**
 * Defines valid emits in InputSwitch component.
 */
export interface InputSwitchEmitsOptions {}

export declare type InputSwitchEmits = EmitFn<InputSwitchEmitsOptions> & ToggleSwitch.ToggleSwitchEmits;

/**
 * @deprecated since v4. Use ToggleSwitch component instead.
 *
 * **PrimeVue - InputSwitch**
 *
 * _InputSwitch is used to select a boolean value._
 *
 * [Live Demo](https://www.khulnasoft.com/toggleswitch/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputSwitch: DefineComponent<InputSwitchProps, InputSwitchSlots, InputSwitchEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputSwitch: DefineComponent<InputSwitchProps, InputSwitchSlots, InputSwitchEmits>;
    }
}

export default InputSwitch;
