import type { DefineComponent } from '@khulnasoft/core';
import type { Icon } from '@khulnasoft/icons/baseicon';

declare class StarFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarFillIcon: DefineComponent<StarFillIcon>;
    }
}

export default StarFillIcon;
