function updateViewCart() {
    html = `
<div class="cart-main">

    <div class="header">${Header()}</div>

    <div class="liteFelt">

    <ul>
        <li class="liteFeltLi"><button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';viewStuff(100)">Tilbake</button> </li>
        <li class="liteFeltLi1"><button class="to-login-btn" onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button> </li>
    <ul>

    </div>

    <div class="newProduct">
    ${createCartItems()}
    </div>


    <div class="cart-total">
    <strong class="cart-total-title">Totalt</strong>
    <span class="cart-total-price">${model.shoppingCart.totalPrice} kr </span><br>
    <span class="cart-total-price">${model.shoppingCart.TotalQuantity} Varer</span>


    <button class="btn-buy" onclick="model.app.currentPage = 'PayPage';viewPayUserType()">Kjøp</button>
    </div>

</div>
`
    return html;
};

function createCartItems() {
    var result = '';

    for (let i = 0; i < model.shoppingCart.cartProducts.length; i++) {

    result += `<section class="newProduct">
                    <h2 class="cart-header"> Handlekurv </h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">VARER</span>
                        <span class="cart-price cart-header cart-column">PRIS </span>
                        <span class="cart-quantity cart-header cart-column">ANTALL</span>
                    </div>

                    <div class="cart-row"> 
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${model.shoppingCart.cartProducts[i].img}">
                            <span class="cart-item-title"> ${model.shoppingCart.cartProducts[i].title} </span>
                        </div>
                            <span class="cart-price cart-column">${model.shoppingCart.cartProducts[i].price} kr/stk </span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" max="${model.shoppingCart.cartProducts[i].totalProducts}" min="0" value="${model.shoppingCart.cartProducts[i].productQuantity}" onclick="ChangeQuantity(${i}, this.value);">
                            <button class="btn btn-danger cart-quantity-button" type="button" onclick="removeCart(${i});updateView()">Fjern</button>
                    </div>

                </div> `
    }
    return result;
}

