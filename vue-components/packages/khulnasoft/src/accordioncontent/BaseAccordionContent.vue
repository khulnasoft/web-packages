<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import AccordionContentStyle from 'khulnasoft/accordioncontent/style';

export default {
    name: 'BaseAccordionContent',
    extends: BaseComponent,
    props: {
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionContentStyle,
    provide() {
        return {
            $pcAccordionContent: this,
            $parentInstance: this
        };
    }
};
</script>
