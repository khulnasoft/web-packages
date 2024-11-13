import type { ConfirmationOptions } from 'khulnasoft/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
