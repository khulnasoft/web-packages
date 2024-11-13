// @ts-ignore
import Aura from '@khulnasoft/themes/aura';

export default defineNuxtConfig({
    modules: ['../src/module'],
    khulnasoft: {
        usePrimeVue: true,
        options: {
            // ripple, inputStyle etc.
            ripple: true,
            theme: {
                preset: Aura
            },
            pt: {
                panel: {
                    header: 'my-panel-header'
                }
            }
        },
        components: {
            prefix: '',
            include: '*',
            exclude: undefined
        },
        directives: {
            prefix: '',
            include: undefined,
            exclude: '*'
        },
        composables: {
            //prefix: '',
            include: undefined,
            exclude: undefined
        }
    },
    devtools: { enabled: true }
});
