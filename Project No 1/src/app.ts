import Invoice from './classes/invoice.js'

const invoices: Invoice[] = [];
let form = document.querySelector('.new-item-form') as HTMLFormElement
form.addEventListener('submit' , (e:Event) => {
  e.preventDefault()
  if(form.type.value === "invoice"){
    const client = form.client.value;
    const amount = form.amount.value;
    const detail = form.detail.value
    const newInvoice = new Invoice(client, amount, detail)
    invoices.push(newInvoice)
  }
})