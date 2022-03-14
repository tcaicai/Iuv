import { initState } from "./state";
export function initMixin(Iuv) {
  Iuv.prototype._init = function (options) {
    const vm = this;
    vm.$options = options;

    initState(vm);
  };
}
