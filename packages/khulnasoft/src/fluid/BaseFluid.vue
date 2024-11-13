<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import FluidStyle from 'khulnasoft/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
