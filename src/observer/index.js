import { isObject } from "../utils";
import { arrayMethods } from "./array";

class Observer {
  constructor(data) {
    Object.defineProperty(data, "__ob__", {
      value: this,
      enumerable: false,
    });
    if (Array.isArray(data)) {
      data.__proto__ = arrayMethods;
      this.observeArray(data);
    } else {
      this.walk(data);
    }
  }
  observeArray(data) {
    data.forEach((item) => {
      observe(item);
    });
  }
  walk(data) {
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);
    });
  }
}

function defineReactive(data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      console.log("key===", key);
      return value;
    },
    set(newVal6) {
      observe(newVal6);
      value = newVal6;
    },
  });
}

export function observe(data) {
  if (!isObject(data)) return;
  if (data.__ob__) return;

  return new Observer(data);
}
