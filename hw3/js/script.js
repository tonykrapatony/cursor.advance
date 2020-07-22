document.getElementById("getMax").addEventListener('click', function(){
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

document.getElementById("calc").addEventListener('click', function(){
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

document.getElementById("format").addEventListener('click', function(){
    const name = document.querySelector('.name').value; 
    function formatName(name){
        let format = '';
        
        format = name[0].toUpperCase() + name.slice(1).toLowerCase(); 
        
        return document.querySelector('.formatName').innerHTML = ' = ' + format;
    }

    formatName(name);
})



