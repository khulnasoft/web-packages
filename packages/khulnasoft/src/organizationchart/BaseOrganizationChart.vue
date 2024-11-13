<script>
import BaseComponent from '@khulnasoft/core/basecomponent';
import OrganizationChartStyle from 'khulnasoft/organizationchart/style';

export default {
    name: 'BaseOrganizationChart',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        }
    },
    style: OrganizationChartStyle,
    provide() {
        return {
            $pcOrganizationChart: this,
            $parentInstance: this
        };
    }
};
</script>
