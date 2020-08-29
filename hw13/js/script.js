const button = document.querySelector('button');
const result = document.querySelector('.result');

let a;
function* createIdGenerator() {
  for (let i = 0; i<=Infinity; i++){
    yield i;
  }
}
const idGenerator = createIdGenerator();
button.addEventListener("click", () => {
  result.innerHTML += `<p> ${idGenerator.next().value} </p>`;
});
