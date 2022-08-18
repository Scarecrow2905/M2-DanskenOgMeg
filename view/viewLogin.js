// ------------------------- Login Mail ---------------------------
function updateViewLoginWithMail(){
    html = /*html*/`
    <div class="headerL">${Header()}</div>
    
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi"><button class="to-back-btn" onclick="model.app.currentPage='FrontPage';updateView()">Tilbake</button></li>
                <li class="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
            <ul>
        </div>

<div class="loginPage">


        <div class="menyL">
            <div><h2 class="h2Login">Logg inn..</h2></div>
            <div class="menyL">
                <div> <p class="paragraphMail"><b>MAIL</b></p>
                      <p class="paragraphLogin">ELLER</p>
                      <p onclick="model.app.currentPage = 'LoginPhone'; updateView()" class="Phone">TELEFON</p>
                </div>

                <div  class="usernamePosition">${mail()}</div>
                <div  class="passwordPosition">${password()}</div>
                <div  class="loginPosition"> <button class="loginButton" onclick="DoThisMailPersonExist(); model.account.password = ''">Logg inn</button></div>
                <div> <button onclick="alert('1202 - Denne funksjonen fungerer ikke')" class="forgotPasswordButton">Glemt passord?</button></div>
                <div> <p class="paragraphLogin"></p></div>
                <div> <button class="createUserButton" onclick="model.app.currentPage = 'createNewAccount'; updateView()">Lag ny bruker</button></div>
            </div>
        </div>
        </div>
        
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL"></div>
</div>
`

    return html;
}

// ------------------------- Login Phone ---------------------------

function updateViewLoginWithPhone(){
    html = /*html*/`
    <div class="headerL">${Header()}</div>
    
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi"><button class="to-back-btn" onclick="model.app.currentPage='FrontPage';updateView()">Tilbake</button></li>
                <li class="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
            <ul>
        </div>
    </div>   

    <div class="loginPage">

        <div class="menyL">
            <div><h2 class="h2Login">Logg inn</h2></div>
            <div>
                <div><p onclick="model.app.currentPage = 'LoginMail'; updateView()"  class="Phone">MAIL</p>
                <p class="paragraphLogin">ELLER</p>
                <p class="paragraphMail"><b>TELEFON</b></p></div>
                <div class="usernamePosition">${phone()}</div>
                <div class="passwordPosition">${password()}</div>
                <div class="loginButtonPosition"><button  class="loginButton" onclick="DoThisPhonePersonExist(); model.account.password = ''">Logg inn</button></div>
                <div><button  onclick="alert('1202 - Denne funksjonen fungerer ikke')" class="forgotPasswordButton">Glemt passord?</button></div>
                <div><p class="paragraphLogin"></<p></div>
                <div><button class="createUserButton" onclick="model.app.currentPage = 'createNewAccount'; updateView()">Lag ny bruker</button></div>
            </div>
        </div>
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL"></div>
    </div>`
    return html;

}
// ------------------------- Create Account ----------------------------
function updateViewCreateAccount(){
    html =/*hmtl*/ `
    <div class="headerL">${Header()}</div>

    <div class="liteFelt">
        <ul>
            <li class="liteFeltLi"><button class="to-back-btn" onclick="model.app.currentPage = 'LoginMail';updateView()">Tilbake</button></li>
            <li class="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
        </ul> 
    </div>
    
<div class="loginPage">

    <div class="menyL">
        <div><h2 class="h2Login">Opprett ny bruker</h2></div>
        <div>
            <div class="usernamePosition">${firstName()}        </div>
            <div class="usernamePosition">${lastName()}         </div>
            <div class="usernamePosition">${newMail()}          </div>
            <div class="usernamePosition">${newPhone()}         </div>
            <div class="passwordPosition">${newPassword()}      </div>
            <p class="paragraphLogin">Bekreft passord:</p>
            <div class="passwordPosition">${passwordCheck()} </div>
            <div class="loginButtonPosition"><button class="loginButton" onclick="model.app.currentPage = 'viewNewAccount';checkNewAccountInformation()">Fortsett</button> </div>
            <br>
            <div class="paragraphLogin">Har du brukerkonto?</div>
            <div class="loginButtonPosition"><button class="loginButton" onclick="model.app.currentPage = 'LoginMail';updateView()">Logg inn</div>
        </div>
    </div>
    <div class="innholdL"></div>
    <div class="innhold1L"></div>
    <div class="footerL"></div>
</div>`
return html;
}

// ------------------------- Account Information ----------------------------
function updateViewNewAccount(){
    html =/*hmtl*/ `
    <div class="loginPage">
    <div class="headerL">${Header()}</div>
    <div  class="smalLinje">
        <ul>
            <li class="backLogin"><button class="ViewNewAccountButton" onclick="model.app.currentPage = 'FrontPage';updateView()">Til forsiden</button></li>
            <li class="backLogin"><button class="ViewNewAccountButton" onclick="model.app.currentPage = 'createNewAccount';updateView()">Tilbake</button></li>
        </ul> 
    </div>
    <div class="menyL">
        <div><h2 class="h2Login">Konto informasjon</h2></div>
        <div>
            <div class="usernamePosition"> Fornavn:<br><b>${model.account.newFirstName}</b>    </div>
            <div class="usernamePosition"> Etternavn:<br><b> ${model.account.newLastName}</b>     </div>
            <div class="usernamePosition"> E-post:<br><b>${model.account.createNewEmail}</b>          </div>
            <div class="usernamePosition"> Telefonnummer:<br><b>${model.account.createNewPhoneNumber}</b>        </div>
            <div class="passwordPosition"> Passord:<br><b>${model.account.createNewPassword}</b>      </div>
            <div><button class="loginButton" onclick="model.app.currentPage='FrontPage'; addNewInfoToModel();">Lag ny bruker og gå til innlogging</button> </div>
        </div>
    </div>
    <div class="innholdL"></div>
    <div class="innhold1L"></div>
    <div class="footerL"></div>
</div>`
return html;
}

function updateViewAccountInfo(){
    html = `
    <div class="headerL">${Header()}</div>
    
    
<div class="liteFelt">
    <ul>
        <li class ="liteFeltLi"><button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button> </li>
        <li class ="liteFeltLi1"><button class="btn-cart-navigation" onclick="model.app.currentPage = 'loginMail';"logOut()">Logg ut</button> </li> <<<<TOMMY SJEKK HER>>>>>
        <li class ="liteFeltLi1"><button class="to-cart-btn" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
    <ul>
</div>

<div class="accountInfoPage">

        <div class="innholdP0"></div>
        <div class="innholdP1">${accountInfo()}</div>
        <div class="innholdP2"></div>
        <div class="innholdP3">${model.app.showInfoForAccount}</div> 
        <div class="innholdP4"></div>
        
</div>
    `
    return html;
}