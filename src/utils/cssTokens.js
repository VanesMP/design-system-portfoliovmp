export const getCSSVariable = (name, element = document.documentElement) =>
  getComputedStyle(element).getPropertyValue(name).trim();
