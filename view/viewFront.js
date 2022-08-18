// ----------------------- Fram Side ----------------------------------
function updateViewFront() {
  let html = '';
  html += /*html*/`
    <div class="page">
        <div id="toTop" class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button class="search-icon" onclick="searchfield();"><i class="fas fa-search"></i></button></li>
                <li class="liteFeltLi">${slider()}Min/Max pris: ${model.sliderValueIs}</li>
                <li class="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.TotalQuantity} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi1"><button class="to-login-btn" onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button></li>
                <li class="liteFeltLi1">${model.app.admin} 
            <ul>
        </div>
        <div class="meny">
          ${model.viewMenyCategories}
        </div>
        <div class="innhold">
        ${model.modal}
        ${model.viewProductsHere}
        
        </div>
          <br><div class="footer"><a class="toTopButton" href="#toTop">Til toppen</a>
        </div>
    </div>
  `

  return html;
};




