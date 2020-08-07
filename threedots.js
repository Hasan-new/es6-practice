



const allAges2 = [ ages, ... ages2, 5, ...ages3];
// console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max (business, miister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);