/**
 *
 * InputOtp is used to enter one time passwords.
 *
 * [Live Demo](https://www.khulnasoft.com/inputotp/)
 *
 * @module inputotpstyle
 *
 */
import type { BaseStyle } from '@khulnasoft/core/base/style';

export enum InputOtpClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputotp',
    /**
     * Class name of the input element
     */
    pcInput = 'p-inputotp-input'
}

export interface InputOtpStyle extends BaseStyle {}
