$(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#over-18').show();
  } else if (age < 18 && age > 0) {
    $('#under-18').show();
  } else {
    alert("You're not even born yet!");
  }
});
