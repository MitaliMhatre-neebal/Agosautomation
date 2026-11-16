//3

const appName = 'ShopApp';
 
function showUser() {
  var userName = 'Ravi';
  if (true) {
    let age = 25;
    const role = 'Tester';
    console.log(userName, age, role, appName);
  }
  // console.log(age); // Uncomment to see ReferenceError
}
 
showUser();
console.log(appName);
// console.log(userName); // Uncomment to see ReferenceError


//2

const products = [

 { name: 'Keyboard', price: 1200, inStock: true },

 { name: 'Mouse', price: 500, inStock: false },

 { name: 'Monitor', price: 8500, inStock: true }

];

products.forEach(product => console.log(product.name));

const names = products.map(product => product.name);

console.log('names:', names);

const affordable = products.filter(product => product.price < 2000);

console.log('affordable:', affordable);

const monitor = products.find(product => product.name === 'Monitor');

console.log('found:', monitor);

console.log('Has Mouse:', names.includes('Mouse'));




// 1

const fruits = ['apple', 'banana', 'mango'];

 

fruits.push('orange');

console.log('push:', fruits);

console.log('pop:', fruits.pop(), fruits);

fruits.unshift('grapes');

console.log('unshift:', fruits);

console.log('shift:', fruits.shift(), fruits);

const selected = fruits.slice(0, 1);

console.log('slice:', selected);

console.log('original:', fruits);

fruits.splice(1, 2, 'kiwi');

console.log('splice:', fruits);




