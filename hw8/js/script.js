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
            console.log(this._marks);
        } else {
            console.log(null);
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
        console.log(averageMark/this._marks.length)
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
ostap.marks;
ostap.marks = 5;
ostap.marks;
ostap.getAverageMark();
ostap.dismiss();
ostap.marks;
ostap.recover();
ostap.marks;

class newStudent extends Student {
    constructor( course,university, fullName){
        super(course,university, fullName);
        (setInterval(() =>this.scholarship, 3000));
    }
    get scholarship(){
        if(this.getAverageMark() < 4) {
            console.log("У вас нема стипендії");
        } else {
            console.log('Ви отримали 1400 грн. стипендії');
        }
    }
}

const ihor = new newStudent("1 курсу","Вищої Школи Психотерапії м.Одеса","Ігор Виноградний");

ihor.getInfo();
ihor.marks;
ihor.marks = 3;
ihor.marks;
ihor.getAverageMark();
ihor.dismiss()
ihor.marks;
ihor.recover();
ihor.marks;