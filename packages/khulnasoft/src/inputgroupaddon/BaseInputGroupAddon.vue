<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import InputGroupAddonStyle from 'khulnasoft/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
