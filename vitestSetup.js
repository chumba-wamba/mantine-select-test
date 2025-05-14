import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

/**
 * Mocking window methods used internally by @mantine/core in their components.
 * @link: https://mantine.dev/guides/vitest/
 */
const { getComputedStyle } = global;
global.getComputedStyle = (element) => getComputedStyle(element);

global.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(global, "matchMedia", {
  writable: true,
  value(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    };
  },
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

afterEach(() => {
  cleanup();
});
