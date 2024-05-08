import { LitElement } from 'lit';
import { FormField, FormFieldInput, FormFieldSelect } from './form.template.ts';
type FormElement = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    options: string;
    value: string;
    required: string;
    id: string;
    fieldset: string;
    class: string;
};
type FormPayload = Record<string, string>;
export declare class Form extends LitElement {
    formData: FormField[];
    pathname: string;
    form: HTMLFormElement;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): Promise<void>;
    fetchFormData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    setFieldsets(): void;
    parseFieldData(item: FormElement): FormField | FormFieldInput | FormFieldSelect;
    generatePayload(form: HTMLFormElement): FormPayload;
    handleSubmitError(form: any, error: any): void;
    submitForm(e: Event): void;
    handleSubmit(form: HTMLFormElement): Promise<void>;
}
export {};
