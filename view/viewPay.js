function updateViewPay(){
    
    // for (let i = 0; i < model.account.users.length; i++) {
    //     if (model.app.currentUser == model.account.users[i].id){
            
html = /*html*/ `
<div class="pay-page">
<div class="container">
<form action="">
<button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake til forside</button>
<button class="btn-cart-navigation" onclick="model.app.currentPage = 'Cart';updateView()">Handlekurv</button>
            <div class="inputBox">
                <span>Kortnummer</span>
                <input type="text" value="${model.app.viewPayUserCard}" onchange="model.payment.cardNumberInput = this.value" maxlength="16" class="card-number-input">
            </div>

            <div class="inputBox">
            <span>Navn på kortholder</span>
            <input type="text" placeholder="Ola Nordmann" value="${model.app.viewPayUserName}" model.payment.cardUsersName = this.value" class="card-holder-input">
            

            <div class="flexbox">
            <div class="inputBox">
                <span>Utløpsmåned</span>
                <select name="" id="" class="month-input">
                    <option value="month" selected disabled>Måned</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            
            </div>

            <div class="inputBox">
                <span>Utløpsår</span>
                <select name="" id="" class="year-input">
                    <option value="year" selected disabled>År</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            

            <div class="inputbox">
            <span>cvv</span>
            <input type="text" maxlength="4" class="cvv-input">
            </div>

            <input type="submit" value="Kjøp" class="submit-btn">
        </form>
    </div>
</div>

    `
    
//     }
//     else {
//         html = /*html*/ `
// <div class="pay-page">
// <div class="container">
// <form action="">
// <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake til forside</button>
// <button class="btn-cart-navigation" onclick="model.app.currentPage = 'Cart';updateView()">Handlekurv</button>
//             <div class="inputBox">
//                 <span>Kortnummer</span>
//                 <input type="text" value="${model.payment.cardNumberInput}" onchange="model.payment.cardNumberInput = this.value" maxlength="16" class="card-number-input">
//             </div>

//             <div class="inputBox">
//             <span>Navn på kortholder</span>
//             <input type="text" placeholder="Example Examplesen" value="${model.payment.cardUsersName}" model.payment.cardUsersName = this.value" class="card-holder-input">
            

//             <div class="flexbox">
//             <div class="inputBox">
//                 <span>Utgåelse Måned</span>
//                 <select name="" id="" class="month-input">
//                     <option value="month" selected disabled>Måned</option>
//                     <option value="01">01</option>
//                     <option value="02">02</option>
//                     <option value="03">03</option>
//                     <option value="04">04</option>
//                     <option value="05">05</option>
//                     <option value="06">06</option>
//                     <option value="07">07</option>
//                     <option value="08">08</option>
//                     <option value="09">09</option>
//                     <option value="10">10</option>
//                     <option value="11">11</option>
//                     <option value="12">12</option>
//                 </select>
            
//             </div>

//             <div class="inputBox">
//                 <span>Utgåelse år</span>
//                 <select name="" id="" class="year-input">
//                     <option value="year" selected disabled>År</option>
//                     <option value="2022">2022</option>
//                     <option value="2023">2023</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                     <option value="2027">2027</option>
//                     <option value="2028">2028</option>
//                     <option value="2029">2029</option>
//                     <option value="2030">2030</option>
//                 </select>
            

//             <div class="inputbox">
//             <span>cvv</span>
//             <input type="text" maxlength="4" class="cvv-input">
//             </div>

//             <input type="submit" value="submit" class="submit-btn">
//         </form>
//     </div>
// </div>

//     `
    //}}
    return html;
    };






