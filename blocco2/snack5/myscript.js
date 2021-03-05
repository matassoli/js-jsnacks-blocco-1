var arr1 = ["elem1", "elem2", "elem3"],
  arr2 = ["elem4", "elem5", "elem6", "elem7", "elem8", "elem9"];


while (arr1.length > arr2.length) {
  arr2.push(arr1[Math.floor(Math.random() * arr1.length)]);
}
while (arr1.length < arr2.length) {
  arr1.push(arr2[Math.floor(Math.random() * arr2.length)]);
}
console.log(arr1);
console.log(arr2);
