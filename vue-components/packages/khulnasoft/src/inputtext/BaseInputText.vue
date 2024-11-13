<script>
import BaseInput from '@khulnasoft/core/baseinput';
import InputTextStyle from 'khulnasoft/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
