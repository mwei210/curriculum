const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(selector) {
  let arr = [];
  // let createEl = selector.includes("<");

  if ((typeof selector === "string")) {
    let elementList = document.querySelectorAll(selector);
    arr = Array.from(elementList);
  }
  if (selector instanceof HTMLElement) {
    arr.push(selector);
  }
  // if ((typeof selector === "string") && (createEl)) {
  //   let name = selector.slice(1, selector.length - 1);
  //   arr.push(document.createElement(name));
  // }
  return new DOMNodeCollection(arr);
};
