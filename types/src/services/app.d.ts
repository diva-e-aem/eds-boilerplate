type LifecycleCallback = () => void | Promise<void>;
interface LifecycleCallbacks {
    beforeInit?: LifecycleCallback;
    afterInit?: LifecycleCallback;
    beforeLoadEager?: LifecycleCallback;
    afterLoadEager?: LifecycleCallback;
    beforeLoadLazy?: LifecycleCallback;
    afterLoadLazy?: LifecycleCallback;
    beforeLoadDelayed?: LifecycleCallback;
    afterLoadDelayed?: LifecycleCallback;
}
declare class App {
    private beforeInit;
    private afterInit;
    private beforeLoadEager;
    private afterLoadEager;
    private beforeLoadLazy;
    private afterLoadLazy;
    private beforeLoadDelayed;
    private afterLoadDelayed;
    constructor({ beforeInit, afterInit, beforeLoadEager, afterLoadEager, beforeLoadLazy, afterLoadLazy, beforeLoadDelayed, afterLoadDelayed, }?: LifecycleCallbacks);
    private init;
    private loadEager;
    private loadLazy;
    private loadDelayed;
}
export default App;
