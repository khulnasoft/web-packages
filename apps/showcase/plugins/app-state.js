import AppTheme from '@/themes/app-theme';
import PrimeVue from 'khulnasoft/config';
import { reactive } from 'vue';

const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            preset: 'Aura',
            primary: 'noir',
            surface: null,
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            storageKey: 'khulnasoft',
            designerKey: 'khulnasoft-designer-theme',
            designerActive: false
        });
    }
};

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        nuxtApp.vueApp.use(PrimeVue, {
            theme: AppTheme
        });
    }
});
