const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPair(){
    let x = [];
    let y = [];    
    let pairs = [];    
    
    students.forEach(function(students){
        const regex = /\на|ра+$/;
        if(students.match(regex)){
            y.push(students);
        } else {
            x.push(students);
        } 
    });
    for(let i = 0; i < students.length/2; i++){
        pairs[i] = new Array(x[i], y[i]);
    }
    
    return pairs;
}

console.log(getPair());