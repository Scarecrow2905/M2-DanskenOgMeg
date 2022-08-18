

function addToCart(i) {
    if (model.products[i].stock == 0) {
        return alert('Tomt på lager');
    }
    else if (model.products[i].productQuantity > 0) {
        model.products[i].productQuantity++;
        model.shoppingCart.TotalQuantity++
        model.shoppingCart.totalPrice += model.products[i].price;
        // model.shoppingCart.numberOfItems++
        model.products[i].stock = model.products[i].totalProducts - model.products[i].productQuantity

    }
    else {
        model.shoppingCart.cartProducts.push(model.products[i]);
        model.products[i].productQuantity++;
        model.shoppingCart.TotalQuantity++;
        model.shoppingCart.totalPrice += model.products[i].price;
        // model.shoppingCart.numberOfItems++
        model.products[i].stock = model.products[i].totalProducts - model.products[i].productQuantity
    }
    if (model.viewProductsHere != '') {
        searchCatalog(model.searchText)
    } else {
        viewStuff(model.selectedCategory);
    }
}


function ChangeQuantity(index, value) {
    console.log('index' + index)
    if (parseInt(value) >= model.shoppingCart.cartProducts[index].totalProducts || parseInt(value) < 0) alert('Maks Grense');
    model.shoppingCart.cartProducts[index].productQuantity = parseInt(value); // Gjør varens productQuantity i handlekurven om til det samme som i input
    for (let i = 0; i < model.products.length; i++) {
        if (model.shoppingCart.cartProducts[index].id == model.products[i].id) {
            model.products[i].productQuantity = model.shoppingCart.cartProducts[index].productQuantity;

            model.products[i].stock = model.products[i].totalProducts;
            model.shoppingCart.cartProducts[index].stock = model.shoppingCart.cartProducts[index].totalProducts;

            model.products[i].stock = model.products[i].totalProducts - model.products[i].productQuantity;
            model.shoppingCart.cartProducts[index].stock = model.shoppingCart.cartProducts[index].totalProducts - model.shoppingCart.cartProducts[index].productQuantity;
        }
    }
    ChangeShoppingCartInfo();
}

function ChangeShoppingCartInfo() {
    model.shoppingCart.TotalQuantity = 0; // Resetter totalt antall varer i handlevognen
    model.shoppingCart.totalPrice = 0; // resetter totalprisen i handlevognen
    for (let i = 0; i < model.shoppingCart.cartProducts.length; i++) {
        model.shoppingCart.TotalQuantity += model.shoppingCart.cartProducts[i].productQuantity; // Gjør total antall produkter i handlevognen  om til varen(es) antall productQuantity
        model.shoppingCart.totalPrice += model.shoppingCart.cartProducts[i].price * model.shoppingCart.cartProducts[i].productQuantity; //  Gjør totalprisen i handlevognen om til prisen til antall varer og antall pr. vare
        for (let j = 0; j < model.products.length; j++) {
        }
    }
    updateView();
}

function purchase(index) {
    if (model.shoppingCart[index] === 0) alert('Ingenting i handlekurv');
    else {
        alert('Takk for handelen!')
        updateView();
    }
};

function removeCart(index) {
    model.shoppingCart.TotalQuantity = 0; // Resetter totalt antall varer i handlevognen
    model.shoppingCart.totalPrice = 0; // Resetter totalt antall varer i handlevognen

    for (let i = 0; i < model.products.length; i++) {
        if (model.products[i].id == model.shoppingCart.cartProducts[index].id) {
            model.products[i].productQuantity = 0;
            model.products[i].stock = model.products[i].totalProducts;
        }
    }
    model.shoppingCart.cartProducts.splice(index, 1);
    for (let i = 0; i < model.shoppingCart.cartProducts.length; i++) {
        model.shoppingCart.TotalQuantity += model.shoppingCart.cartProducts[i].productQuantity;
        model.shoppingCart.totalPrice += model.shoppingCart.cartProducts[i].price * model.shoppingCart.cartProducts[i].productQuantity;

    }
    updateView();
};

