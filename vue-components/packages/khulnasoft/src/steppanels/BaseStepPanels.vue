<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import StepPanelsStyle from 'khulnasoft/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
