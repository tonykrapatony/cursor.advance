const button = document.querySelector('.gen');
const result = document.querySelector('.result');


function* createIdGenerator() {
  for (let i = 0; i<=Infinity; i++){
    yield i;
  }
}
const idGenerator = createIdGenerator();

button.addEventListener("click", () => {
  result.innerHTML += `<p>Id value = ${idGenerator.next().value} </p>`;
});

const fontSize = getComputedStyle(result).fontSize;

console.log(fontSize);


function* fontSizeUp() {
  for (let i = 0; i<=Infinity; i++){
    yield fontSize+i;
  }
}
const fsUp = fontSizeUp();

button.addEventListener("click", () => {
  fontSize++;
});

