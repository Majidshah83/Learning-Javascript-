function myFunction() {
  var birthdy = prompt("What year you born....Goood firend?");
  var ageDay = (2022 - birthdy) * 365;
  var h1 = document.createElement("h1");
  var textAnwer = document.createTextNode(
    "You are:" + ageDay + " " + "days" + " " + "old"
  );
  h1.setAttribute("id", "ageDay");
  // Append the text node to the "h1" node:
  h1.appendChild(textAnwer);
  // Append the "h1" node to the list:
  document.getElementById("flex-box-result").appendChild(h1);
}
function rest() {
  document.getElementById("ageDay").remove();
}
