declare global {
  interface Window {
    Prism?: {
      highlightElement(element: Element): void;
    }
  }
}

export {};
