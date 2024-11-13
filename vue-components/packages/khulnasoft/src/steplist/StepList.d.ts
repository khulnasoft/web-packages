/**
 *
 * StepList is a helper component for Stepper component.
 *
 * [Live Demo](https://www.khulnasoft.com/stepper/)
 *
 * @module steplist
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { VNode } from 'vue';

export declare type StepListPassThroughOptionType = StepListPassThroughAttributes | ((options: StepListPassThroughMethodOptions) => StepListPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepListPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepListProps;
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
 * @see {@link StepListProps.pt}
 */
export interface StepListPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepListPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepListPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in StepList component.
 */
export interface StepListProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepListPassThroughOptions}
     */
    pt?: PassThrough<StepListPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines valid slots in StepList slots.
 */
export interface StepListSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface StepListEmitsOptions {}

export declare type StepListEmits = EmitFn<StepListEmitsOptions>;

/**
 * **PrimeVue - StepList**
 *
 * _StepList is a helper component for Stepper component._
 *
 * [Live Demo](https://www.khulnasoft.com/stepper/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const StepList: DefineComponent<StepListProps, StepListSlots, StepListEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        StepList: DefineComponent<StepListProps, StepListSlots, StepListEmits>;
    }
}

export default StepList;
