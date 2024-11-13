<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is available for download on <a href="https://www.npmjs.com/package/khulnasoft">npm registry</a> along with the official
            <a href="https://www.npmjs.com/package/@khulnasoft/nuxt-module" target="_blank" rel="noopener noreferrer">@khulnasoft/nuxt-module</a>.
        </p>
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
npm install --save-dev @khulnasoft/nuxt-module

# Using yarn
yarn add khulnasoft @khulnasoft/themes
yarn add --dev @khulnasoft/nuxt-module

# Using pnpm
pnpm add khulnasoft @khulnasoft/themes
pnpm add -D @khulnasoft/nuxt-module
`
            }
        };
    }
};
</script>
