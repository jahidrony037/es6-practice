const ages=[12,14,16,34];
const ages2=[15,26,25];
const ages3=[14,23,43];
// const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges1=[...ages,...ages2,...ages3];
console.log(allAges1);

const businessman=650;
const minster =450;
const sochib = 220;
const max=Math.max(businessman,minster,sochib);
console.log(max);
const takaPoisa =[650, 450, 220];
const maximum=Math.max(...takaPoisa);
console.log(maximum);

