
// Aplicação básica do método reduce()
// console.log(array.reduce((acc, item) => acc + item));

// // Exemplo com number
const OS = ['Debian', 'Ubuntu', 'Mint', 'Catalina', 'Big Sur', 'Ruindows7', 'Ruindows Vista', 'Ruindows10'];
console.log(OS.reduce((acc, item) => acc + `, ${item}`));

// // Exemplo com string
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.reduce((acc, item) => acc + item));
console.log(numbers.reduce((acc, item) => acc + `, ${item}`));

// Exemplo com array de objetos, transformando um array em um objeto
const operationalSystems = [
    {
    system: 'debian',
    name: 'debian buster'
    },
    {
    system: 'macos',
    name: 'macos bigsur'
    },
    {
    system: 'ruindows',
    name: 'ruindows11'
    }
];

const osNames = operationalSystems.reduce((acc, item) => {
    acc[item.system] = acc[item.system] || [];
    acc[item.system].push(item);
    return acc;
}, {});

console.log(osNames);
