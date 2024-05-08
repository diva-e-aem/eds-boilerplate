export type FormFieldType = 'headline' | 'plaintext' | 'text' | 'button' | 'fieldset' | 'select' | 'toggle' | 'radio' | 'checkbox' | 'textarea' | 'reset' | 'submit';
export interface FormField {
    class?: string;
    id?: string;
    name: string;
    label: string;
    fieldset?: string;
    value?: string;
    type: FormFieldType;
}
export interface FormFieldInput extends FormField {
    placeholder?: string;
    required?: boolean;
}
export interface FormFieldSelect extends FormField {
    options: string[];
    required?: boolean;
}
export declare const renderField: (field: FormField) => any;
