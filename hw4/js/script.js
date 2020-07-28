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
        pairs.push(' '+[boys[i] + ' та ' + girls[i]]);
    }
    
    return pairs;
}


function pairAndSubject(n, m){
    const arr = [];
    
    for(let i=0; i<themes.length; i++){
        arr.push(pairs[i] + ' - ' + themes[i]+' ');
    }
    return arr;
}

function studentsRating(){
    const arr = [];
    for(let i=0; i<students.length; i++){
        arr.push(students[i] + ' - ' + marks[i]+' ');
    }
    return arr;
}

function randomStudenRating(){
    const arr = [];
    for(let i=0; i<themes.length; i++){
        arr.push(pairs[i]+' - '+themes[i]+' - '+getRandomNumber(1, 5)+' ');
    }
    return arr;
}

document.querySelector('.first').innerHTML = getPair();

const pairs = getPair();

document.querySelector('.second').innerHTML = pairAndSubject(pairs, themes);

document.querySelector('.third').innerHTML = '<p>'+studentsRating()+'</p>';

document.querySelector('.fourth').innerHTML = randomStudenRating();