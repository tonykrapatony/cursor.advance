window.onload = function() {
//    const  a = Number(prompt('Enter first number'));
//    const  b = Number(prompt('Enter second number'));
    let even;
    let result = 0;
    
    const  a = Number(prompt('Enter first number'));
    if (isNaN(a)) {
        alert ('Error, first number is not integer');
    } else {
        const  b = Number(prompt('Enter second number'));
        if (isNaN(b)) {
            alert ('Error, second number is not integer');
        }
        else if (a < b){
            even = confirm('Skip even numbers?');
            for ( let i=a; i<=b; i++) {

                if(even && i % 2 === 0) {
                    continue
                }
                result += i;
    //            console.log(result);
            } 
            alert('Result = '+result);
        } else {
            alert ('Second number must be bigger');
            location.reload(true);
        } 
    }    
};