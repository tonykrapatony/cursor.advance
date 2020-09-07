//basic
console.log("basic");
console.log("");

class Student {
    
    constructor( course, university, fullName){
        this.university = university;
        this.course = course;
        this.fullName= fullName;
        this._marks=[4,5,5,4];
        this.student = true;
    }
    getInfo() {
        console.log(`"Студент ${this.course}, ${this.university}, ${this.fullName}"`)
    }    
    
    get marks() {
        if(this.student) {
            return this._marks;
        } else {
            return null;
        }
    }
    set marks(value) {
        if(this.student) {
            return this._marks.push(value);
        } else{
            console.log(null);
        }
    }
    
    getAverageMark() {
        let averageMark;
        averageMark = this._marks.reduce((acc,mark) => acc+= mark);
//        console.log(averageMark/this._marks.length);
        return averageMark/this._marks.length;
    }
    
    dismiss(){
        return this.student = false;
    }
    recover(){
        return this.student = true;
    }
}

const ostap = new Student("1 курсу","Вищої Школи Психотерапії м.Одеса","Остап  Бендер");

ostap.getInfo();
console.log(ostap.marks);
ostap.marks = 5;
console.log(ostap.marks);
console.log(ostap.getAverageMark());
ostap.dismiss();
ostap.recover();
console.log(ostap.marks);

console.log("");
console.log("advanced");
console.log("");
//advanced

class newStudent extends Student {
    constructor( course,university, fullName){
        super(course,university, fullName);
        (setInterval(() =>this.scholarship, 3000));
    }
    get scholarship(){
        if(this.getAverageMark() >= 4 && this.student) {
            console.log("Ви отримали 1400 грн. стипендії");
        } else {
            console.log("У вас нема стипендії");
        }
    }
}

const ihor = new newStudent("1 курсу","Вищої Школи Психотерапії м.Одеса","Ігор Виноградний");

ihor.getInfo();
console.log(ihor.marks);
ihor.marks = 4;
console.log(ihor.marks);
console.log(ostap.getAverageMark());
ihor.dismiss()
ihor.recover();
console.log(ihor.marks);

