import type { DynamicDialogInstance, DynamicDialogOptions } from 'khulnasoft/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
