<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import ButtonGroupStyle from 'khulnasoft/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
