let oldArrayPrototype = Array.prototype;
export let arrayMethods = Object.create(oldArrayPrototype);

let methods = ["push", "pop", "shift", "unshift", "sort", "splice", "reverse"];

methods.forEach((method) => {
  arrayMethods[method] = function (...args) {
    console.log("array.js this====", this);
    oldArrayPrototype[method].apply(this, args);

    let inserted,
      ob = this.__ob__;

    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
      default:
        break;
    }
    if (inserted) ob.observeArray(inserted);
  };
});
