/**
 *
 * RadioButtonGroup is a component that groups multiple radio buttons, allowing users to select only one option from the group.
 *
 * [Live Demo](https://www.khulnasoft.com/radiobutton/)
 *
 * @module radiobuttongroup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { VNode } from 'vue';

export declare type RadioButtonGroupPassThroughOptionType = RadioButtonGroupPassThroughAttributes | ((options: RadioButtonGroupPassThroughMethodOptions) => RadioButtonGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface RadioButtonGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: RadioButtonGroupProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link RadioButtonGroupProps.pt}
 */
export interface RadioButtonGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface RadioButtonGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in RadioButtonGroup component.
 */
export interface RadioButtonGroupProps {
    /**
     * Value binding of the radiobuttons.
     */
    modelValue?: any;
    /**
     * Default values of the radiobuttons in uncontrolled mode.
     */
    defaultValue?: any;
    /**
     * Name of the input elements.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Used to set form control options.
     */
    formControl?: any;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {RadioButtonGroupPassThroughOptions}
     */
    pt?: PassThrough<RadioButtonGroupPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in RadioButtonGroup component.
 */
export interface RadioButtonGroupSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in RadioButtonGroup component.
 */
export interface RadioButtonGroupEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
}

export declare type RadioButtonGroupEmits = EmitFn<RadioButtonGroupEmitsOptions>;

/**
 * **PrimeVue - RadioButtonGroup**
 *
 * _RadioButtonGroup is a component that groups multiple radio buttons, allowing users to select only one option from the group._
 *
 * [Live Demo](https://www.khulnasoft.com/radiobutton/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const RadioButtonGroup: DefineComponent<RadioButtonGroupProps, RadioButtonGroupSlots, RadioButtonGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        RadioButtonGroup: DefineComponent<RadioButtonGroupProps, RadioButtonGroupSlots, RadioButtonGroupEmits>;
    }
}

export default RadioButtonGroup;
