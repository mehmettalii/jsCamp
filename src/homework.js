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

  // 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

  function friendNumbers(number1, number2) {
    let divisor1 = 0;
    let divisor2 = 0;
    for (let i = 1; i < number1; i++) {
      if (number1 % i == 0) {
        divisor1 += i;
      }
    }
    for (let j = 1; j < number2; j++) {
      if (number2 % j == 0) {
        divisor2 += j;
      }
    }
    if (divisor1 == number2 && divisor2 == number1) {
      console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
    } else {
      console.log(number1 + " ve " + number2 + " arkadaş sayı değildir.");
    }
  }
  friendNumbers(22, 28);

  // 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
  function findPerfectNumbers() {
    let perfectNumbers = [];
    for (let i = 0; i < 1000; i++) {
      let divisor = 0;
      for (let j = 0; j < i; j++) {
        if (i % j == 0) {
          divisor += j;
        }
      }
      if (divisor == i) {
        perfectNumbers.push(i);
      }
    }
    console.log(perfectNumbers);
  }
  findPerfectNumbers();


  // 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
  function findPrimeNumbers() {
    let primeNumbers = [];
    let count;
    for (let i = 0; i < 1000; i++) {
      count = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 0) {
        primeNumbers.push(i);
      }
    }
    console.log(primeNumbers);
  }
  findPrimeNumbers();