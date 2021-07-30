class Order{
    id;
    idUser;
    idTable;
    total;
    datecreated;
    status;
    constructor(id,idUser,idTable,total,datecreated,status) {
        this.id = id;
        this.idUser = idUser;
        this.idTable = idTable;
        this.total = total;
        this.datecreated = datecreated;
        this.status = status;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getIdUser(){
        return this.idUser;
    }
    setIdUser(idUser){
        this.idUser = idUser;
    }
    getIdTable(){
        return this.idTable;
    }
    setIdTable(idTable){
        this.idTable = idTable;
    }
    getTotal(){
        return this.total;
    }
    setTotal(total){
        this.total = total;
    }
    getDatecreated(){
        return this.datecreated;
    }
    setDatecreated(datecreated){
        this.datecreated = datecreated;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
}
let arrayOrder = new Array();
    arrayOrder.push(new Order(1,1,1,1000000,Date.now(),false));

