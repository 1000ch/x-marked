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
  div: HTMLElement;

  /**
   * Get baseUrl property of the object.
   */
  get baseUrl(): string | undefined {
    if (this.hasAttribute('baseUrl')) {
      return this.getAttribute('baseUrl') || undefined;
    }

    return undefined;
  }

  /**
   * Set baseUrl property of the object.
   */
  set baseUrl(value: string | undefined) {
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
   * Set gfm property of the object.
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
  get headerPrefix(): string | undefined {
    if (this.hasAttribute('headerPrefix')) {
      return this.getAttribute('headerPrefix') || undefined;
    }

    return undefined;
  }

  /**
   * Set headerPrefix property of the object.
   */
  set headerPrefix(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('headerPrefix');
    } else {
      this.setAttribute('headerPrefix', value);
    }
  }

  /**
   * Get langPrefix property of the object.
   */
  get langPrefix(): string | undefined {
    if (this.hasAttribute('langPrefix')) {
      return this.getAttribute('langPrefix') || undefined;
    }

    return undefined;
  }

  /**
   * Set langPrefix property of the object.
   */
  set langPrefix(value: string | undefined) {
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
   * Get marked options.
   */
  get markedOptions(): marked.MarkedOptions {
    return {
      baseUrl: this.baseUrl,
      breaks: this.breaks,
      gfm: this.gfm,
      headerIds: this.headerIds,
      headerPrefix: this.headerPrefix,
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

  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    }).innerHTML = templateHTML;

    this.div = this.shadowRoot?.querySelector('div') as HTMLElement;
    this.div.innerHTML = marked(this.markdown, this.markedOptions);
  }
}
