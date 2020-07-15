export enum commonLabels {
    searchPlaceholderLabel = 'searchPlaceholderLabel',
    saveButtonLabel = 'saveButtonLabel',
    cancelButtonLabel = 'cancelButtonLabel',
}

export type Option<T> = {
    id: string;
    label: T;
};

export type DropdownOption<T> = Option<T> & {
    isSelected: boolean;
};

export type Options<T> = Array<Option<T>>;
export type DropdownOptions<T> = Array<DropdownOption<T>>;
