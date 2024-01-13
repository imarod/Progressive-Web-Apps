class RestoReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    #resto-review{
      
      padding: 10px;
      border: 1px solid #393E46;
      border-radius: 20px;
      color: #393E46;
      
    #resto-review h2{
      
   
  }
    </style>
    <div id="resto-review">
    <h2>Reviews: </h2>
    </div>
      
      
      `;
  }
}

customElements.define('resto-review', RestoReview);
