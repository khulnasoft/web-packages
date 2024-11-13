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
import DataTable from 'khulnasoft/datatable';
import Column from 'khulnasoft/column';
import ColumnGroup from 'khulnasoft/columngroup';   // optional
import Row from 'khulnasoft/row';                   // optional
`
            }
        };
    }
};
</script>
