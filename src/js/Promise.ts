import { NotSupportedException } from "./Exceptions/NotSupportedException";

export type PromiseConstructor<T=unknown> = Promise<T>;
export let Promise: PromiseConstructor = window.Promise as any;

// class PromiseType<T> {
//     constructor() {
//         throw new NotSupportedException("Promise implementation missing.\nPlease use ConfigurePromise function to assign Promise Object\n" +
//             "bluebird: ConfigurePromise(require('bluebird))\n" +
//             "Q: ConfigurePromise(require('q').Promise)\n" +
//             "winjs-node: ConfigurePromise(require('winjs-node').Promise)")
//     }
// }

// try {
//     var promise = require('bluebird');
//     Promise = promise;
// } catch (e) {
//     Promise = <any>PromiseType;
// }

export function ConfigurePromise(promise: PromiseConstructor) {
    Promise = promise;
}