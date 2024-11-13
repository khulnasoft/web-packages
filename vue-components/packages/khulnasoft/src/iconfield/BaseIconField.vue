<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import IconFieldStyle from 'khulnasoft/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
