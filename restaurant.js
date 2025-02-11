const age = 55;
const price = 2000
if(age <= 12){
    
    console.log('You can eat for free');
} 
else if(age >= 60){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log('You got 50% discount');
    console.log(payAmount);
}
else if(age >= 50 ){
    // 30% discount
    const discount = price * 30/100;
    const payAmount = price - discount;
    console.log('You got 30% discount');
    console.log(payAmount);
}
else{
    console.log(price);
}


// home work
// 