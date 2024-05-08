import { LitElement, nothing } from 'lit';
interface SidebarContactTemplateArgs {
    headline: HTMLElement | null;
    text: HTMLElement | null;
    contacts: Contact[];
}
interface Contact {
    icon: HTMLElement | null;
    markup: HTMLElement | null;
}
export declare class SidebarContact extends LitElement {
    contactTemplateArgs: SidebarContactTemplateArgs;
    error: string | null;
    connectedCallback(): Promise<void>;
    fetchContactsHtml(): Promise<Document | null>;
    renderHeader(headline: HTMLElement | null): import("lit-html").TemplateResult<1> | typeof nothing;
    renderText(text: HTMLElement | null): import("lit-html").TemplateResult<1> | typeof nothing;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private renderContact;
    private getContactsArgs;
    private getContactTemplateArgs;
    private renderContacts;
    private renderIcon;
    private renderContactMarkup;
}
export {};
