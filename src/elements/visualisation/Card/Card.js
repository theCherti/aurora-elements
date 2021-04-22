import { LitElement } from "lit-element";
import { template } from "./CardTemplate.js";
import { styles } from './CardStyles.js';

class AuroraCard extends LitElement {
        /* Properties - LitElement */
        static get properties() {
            return {
                label: { 
                    type: String
                },
                image: { 
                    type: String, 
                },
                href: { 
                    type: String, 
                },
                target: { 
                    type: String, 
                }
            };
        }   
    
        /* Styles - LitElement */
        static get styles() {
            return [styles]
        }
    
        /* Render template */
        render() {
            return template(this)
        }
    
        /* Get root */
        get root() {
            return this.shadowRoot || this
        }

        firstUpdated() {
            const image = this.root.querySelector('img');
            const el = this;
            image.addEventListener('load', () => {
                el.setAttribute('loaded', '');
            })   
        }
}
customElements.define('aurora-card', AuroraCard);