class Student{

    constructor(sID,sNAME){
        this.id=sID;
        this.name=sNAME;
        this.school="RSM High School";
    }

}

const Student1=new Student(12,"suporna\n");
const Student2=new Student(13,"rohin");
console.log(Student1.name,Student2.id);