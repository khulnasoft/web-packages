import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'usePrimeVue', as: 'usePrimeVue', from: 'khulnasoft/config' },
    { name: 'useStyle', as: 'useStyle', from: 'khulnasoft/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'khulnasoft/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'khulnasoft/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'khulnasoft/usedialog' }
]);
