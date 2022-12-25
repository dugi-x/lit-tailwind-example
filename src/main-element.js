import { LitElement, css, html } from 'lit'

import { tailwindGlobalStyle } from './tailwind-global-style'
import { HeaderElement } from './header-element'
import { FooterElement } from './footer-element'

window.customElements.define('header-element', HeaderElement)
window.customElements.define('footer-element', FooterElement)

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MainElement extends LitElement {
  static get properties() {
    return {
      hello: { type: String },
    }
  }

  constructor() {
    super()
    this.hello = 'Hello World'
  }


  headerTemplate() {
    return html`<header-element></header-element>`;
  }
  
  footerTemplate() {
   
    return html`<footer-element></footer-element>`;
  }

  render() {
    return [
      html`
      <div class="h-full flex flex-col">
        ${this.headerTemplate()}
        <main class="h-full grow">
          <h2 class="bg-red-400 md:bg-blue-300">${this.hello}</h2>
          <slot></slot>
        </main>
        ${this.footerTemplate()}
      </div>
    `]
  }

  static get styles() {
    return [
      tailwindGlobalStyle.styles,
      css``
    ]
  }
}


window.customElements.define('main-element', MainElement)
