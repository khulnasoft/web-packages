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
import Terminal from 'khulnasoft/terminal';
import TerminalService from 'khulnasoft/terminalservice'
`
            }
        };
    }
};
</script>
