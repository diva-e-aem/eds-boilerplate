/**
 * @module SidebarComponent
 * @copyright diva-e (https://diva-e.com)
 */
import { LitElement } from 'lit';
import { Ref } from 'lit/directives/ref.js';
import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarPosts.ts';
import './sidebarFooter.ts';
export declare class SidebarComponent extends LitElement {
    toggleRef: Ref<HTMLAnchorElement>;
    createRenderRoot(): HTMLElement | DocumentFragment;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
