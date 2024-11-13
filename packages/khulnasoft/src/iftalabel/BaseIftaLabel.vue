<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import IftaLabelStyle from 'khulnasoft/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
