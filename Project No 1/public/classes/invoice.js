class Invoice {
    constructor(client, amount, detail) {
        this.client = client;
        this.amount = amount;
        this.detail = detail;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}
export default Invoice;
