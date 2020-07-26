// fn1
function getMaxDigit(number){
    let max = 0;
    for (let i=0; i<number.length; i++){
        if (max < number[i]){
            max = number[i]
        }
    }
    return max;
}

//fn2

function toDegree(basis, degree){
    let result = 1;
    let toDegree = 1;
    if (degree >= 0) {
        for (let i=0; i<+degree; i++){
            toDegree = basis * toDegree;
            result = toDegree;
        }
    } else {
        for (let i=0; i<-degree; i++){
            toDegree = basis * toDegree;
            result = '1/'+toDegree;
        }
    }
    return result;
}

//fn3
    function formatName(name){
        let format = '';
        
        format = name[0].toUpperCase() + name.slice(1).toLowerCase(); 
        
        return format;
    }


//fn4
    function formatName(number){
        let result = number - ((number*19.5)/100);
        return result;
    }

//fn5
    function getRandomNumber(min, max) {
        let result;
        if (min<max) {
            result = Math.floor(min + Math.random() * (max + 1 - min));
        } else {
            result = Math.floor(max + Math.random() * (min + 1 - max));
        }
        return result;
    }




//fn6
function countLetter(startWord, startLetter) {
    let result = 0;
    let word = '';
    let letter = startLetter.toLowerCase();
    for (let i=0; i<startWord.length; i++){
        word += startWord[i].toLowerCase();
    }
    for (let i=0; i<word.length; i++){
        if (word[i] === letter){
            result++;
        }
    }
    return result;
}



//fn7
    function convertCurrency(sum) {
        let result = '';
        if (sum.slice(-1) === '$'){
            result = (parseInt(sum) * 27).toFixed(2) + '$';
            
        } else if (sum.slice(-3).toLowerCase() === 'uah') {
            result = ((parseInt(sum))/ 27).toFixed(2)  + '$';
            console.log(sum==='');
        } else {
            result = 'Введіть $ або uah';
            
        }
     
        return result;
    }


//fn8
function getRandomPassword(n) {
    let password = '';
        
    if (n <= 0){
        for (let i=0; i<8; i++){
            randomNum = Math.ceil((Math.random() * (9 - 0) + 0));
            password += randomNum;
        }
    } else {        
        for (let i=0; i<n; i++){
            randomNum = Math.ceil((Math.random() * (9 - 0) + 0));
            password += randomNum;
        }
    }
    return password;
}


//fn9
function deleteLetter(word, letter) {
    const newWord = word.toLowerCase();
    const newLetter = letter.toLowerCase();
    let result = '';
    
    for(let i=0; i<word.length; i++){
        if (newWord[i] !== newLetter){
            result += word[i];
        }
    }
    
    return result;
}

//fn10
function isPalyndrom(word) {
    const newWord = word.replace(/\s+/g, '').toLowerCase();
    const reversWord = newWord.split('').reverse().join('').toLowerCase();
    let result = '';
    
    if (newWord === reversWord){
        result = 'Так';
    } else {
        result = 'Ні';
    } 
    
    return result;
}

//fn11
function find_unique_characters(str) {
    let unique = '';
    const newStr = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (newStr.lastIndexOf(newStr[i]) === newStr.indexOf(newStr[i])) {
            unique += str[i];
        }
    }
    return unique;
}



document.querySelector('.func1 button').addEventListener('click', function(){
    
    const number = document.querySelector('.number').value; 
    
    document.querySelector('.max').innerHTML = 'Найбільша цифра = ' + getMaxDigit(number);
})


document.querySelector('.func2 button').addEventListener('click', function(){
    const basis = document.querySelector('.basis').value; 
    const degree = document.querySelector('.degree').value; 
    
    document.querySelector('.toDegree').innerHTML = ' = ' + toDegree(basis, degree);
    
})

document.querySelector('.func3 button').addEventListener('click', function(){
    const name = document.querySelector('.name').value; 

    document.querySelector('.formatName').innerHTML = ' = ' + formatName(name);
    
})

document.querySelector('.func4 button').addEventListener('click', function(){
    const number = document.querySelector('.func4 input').value;

    document.querySelector('.func4 span').innerHTML = ' = ' + formatName(number);
})

document.querySelector('.func5 button').addEventListener('click', function(){
    const min = Number(document.querySelector('.func5 .min').value); 
    const max = Number(document.querySelector('.func5 .max').value); 
    
    document.querySelector('.func5 span').innerHTML = ' = ' + getRandomNumber(min, max);
})

document.querySelector('.func6 button').addEventListener('click', function(){
    const startWord = document.querySelector('.word').value; 
    const startLetter = document.querySelector('.letter').value; 
    
    document.querySelector('.func6 span').innerHTML = ' = ' + countLetter(startWord, startLetter);
})

document.querySelector('.func7 button').addEventListener('click', function(){
    const sum = document.querySelector('.func7 input').value; 
    
    document.querySelector('.func7 span').innerHTML = ' = ' + convertCurrency(sum);
})

document.querySelector('.func8 button').addEventListener('click', function(){
    const n = document.querySelector('.func8 input').value; 
    
    document.querySelector('.func8 span').innerHTML = ' = ' + getRandomPassword(n);

})

document.querySelector('.func9 button').addEventListener('click', function(){
    const word = document.querySelector('.func9 .word').value; 
    const letter = document.querySelector('.func9 .letter').value; 
    
    document.querySelector('.func9 span').innerHTML = ' = ' + deleteLetter(word, letter);

})

document.querySelector('.func10 button').addEventListener('click', function(){
    const word = document.querySelector('.func10 .word').value; 
    
    document.querySelector('.func10 span').innerHTML = ' = ' + isPalyndrom(word);
})

document.querySelector('.func11 button').addEventListener('click', function(){
    const str = document.querySelector('.sentence').value; 
    
    
    document.querySelector('.func11 span').innerHTML = ' = ' + find_unique_characters(str);
})