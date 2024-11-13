<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>PrimeVue</i> instance imported from <i>khulnasoft/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import PrimeVue from 'khulnasoft/config';
const app = createApp(App);

app.use(PrimeVue, { /* options */ });
`
            }
        };
    }
};
</script>
