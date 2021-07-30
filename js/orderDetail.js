class OrderDetail{
    id;
    idOrder;
    idProduct;
    price;
    quantity;
    total;
    status;
    constructor(id,idOrder,idProduct,nameProduct,price,quantity,total,status) {
       this.id = id;
       this.idOrder = idOrder;
       this.idProduct = idProduct;
       this.nameProduct = nameProduct;
       this.price = price;
       this.quantity = quantity;
       this.total = total;
       this.status = status;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getIdOrder(){
        return this.idOrder;
    }
    setIdOrder(idOrder){
        this.idOrder = idOrder;
    }
    getIdProduct(){
        return this.idProduct;
    }
    setIdProduct(idProduct){
        this.idProduct = idProduct;
    }
    getNameProduct(){
        return this.nameProduct;
    }
    setNameProduct(nameProduct){
        this.nameProduct = nameProduct;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(quantity){
        this.quantity = quantity;
    }
    getTotal(){
        return this.total;
    }
    setTotal(total){
        this.total = total;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }

}
let arrayOrderDetail = new Array();
for (let i = 1; i <= 10; i++) {
    arrayOrderDetail.push(new OrderDetail(i,1,arrayProduct[i].id,arrayProduct[i].name,arrayProduct[i].price,10,arrayProduct[i-1].price*10,false));
}