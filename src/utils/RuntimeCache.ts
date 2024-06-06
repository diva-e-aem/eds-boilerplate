export class RuntimeCache {
  private runtimeCache: Map<string, unknown> = new Map();

  public get<T>(key: string): T | undefined {
    return this.runtimeCache.get(key) as T | undefined;
  }

  public set<T>(key: string, value: T): void {
    this.runtimeCache.set(key, value);
  }

  public has(key: string): boolean {
    return this.runtimeCache.has(key);
  }

  public delete(key: string): void {
    this.runtimeCache.delete(key);
  }
}
