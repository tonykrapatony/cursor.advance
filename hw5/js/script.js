const numbers = [-1, -32, 3, 11, 203, 7.33, 3, 5, 55, 3, 3.2]
//1
const getRandomArray = (length, min, max) =>{
    let arr = [];
    for(let a=0; a<length; a++){
        arr[a] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

console.log(getRandomArray(5, 1, 10))

//2
const getModa = (...numbers) =>{
    return numbers.filter(el => el%1 === 0)
        .sort((a,b) =>
            numbers.filter(el => el === a).length - numbers.filter(el => el === b).length)
        .pop()
}
console.log(getModa(...numbers))
//3
const getAverage = (...numbers) =>{
    let filteredNumbers = numbers.filter(el => el%1 === 0);
    return filteredNumbers.reduce((acc, cur) => acc + cur)/filteredNumbers.length
}
console.log(getAverage(...numbers))
//4
const getMedian = (...numbers) =>{
    let sortedNumbers =  numbers.filter(el => el%1 === 0).sort((a,b)=>a-b);
    let middlePos = sortedNumbers.length/2;
    if(sortedNumbers.length % 2){
        return sortedNumbers[Math.floor(middlePos)];
    }
    else{
        return (sortedNumbers[middlePos] + sortedNumbers[middlePos - 1])/2;
    }
}
console.log(getMedian(...numbers))
//5
const filterEvenNumbers = (...numbers) =>{
    return numbers.filter(el => el%1 === 0)
    .filter(el => el%2)
}
console.log(filterEvenNumbers(...numbers))
//6
const countPositiveNumbers = (...numbers) =>{
    return numbers.filter(el => el > 0).length;
}
console.log(countPositiveNumbers(...numbers));
//7
const getDividedByFive = (...numbers) =>{
    return numbers.filter(el => el%5 === 0);
}
console.log(getDividedByFive(...numbers));
//8
const replaceBadWords = (string) =>{
    let badWords = ['shit', 'fuck']
    let regExp = new RegExp(badWords.join('|'), 'gi')
    return string.split(' ')
    .map(el => el.replace(regExp, '****'))
    .join(' ');
}
console.log(replaceBadWords("Are you fucking kidding? It's bullshit!"));
//9
const divideByThree = (word) =>{
    let divinedWord = [];
    for(let i = 0; i < word.length; i=i+3){
        divinedWord.push(word.slice(i,i+3));
    }
    return divinedWord;
}
console.log(divideByThree('Commander'));
//10
const swapLetters = (word,a,b) => {
    if (a == b) {
        return (word);
    }
    if (a>b) {
        let c = b; b = a; a = c;
    }
    return (
        word.substr (0,a)+
        word.substr (b,1)+
        word.substr (a+1,b-a-1)+
        word.substr (a,1)+
        word.substr (b+1)
    )   
}

const generateCombinations = (word) => {
    if(word.length > 10){
        return 'Word length is too long';
    }
    let comb = [""];
    let combLength;
    let sample;
    for(i = 0; i < word.length; i++) {
        combLength = comb.length;
        for(j = 0;j < combLength;j++) {
            comb[j]+=word.substr(i,1);
            for (k = 0; k < comb[j].length-1; k++) {
                sample = swapLetters(comb[j], k, comb[j].length-1);
                comb.push(sample);
            }
        }
    }
    return comb;
}

console.log(generateCombinations('man'));
