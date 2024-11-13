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
import Tabs from 'khulnasoft/tabs';
import TabList from 'khulnasoft/tablist';
import Tab from 'khulnasoft/tab';
import TabPanels from 'khulnasoft/tabpanels';
import TabPanel from 'khulnasoft/tabpanel';
`
            }
        };
    }
};
</script>
