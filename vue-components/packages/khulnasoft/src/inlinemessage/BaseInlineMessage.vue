<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import InlineMessageStyle from 'khulnasoft/inlinemessage/style';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $pcInlineMessage: this,
            $parentInstance: this
        };
    }
};
</script>
