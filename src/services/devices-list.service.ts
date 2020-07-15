import { DropdownOptions, Option, Options } from '../models/common.model';
import { Labels } from '../models/i18n.model';

export const getDropdownOptions = (
    options: Options<Labels>,
    i18nOptionLabels: Array<string>,
    filterId: string
): DropdownOptions<string> =>
    options.map(({ id }: Option<Labels>, i: number) => ({
        id,
        label: i18nOptionLabels[i],
        isSelected: id === filterId,
    }));
