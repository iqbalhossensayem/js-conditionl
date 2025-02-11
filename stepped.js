/** MULTI LEVEL CONDITION */

// how much money i spent to buy shopping 
const price = 3000 ; 
// discount condition for spent greater than or equal 5000
if(price >= 5000){
    // discount price
    const discount = price * 10 / 100 ;
    const payAmount = price - discount ;
    console.log(discount);
    console.log(payAmount);
}

// discount condition for spent greater than or equal 2500
else if(price >= 2500){
    const discount =price * 5/100;
    const payAmount = price - discount;
    console.log(discount);
    console.log(payAmount);
}

// discount condition for spent less than discount condition amount
else{
    console.log(price);
}
