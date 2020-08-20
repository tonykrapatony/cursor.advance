const waitTime = 50;

function getRandomChines(length) {
    return new Promise((resolve) => {
        let answer = "";
        let a = 0;
        let numberForChar = parseInt(Date.now().toString().slice(-5));
//        for (let a=0; a<length; a++){
//            numberForChar += length;
//            answer += String.fromCharCode(numberForChar);
//        }
        while (a < length) {
            numberForChar += waitTime;
            answer += String.fromCharCode(numberForChar);
            a++;
        }
        setTimeout(() =>
            resolve(console.log(answer))
        , length * waitTime);
    });
};

getRandomChines(4);