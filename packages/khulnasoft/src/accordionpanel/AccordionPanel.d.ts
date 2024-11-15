/**
 *
 * AccordionPanel is a helper component for Accordion component.
 *
 * [Live Demo](https://www.khulnasoft.com/accordion/)
 *
 * @module accordionpanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@khulnasoft/core';
import type { ComponentHooks } from '@khulnasoft/core/basecomponent';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import type { Component, VNode } from 'vue';

export declare type AccordionPanelPassThroughOptionType = AccordionPanelPassThroughAttributes | ((options: AccordionPanelPassThroughMethodOptions) => AccordionPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AccordionPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AccordionPanelProps;
    /**
     * Defines current options.
     */
    context: AccordionPanelContext;
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
 * @see {@link AccordionPanelProps.pt}
 */
export interface AccordionPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface AccordionPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in AccordionPanel component.
 */
export interface AccordionPanelProps {
    /**
     * Unique value of item.
     */
    value: string | number | undefined;
    /**
     * Whether the item is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue DIV
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AccordionPanelPassThroughOptions}
     */
    pt?: PassThrough<AccordionPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in AccordionPanel component.
 */
export interface AccordionPanelContext {
    [key: string]: any;
}

/**
 * Defines valid slots in AccordionPanel slots.
 */
export interface AccordionPanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface AccordionPanelEmitsOptions {}

export declare type AccordionPanelEmits = EmitFn<AccordionPanelEmitsOptions>;

/**
 * **PrimeVue - AccordionPanel**
 *
 * _AccordionPanel is a helper component for Accordion component._
 *
 * [Live Demo](https://www.khulnasoft.com/accordion/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const AccordionPanel: DefineComponent<AccordionPanelProps, AccordionPanelSlots, AccordionPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionPanel: DefineComponent<AccordionPanelProps, AccordionPanelSlots, AccordionPanelEmits>;
    }
}

export default AccordionPanel;
