import marked from 'marked';
import he from 'he';

const templateHTML = `
  <style>
    * { font-family: inherit; }
    :host { display: block; }
  </style>
  <div></div>
`;

export default class XMarked extends HTMLElement {
  div?: HTMLDivElement | null;

  static get observedAttributes(): string[] {
    return [
      'highlight',
      'highlight-theme'
    ];
  }

  /**
   * Get baseUrl property of the object.
   */
  get baseUrl(): string | null {
    return this.getAttribute('baseUrl');
  }

  /**
   * Set baseUrl property of the object.
   */
  set baseUrl(value: string | null) {
    if (value == null) {
      this.removeAttribute('baseUrl');
    } else {
      this.setAttribute('baseUrl', value);
    }
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
   * Get headerIds property of the object.
   */
  get headerIds(): boolean {
    return this.hasAttribute('headerIds');
  }

  /**
   * Set headerIds property of the object.
   */
  set headerIds(value: boolean) {
    if (value == null) {
      this.removeAttribute('headerIds');
    } else {
      this.setAttribute('headerIds', '');
    }
  }

  /**
   * Get headerPrefix property of the object.
   */
  get headerPrefix(): string | null {
    return this.getAttribute('headerPrefix');
  }

  /**
   * Set headerPrefix property of the object.
   */
  set headerPrefix(value: string | null) {
    if (value == null) {
      this.removeAttribute('headerPrefix');
    } else {
      this.setAttribute('headerPrefix', value);
    }
  }

  /**
   * Get langPrefix property of the object.
   */
  get langPrefix(): string | null {
    return this.getAttribute('langPrefix');
  }

  /**
   * Set langPrefix property of the object.
   */
  set langPrefix(value: string | null) {
    if (value == null) {
      this.removeAttribute('langPrefix');
    } else {
      this.setAttribute('langPrefix', value);
    }
  }

  /**
   * Get mangle property of the object.
   */
  get mangle(): boolean {
    return this.hasAttribute('mangle');
  }

  /**
   * Set mangle property of the object.
   */
  set mangle(value: boolean) {
    if (value == null) {
      this.removeAttribute('mangle');
    } else {
      this.setAttribute('mangle', '');
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
   * Get sanitize property of the object.
   */
  get sanitize(): boolean {
    return this.hasAttribute('sanitize');
  }

  /**
   * Set sanitize property of the object.
   */
  set sanitize(value: boolean) {
    if (value == null) {
      this.removeAttribute('sanitize');
    } else {
      this.setAttribute('sanitize', '');
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
   * Get smartLists property of the object.
   */
  get smartLists(): boolean {
    return this.hasAttribute('smartLists');
  }

  /**
   * Set smartLists property of the object.
   */
  set smartLists(value: boolean) {
    if (value == null) {
      this.removeAttribute('smartLists');
    } else {
      this.setAttribute('smartLists', '');
    }
  }

  /**
   * Get smartypants property of the object.
   */
  get smartypants(): boolean {
    return this.hasAttribute('smartypants');
  }

  /**
   * Set smartypants property of the object.
   */
  set smartypants(value: boolean) {
    if (value == null) {
      this.removeAttribute('smartypants');
    } else {
      this.setAttribute('smartypants', '');
    }
  }

  /**
   * Get xhtml property of the object.
   */
  get xhtml(): boolean {
    return this.hasAttribute('xhtml');
  }

  /**
   * Set xhtml property of the object.
   */
  set xhtml(value: boolean) {
    if (value == null) {
      this.removeAttribute('xhtml');
    } else {
      this.setAttribute('xhtml', '');
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
  get markedOptions(): marked.MarkedOptions {
    return {
      baseUrl: this.baseUrl || undefined,
      breaks: this.breaks,
      gfm: this.gfm,
      headerIds: this.headerIds,
      headerPrefix: this.headerPrefix || undefined,
      mangle: this.mangle,
      pedantic: this.pedantic,
      sanitize: this.sanitize,
      silent: this.silent,
      smartLists: this.smartLists,
      smartypants: this.smartypants,
      xhtml: this.xhtml
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
