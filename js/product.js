class Product {
    id;
    name;
    idCategory;
    price;
    status;

    constructor(id, name, idCategory, price, status) {
        this.id = id;
        this.name = name;
        this.idCategory = idCategory;
        this.price = price;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getIdCategory() {
        return this.idCategory;
    }

    setIdCategory(idCategory) {
        this.idCategory = idCategory;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}

let arrayProduct = new Array();

arrayProduct.push(new Product(1, "Gà Quay", 1, 10000, true));
arrayProduct.push(new Product(2, "Lợn Quay", 1, 10000, true));
arrayProduct.push(new Product(3, "Chim Quay", 1, 10000, true));
arrayProduct.push(new Product(4, "Cá Nướng", 1, 10000, true));
arrayProduct.push(new Product(5, "Thịt Ba chỉ Quay", 1, 10000, true));
arrayProduct.push(new Product(6, "Tôm nướng Quay", 1, 10000, true));
arrayProduct.push(new Product(7, "Đùi Gà", 1, 10000, true));
arrayProduct.push(new Product(8, "Đùi Vịt", 1, 10000, true));
arrayProduct.push(new Product(9, "Đùi lợn", 1, 10000, true));
arrayProduct.push(new Product(10, "CocaCola", 2, 10000, true));
arrayProduct.push(new Product(11, "Cam Ép", 2, 10000, true));
arrayProduct.push(new Product(12, "Soda", 2, 10000, true));
arrayProduct.push(new Product(13, "Vịt Quay", 1, 10000, true));

