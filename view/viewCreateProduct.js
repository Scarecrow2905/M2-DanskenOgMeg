


let test = '';
function viewCreateProduct() {
    let html = /*html*/
        `

<div class="header">${Header()}</div>

    <div class="cart-navigation">
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    </div>


    <div class="createProduct-wrapper">
        <input class="create-Product" id="c.title" onchange="model.createItems.title = this.value" value="${model.createItems.title}"      placeholder="Produkt navn" type="text"> <br>

        <input class="create-Product" id="c.price" onchange="model.createItems.price = this.value" value="${model.createItems.price}"      placeholder="Pris" type="number"> <br>

        <input class="create-Product" id="c.img"onchange="model.createItems.img = this.value"    value="${model.createItems.img}"     placeholder="bilde" type="file"> <br>

        <input class="create-Product" id="c.stock" onchange="model.createItems.stock = this.value"    value="${model.createItems.stock}"   placeholder="Antall" type="number"> <br>

        <input class="create-Product"  id="c.description"onchange="model.createItems.description = this.value" value="${model.createItems.description}"placeholder="Beskrivelse" type="text"> <br>

        <input class="create-Product" id="c.measures" onchange="model.createItems.measures = this.value" value="${model.createItems.measures}"   placeholder="Mål" type="text"> <br>

        <input class="create-Product" id="c.country" onchange="model.createItems.country = this.value"   value="${model.createItems.country}"  placeholder="Land" type="text"> <br>

        <input class="create-Product" id="c.year" onchange="model.createItems.year = this.value"    value="${model.createItems.year}"    placeholder="Års-tall"type="text"> <br>
        ${viewCreateCategories()} <br>
        ${test} <br>
        
        <div>Farge <input class="createProduct-input-color" onchange="model.createItems.color = this.value" value="${model.createItems.color}" placeholder="Produkt Farge"type="color"></div>
        

        <button onclick='createProduct();'>Legg til produkt</button>

    `

    // html += "<button onclick='createProduct()'>"
    return html;

    //
}

function viewCreateCategories() {

    html = '';


    html = /*html*/
        ` 
                <select name="kategori" id="m.cat" class="create-Product-kategori-input" onchange="model.createItems.category = this.value; viewCreateSubCategories(this.value)">
                     <option selected disabled hidden>Velg Kategori..</option> 
                    
        `

    for (let i = 0; i < model.categories.length; i++) {

        // var mainCategory = model.categories[i];

        if (model.createItems.category == model.categories[i].name) {
            html += /*html*/
                `<option selected value="${model.categories[i].name}">${model.categories[i].name}</option>`
            // Denne skal poppe opp som verdi
        }
        else {
            html += /*html*/
                `<option value="${model.categories[i].name}">${model.categories[i].name}</option>`
            // Denne skal poppe opp som verdi
        }
    }

    html += `</select>`
    // model.createItems.category = mainCategory.name;


    // console.log(mainCategory);
    return html;



}
//Når du velger en Hovedkategori så skal kategorien være den kategorieen.

// var temp = 0;
// model.createItems.id = 1000;
// for (let i = 0; i < 1000; i++) {
//     temp = id;
//     id = temp + 1;

// }
// Denne viser underkategori basert på  hovedkategorien viewCreateCategories
function viewCreateSubCategories(mainCategory) {

    let html = '';

    html =/*html*/ `<select  name="subCategory"  class="create-Product-kategori-input" onchange="model.createItems.subCategory = this.value; console.log(this.value + 'Hei')">
    <option selected disabled hidden>Velg underkategori.</option> 
    `

    for (let i = 0; i < model.categories.length; i++) {
        if (model.categories[i].name == mainCategory) {



            for (let j = 0; j < model.categories[i].sub.length; j++) {
                html += /*html*/ `<option value="${model.categories[i].sub[j].categoriName}">${model.categories[i].sub[j].categoriName}</option>`
            }
        }






    }
    html += `</select>`
    test = html;
    updateView();

}






// Ikke tenk på det. ~ thorbjoern

// let apiverdi = {
//     values: [{
//         title: 'Sofa';
//         price: 9999;
//         stock: 2;
//         category: 'Stue';
//         id: 111;
//         parentId: 11;
//         subCategory: 'Sofa';
//         img: 'TempBilder/1Stue/1Sofa/vintagesofapattern.jpeg';
//         description: 'Godt brukt; men fortsatt en flott sofa. Stått lagret i bod siden 2005.';
//         measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm';
//         color: ['Oker Gul'];
//         country: 'Danmark';
//         year: '2006';
//     };];
// };

// async function getdata() {
//     let response = await fetch("https://pokeapi.co/api/v2")
//     let data = await response.json()

//     let response2 = await fetch(data.ability)
//     let data2 = await response2.json()
//     console.log(data2)
//     let response3 = await fetch(data2.results[17].url)
//     let data3 = await response3.json()
//     console.log(data3)
// }

// function addListOfProducts(apiVerdi) {

//     for (let i = 0; i < newProducts.length; i++) {
//         model.products.push(newProducts[i])
//     }
// }



