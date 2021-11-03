// class Customer {
//   constructor(id, customerNumber) {
//     this.id = id;
//     this.customerNumber = customerNumber;
//   }
// }
// let customer = new Customer(1, "12345");
// console.log(customer.id);

// class IndividualCustomer extends Customer {
//   constructor(firstName, id, customerNumber) {
//     super(firstName, id, customerNumber);
//     this.firstName = firstName;
//   }
// }

// class CorporateCustomer extends Customer {
//   constructor(companyName, id, customerNumber) {
//     super(companyName, id, customerNumber);
//     this.companyName = companyName;
//   }
// }

// // map, filter, reduce

// let products = [
//   { id: 1, name: "Asus", unitPrice: 12000 },
//   { id: 2, name: "Casper", unitPrice: 13000 },
//   { id: 3, name: "Samsung", unitPrice: 14000 },
//   { id: 4, name: "Excalibur", unitPrice: 15000 },
//   { id: 5, name: "MacBook", unitPrice: 20000 },
// ];

// // Map
// console.log("<ul>");
// products.map((product) => console.log(`<li>${product.name}</li>`));
// console.log("</ul>");

// // Filter
// let filterProducts = products.filter((product) => product.unitPrice > 13500);
// console.log(filterProducts);

// //Reduce
// let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);
// console.log(cartTotal);

// let cartTotal2 = products
//   .filter((p) => p.unitPrice > 13500)
//   .map((p) => {
//     p.unitPrice = p.unitPrice * 1.18;
//     return p;
//   })
//   .reduce((acc, p) => acc + p.unitPrice, 0);

// console.log(cartTotal2);
