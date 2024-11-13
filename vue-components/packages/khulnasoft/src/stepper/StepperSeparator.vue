<template>
    <span :class="cx('separator')" v-bind="ptm('separator')" />
</template>

<script>
import BaseComponent from '@khulnasoft/core/basecomponent';

export default {
    name: 'StepperSeparator',
    hostName: 'Stepper',
    extends: BaseComponent
};
</script>
