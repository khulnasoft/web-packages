<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Stepper from 'khulnasoft/stepper';
import StepList from 'khulnasoft/steplist';
import StepPanels from 'khulnasoft/steppanels';
import StepItem from 'khulnasoft/stepitem';
import Step from 'khulnasoft/step';
import StepPanel from 'khulnasoft/steppanel';
`
            }
        };
    }
};
</script>
