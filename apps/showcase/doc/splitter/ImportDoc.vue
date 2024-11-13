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
import Splitter from 'khulnasoft/splitter';
import SplitterPanel from 'khulnasoft/splitterpanel';
`
            }
        };
    }
};
</script>
