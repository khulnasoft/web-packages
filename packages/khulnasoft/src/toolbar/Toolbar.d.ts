/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.khulnasoft.com/toolbar/)
 *
 * @module toolbar
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { VNode } from 'vue';

export declare type ToolbarPassThroughOptionType = ToolbarPassThroughAttributes | ((options: ToolbarPassThroughMethodOptions) => ToolbarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToolbarPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ToolbarProps;
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
 * @see {@link ToolbarProps.pt}
 */
export interface ToolbarPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToolbarPassThroughOptionType;
    /**
     * Used to pass attributes to the start's DOM element.
     */
    start?: ToolbarPassThroughOptionType;
    /**
     * Used to pass attributes to the center's DOM element.
     */
    center?: ToolbarPassThroughOptionType;
    /**
     * Used to pass attributes to the right's DOM element.
     */
    end?: ToolbarPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ToolbarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface ToolbarProps {
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ToolbarPassThroughOptions}
     */
    pt?: PassThrough<ToolbarPassThroughOptions>;
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
 * Defines valid slots in Toolbar slots.
 */
export interface ToolbarSlots {
    /**
     * Custom start template.
     */
    start(): VNode[];

    /**
     * Custom center template.
     */
    center(): VNode[];

    /**
     * Custom end template.
     */
    end(): VNode[];
}
/**
 * Defines valid emits in Toolbar component.
 */
export interface ToolbarEmitsOptions {}

export declare type ToolbarEmits = EmitFn<ToolbarEmitsOptions>;

/**
 * **PrimeVue - Toolbar**
 *
 * _Toolbar is a grouping component for buttons and other content._
 *
 * [Live Demo](https://www.khulnasoft.com/toolbar/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Toolbar: DefineComponent<ToolbarProps, ToolbarSlots, ToolbarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Toolbar: DefineComponent<ToolbarProps, ToolbarSlots, ToolbarEmits>;
    }
}

export default Toolbar;