/*<head>
<title>Betalingsdemo</title>
<link rel="stylesheet" href="style.css">
<script
src="https://secure.transactiongateway.com/token/collect.js"
data-tokenization-key="your-key-goes-here"
data-variant="inline"
data-field-ccnumber-placeholder = ’0000 0000 0000 0000’
data-field-ccexp-placeholder = ’10 / 22’
data-field-cvv-placeholder = ‘123’
data-custom-css=‘{
"border-style" : "solid",
"border-color" : "c7c7c7",
"border-width" : "1px",
"border-radius" : "3px",
"padding" : "6px",
"font-size" : "16px",
"height" : "33px"
}’

</script>

</head>

<div class="nav">
<div class="nav-item" ><a href="#">Store</a></div>
<div class="nav-item active" aria-current="page">Checkout</div>
</div>

<div class="container">
<h1>
<span>Checkout</span>
<span>$9.99</span>
</h1>

<form action="receipt.php" method="post" id="the-form">
<div class="input input-text half-width">
<span class="input-label">Fornavn</span>
<input class="input-field" type="text" placeholder="John" name="fname" autofocus>
</div>

<div class="input" input-text half-width">
<span class="input-label">Etternavn</span>
<input class="input-field" type="text" placeholder="Smith" name="lname">
</div>

<div class="input" input-text full width">
<span class="input-label>E-post adresse</span>
<input class="input-field" type="text" placeholder="someone@example.com" name="email">
</div>

<div class="input input-text full-width">
<span class="input-label">Kortnummer</span>
<div id="ccnumber"></div>
</div>

<div class="input input-text half-width">
<span class="input-label">Utløpsdato</span>
<div id="ccexp"></div>
</div>

<div class="input input-text half-width">
<span class="input-label">CVV</span>
<div id="cvv"></div>
</div>

<input class="btn btn-mega" id="payButton" type="submit" value="Submit Payment">
</form>
</div>


RECEIPT page:
<?php>

$fname = $_POST[‘fname’];
$lname = $_POST[‘lname’];
$email = $_POST[‘email’];
$payment_token = $_POST[‘payment_token’];

$url = ‘https://secure.transactiongateway.com/api/transact.php';
$vars = "security_key=4KTHldjfkgkdlfjggldfjgk"
. "&type=sale"
. "&amount = 9.99"
. "&first_name=" . $fname
. "&last_name=" . $fname
. "&email=" . $email
. "&payment_token=" . $payment_token;

$ch = curl_init( $url );
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $vars);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POST, 1);















 <div class="pay-checkbox"> 
        <label class="container"> Kort
            <input id="card" type="checkbox" checked="checked">
            <span class="checkmark"></span>
        </label>

        <label class="container"> PayPal
            <input id="PayPal" type="checkbox">
            <span class="checkmark"></span>
        </label>

        <label class="container"> Vipps
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
    </div>

    <div class="pay-form">

        
        <div class="input input-fName">
        <span class="input-label">Fornavn</span>
        <input class="input-field" type="text" placeholder="Jon" name="fname" autofocus>
        </div>

        <div class="input input-lName">
        <span class="input-label">Etternavn</span>
        <input class="input-field" type="text" placeholder="Brun" name="lname">
        </div>

        <div class="input input-email">
        <span class="input-label>E-post adresse</span>
        <input class="input-field" type="text" placeholder="someone@example.com" name="email">
        </div>

        <div class="input input-cardNmb">
        <span class="input-label">Kortnummer</span>
        <input class="input-field" type="text" placeholder="0000 0000 0000 0000">
        <div id="ccnumber"></div>
        </div>

        <div class="input input-expiration">
        <span class="input-label">Utløpsdato</span>
        <input class="input-field" type="numbers" placeholder="10 / 12">
        <div id="ccexp"></div>
        </div>

        <div class="input input-cvv">
        <span class="input-label">CVV</span>
        <input class="input-field" type"numbers" placeholder="123">
        <div id="cvv"></div>

        
    </div>
        
        
        <button class="btn-buy" onclick="purchase()"> Kjøp</button>






        <div class="pay-main">
        <div class="pay-title"> 
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
        <div> Total ${model.shoppingCart.totalPrice},- </div>
    

    <div class="pay-form">

        
    <div class="input input-fName">
    <span class="input-label">Fornavn</span>
    <input class="input-field" type="text" placeholder="Jon" name="fname" autofocus>
    </div>

    <div class="input input-lName">
    <span class="input-label">Etternavn</span>
    <input class="input-field" type="text" placeholder="Brun" name="lname">
    </div>

    <div class="input input-email">
    <span class="input-label>E-post adresse</span>
    <input class="input-field" type="text" placeholder="someone@example.com" name="email">
    </div>

    <div class="input input-cardNmb">
    <span class="input-label">Kortnummer</span>
    <input class="input-field" type="text" placeholder="0000 0000 0000 0000">
    
    </div>

    <div class="input input-expiration">
    <span class="input-label">Utløpsdato</span>
    <input class="input-field" type="numbers" placeholder="10 / 12">
    
    </div>

    <div class="input input-cvv">
    <span class="input-label">CVV</span>
    <input class="input-field" type"numbers" placeholder="123">
    

    
    </div>
      
</div>
*/
