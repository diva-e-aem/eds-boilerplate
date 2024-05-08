import { LitElement } from 'lit';
interface SubMenuItem {
    path: string;
    navtitle: string;
}
interface MenuItem {
    path: string;
    error?: string;
    navtitle: string;
    children?: SubMenuItem[];
}
export declare class SidebarNav extends LitElement {
    items: MenuItem[];
    error: string | null;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    firstUpdated(): Promise<void>;
    getPlaceholder(key: string): Promise<any>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    private toggleSubmenu;
    private renderSubMenu;
    private renderMenuItem;
    private renderMenuItems;
    private getSubmenuName;
    private getNavTitle;
    private filterNavigation;
    private groupItemsByFirstLevelPath;
    private groupByFirstLevelPath;
}
export {};
