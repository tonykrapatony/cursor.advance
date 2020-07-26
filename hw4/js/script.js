const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getRandomNumber(min, max) {
    let result = Math.floor(min + Math.random() * (max + 1 - min));
    return result;
}

function getPair(){
    let x = [];
    let y = [];    
    let pairs = [];    
    
    students.forEach(function(students){
        if(students.endsWith('на') || students.endsWith('ра')){
            y.push(students);
        } else {
            x.push(students);
        } 
    });
    for(let i = 0; i <students.length/2; i++){
        pairs.push([x[i] + ' та ' + y[i]]);
    }
    
    return pairs;
}


function pairAndSubject(n, m){
    let arr = [];
    let result = '';
    
    for(let i=0; i<themes.length; i++){
        arr.push(pairs[i] + ' - ' + themes[i]);
        result += '<p>'+arr[i]+'</p>'
    }
    return result;
}

function studentsRating(){
    let arr = [];
    let result = '';
    for(let i=0; i<students.length; i++){
        arr.push(students[i] + ' - ' + marks[i]);
        result += '<p>'+arr[i]+'</p>';
        console.log(arr);
    }
    return result;
}

function randomStudenRating(){
    let arr = [];
    let result = '';
    for(let i=0; i<themes.length; i++){
        arr.push(pairs[i]+' - '+themes[i]+' - '+getRandomNumber(1, 5));
        result += '<p>'+arr[i]+'</p>';
    }
    return result;
}

document.querySelector('.first').innerHTML = getPair();

const pairs = getPair();

document.querySelector('.second').innerHTML = pairAndSubject(pairs, themes);

document.querySelector('.third').innerHTML = studentsRating();

document.querySelector('.fourth').innerHTML = randomStudenRating();