<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import InputGroupStyle from 'khulnasoft/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
