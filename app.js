function myFunction() {
 document.getElementById("one").innerHTML = "Addition";
}
function multiplication(num){
  for(let i=1; i<=10; i++){
    let a = num*i;
    document.getElementById(i).innerHTML = a;
  }
}
function multiplicationTable(){
  var x = document.getElementById("num").value;
  multiplication(x);
}
