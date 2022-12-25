import { LitElement, css, unsafeCSS } from 'lit'
import preflightCss from 'tailwindcss/src/css/preflight.css?inline'
import tailwinCss from './index.css?inline'
export class tailwindGlobalStyle extends LitElement {
  static styles = [
    unsafeCSS(preflightCss.replaceAll('html',':host').replaceAll('body',':host>*')),
    unsafeCSS(tailwinCss)
  ];
}
