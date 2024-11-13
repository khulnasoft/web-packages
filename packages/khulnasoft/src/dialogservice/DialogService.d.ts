/**
 *
 * [Live Demo](https://www.khulnasoft.com/dynamicdialog/)
 *
 * @module dialogservice-usedialog
 */
import type { DynamicDialogInstance, DynamicDialogOptions } from 'khulnasoft/dynamicdialogoptions';
import { Plugin } from 'vue';

declare const plugin: Plugin;
export default plugin;

/**
 * Dynamic Dialog components methods.
 *
 * @group Model
 *
 */
export interface DialogServiceMethods {
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {*} content - Dynamic component for content template
     * @param {DynamicDialogOptions} options - DynamicDialog Object
     * @return {@link DynamicDialogInstance}
     */
    open(content: any, options?: DynamicDialogOptions): DynamicDialogInstance;
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $dialog: DialogServiceMethods;
    }
}
