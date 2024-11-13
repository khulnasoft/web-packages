import type { DefineComponent } from '@khulnasoft/core';
import type { Icon } from '@khulnasoft/icons/baseicon';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: DefineComponent<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;
