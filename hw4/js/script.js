const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getRandomNumber(min, max) {
    const result = Math.floor(min + Math.random() * (max + 1 - min));
    return result;
}

function getPair(){
    const boys = [];
    const girls = [];    
    const pairs = [];    
    
    students.forEach(function(students){
        if(students.endsWith('на') || students.endsWith('ра')){
            girls.push(students);
        } else {
            boys.push(students);
        } 
    });
    for(let i = 0; i <students.length/2; i++){
        pairs.push([boys[i], girls[i]]);
    }
    
    return pairs;
}

console.log(getPair());

function pairAndSubject(n, m){
    const arr = [];
    
    for(let i=0; i<themes.length; i++){
        arr.push([getPair()[i],themes[i]]);
    }
    
    return arr;
}

console.log(pairAndSubject(getPair(), themes));

function studentsRating(){
    const arr = [];
    for(let i=0; i<students.length; i++){
        arr.push([students[i], marks[i]]);
    }
    return arr;
}

console.log(studentsRating());

function randomStudenRating(){
    const arr = [];
    for(let i=0; i<themes.length; i++){
        arr.push([getPair()[i], themes[i], getRandomNumber(1, 5)+' ']);
    }
    console.log(arr);
    return arr;
}

console.log(studentsRating());

document.querySelector('.first').innerHTML = getPair();

document.querySelector('.second').innerHTML = pairAndSubject(getPair(), themes);

document.querySelector('.third').innerHTML = '<p>'+studentsRating()+'</p>';

document.querySelector('.fourth').innerHTML = randomStudenRating();