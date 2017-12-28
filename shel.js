"use strict";

const appendChildren = (element, ...children) =>
children.forEach(child =>
  element.appendChild(typeof child === "string"? document.createTextNode(child): child)
);

const __ = (tagName, attrs = null, ...children) => {
  const element = document.createElement(tagName);
  if (attrs != null) {
    Object.keys(attrs).forEach(name => element.setAttribute(name, attrs[name]));
  }
  appendChildren(element, ...children);
  return element;
};