// Meny og dropdown for categorier og subcategorier
function make(index) {
    let html = "";
    model.viewMenyCategories = "";
    model.activeSubCategory[index] = !model.activeSubCategory[index];
    for (let i = 0; i < model.categories.length; i++) {
        if (model.activeSubCategory[i] == true && index < 100) {
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`

            for (let j = 0; j < model.categories[i].sub.length; j++) {
                html += `<div class="sublist" onclick="viewStuff(${model.categories[i].sub[j].id});">${model.categories[i].sub[j].categoriName}</div>`
            }
        }
        else {
            html += `<div class="dropDownList" onclick="make(${i});model.menuText = ''">${model.categories[i].name}</div>
            `
        }
    }
    model.viewMenyCategories = html;
    model.searchText = '';
    updateView();
}

function viewStuff(index) {
    model.selectedCategory = index;
    let html = "";
    let first = '';
    for (let i = 0; i < model.products.length; i++) {
        first = i % 4 == 0 ? 'first' : '';
        if (index === 100 && model.products[i].price < model.sliderValueIs) {
            html += /*html*/`
    <div class="rows ${first}">
        <img class="front-item-image" src="${model.products[i].img}" onclick="modalWindowPopup(${i});updateView()"/>
        <div class="front-item-title">${model.products[i].title}</div>
        <div class="front-price">${model.products[i].price}kr</div>
        <div class="stock">På lager: ${model.products[i].stock}</div>
        <button type="button" class="front-item-btn" onclick="addToCart(${i});updateView()">Legg til handlekurv</button>
    </div>`
        }
    }

    for (let i = 0; i < model.products.length; i++) {
        let first = i % 4 == 0 ? 'first' : '';
        if (index == model.products[i].parentId && model.products[i].price < model.sliderValueIs) {
            model.activeProduct = !model.activeProduct
            html += /*html*/`
            <div class="rows ${first}">
                <img class="front-item-image" src="${model.products[i].img}" onclick="modalWindowPopup(${i});updateView()"/>
                <div class="front-item-title">${model.products[i].title}</div>
                <div class="front-price">${model.products[i].price}kr</div>
                <div class="stock">På lager: ${model.products[i].stock}</div>
                <button type="button" class="front-item-btn" onclick="addToCart(${i});updateView()">Legg til handlekurv</button>
            </div>`
        }
        model.viewProductsHere = html;
        updateView();
    }
}

//Alt som har med Login, Ny bruker, Resette ny bruker informasjon, og som sjekker hvem som er logget inn.
function DoThisMailPersonExist() {
    let foundUser = false;
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.account.email == model.account.users[i].email && model.account.password == model.account.users[i].password) {
            model.app.currentUser = model.account.users[i].id;
            alert('Du er nå logget inn!');
            foundUser = true;
            model.app.status = true;
            model.app.currentPage = 'FrontPage';
        }
    }
    if (foundUser === false) {
        alert('Bruker eksisterer ikke.')
    }
    loggedInnOrNot()
}

function DoThisPhonePersonExist() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.account.phone == model.account.users[i].phone && model.account.password == model.account.users[i].password) {
            model.app.currentUser = model.account.users[i].id;
            alert('Du er nå logget inn!');
            foundUser = true;
            model.app.status = true;
            model.app.currentPage = 'FrontPage';
        }
    }
    if (foundUser === false) {
        alert('Bruker eksisterer ikke.')
    }
    loggedInnOrNot()
}
//addNewInforToModel
function addNewInfoToModel() {
    model.account.users.push({
        firstName: model.account.newFirstName,
        lastName: model.account.newLastName,
        phone: model.account.createNewPhoneNumber,
        email: model.account.createNewEmail,
        password: model.account.createNewPassword,
        cardnumber: 0000000000000000,
        cardname: 'No name',
        id: model.idIndex,
    })
    model.idIndex++;
    alert('Du kan nå logge på med din nye konto!')
    model.app.currentPage = 'LoginMail';
    resettInformation();
    updateView();
}
//checkEverything
function checkNewAccountInformation() {
    if (model.account.newFirstName == '') {
        return alert('Du har glemt fornavnet.')
    } else if (model.account.newLastName == '') {
        return alert('Du har glemt etternavnet.')
    } else if (model.account.createNewEmail.includes('@', '.com', '.no', 'hotmail', 'gmail') == false) { //
        return alert('Bruk en gyldig e-post adresse.')
    } else if (model.account.createNewPhoneNumber.length < 8) {
        return alert('Fyll ut minst 8 nummer.')
    } else if (model.account.createNewPassword.length < 4) {
        return alert('Passordet må inneholde minst 4 bokstaver eller tall.')
    } else if (model.account.createNewPassword != model.account.createNewPasswordCheck) {
        return alert('Passordene samsvarer ikke.');
    } else if (model.account.createNewPassword == model.account.createNewPasswordCheck) {
        updateView();
    }
}

function resettInformation() {
    model.account.newFirstName = '';
    model.account.newLastName = '';
    model.account.createNewPhoneNumber = '';
    model.account.createNewEmail = '';
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    updateView();
}

function loggedInnOrNot() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.status == false) {
            model.app.showStatus = 'Logg inn';
        } else if (model.app.status == true) {
            if (model.app.currentUser == model.account.users[i].id) {
                model.app.showStatus = model.account.users[i].firstName + ' ' + model.account.users[i].lastName;
            }
        }
    }
    isAdminLoggedIn();
    updateView();
}

function isAdminLoggedIn() {
    if (model.app.currentUser == 1) {
        model.app.adminLoggedInn = true;
    }
    checkAdmin();
}

function checkAdmin() {
    if (model.app.adminLoggedInn == false) {
        model.app.admin = '';
    }
    if (model.app.adminLoggedInn == true) {
        model.app.admin = `
        <li class="liteFeltLi1"><button class="to-back-btn" onclick="createViewModal();">Legg til Kategori</button></li>
        <button class="to-back-btn" onclick="model.app.currentPage = 'viewCreateProduct'; updateView()">Legg til produkt</button></li>
        `;
    }
    updateView();
}

function checkLoginStatus() {
    if (model.app.status == false) {
        model.app.currentPage = 'LoginMail';
    } else if (model.app.status == true) {
        model.app.currentPage = 'accountInfo';
    }
    updateView();
}

function logOut() {
    if (model.app.click == 1) {
        alert('Er du sikker på at du vil logge ut? Godkjenn ved å trykke en gang til.')
    } if (model.app.click > 1) {
        model.app.click = 0;
        model.app.status = false;
        model.app.showStatus = 'Logg inn';
        model.app.currentPage = 'FrontPage';
        model.app.adminLoggedInn = false;
        console.log('Logg ut')

    }
    checkAdmin();
    updateView();
}

// Søkerfunksjonen og pris justering
function searchCatalog(indexValue) {
    model.midlertidlig = '';
    for (let i = 0; i < model.products.length; i++) {
        let first = i % 4 == 0 ? 'first' : '';
        if (model.products[i].title.includes(indexValue) || model.products[i].category.includes(indexValue)) {
            if (model.products[i].price < model.sliderValueIs) {
                model.midlertidlig += `
                <div class="rows ${first}">
                    <img class="front-item-image" src="${model.products[i].img}"/>
                    <div class="front-item-title">${model.products[i].title}</div>
                    <div class="front-price">${model.products[i].price}kr</div>
                    <div class="stock">På lager: ${model.products[i].stock}</div>
                    <button type="button" class="front-item-btn" onclick="addToCart(${i})">Legg til handlekurv</button>
                </div>`
            }
        }
    }
    UpdateViewProductsHere();
}

function UpdateViewProductsHere() {
    model.viewProductsHere = model.midlertidlig
    updateView();
}

function sliderValue(indexValue) {
    model.sliderValueIs = indexValue;
    updateView();
}

// Endring av bruker informasjon og/eller legge til
function UpdateChange(index) {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.whatInfoIsShowed == 'editPaymentInfo') {
            if (model.payment.cardNumberInput.length < 17 && model.payment.cardNumberInput.length > 15) {
                model.account.users[index].cardnumber = model.payment.cardNumberInput;
                model.account.users[index].cardname = model.payment.cardUsersName;

            }
            else {
                alert('Kortnummeret må inneholde 16 siffer.');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editFirstAndLastname') {
            model.account.users[index].firstName = model.account.newFirstName;
            model.account.users[index].lastName = model.account.newLastName;
            if (model.account.newFirstName == '' || model.account.newLastName == '') {
                alert('Fyll inn fornavn og/eller etternavn.');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editMail') {
            model.account.users[index].email = model.account.createNewEmail;
            if (model.account.createNewEmail.includes('@', '.com', '.no', 'hotmail', 'gmail') == false) { //
                alert('Du må angi en gyldig e-post adresse.');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editPassword') {
            if (model.account.createNewPassword.length < 4) {
                alert('Passordet må inneholde minst 4 bokstaver eller tall.');
                return;
            }
            else if (model.account.createNewPassword != model.account.createNewPasswordCheck) {
                alert('Passordene samsvarer ikke.');
                return;
            }
            else if (model.account.createNewPassword == model.account.createNewPasswordCheck) {
                model.account.users[index].password = model.account.createNewPassword;
            }
        }
    }
    resett();
}

function resett() {
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    model.account.createNewEmail = '';
    model.account.newFirstName = '';
    model.account.newLastName = '';
    showDetailedAccountInformation();
}
function deleteCardInformation(index) {
    model.account.users[index].cardnumber = 0;
    model.account.users[index].cardname = '';
    showDetailedAccountInformation();
}

function viewPayUserType() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.currentUser == model.account.users[i].id) {
            if (model.app.currentUser != 0) {
                model.app.viewPayUserCard = model.account.users[i].cardnumber;
                model.app.viewPayUserName = model.account.users[i].cardname;
            }
            else {
                model.app.viewPayUserCard = model.payment.cardNumberInput;
                model.app.viewPayUserName = model.payment.cardUsersName;
            }
        }
    }
    updateView();
}

// Funksjoner for å legge til kategorier eller subkategorier
function addCategory() {
    model.activeSubCategory.push(false);
}



//**------------------------CreateProducts controller functions----------------- **/
//Lage Produkter.
function createProduct() {
    let test = ""
    // if (model.createItems.title
    //     && model.createItems.price
    //     && model.createItems.stock
    //     && model.createItems.description
    //     && model.createItems.color
    //     && model.createItems.year
    //     && model.createItems.measures
    //     && model.createItems.img
    //     == "") {
    //     alert("Fyll ut alle feltene")

    // }
    // else {

    //Midlertidlig variabel som all informasjon blir lagret i.
    let newproduct = {}

    // 
    newproduct.title = model.createItems.title;
    newproduct.price = model.createItems.price;
    newproduct.stock = model.createItems.stock;
    newproduct.category = model.createItems.category;
    setProductId();
    newproduct.parentId = model.createItems.id;
    newproduct.img = model.createItems.img; // ⛔  Må lage enløsning på denne.
    newproduct.description = model.createItems.description;
    newproduct.measures = model.createItems.measures;
    newproduct.color = model.createItems.color;
    newproduct.country = model.createItems.country;
    newproduct.year = model.createItems.year;
    newproduct.productQuantity = model.createItems.productQuantity;
    newproduct.totalProducts = model.createItems.stock;
    //Pusher Newproduct inn i Products som et eget produkt. OBS bilde ikke fikset.
    model.products.push(newproduct);
    console.log(newproduct);


    //  model.products.push(newproduct);

    blankInput();

    updateView();
}

//Setter riktig id-er for hovedkategori og underkategori.
function setProductId() {
    /*-------------------------------stue-------------------------------------*/
    //Sjekker hvilken Hoved-Kategori den er i og setter riktig underkategori.
    if (model.createItems.category == 'Stue') {
        if (model.createItems.subCategory == 'Sofa') model.createItems.id = 11;
        if (model.createItems.subCategory == 'Sofabord') model.createItems.id = 12;
        if (model.createItems.subCategory == 'Sjeselong') model.createItems.id = 13;
        if (model.createItems.subCategory == 'Kommoder') model.createItems.id = 14;
        if (model.createItems.subCategory == 'Hyller') model.createItems.id = 15;
        if (model.createItems.subCategory == 'Reoler') model.createItems.id = 16;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 17;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 18;
    }
    /*-----------------------------Spiserom-----------------------------------*/
    if (model.createItems.category == 'Spiserom') {
        if (model.createItems.subCategory == 'Spisebord') model.createItems.id = 21;
        if (model.createItems.subCategory == 'Spisestuestoler') model.createItems.id = 22;
        if (model.createItems.subCategory == 'Reoler') model.createItems.id = 23;
        if (model.createItems.subCategory == 'Kommode') model.createItems.id = 24;
        if (model.createItems.subCategory == 'Skjenk') model.createItems.id = 25;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 27;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 28;
    }
    /*-----------------------------Kjøkken------------------------------------*/
    if (model.createItems.category == 'Kjøkken') {
        if (model.createItems.subCategory == 'Kjøkkenbord') model.createItems.id = 31;
        if (model.createItems.subCategory == 'Kjøkkenstoler') model.createItems.id = 32;
        if (model.createItems.subCategory == 'Hyller') model.createItems.id = 33;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 35;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 36;
    }
    /*-----------------------------Soverom------------------------------------*/
    if (model.createItems.category == 'Soverom') {
        if (model.createItems.subCategory == 'Seng') model.createItems.id = 41;
        if (model.createItems.subCategory == 'Nattbord') model.createItems.id = 42;
        if (model.createItems.subCategory == 'Kommoder') model.createItems.id = 43;
        if (model.createItems.subCategory == 'Garderobeskap') model.createItems.id = 44;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 45;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 46;
    }
    /*-----------------------------Bad------------------------------------*/
    if (model.createItems.category == 'Bad') {
        if (model.createItems.subCategory == 'Badekar') model.createItems.id = 51;
        if (model.createItems.subCategory == 'Vaskebrett') model.createItems.id = 52;
        if (model.createItems.subCategory == 'Innredning') model.createItems.id = 53;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 54;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 55;
    }
    /*-----------------------------gang------------------------------------*/
    if (model.createItems.category == 'Gang') {
        if (model.createItems.subCategory == 'Sko oppbevaring') model.createItems.id = 61;
        if (model.createItems.subCategory == 'Garderobeskap') model.createItems.id = 62;
        if (model.createItems.subCategory == 'Hattehyller') model.createItems.id = 63;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 64;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 65;
    }
    /*-----------------------------klær------------------------------------*/
    if (model.createItems.category == 'Klær') {
        if (model.createItems.subCategory == 'Kjole') model.createItems.id = 71;
        if (model.createItems.subCategory == 'Bukser') model.createItems.id = 72;
        if (model.createItems.subCategory == 'Gensere') model.createItems.id = 73;
        if (model.createItems.subCategory == 'Jakker') model.createItems.id = 74;
        if (model.createItems.subCategory == 'Cardigans') model.createItems.id = 75;
        if (model.createItems.subCategory == 'Hatter') model.createItems.id = 76;
        if (model.createItems.subCategory == 'Skjerf') model.createItems.id = 77;
        if (model.createItems.subCategory == 'Øredobber') model.createItems.id = 78;
    }
    /*-----------------------------Sko------------------------------------*/
    if (model.createItems.category == 'Sko') {
        if (model.createItems.subCategory == 'Støvletter') model.createItems.id = 81;
        if (model.createItems.subCategory == 'Støvler') model.createItems.id = 82;
        if (model.createItems.subCategory == 'Joggesko') model.createItems.id = 83;
        if (model.createItems.subCategory == 'Platåsko') model.createItems.id = 84;
        if (model.createItems.subCategory == 'Høyhælte sko') model.createItems.id = 85;
    }
    /*-----------------------------Lesesal------------------------------------*/
    if (model.createItems.category == 'Lesesal') {
        if (model.createItems.subCategory == 'Godstol') model.createItems.id = 91;
        if (model.createItems.subCategory == 'Bokhyller') model.createItems.id = 92;
        if (model.createItems.subCategory == 'Avlastningsbord') model.createItems.id = 93;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 94;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 95;
    }
}

function blankInput() {
    model.createItems.title = '';
    model.createItems.title = '';
    model.createItems.price = null;
    model.createItems.stock = null;
    model.createItems.category = '';
    model.createItems.categoryId = '';
    model.createItems.img = '';
    model.createItems.description = '';
    model.createItems.measures = '';
    model.createItems.color = [];
    model.createItems.country = '';
    model.createItems.year = '';
    model.createItems.productQuantity = '';
    model.createItems.totalProducts = '';


    // må nulle ut alle verdier; husk at noen er tall
    //img: "C:\\fakepath\\158905.jpg"
}
//Skal prøve å få denne til å endre pathen til img med hjelp av en hjelpe variabel.
// var img = document.getElementById('front-item-image').value;
// var newPath = imgpath.replace('//C:/fakepath/', '')

/*---------------------------Slutt på CreateProduct-------------------------------------- */
/*--------------------------------Ny Kategori  ------------------------------------------ */

function createCategory() {
    NewCategory = {}
    NewCategory.name = model.createCategory.name;
    NewCategory.id = model.createCategory.id;
    NewCategory.sub = model.createCategory.sub;
    addImg(PictureInPictureWindow);
    model.category.push(NewCategory);
    console.log(NewCategory)
    updateView();
}
function createSub() {

}

function addImg(picture) {
    // img path skal den være model.products.img.src?
    var newPath = img.path.replace("//C:/fakepath/', '")
    newPath = picture;
    return picture;
}

function topPanel() {
    return `<div class="header">${Header()}</div>

    <div class="cart-navigation">
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    </div>`
};


