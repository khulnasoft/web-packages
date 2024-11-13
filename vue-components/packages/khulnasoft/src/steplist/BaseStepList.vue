<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import StepListStyle from 'khulnasoft/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
