
/* alert("testing the alert"); */

// this is a comment

/* console.log("statement 1"); 

console.log("statement 2"); */

// ******************************
// Lesson 4 - Working with the DOM
// ******************************

// console.log ( document.getElementById("blue_box").innerHTML );

// document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>";

// console.log ( document.getElementById("blue_box").innerHTML );


// ******************************
// Lesson 5 - Variables
// ******************************

/* var user_name = "Ivan";

document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!"; */

// ******************************
// Lesson 8 - Data Types - Booleans
// ******************************

// var orderValue = 1200;

// if (orderValue >= 1000) {
//     console.log("You are eligible to finance your order");
// } else {
//     console.log("Finance options are not available for orders below US$1000");
// }

// ******************************
// Lesson 11 - Functions
// ******************************

// function sum_numbers() {
//     var num1 = 5;
//     var num2 = 2;
//     sum = num1 + num2;
//     console.log(sum);
// }

// function sum_args(num1,num2) {
//     sum = num1 + num2;
//     return sum;
// }


// document.getElementById("sum_result").innerHTML = sum_args(-27,55);

// ******************************
// Lesson 12 - Data types - Arrays
// ******************************

/* var students = ["John", "Mary", "Paul"];

var courses = [ "HTML", "Python", "PHP" ]; */

// ******************************
// Lesson 13 - Data types - Objects
// ******************************

/* var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
};

employee.role = 'IT Manager';
employee.passport = 'KV09888'; */

// var courses = [
//     {
//         'title': 'Learn code in Python 3',
//         'reviews': 6802,
//         'students': 130129,
//         'categories': ['programming', 'technology']
//     },

//     {
//         'title': 'Learn PHP -  Beginner to Advanced',
//         'reviews': 1204,
//         'students': 30521,
//         'categories': ['web development', 'programming']
//     },

//     {
//         'title': 'Learn Microsoft Excel 2020',
//         'reviews': 4209,
//         'students': 18560,
//         'categories': ['productivity', 'business']
//     }
    
// ];

// ******************************
// Lesson 14 - Objects Methods
// ******************************

/* var student = {
    'firstName': 'Marie',
    'lastName': 'Smith',
    'fullName': function() {
        return this.firstName + " " + this.lastName;
    }
};
 */
// ******************************
// Lesson 16 - Events
// ******************************

/* document.getElementById("click-me").onclick = function() {
    alert("You clicked the button");
} */    

/* document.getElementById("hover-me").onmouseover = function() {
    alert("You moved the cursor over me");
}

document.getElementById("leave-me").onmouseout = function() {
    alert("You moved the cursor out of me");
}


document.onkeydown = function(event) {
    if(event.keyCode == 65) {
        alert("You've just pressed the 'a' key.");
    } else {
        console.log("You've just pressed a different key.");
    }
};

function show_alert() {
    alert('You clicked the button');
} */

// ******************************
// Lesson 17 - CSS Manipulation
// ******************************

/* document.getElementById("color_button").onclick = function() {
    document.getElementById("color_button").style.backgroundColor = "purple";
    document.getElementById("color_button").style.transform = "translateX(100px)";
} */

/* document.getElementById("color_button").onclick = function() {
    this.style.backgroundColor = "purple";
    this.style.transform = "translateX(100px)";
} */

/* var button = document.getElementById("color_button");

button.onmouseover = function() {
    button.style.backgroundColor = "purple";
    button.style.transform = "translateX(100px)";
} */


// ******************************
// Lesson 18 - More getElement methods
// ******************************

/* var elements = document.getElementsByClassName("example");
console.log(elements); */

/* var elements = document.getElementsByTagName("p");
console.log(elements); */

// ******************************
// Lesson 19 - For and For/in Loops
// ******************************

/* for ( var a = 0; a < 5; a+=1 ) {
    console.log(a);
} */

/* var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

for( var a = 0; a < students.length; a++ ) {
    console.log( students[a] );
} */

/* var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for (var prop in car) {
    console.log(prop + ': ' + car[prop]);
} */

/* var elements = document.getElementsByClassName("example");


for ( var a = 0; a < elements.length; a++ ) {
    elements[a].style.color = "orange";
    elements[a].style.fontWeight = "bold";
} */

// ******************************
// Lesson 20 - While and do/while Loops
// ******************************

/* var count = 0;

while(count < 5) {
    console.log(count);
    count++;
} */

/* var count = 10;

do {
    console.log(count);
    count++;
} while(count < 5); */

// ******************************
// Lesson 21 - Conditionals
// ******************************

