<template>
    <DocPTViewer :docs="docs">
        <DeferredContent>
            <img src="https://khulnasoft.com/cdn/khulnasoft/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('DeferredContent'),
                    key: 'DeferredContent'
                }
            ]
        };
    }
};
</script>
