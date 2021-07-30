class Table {
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
let arrayTable = new Array();
for (let i = 1; i <= 20; i++) {
    arrayTable.push(new Table(i,"Bàn " + i,false));
}