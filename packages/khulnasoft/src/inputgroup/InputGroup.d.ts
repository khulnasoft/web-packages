/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.khulnasoft.com/inputgroup/)
 *
 * @module inputgroup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { VNode } from 'vue';

export declare type InputGroupPassThroughOptionType = InputGroupPassThroughAttributes | ((options: InputGroupPassThroughMethodOptions) => InputGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InputGroupProps;
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
 * @see {@link InputGroupProps.pt}
 */
export interface InputGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputGroup component.
 */
export interface InputGroupProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputGroupPassThroughOptions}
     */
    pt?: PassThrough<InputGroupPassThroughOptions>;
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
 * Defines valid slots in InputGroup component.
 */
export interface InputGroupSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
    /**
     * Dynamic content template.
     * @todo
     */
    [key: string]: (node: any) => VNode[];
}

/**
 * Defines valid emits in InputGroup component.
 */
export interface InputGroupEmitsOptions {}

export declare type InputGroupEmits = EmitFn<InputGroupEmitsOptions>;

/**
 * **PrimeVue - InputGroup**
 *
 * _InputGroup displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.khulnasoft.com/inputgroup/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputGroup: DefineComponent<InputGroupProps, InputGroupSlots, InputGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputGroup: DefineComponent<InputGroupProps, InputGroupSlots, InputGroupEmits>;
    }
}

export default InputGroup;
