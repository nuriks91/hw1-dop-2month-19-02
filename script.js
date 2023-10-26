let num = 63; 

if (typeof num === 'number') {
  if (num > 0) {
    console.log("Положительное число");
  } else if (num < 0) {
    console.log("Отрицательное число");
  } else {
    console.log("Ноль");
  }
} else {
  console.log("Введите только числа");
}
