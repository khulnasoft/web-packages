<script>
import Drawer from 'khulnasoft/drawer';

export default {
    name: 'Sidebar',
    extends: Drawer,
    mounted() {
        console.warn('Deprecated since v4. Use Drawer component instead.');
    }
};
</script>
