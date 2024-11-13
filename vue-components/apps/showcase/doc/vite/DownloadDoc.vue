<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/khulnasoft">npm registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install khulnasoft @khulnasoft/themes

# Using yarn
yarn add khulnasoft @khulnasoft/themes

# Using pnpm
pnpm add khulnasoft @khulnasoft/themes
`
            }
        };
    }
};
</script>
