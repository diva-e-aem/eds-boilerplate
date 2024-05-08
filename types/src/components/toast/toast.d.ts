import { LitElement } from 'lit';
export declare class Toast extends LitElement {
    message: string;
    duration: number;
    connectedCallback(): void;
    close(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1> | undefined;
    static styles: import("lit").CSSResult;
}
