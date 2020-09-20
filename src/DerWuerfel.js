import { LitElement, html, css } from 'lit-element';

export class DerWuerfel extends LitElement {
  static get properties() {
    return {
      seiten: { type: Number },
      wert: { attribute: false },
    };
  }

  static get styles() {
    return css`
      button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 400px;
        text-align: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 40%
      }
    `;
  }

  constructor() {
    super();
    this.wert = 0;
  }

  onClick() {
    let v = Math.floor(Math.random() * 6);
    while (v === this.wert) v = Math.floor(Math.random() * 6);
    this.wert = v;
  }

  render() {
    return html`
      <button @click=${this.onClick}>
        ${String.fromCharCode(0x2680 + this.wert)}
      </button>
    `;
  }
}
