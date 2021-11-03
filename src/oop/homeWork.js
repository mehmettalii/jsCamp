// Homework (week-2)

// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers) {
    let Numbers = numbers;
    let primeNumber = [];
    let count;
    for (let i = 0; i < Numbers.length; i++) {
      count = 0;
      for (let j = 2; j < Numbers[i]; j++) {
        if (Numbers[i] % j == 0) {
          count++;
        }
      }
      if (count == 0) {
        primeNumber.push(Numbers[i]);
      }
    }
    console.log(primeNumber);
  }
  findPrime(3, 45, 81, 16, 7, 19, 17, 8, 5, 4);