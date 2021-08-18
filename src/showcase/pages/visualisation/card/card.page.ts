
import "../../../../modules/p2f/grid/p2f.grid.module";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import {LitElement, html} from 'lit';


class Card extends LitElement {

  /* Render template */
  render() {

		

    return html`
    
    <ae-headline-block class="space-bottom-m40" headline="Card">
      This chronological list shows all of the components that have been added
      or updated in the aurora elements library.
    </ae-headline-block> 
 `;
  }
}
customElements.define('card-page', Card);
