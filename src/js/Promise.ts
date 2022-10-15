export function ConfigurePromise(promise: PromiseConstructor) {
    window.Promise = promise;
}
