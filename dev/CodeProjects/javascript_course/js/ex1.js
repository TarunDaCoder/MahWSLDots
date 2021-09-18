//Question No. 1
console.log ("This is ex1.js");

//Question No. 2
var first_name = "Tarun";
var last_name = "Nair";
var year_of_birth = 2009;
var my_age = 2020 - year_of_birth;
document.getElementById("student_message").innerHTML;
document.getElementById("student_message").innerHTML = "Hi, my name is " + first_name + " " + last_name + ", I'm " + my_age + " years old and I'm learning JavaScript";

//Question No. 3
var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);
var answer = (num1 + num2) / 2;
answer = answer.toFixed(2);
document.getElementById("result").innerHTML;
document.getElementById("result").innerHTML = answer;

//Question No. 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();
console.log (phone1.length == 9);
console.log (phone2.length == 9);
console.log (phone3.length == 9);

//Question No. 5
console.log(Math.pow(32,6));

//Question No. 7
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);  
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature); 

//Question No. 8
var url1 = "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = (document.getElementById("url_3").innerHTML.replace("https://", ""))
document.getElementById("url_4").innerHTML = url2;