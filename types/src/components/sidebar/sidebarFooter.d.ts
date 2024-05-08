import { LitElement } from 'lit';
export declare class SidebarFooter extends LitElement {
    footerMarkup: HTMLParagraphElement | null;
    error: string | null;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchFooterData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
