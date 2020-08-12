function randomNum() {
    const result =  Math.round(0 + Math.random() * (255 + 1 - 0));
    return result;
}

function generateBlocks(){
    let blocks = "";
    for(let a=0; a<25; a++){
        blocks += `<div class="block" style="background-color: rgb(${randomNum()}, ${randomNum()}, ${randomNum()})"></div>`;
    }
    return blocks;
}

let switcher = false;
let interval;
    
function change(){
    
    if (switcher) {
        clearInterval(interval);
        switcher = false;
        document.querySelector('.change-btn').innerHTML = "Почати зміну кольорів";
    } else {
        interval = setInterval(function(){
            let blocks = "";
            for(let a=0; a<25; a++){
                blocks += `<div class="block" style="background-color: rgb(${randomNum()}, ${randomNum()}, ${randomNum()})"></div>`;
            }
            document.querySelector('.blocks').innerHTML = generateBlocks(); 
        }, 3000);
        switcher = true;
        document.querySelector('.change-btn').innerHTML = "Зупинити зміну кольорів";
    }       
}

document.querySelector('.generate-btn').addEventListener('click', function(){
    document.querySelector('.blocks').innerHTML = generateBlocks(); 
});

document.querySelector('.show-btn').addEventListener('click', function(){
    document.querySelector('.blocks').style.display = "flex";
});
    
document.querySelector('.hide-btn').addEventListener('click', function(){
    document.querySelector('.blocks').style.display = "none";
});

document.querySelector('.change-btn').addEventListener('click', function(){
    change();
});