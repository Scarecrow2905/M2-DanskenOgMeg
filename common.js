// ------------ oversikrift --------------
function Header() {
    return `
         <h1 class="header" onclick="model.app.currentPage='FrontPage'; viewStuff(100); model.searchText = ''">Dansken og meg<h1>
         <h2 class="smallerHeader" onclick="model.app.currentPage='FrontPage'; viewStuff(100); model.searchText = ''">Vintage Skatter</h2>
         `
};

// ---------------- Søkefelt ---------------
function searchfield() {
    return `
    <div class="Searchfield"> <input class="search-field" placeholder="Søkeord" type="text" onchange="searchCatalog(this.value);model.searchText = this.value"/></div>
    `
}
function slider() {
    return `
    <div><input type="range" class="slider" value="${model.sliderValueIs}" step="1000 "min="0" max="20000" onchange="sliderValue(this.value);updateView();">

    `
}

// ------------------------ LOGIN-------------------------
function mail() {
    return `
    <div><input class="username" value="${model.account.email}" placeholder="E-post*" type="email" oninput="model.account.email = this.value"/></div>
`
}
function phone() {
    return `
    <div><input class="username" value="${model.account.phone}" placeholder="Telefon*" type="email" oninput="model.account.phone = this.value"/></div>
`
}
function password() {
    return `
    <div><input class="username" value="${model.account.password}" placeholder="Passord*" type="email" oninput="model.account.password = this.value"/></div>
`
}

// --------------------- Create New Login User -----------------------------
function newMail() {
    return `
    <div><input class="username" value="${model.account.createNewEmail}" placeholder="E-post*" type="email" oninput="model.account.createNewEmail = this.value"/></div>
`
}
function newPhone() {
    return `
    <div><input class="username" value="${model.account.createNewPhoneNumber}" placeholder="Telefonnummer*" type="tel" oninput="model.account.createNewPhoneNumber = this.value"/></div>
`
}
function newPassword() {
    return `
    <div><input class="password" value="${model.account.createNewPassword}"  placeholder="Passord*" type="password" oninput="model.account.createNewPassword = this.value"/></div>
    `
}
function passwordCheck() {
    return `
    <div><input class="password" value="${model.account.createNewPasswordCheck}" placeholder="Passord*" type="password" oninput="model.account.createNewPasswordCheck = this.value"/></div>
    `
}
function firstName() {
    return `
    <div><input class="password"  value="${model.account.newFirstName}" placeholder="Fornavn*" type="text" oninput="model.account.newFirstName = this.value"/></div>
    `
}
function lastName() {
    return `
    <div><input class="password" value="${model.account.newLastName}" placeholder="Etternavn*" type="text" oninput="model.account.newLastName = this.value"/></div>
    `
}

// Hener ut info om brukeren som er innlogget. Endrer informasjon som brukerer gjør selv.
function accountInfo() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.currentUser == model.account.users[i].id) {
            return `
            <div class="overflowAccountInfo">
                <ul>
                    <li><b>First Name:    </b>${model.account.users[i].firstName}</li>
                    <li><b> Last Name:    </b>${model.account.users[i].lastName} </li>
                    <li><b>Mail adress:   </b>${model.account.users[i].email}    </li>
                    <li><b>Your Password: </b>${model.account.users[i].password} </li>
                </ul>
            </div>
            <br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'editPaymentInfo'      ;showDetailedAccountInformation()">Endre betalingsinformasjon</button><br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'editFirstAndLastname' ;showDetailedAccountInformation()">Endre fornavn/Etternavn</button><br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'editMail'             ;showDetailedAccountInformation()">Endre e-post adresse</button><br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'editPassword'         ;showDetailedAccountInformation()">Endre passord</button><br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'seeOrder'             ;showDetailedAccountInformation()">Ordrehistorikk</button><br><hr>
            <button class="account-btn" onclick="model.app.whatInfoIsShowed = 'seeReceipts'          ;showDetailedAccountInformation()">Dine kvitteringer</button><hr>
        `
        }
    }
}
function showDetailedAccountInformation() {//ShowAccountInfo
    for (let i = 0; i < model.account.users.length; i++) {
        if(model.app.currentUser == model.account.users[i].id)
        if (model.app.whatInfoIsShowed == 'editPaymentInfo') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Your Card Number:     ${model.account.users[i].cardnumber}</li>
                <li>your Cardholder Name: ${model.account.users[i].cardname}</li>
                <li>New card number:      <input class="account-input" type="number" value="${model.payment.cardNumberInput}" oninput="model.payment.cardNumberInput = this.value"</li>
                <li>New card name:        <input class="account-input" type="text"   value="${model.payment.cardUsersName}"   oninput="model.payment.cardUsersName = this.value"</li>
                <li><button class="account-btn-right" onclick="UpdateChange(${i})">Lagre endringer</button></li>
                <li><button class="account-btn-right" onclick="deleteCardInformation(${i})">Slett informasjon</button></li>

            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editFirstAndLastname') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Your first name: ${model.account.users[i].firstName}</li>
                <li>your last name:  ${model.account.users[i].lastName}</li>
                <li>New first name:  <input class="account-input" type="text" value="${model.account.newFirstName}" oninput="model.account.newFirstName = this.value"</li>
                <li>New last name:   <input class="account-input" type="text" value="${model.account.newLastName}"  oninput="model.account.newLastName = this.value"</li>
                <li><button class="account-btn-right" onclick="UpdateChange(${i})">Lagre endringer</button></li>


            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editMail') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Current mail: ${model.account.users[i].email}</li>
                <li>New mail: <input class="account-input" type="text" value="${model.account.createNewEmail}" oninput="model.account.createNewEmail = this.value"</li>
                <li><button class="account-btn-right" onclick="UpdateChange(${i})">Lagre endringer</button></li>

            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editPassword') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Your password: ${model.account.users[i].password}</li>
                <li>New Password:         <input class="account-input" type="text" value="${model.account.createNewPassword}"      oninput="model.account.createNewPassword = this.value"</li>
                <li>New Password (again): <input class="account-input" type="text" value="${model.account.createNewPasswordCheck}" oninput="model.account.createNewPasswordCheck = this.value"</li>

                <li><button class="account-btn-right" onclick="UpdateChange(${i})">Lagre endringer</button></li>
            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'seeOrder') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Your order(s):  ${model.app.showAccountOrders}</li>
            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'seeReceipts') {
            model.app.showInfoForAccount = `
            <ul>
                <li>Your receipt(s):  ${model.app.showAccountReceipts}</li>
            </ul>`
        }
    }
    updateView();
}













