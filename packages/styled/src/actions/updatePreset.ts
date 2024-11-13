import { mergeKeys } from '@khulnasoft/utils/object';
import Theme from '../config/index';

export default function updatePreset(...presets: any[]): any {
    const newPreset = mergeKeys(Theme.getPreset(), ...presets);

    Theme.setPreset(newPreset);

    return newPreset;
}
