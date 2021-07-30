class User{
    id;
    name;
    gender;
    birthDay;
    position;
    password;
    constructor(id,name,gender,birthDay,position,password) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthDay = birthDay;
        this.position = position;
        this.password = password;
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
    getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }
    getBirthDay(){
        return this.birthDay;
    }
    setBirthDay(birthDay){
        this.birthDay = birthDay;
    }
    getPosition(){
        return this.position;
    }
    setPosition(position){
        this.position = position;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password = password;
    }
}
let arrayUser = new Array();
arrayUser.push(new User(100698,"Tạ văn tấn",true,"10/06/1998","admin","123456"))
for (let i = 1; i < 20; i++) {
    arrayUser.push(new User(i,"Tạ văn tấn",true,"10/06/1998","Nhân viên","123456"));
}