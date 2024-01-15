import Invoice from './classes/invoice.js';
const invoices = [];
let form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.type.value === "invoice") {
        const client = form.client.value;
        const amount = form.amount.value;
        const detail = form.detail.value;
        const newInvoice = new Invoice(client, amount, detail);
        invoices.push(newInvoice);
    }
});
