import {marked, type MarkedOptions} from 'marked';
import he from 'he';

const templateHTML = `
  <style>
    * { font-family: inherit; }
    :host { display: block; }
  </style>
  <div></div>
`;

export default class XMarked extends HTMLElement {
  private div?: HTMLDivElement | null;

  static get observedAttributes(): string[] {
    return [
      'highlight',
      'highlight-theme'
    ];
  }

  /**
   * Get breaks property of the object.
   */
  get breaks(): boolean {
    return this.hasAttribute('breaks');
  }

  /**
   * Set breaks property of the object.
   */
  set breaks(value: boolean) {
    if (value == null) {
      this.removeAttribute('breaks');
    } else {
      this.setAttribute('breaks', '');
    }
  }

  /**
   * Get gfm property of the object.
   */
  get gfm(): boolean {
    return this.hasAttribute('gfm');
  }

  /**
   * Set gfm property of the object.
   */
  set gfm(value: boolean) {
    if (value == null) {
      this.removeAttribute('gfm');
    } else {
      this.setAttribute('gfm', '');
    }
  }

  /**
   * Get pedantic property of the object.
   */
  get pedantic(): boolean {
    return this.hasAttribute('pedantic');
  }

  /**
   * Set pedantic property of the object.
   */
  set pedantic(value: boolean) {
    if (value == null) {
      this.removeAttribute('pedantic');
    } else {
      this.setAttribute('pedantic', '');
    }
  }

  /**
   * Get silent property of the object.
   */
  get silent(): boolean {
    return this.hasAttribute('silent');
  }

  /**
   * Set silent property of the object.
   */
  set silent(value: boolean) {
    if (value == null) {
      this.removeAttribute('silent');
    } else {
      this.setAttribute('silent', '');
    }
  }

  /**
   * Get highlight property of the object.
   */
  get highlight(): boolean {
    return this.hasAttribute('highlight');
  }

  /**
   * Set highlight property of the object.
   */
  set highlight(value: boolean) {
    if (value == null) {
      this.removeAttribute('highlight');
    } else {
      this.setAttribute('highlight', '');
    }
  }

  /**
   * Get highlightTheme property of the object.
   */
  get highlightTheme(): string | null {
    return this.getAttribute('highlight-theme') || 'prism-duotone-light';
  }

  /**
   * Set highlightTheme property of the object.
   */
  set highlightTheme(value: string | null) {
    if (value == null) {
      this.removeAttribute('highlight-theme');
    } else {
      this.setAttribute('highlight-theme', value);
    }
  }

  /**
   * Get marked options.
   */
  get markedOptions(): MarkedOptions & {async: false} {
    return {
      async: false,
      breaks: this.breaks,
      gfm: this.gfm,
      pedantic: this.pedantic,
      silent: this.silent,
    };
  }

  /**
   * Get decode options.
   */
  get decodeOptions(): he.DecodeOptions {
    return {
      isAttributeValue: false,
      strict: false
    };
  }

  /**
   * Get markdown string.
   */
  get markdown(): string {
    return he.decode(this.innerHTML, this.decodeOptions);
  }

  /**
   * Highlight code block.
   */
  highlightElements(): void {
    const prismCSS = this.shadowRoot?.querySelector<HTMLLinkElement>('#prism-css');

    if (prismCSS) {
      prismCSS.href = `https://unpkg.com/prism-themes/themes/${this.highlightTheme}.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'prism-css';
      link.rel = 'stylesheet';
      link.href = `https://unpkg.com/prism-themes/themes/${this.highlightTheme}.css`;
      this.shadowRoot?.appendChild(link);
    }

    const highlight = () => {
      const elements = this.shadowRoot?.querySelectorAll('pre code');
      elements?.forEach(element => window.Prism?.highlightElement(element));
    }

    if (window.Prism) {
      highlight();
    } else {
      const script = document.createElement('script');
      script.id = 'prism-js';
      script.dataset.manual = '';
      script.defer = true;
      script.src = 'https://unpkg.com/prismjs';
      script.onload = () => highlight();
      this.shadowRoot?.appendChild(script);
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = templateHTML;

    this.div = this.shadowRoot?.querySelector<HTMLDivElement>('div');

    if (this.div) {
      this.markedOptions.async = false;
      this.div.innerHTML = marked(this.markdown, this.markedOptions);
    }

    if (this.highlight) {
      this.highlightElements();
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'highlight' || name === 'highlight-theme') {
      if (this.highlight) {
        this.highlightElements();
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-marked': XMarked;
  }
}
