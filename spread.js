const data  = [2, 8, 6];

function sum(x,y,z) {
    return x + y + z;
}

console.log(sum(...data));




const firstName = ["Túlio"];
const surname = ["Pereira", "Xavier"];
const fullName = [...firstName, ...surname];

console.log(fullName);
console.log(...fullName);
