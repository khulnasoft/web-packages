<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import AvatarGroupStyle from 'khulnasoft/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
