<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import TabMenuStyle from 'khulnasoft/tabmenu/style';

export default {
    name: 'BaseTabMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: TabMenuStyle,
    provide() {
        return {
            $pcTabMenu: this,
            $parentInstance: this
        };
    }
};
</script>