/* var age = 18;

if (age < 18) {

    console.log('Underage');

} else if (age >= 65) {

    console.log('Senior');

} else {
    console.log('Adult');
}
 */

// grade = 8;
// absences = 3;

// Solving the problem with && (and): 

// if (grade >= 7 && absences <= 5) {
//     console.log('The student has been approved');
// } else {
//     console.log( 'The student has failed' );
// }

// Solving the problem with || (or): 

/* if (grade < 7 || absences > 5) {
    console.log( 'The student has failed' );
} else {
    console.log('The student has been approved');
}
 */

 // var name = "Mary";

//  if (name) {
//     console.log("The name is " + name);
//  } else {
//     console.log("The name has not been informed");
//  }

//console.log( name ? "The name is " + name : "The name has not been informed" );

// var age = 28;

// if (age < 18) {

//     console.log('Underage');

// } else if (age >= 65) {

//     console.log('Senior');

// } else {
//     console.log('Adult');
// }

// console.log( age < 18 ? 'Underage' : age >= 65 ? 'Senior' : 'Adult' );


// ******************************
// Lesson 22 - Nesting Loops and Conditionals
// ******************************

/* var isMember = false;
var age = 70;

if (isMember || age >= 65) {
    console.log('Free');
} else {
    if (age < 18) {
        console.log('$ 6.00');
    } else {
        console.log('$ 12.00');
    }
}
 */


// var employees = [
        
//     {
//         'name': 'Charles Silva',
//         'age': 45,
//         'children': ['Andrew Silva', 'Maria Silva']
        
//     },

//     {
//         'name': 'Elizabeth Green',
//         'age': 32,
//         'children': ['Peter Green']
        
//     },

//     {
//         'name': 'George Banks',
//         'age': 39,
//         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
//     }

// ];

// document.getElementById("children").innerHTML = "";

// for (var a = 0; a < employees.length; a++) {
//     var childrenList = employees[a].children;

//     for (var b = 0; b < childrenList.length; b++) {
//         var child = childrenList[b];
//         document.getElementById("children").innerHTML += "<li>" + child + "</li>";
//     }
// }


// ******************************
// Lesson 23 - Variable Scope
// ******************************


// var personsName = "John";

// function create_name() {
//     var personsName = 'Mary';
//     console.log(personsName);
// }

// create_name();

/* for (var a = 0; a < 3; a++) {
    console.log('Parent loop: ', a);

    for(var b = 0; b < 3; b++) {
        console.log('Child loop: ', b);
    }

}
 */

/* function create_name() {
    var myName = 'Mary';
    console.log(myName);
}

create_name();
console.log(myName); */


// ******************************
// Lesson 25 - Browser Object Model
// ******************************

//var myName = "Tom";

/* window.onmousemove = function(e) {
    if (e.pageY < 5) {
        alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.");
    }
} */

// ******************************
// Lesson 26 - Browser Object Model
// ******************************

// var dateObj = new Date();

// console.log(dateObj);

// ******************************
// Challenge of Lesson 26 - Calculating date intervals
// ****************************** 

// Ordered:  March 26, 2020
// Delivered: April, 02, 2020

/* var orderDate = new Date("2020-03-26");
var deliveryDate = new Date("2020-04-02");

var leadTime = Math.floor( (deliveryDate - orderDate) / 86400000);
document.getElementById("delivery_time").innerHTML = leadTime; */

// ******************************
// Lesson 27 - Time Methods
// ******************************

/* console.log("Message 1");

window.setTimeout(function(){

    console.log("Message 2");

},3000); */

/* document.getElementById("show-loader").onclick = function() {

    document.getElementById("spinner-loader").style.display = "block";

    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    },2000);

}; */

// var count = 0;

// var timeInterval = window.setInterval(function(){
//     console.log(count);
//     count++;
//     if(count >= 5){
//         window.clearInterval(timeInterval);
//     }
// },1000);

// ******************************
// Challenge of Lesson 27 - Creating a clock
// ****************************** 

// function add_leading_zero(number){
//     if(number < 10) {
//         return "0" + number.toString();
//     } else {
//         return number.toString();
//     }
// }

// window.setInterval(function(){
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
    
//     document.getElementById("hours").innerHTML = add_leading_zero(hours);
//     document.getElementById("minutes").innerHTML = add_leading_zero(minutes);
//     document.getElementById("seconds").innerHTML = add_leading_zero(seconds);
// },1000);


// ******************************
// Lesson 28 - Brake & Continue
// ******************************

/* var x = 0;

while (x < 10) {
    console.log(x);
    x++;

    if (x == 5) {
        break;
    }
} */

