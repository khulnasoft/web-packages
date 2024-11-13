import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: 'khulnasoft/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: 'khulnasoft/tooltip' },
    { name: 'ripple', as: 'Ripple', from: 'khulnasoft/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: 'khulnasoft/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: 'khulnasoft/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: 'khulnasoft/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: 'khulnasoft/keyfilter' }
]);
