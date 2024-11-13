import type { DefineComponent } from '@khulnasoft/core';
import type { Icon } from '@khulnasoft/icons/baseicon';

declare class ChevronRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronRightIcon: DefineComponent<ChevronRightIcon>;
    }
}

export default ChevronRightIcon;
