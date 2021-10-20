// spread
let points = [1, 2, 5, 8, 9, 63, 78, 58];
console.log(...points);
console.log(points);
console.log(Math.max(...points));
console.log(..."ABC", "D", "F", ..."YUT");

//Destructuring
let populations = [10000, 20000, 30000];
let [small, medium, high] = populations;
console.log(small);
console.log(medium);
console.log(high);

function someFunction([small1], number) {
  console.log(small1);
}

someFunction(populations);

let category = { id: 1, name: "içecek" };
console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id);
console.log(name);
