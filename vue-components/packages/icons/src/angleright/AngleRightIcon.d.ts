import type { DefineComponent } from '@khulnasoft/core';
import type { Icon } from '@khulnasoft/icons/baseicon';

declare class AngleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleRightIcon: DefineComponent<AngleRightIcon>;
    }
}

export default AngleRightIcon;
