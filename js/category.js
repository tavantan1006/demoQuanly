class Category{
    id;
    name;
    status;
    constructor(id,name,status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }

}
let arrayCategory = new Array();
arrayCategory.push(new Category(1,"Thức ăn",true));
arrayCategory.push(new Category(2,"Đồ uống",true));