// var num = 0;

// while (num < 20) {
//     num++;

//     if (num % 2 == 0) {
//         console.log(num);
//     }

    
// }


// ******************************
// Lesson 29 - Forms
// ******************************

/* document.getElementById("show_option").onclick = function() {

    var selectField = document.getElementById("options");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;

    var selectedOption = document.getElementById("options").value;
    console.log(selectedOption);

}; 


document.getElementById("show_radio").onclick = function() {

    var radio = document.getElementsByName("gender");
    
    var radio_selected;

    for (var a = 0; a < radio.length; a++) {
        if (radio[a].checked) {
            radio_selected = radio[a];
            document.getElementById("selected_radio").innerHTML = radio_selected.value;
        }
    }

}; 

document.getElementById("show_check").onclick = function() {

    var check = document.getElementsByName("interest");

    document.getElementById("selected_check").innerHTML = "<ul>";

    for (var a = 0; a < check.length; a++) {
       if (check[a].checked) {
            document.getElementById("selected_check").innerHTML += "<li>" + check[a].value +"</li>";
       }
    }

    document.getElementById("selected_check").innerHTML += "</ul>";

}; 
 */


 // ******************************
// Lesson 30 - The onchange event
// ******************************


/* document.getElementById("education_level").onchange = function() {

    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;

}; 


var check = document.getElementsByName("meal");

for (var a = 0; a < check.length; a++) {

    check[a].onchange = function() {
        
        document.getElementById("selected_check").innerHTML = "<ul>";

        for (var b = 0; b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("selected_check").innerHTML += "<li>" + check[b].value + "</li>" ;
            }
        }

        document.getElementById("selected_check").innerHTML += "</ul>";
    }

}
 */


// ******************************
// Lesson 32 - jQuery - Intro
// ******************************

/* $("#hide").click( function(){
    $(".example").hide();
} ); */

// ******************************
// Lesson 34 - jQuery - DOM Manipulation
// ******************************

/* var content = $("#sample_text").html();
console.log(content);

$("#sample_text").html("New content"); */

/* var text_content = $("#sample-text-only").text();
console.log(text_content); */


/* $("#change_image").click(function(){
    $("#imagem_js").attr("src", "https://pluspng.com/img-png/logo-javascript-png-file-unofficial-javascript-logo-svg-1024.png");
    $("#change_image").hide();
});
 */

 // ******************************
// Lesson 35 - jQuery - Forms
// ******************************

/* var contentInput = $("#name_field").val();
console.log(contentInput); */

/* $("#options").change(function(){
    var newValue = $("#options option:selected").text();
    console.log(newValue);
});

$("input[name='gender']").change(function(){
    console.log( $("input[name='gender']:checked").parent().text() );
}); */

/* $("input[name='interest']").change(function(){
    var selectedCheckboxes = $("input[name='interest']:checked");
    
    $.each(selectedCheckboxes, function(index,value){
        console.log( $(value).parent().text() );
    });
}); */


 // ******************************
// Lesson 36 - jQuery - CSS Classes Manipulation
// ******************************

/* 
$("#add_class").click( function(){
    $("#example-paragraph").addClass("styling");
} );

$("#remove_class").click( function(){
    $("#example-paragraph").removeClass("styling");
} );

$("#toggle_class").click( function(){
    $("#example-paragraph").toggleClass("styling");
} ); */


// ******************************
// Lesson 37 - jQuery - Events
// ******************************



// Ready event for the document object
/* $(function(){

    // add all the code of your page inside here
    
}); */

/* $("element").on({
    click: function(){
        // code to be executed
    },
    mouseenter: function(){
        // code to be executed
    }
}); */

// Events challenge

/* $("#fullName").keyup(function(){

    if ($("#fullName").val() =="") {
        $("#submit").hide();
    } else {
        $("#submit").show();
    }

    // another option, using the ternary if
    $("#fullName").val() =="" ? $("#submit").hide() : $("#submit").show();
}); */


// ******************************
// Lesson 38 - jQuery - Effects
// ******************************

/* $("#hide-button").click(function(){
    $("#hide-button").hide(4000,function(){
        $("#hidden-text").show();
    });

}); */

/*  $("#toggle-tab").click(function(){
    $("#tab-content").slideToggle();
    $("#toggle-tab").toggleClass("flip");
});  */

// ******************************
// Lesson 39 - jQuery - Animate
// ******************************

/* $("#animate").click(function(){
    $("#square").animate({
        width: '+=50px',
        height: '+=50px',
        marginLeft: '+=50px'
    },1000);


});
 */
