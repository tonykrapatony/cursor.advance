const waitTime = 50;

function getRandomChines(length) {
    return new Promise((resolve) => {
        let answer = "";
        let a = 0;
        let sign = parseInt(Date.now().toString().slice(-5));
//        for (let a=0; a<length; a++){
//            numberForChar += length;
//            answer += String.fromCharCode(numberForChar);
//        }
        while (a < length) {
            sign += waitTime;
            answer += String.fromCharCode(sign);
            a++;
        }
        setTimeout(() =>
            resolve(answer)
        , length * waitTime);
    });
};

getRandomChines(4).then(res => console.log(res));

export {waitTime, getRandomChines}