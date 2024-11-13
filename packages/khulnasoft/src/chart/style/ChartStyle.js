import BaseStyle from '@khulnasoft/core/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: 'p-chart'
};

export default BaseStyle.extend({
    name: 'chart',
    classes,
    inlineStyles
});
