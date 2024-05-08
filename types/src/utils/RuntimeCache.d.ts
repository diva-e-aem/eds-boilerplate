export declare class RuntimeCache {
    private runtimeCache;
    get<T>(key: string): T | undefined;
    set<T>(key: string, value: T): void;
    has(key: string): boolean;
    delete(key: string): void;
}
