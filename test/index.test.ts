import XMarked from '../src/index';

describe('XMarked', (): void => {
  beforeAll(() => {
    customElements.define('x-marked', XMarked);
  });

  test('should be defined', (): void => {
    expect(XMarked).toBeDefined();
    expect(customElements.get('x-marked')).toBe(XMarked);
  });

  test('should fetch CSS according to highlight/highlightTheme properties', () => {
    const defaultTheme = 'prism-duotone-light';
    const updatedTheme = 'prism-duotone-dark';
    const marked = new XMarked();
    expect(marked).toBeInstanceOf(HTMLElement);
    expect(marked.highlight).toBe(false);
    expect(marked.highlightTheme).toBe(defaultTheme);

    marked.highlight = true;
    const link = marked.shadowRoot?.querySelector<HTMLLinkElement>('#prism-css');
    expect(link?.href).toBe(`https://unpkg.com/prism-themes/themes/${defaultTheme}.css`);

    marked.highlightTheme = updatedTheme;
    expect(link?.href).toBe(`https://unpkg.com/prism-themes/themes/${updatedTheme}.css`);
  });
})
