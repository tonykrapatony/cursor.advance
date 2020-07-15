window.onload = function() {
    const num1 = 15.678,
          num2 = 123.965,
          num3 = 90.2345, 
          maxNum = Math.max(num1, num2, num3),
          minNum = Math.min(num1, num2, num3),
          sumNum = num1+num2+num3,
          sumRound = Math.round(num1)+Math.round(num2)+Math.round(num3),
          sumRound100 =  Math.round(sumNum / 100) * 100,
          sumIsEven ,
          change = 500 - sumNum,
          average = (sumNum/3).toFixed(2),
          randomDiscount = (Math.random()*100).toFixed(0),
          dicountPrice = (sumNum - (sumNum/100)* randomDiscount).toFixed(2),
          profit = Math.trunc((sumNum/2) - (sumNum/100) * randomDiscount);
        
     if (sumRound%2===0) {
        sumIsEven = "Так";
    } else {
        sumIsEven = "ні";
    }
    
    document.writeln("<h3>Basic</h3>"); 
    document.writeln("<p>Перше число: "+num1+"</p>"); 
    document.writeln("<p>Друге число: "+num2+"</p>"); 
    document.writeln("<p>Третє число: "+num3+"</p>"); 
    document.writeln("<p>Максимальне число: "+maxNum+"</p>"); 
    document.writeln("<p>Мінімальне число: "+minNum+"</p>"); 
    document.writeln("<p>Сума чисел: "+sumNum+"</p>"); 
    document.writeln("<p>Сума чисел округлена до меншого: "+sumRound+"</p>"); 
    document.writeln("<p>Сума чисел округлена до сотень: "+sumRound100+"</p>"); 
    document.writeln("<p>Округлена сума парна?: "+sumIsEven+"</p>");  
    document.writeln("<p>Решта при оплаті 500 грн: "+change+"</p>"); 
    document.writeln("<p>Середнє значення цін, округлене до другого знаку після коми: "+average+"</p>"); 
    document.writeln("<p>Випадкова знижка: "+randomDiscount+"</p>"); 
    document.writeln("<p>Вартість зі знижкою: "+dicountPrice+"</p>"); 
    document.writeln("<p>Прибуток: "+profit+"</p>"); 
    document.writeln("<h3>Advanced</h3>"); 
    document.writeln("<p class="+"advanced"+"></p>");
    
    let advanced = `<p>Максимальне число: ${maxNum}</p>
                    <p>Мінімальне число: ${minNum}</p>
                    <p>Сума чисел: "${sumNum}</p>
                    <p>Сума чисел округлена до меншого: ${sumRound}</p>
                    <p>Сума чисел округлена до сотень: ${sumRound100}</p>
                    <p>Округлена сума парна?: ${sumIsEven}</p>
                    <p>Решта при оплаті 500 грн: ${change}</p>
                    <p>Середнє значення цін, округлене до другого знаку після коми: ${average}</p>
                    <p>Випадкова знижка: ${randomDiscount}</p>
                    <p>Вартість зі знижкою: ${dicountPrice}</p>
                    <p>Прибуток: ${profit}</p>`;
    
    document.querySelector('.advanced').innerHTML = advanced;
};