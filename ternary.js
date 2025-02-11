/**
 * TERNARY --> three parts 
 * 
 * variable condition ?  if fill -> output : else --> output
 * 
 * condition ? do something when true : do something when false
 */

//  normal method
const age = 10;
// if (age >= 18) {
//     console.log('vote daw ga');
// }
// else {
//     console.log('ghumau ga');
// }



// ternary method
// age >=18 ? console.log('vote daw ga ') : console.log('ghumau ga');


// another one 
let price = 600;
const isLeader = true;
// if (isLeader ===true) {
//     price = 0
// } else {
//     price += 100;

// }
// console.log(price);

// ternary method

price = isLeader === true ? 0 : price + 100;
console.log(price);