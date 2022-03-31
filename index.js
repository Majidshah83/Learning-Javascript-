// console.log("helo majid");

// // / Values and Variables in JS
// var myname = "majid shah";
// var myAge = 28;
// var _myage = 23;
// var _my__name = "ali shah";
// var $myname = "ali";
// console.log(_myage);
// console.log(myAge);
// console.log(myname);
// console.log(_my__name);
// console.log($myname);

//Data type in javascript JS
//There six data type in javascript

// var $_myage = 23;
// var myname = "majid shah";
// var iammajid = true;
// var iammid = false;

// console.log(typeof myname);
// console.log(typeof iammajid);
// console.log(typeof iammid);
// console.log(23 + 24);
// console.log("java" + "script");
// console.log(true + true);
// console.log(false + true);
// console.log("majid");
// alert("helo ali");

//variable
var smooth = "helo majid shah";
console.log(smooth);
var smooth = "458";
console.log(smooth);
document.getElementById("header1");
document.getElementsByClassName("headr2");
// var age = prompt("what is your age??");
// document.getElementById("p2").innerHTML = age;

//number
var p1 = 10;
console.log(p1);
//increment and decrement
var p1 = 10;
p1--;
p1++;
console.log(p1);
//function
function myfunction() {
  //   console.log("helo");
  //   alert("helo majid");
  var age = prompt("what is your name", "majid shah");
  if (age != null) {
    document.getElementById("p2").innerHTML =
      "Helo " + age + "! how are you today";
  }
}

/*
 Let's create function that take in a name ans say helo folllwed your name

*/
/*
Name: "majid"
return:"helo majid"
*/

function fun() {
  var name = prompt("what is your name");
  var result = "helo " + name;
  alert(result);
  //   console.log(result);
}
// fun();

//how do arguments work in function

// how to add 2 number together
function sum(num1, num2) {
  $result = num1 + num2;
  alert($result);
  console.log($result);
}

// sum(59, 2);
