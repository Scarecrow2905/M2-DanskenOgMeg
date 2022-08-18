function viewProduct() {
    html = `
<div class="product-main">

    <div class="header">${Header()}</div>

    <div class="liteFelt">

    <ul>
        <li class ="liteFeltLi"><button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button> </li>
        <li class="liteFeltLi1"><button class="btn-cart-navigation" onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button> </li>
        <li class="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
    <ul>
            
    </div>



    <div class="currentProduct">
    ${viewProductItem()}
    </div>

    </div>
    `

    return html;
};

function viewProductItem() {
    let result = '';
    for (let i = 0; i < model.products.length; i++)
        if (model.products[i].id == model.modalPopupInformation)
            result = `<section class="showProduct">
            <div class="product-header"> ${model.products[i].title}</div>
        <div class="product-row">

            <div class="product-item product-column">
                <img class="product-item-main-image" src="${model.products[i].img}"</span>
            </div>

                
            <div class="product-item">
                <span class="product-item-description">
                ${model.products[i].description}<br><br>
                
                Mål:    ${model.products[i].measures} <br>
                Land:   ${model.products[i].country}  <br>
                Farge:  ${model.products[i].color}    <br>
                År:     ${model.products[i].year}     <br>
                På lager: ${model.products[i].stock}
                </span>
            </div>

        </div> 
            <div class="product-input-btn">
                <div class="product-price"> ${model.products[i].price},- </div>
                <button type="button" class="front-item-btn" onclick="addToCart(${i});updateView();">Legg til handlekurv</button>
            </div>
    `
    return result;
}

function modalWindowPopup(index) {
    model.modalPopupInformation = model.products[index].id;
    model.app.currentPage = 'viewProduct';
    updateView();
}