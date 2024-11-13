<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import CardStyle from 'khulnasoft/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
