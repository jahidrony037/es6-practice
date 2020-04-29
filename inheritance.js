class Parent{
    constructor(){
        this.Fathername="Schwerznegger"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;

    }
    getFullname(){
        return this.name +" "+ this.Fathername;
        
    }
}

const baby=new Child("Arnold");
const baby2=new Child("Tom");
console.log(baby.getFullname());
console.log(baby2.getFullname());