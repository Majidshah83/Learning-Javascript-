let vegitable = ['tomaito', 'photaiot', 'ladyfinger'];
let fruit1 = new Array("apple", "mango", "orange");
//for loop
for (let i = 0; i < fruit1.length; i++) {
  console.log(fruit1[i]);
}

// array common methods
console.log('to string', fruit1.toString());
//join - with all filed of array
console.log('join', fruit1.join('-'));
//remove last item 
console.log(fruit1.pop(), fruit1);
//add new item 
console.log(fruit1.push('blackberries'), fruit1)
//first index delete
fruit1.shift();
//combine two array
let combine = fruit1.concat(vegitable);
console.log('ccombine', combine);
//slice function
console.log(combine.slice(1, 4));
//