/**
 *
 * Focus Trap keeps focus within a certain DOM element while tabbing.
 *
 * [Live Demo](https://khulnasoft.com/focustrap)
 *
 * @module focustrap
 *
 */
import type { DesignToken, PassThrough } from '@khulnasoft/core';
import type { DirectiveHooks } from '@khulnasoft/core/basedirective';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import { DirectiveBinding, ObjectDirective } from 'vue';

export declare type FocusTrapDirectivePassThroughOptionType = FocusTrapDirectivePassThroughAttributes | null | undefined;

/**
 * Defines options of FocusTrap.
 */
export interface FocusTrapOptions {
    /**
     * When present, it specifies that the directive should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When disabled, focustrap will not focus by default.
     * @defaultValue true
     */
    autoFocus?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FocusTrapDirectivePassThroughOptions}
     */
    pt?: PassThrough<FocusTrapDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link FocusTrapOptions.pt}
 */
export interface FocusTrapDirectivePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the first focusable element's DOM element.
     */
    firstFocusableElement?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to pass attributes to the last focusable element's DOM element.
     */
    lastFocusableElement?: FocusTrapDirectivePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FocusTrapDirectivePassThroughAttributes {
    [key: string]: any;
}

/**
 * Binding of FocusTrap directive.
 */
export interface FocusTrapDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the FocusTrap.
     */
    value?: FocusTrapOptions | undefined;
}

/**
 * **PrimeVue - FocusTrap**
 *
 * _FocusTrap directive provides advisory information for a component._
 *
 * [Live Demo](https://www.khulnasoft.com/focustrap/)
 * --- ---
 * ![PrimeVue](https://khulnasoft.com/cdn/khulnasoft/images/logo-100.png)
 *
 */
declare const FocusTrap: ObjectDirective;

export default FocusTrap;
