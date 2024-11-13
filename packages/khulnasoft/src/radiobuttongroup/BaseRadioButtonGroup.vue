<script>
import BaseEditableHolder from '@khulnasoft/core/baseeditableholder';
import RadioButtonGroupStyle from 'khulnasoft/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
