// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       orders.push(order);
//     },
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const a = 10;

// const number = function (a){
//     console.log(a);
// };
// number (a);


//  const Student = function (name, surname, age) {
//      this.name = name;
//      this.surname = surname;
//     this.age = age;
//  };
// this.sayHello = function(){
//      console.log(`hello $(this.name)`);
//  };
//  const Arsen = new Student ("ivan", "ivanov", 12);
 
// console.log(Arsen);

const City = function (name, quantity, mainland) {
    this.name = name;
    this.quantity = quantity;
    this.mainland = mainland;
};

this.sayQuantity = function(){
         console.log(`$(this.quantity)`);
     };

const Lviv = new City ("Lviv", "Europe", "756,032")

const London = new City ("London", "Europe", "8,961,989")

const Kyiv = new City ("Kyiv", "Europe", "2,967,360")

console.log(Lviv)
console.log(London)
console.log(Kyiv)