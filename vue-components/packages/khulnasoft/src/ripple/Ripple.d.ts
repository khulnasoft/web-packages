/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://khulnasoft.com/ripple)
 *
 * @module ripple
 *
 */
import type { DesignToken, PassThrough } from '@khulnasoft/core';
import type { DirectiveHooks } from '@khulnasoft/core/basedirective';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { DirectiveBinding, ObjectDirective } from 'vue';

export declare type RippleDirectivePassThroughOptionType = RippleDirectivePassThroughAttributes | null | undefined;

/**
 * Defines options of Ripple.
 */
export interface RippleOptions {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {RippleDirectivePassThroughOptions}
     */
    pt?: PassThrough<RippleDirectivePassThroughOptions>;
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
 * Custom passthrough(pt) options.
 * @see {@link RippleOptions.pt}
 */
export interface RippleDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RippleDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface RippleDirectivePassThroughAttributes {
    [key: string]: any;
}

/**
 * Binding of Ripple directive.
 */
export interface RippleDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the Ripple.
     */
    value?: RippleOptions | undefined;
}

/**
 * **PrimeVue - Ripple**
 *
 * _Ripple directive adds ripple effect to the host element._
 *
 * [Live Demo](https://www.khulnasoft.com/ripple/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 */
declare const Ripple: ObjectDirective;

export default Ripple;
