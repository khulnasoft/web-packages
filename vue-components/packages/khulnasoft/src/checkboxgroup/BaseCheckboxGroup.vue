<script>
import BaseEditableHolder from '@khulnasoft/core/baseeditableholder';
import CheckboxGroupStyle from 'khulnasoft/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
