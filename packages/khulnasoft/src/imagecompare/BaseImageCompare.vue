<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import ImageCompareStyle from 'khulnasoft/imagecompare/style';

export default {
    name: 'BaseImageCompare',
    extends: BaseComponent,
    props: {
        tabindex: {
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
    style: ImageCompareStyle,
    provide() {
        return {
            $pcImageCompare: this,
            $parentInstance: this
        };
    }
};
</script>
