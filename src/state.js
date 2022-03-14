import { observe } from "./observer/index";
import { isFunction } from "./utils";

export function initState(vm) {
  const { props, data, computed, watch } = vm.$options;

  if (data) {
    initData(vm);
  }

  //   if (props) {
  //     initProps();
  //   }

  //   if (computed) {
  //     initComputed();
  //   }

  //   if (watch) {
  //     initWatch();
  //   }
}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newVal) {
      vm[source][key] = newVal;
    },
  });
}
function initData(vm) {
  let { data } = vm.$options;
  data = vm._data = isFunction(data) ? data.call(vm) : data;

  for (let key in data) {
    proxy(vm, "_data", key);
  }
  observe(data);
}
