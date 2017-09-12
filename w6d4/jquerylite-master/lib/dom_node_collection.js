class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string) {
      this.hmtlElements.forEach(el => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.htmlElements.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(object) {
    if (typeof object === "string") {
      this.htmlElements.forEach(el => {
        el.append(object);
      });
    } else if (object instanceof HTMLElement) {
      this.htmlElements.forEach(el => {
        el.append(object);
        // was appending outerHTML but caused problems
      });
    } else if (object instanceof DOMNodeCollection) {
      this.htmlElements.forEach(el => {
        object.htmlElements.forEach(objEl => {
          console.log(el);
          console.log(objEl);
          el.append(objEl);
        });
      });
    }
  }


  attr(attributeName, value = null) {
    if (value) {
      this.htmlElements.forEach(el => {
        el.setAttribute(attributeName, value);
      });
    } else {
      let attrs = [];
      this.htmlElements.forEach(el => {
        attrs.push(el.getAttribute(attributeName));
      });
      return attrs;
    }
  }

  addClass() {

  }

  removeClass() {

  }





  find() {

  }

  remove() {

  }

  children() {

  }

  parent() {

  }
}

module.exports = DOMNodeCollection;
