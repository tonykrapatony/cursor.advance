// fn1
document.querySelector('.func1 button').addEventListener('click', function(){
    const number = document.querySelector('.number').value; 
    function getMaxDigit(number){
        let max = 0;
        for (let i=0; i<number.length; i++){
            if (max < number[i]){
                max = number[i]
            }
        }
        return document.querySelector('.max').innerHTML = 'Найбільша цифра = ' + max;
    }

    getMaxDigit(number);
})
//fn2
document.querySelector('.func2 button').addEventListener('click', function(){
    const basis = document.querySelector('.basis').value; 
    const degree = document.querySelector('.degree').value; 
    function toDegree(basis, degree){
        let resuslt = 0;
        let toDegree = 1;
        if (degree >= 0) {
            for (let i=0; i<+degree; i++){
                toDegree = basis * toDegree;
                resuslt = toDegree;
            }
        } else {
            for (let i=0; i<+(-degree); i++){
                toDegree = basis * toDegree;
                resuslt = '1/'+toDegree;
            }
        }
        return document.querySelector('.toDegree').innerHTML = ' = ' + resuslt;
    }

    toDegree(basis, degree);
})
//fn3
document.querySelector('.func3 button').addEventListener('click', function(){
    const name = document.querySelector('.name').value; 
    function formatName(name){
        let format = '';
        
        format = name[0].toUpperCase() + name.slice(1).toLowerCase(); 
        
        return document.querySelector('.formatName').innerHTML = ' = ' + format;
    }

    formatName(name);
})
//fn4
document.querySelector('.func4 button').addEventListener('click', function(){
    const number = document.querySelector('.func4 input').value;
    
    function formatName(number){
        let result = number - ((number*19.5)/100);
        return document.querySelector('.func4 span').innerHTML = ' = ' + result;
    }

    formatName(number);
})
//fn5
document.querySelector('.func5 button').addEventListener('click', function(){
    const min = document.querySelector('.func5 .min').value; 
    const max = document.querySelector('.func5 .max').value; 
    
    
    function getRandomNumber(min, max) {
        let result = Math.ceil((Math.random() * (max - min) + min));
        return document.querySelector('.func5 span').innerHTML = ' = ' + result;
    }
    
    getRandomNumber(min, max);
})
//fn6
document.querySelector('.func6 button').addEventListener('click', function(){
    const startWord = document.querySelector('.word').value; 
    const startLetter = document.querySelector('.letter').value; 
    
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
        
        return document.querySelector('.func6 span').innerHTML = ' = ' + result;
    }
    
    countLetter(startWord, startLetter);
})
//fn7
document.querySelector('.func8 button').addEventListener('click', function(){
    const n = document.querySelector('.func8 input').value; 
    
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
        
        return document.querySelector('.func8 span').innerHTML = ' = ' + password;
    }
    
    getRandomPassword(n);

})
