import path from 'path';

const baseUrl = '/';

const alias = {
    khulnasoft: path.resolve(__dirname, '../../packages/khulnasoft/src'),
    '@khulnasoft/core': path.resolve(__dirname, '../../packages/core/src'),
    '@khulnasoft/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
    '@khulnasoft/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
    '@khulnasoft/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
    '@khulnasoft/themes/material': path.resolve(__dirname, '../../packages/themes/src/presets/material'),
    '@khulnasoft/themes': path.resolve(__dirname, '../../packages/themes/src'),
    '@khulnasoft/icons': path.resolve(__dirname, '../../packages/icons/src')
};

let PROCESS_ENV = {};

try {
    PROCESS_ENV = process?.env || {};
} catch {
    // NOOP
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', '@khulnasoft/nuxt-module'],
    components: {
        path: '~/components',
        pathPrefix: false
    },
    vite: {
        resolve: {
            optimizeDeps: {
                disabled: true
            },
            alias
        }
    },
    nitro: {
        alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } }
    },
    khulnasoft:
        PROCESS_ENV.DEV_ENV === 'hot'
            ? {
                  usePrimeVue: false,
                  autoImport: true,
                  loadStyles: false
              }
            : {
                  autoImport: true, // When enabled, the module automatically imports PrimeVue components and directives used throughout the application.
                  importTheme: { from: '@/themes/app-theme.js' }
              },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'PrimeVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@khulnasoft' },
                { name: 'twitter:title', content: 'PrimeVue | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'PrimeVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://khulnasoft.com/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.khulnasoft.com/static/social/khulnasoft-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400|Roboto:500|Roboto:600|Roboto:700', fetchpriority: 'low' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl,
            DEV_ENV: PROCESS_ENV.DEV_ENV
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});
