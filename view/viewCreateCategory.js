function viewCreateCategory() {
    let html = '';
    // for (let i = 0; i < model.createCategory.length; i++) {
    const category = model.createCategory;

    html = /*html*/
        `
        <input id="CreateCat" onchange="model.createCategory.name = this.value" value="${model.createCategory.name}" placeholder="Hovedkategori" type= "text"><br>
        
        

        ${model.ekstraInput}
        `


    html += `<button onclick="FlerUKategorier()">+</button><br>
            <button onclick="nyKategori()">Lagre</button>`
    // }
    return html;
}
function FlerUKategorier() {
    let html = '';
    for (let i = 0; i < model.createCategory.sub.length; i++) {
        html += /*html*/

            `
    <input class="" id="" onchange="model.createCategory.sub[${i}].categoriName = this.value" 
    value="${model.createCategory.sub[i].categoriName}" placeholder="Underkategori" type= "text"><br>

    `

    }


    model.ekstraInput += html;
    updateView();
}
function nyKategori() {
    let object = {};
    object.name = model.createCategory.name;
    object.id = model.categoryID;
    object.sub = [];
    for (let i = 0; i < model.createCategory.sub.length; i++) {
        EnNyUnderKategori(object, i + 1);


    }

    model.categories.push(object);
    model.categoryID++
    //Mulig den må endre side (changePage)
    updateView();
}

function EnNyUnderKategori(object, i) {
    let SubCat = {};
    SubCat.categoriName = '';
    SubCat.id = (model.categoryID * 10) + i;
    SubCat.parentId = model.categoryID;
    object.sub.push(SubCat);
}


