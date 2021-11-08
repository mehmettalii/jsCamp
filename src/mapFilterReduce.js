let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "Ipad", quantity: 1, unitPrice: 15000 },
];

//Map
cart.map((product) => {
  console.log(
    product.productName + " : " + product.unitPrice * product.quantity
  );
});

//Filter
let quantityOver2 = cart.filter((product) => product.quantity > 2);
console.log(quantityOver2);

//Reduce
let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
);
console.log(total);

//Referans Tiplerde atama
function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Mouse", quantity: 1, unitPrice: 200 });
}
addToCart(cart);
console.log(cart);

//Değer tiplerde atama
let sayi = 10;

function sayiTopla(number) {
  number += 1;
}
sayiTopla(sayi);
console.log(sayi);