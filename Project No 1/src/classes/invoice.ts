class Invoice {
    private client: string;
    private amount: number;
    private detail: string;
  
    constructor(client: string, amount: number, detail: string){
      this.client = client;
      this.amount = amount;
      this.detail = detail;
    }
  
    format(){
      return `${this.client} owes $${this.amount} for ${this.detail}`
    }
}

export default Invoice