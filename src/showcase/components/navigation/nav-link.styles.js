import { css } from "lit-element";
export const styles = css`
  :host {
    display: block;
  }
  a {
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 0 20px 10px 20px;
    line-height: 24px;
    color: #9c9c9c;
    outline: none !important;
    cursor: pointer;
  }
  :host([route-active]) a {
    cursor: default;
    color: #00569c;
  }
  :host(:hover) a {
    color: #00569c;
  }
`;