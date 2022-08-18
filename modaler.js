function createViewModal() {
    let html = '';
    html += /*html*/`<div class="modal-container">
    <div class="modal">
    ${viewCreateCategory()}
    </div>

    <div class="modalBG" onclick="closeModal()"></div>
    </div>`
    model.modal = html;
    updateView();
}
function closeModal() {
    model.modal = '';
    updateView();
}