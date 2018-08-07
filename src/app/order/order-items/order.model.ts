class Order {
  constructor(
    public address     :string,
    public numero      :number,
    public complemento :string,
    public payOption   :string,
    public orderItem   :OrderItem[] = [],
    public id?         :string
  ){}
}

class OrderItem {
  constructor(public qtd:number, public menuId:string){
  }
}

export {Order, OrderItem}
