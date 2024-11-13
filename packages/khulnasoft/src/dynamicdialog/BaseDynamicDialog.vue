<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import DynamicDialogStyle from 'khulnasoft/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
