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
import Accordion from 'khulnasoft/accordion';
import AccordionPanel from 'khulnasoft/accordionpanel';
import AccordionHeader from 'khulnasoft/accordionheader';
import AccordionContent from 'khulnasoft/accordioncontent';
`
            }
        };
    }
};
</script>
