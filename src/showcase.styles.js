import {css} from 'lit-element';
export const showcaseStyles = css`
  :host {
    --grey-ligthest: #f8f8f8;
    --grey-middle: #e0e6ed;
    --grey-dark: #9c9c9c;
    --font-color-primary: #484848;
  }
  :host(.dark) {
    --grey-ligthest: #212121;
    --grey-middle: #000;
    --grey-dark: #9c9c9c;
    --font-color-primary: #fafafa;
  }
  /* scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--grey-dark) var(--grey-middle);
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--grey-middle);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey-dark);
    border-radius: 20px;
    border: 3px solid var(--grey-middle);
  }

  /* helpers */
  .space-bottom-m40 {
    margin-bottom: 40px;
  }

  :host {
    margin: 0;
    height: 100vh;
    width: 100%;
    outline: none;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 15px;
    display: grid;
    grid-template-columns: minmax(250px, 380px) minmax(600px, 1fr);
    grid-template-areas: 'nav content';
  }

  .logo {
    max-width: 200px;
    display: block;
    margin: 20px auto -10px auto;
  }
  .claim {
    letter-spacing: 3px;
    font-size: 10px;
    text-transform: uppercase;
    color: var(--grey-dark);
    width: 100%;
    float: left;
    text-align: center;
    padding-bottom: 40px;
    border-bottom: 1px solid
      var(--accordion-item-border-color, var(--border-color, #c1c1c1));
  }
  .nav {
    --accordion-item-color-expanded: var(--font-color-primary);
    --accordion-item-border-color: var(--grey-middle);
    grid-area: nav;
    background-color: var(--grey-ligthest);
    border-right: 1px solid var(--grey-middle);
    overflow-y: auto;
  }
  .nav aurora-accordion-item {
    padding: 0 20px 0 20px;
  }

  .content {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;
  }

  aurora-scroll-navigation {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(250px, 380px) minmax(600px, 1fr);
    left: 0;
  }
  aurora-scroll-navigation::part(scroll-items) {
    background: #fff;
    border-bottom: 1px solid var(--grey-middle);
    padding-left: 60px;
  }
  .content #main {
    transition: opacity 5s linear 0s;
    padding: 0 60px 60px;
    opacity: 1;
  }
  #main.route-change {
    opacity: 0;
    animation: fade 5s linear 0;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 50%;
    }
  }
  .content footer {
    padding: 0 60px 60px 60px;
  }
  .content #main,
  .content footer {
    float: left;
    width: 100%;
    box-sizing: border-box;
    max-width: 1080px;
  }
  aurora-code-mirror,
  aurora-headline-block[is-subheadline] {
    margin-bottom: 40px;
  }

  [route] {
    display: block;
  }
  [route][route-active] {
    animation: slide-down 0.5s cubic-bezier(0.75, 0.02, 0.5, 1);
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
