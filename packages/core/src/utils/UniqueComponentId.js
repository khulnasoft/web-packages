import { uuid } from '@khulnasoft/utils/uuid';

export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
