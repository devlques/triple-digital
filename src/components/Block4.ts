export default class Block4 extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
        <style>
        .block-4-container {
          display:none;
        }
         @media only screen and (min-width: 1024px){
            .block-4-container{
              display:block;
              position: reltive;
              width: 100%;
              background: green;
            }  
         }
        </style>
        <div class="block-4-container">Block 4</div>
      `;
    }    
};

customElements.define('custom-block-4', Block4)

