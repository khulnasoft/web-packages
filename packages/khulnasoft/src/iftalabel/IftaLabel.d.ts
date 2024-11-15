/**
 *
 * IftaLabel visually integrates a label within its form element.
 *
 * [Live Demo](https://www.khulnasoft.com/iftalabel/)
 *
 * @module iftalabel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type IftaLabelPassThroughOptionType = IftaLabelPassThroughAttributes | ((options: IftaLabelPassThroughMethodOptions) => IftaLabelPassThroughAttributes | string) | string | null | undefined;

export declare type IftaLabelPassThroughTransitionType = TransitionProps | ((options: IftaLabelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface IftaLabelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: IftaLabelProps;
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
 * @see {@link IftaLabelProps.pt}
 */
export interface IftaLabelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IftaLabelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface IftaLabelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in IftaLabel component.
 */
export interface IftaLabelProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {IftaLabelPassThroughOptions}
     */
    pt?: PassThrough<IftaLabelPassThroughOptions>;
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
 * Defines valid slots in IftaLabel component.
 */
export interface IftaLabelSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in IftaLabel component.
 */
export interface IftaLabelEmitsOptions {}

export declare type IftaLabelEmits = EmitFn<IftaLabelEmitsOptions>;

/**
 * **PrimeVue - IftaLabel**
 *
 * _IftaLabel visually integrates a label within its form element._
 *
 * [Live Demo](https://www.khulnasoft.com/inputtext/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const IftaLabel: DefineComponent<IftaLabelProps, IftaLabelSlots, IftaLabelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        IftaLabel: DefineComponent<IftaLabelProps, IftaLabelSlots, IftaLabelEmits>;
    }
}

export default IftaLabel;
