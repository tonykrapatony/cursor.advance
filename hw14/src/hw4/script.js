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

export function infoOstapExp(){
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
}
