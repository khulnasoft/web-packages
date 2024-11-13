import { mergeKeys } from '@khulnasoft/utils/object';

export default function definePreset(...presets: any[]): any {
    return mergeKeys(...presets);
}
