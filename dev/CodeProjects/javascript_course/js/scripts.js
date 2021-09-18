// alert("Alert! Whoop Whoop, commented alert! Whoop whoop!")
//This sentence is ignored by the browser
// console.log("Statement 1");
// console.log("Statement 2");

/* ***************************************************************
******************************************************************
********************************Lesson 4*************************
******************************************************************
*************************************************************** */

// console.log (document.getElementById("blue_box").innerHTML);

// document.getElementById("blue_box").innerHTML = "<h1>Whoop whoop! Header! Whoop whoop!</h1>";

// console.log (document.getElementById("blue_box").innerHTML);

/* ***************************************************************
******************************************************************
********************************Lesson 5*************************
******************************************************************
*************************************************************** */

// var username = "Tarun";

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

/* ***************************************************************
******************************************************************
********************************Lesson 10*************************
******************************************************************
*************************************************************** */

// var order_value = 4700;

// if (order_value >= 1000)
// {
//     console.log ("You are better than Rs.1000");
// }
// else
// {
//     console.log ("You are soooo much worse than Rs.1000");
// }

/* ***************************************************************
******************************************************************
********************************Lesson 11*************************
******************************************************************
*************************************************************** */

// function add_numbers()
// {
//     var num1 = 4;
//     var num2 = 7;
//     var addedNumberSum = num1 + num2;
//     console.log(addedNumberSum);
// }

// function added_numbers_arguements(num1, num2)
// {
//     addedNumberSum = num1 + num2;
//     return(addedNumberSum);
// }

// var average = added_numbers_arguements(7368231, 7235723612) / 2;
// console.log(average);

// document.getElementById("sum_result").innerHTML = added_numbers_arguements(-27,55);

/* ***************************************************************
******************************************************************
********************************Lesson 12*************************
******************************************************************
*************************************************************** */
// var friends = ["Aari", "Parum", "Ashmith", "Aarav"];
// console.log(friends);

// var favCodingLangs = ["HTML", "CSS", "C#", "Javascript"];

/* ***************************************************************
******************************************************************
********************************Lesson 13*************************
******************************************************************
*************************************************************** */

// var employee = {
//     'name': 'James Taylor',
//     'yearOfBirth': 1948,
//     'ID': 'SBJ0001',
//     'role': 'IT Analyst'
// };

// employee.role = 'IT Manager';
// employee.passport = 'IN41297';

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

/* ***************************************************************
******************************************************************
********************************Lesson 14*************************
******************************************************************
*************************************************************** */

// var IvansStudent = 
// {
//     'firstName': 'Tarun',
//     'lastName': 'Nair',
//     'fullName': function()
//     {
//         return this.firstName + " " + this.lastName;
//     }
// };

/* ***************************************************************
******************************************************************
********************************Lesson 16*************************
******************************************************************
*************************************************************** */

/* 
document.getElementById("click-me").onclick = function() 
{
    alert("Whoop whoop! You clicked the button! Whoop whoop!");
}
 
document.getElementById("hover-me").onmouseover = function() 
{
    alert("Whoop whoop! You moved your cursor over me! Whoop whoop!");
}

document.getElementById("leave-me").onmouseout = function() 
{
    alert("Whoop whoop! You moved your cursor out of me! Whoop whoop!");
}
*/
/* document.onkeydown = function(event) 
{
    if(event.key == "t")
    {
        alert("You've just pressed the 't' key.");
    }
    else
    {
        console.log("You've just pressed some other key.");
    }
};

function show_alert()
{
    alert("You clicked the button");
} */

/* ***************************************************************
******************************************************************
********************************Lesson 17*************************
******************************************************************
*************************************************************** */
/* 
document.getElementById("color_button").onclick = function() 
{
    this.style.transform = "translateX(100px)";
    this.style.backgroundColor = "red";
} */
/* 
var color_button = document.getElementById("color_button");

color_button.onclick = function() 
{
    this.style.transform = "translateX(100px)";
    this.style.backgroundColor = "red";
}

color_button.onmouseover = function() 
{
    this.style.transform = "translateX(100px)";
    this.style.backgroundColor = "red";
} */

/* ***************************************************************
******************************************************************
********************************Lesson 18*************************
******************************************************************
*************************************************************** */

/* var elements = document.getElementsByClassName("example");
console.log(elements); */

/* var elements = document.getElementsByTagName("p");
console.log(elements); */

/* ***************************************************************
******************************************************************
********************************Lesson 19*************************
******************************************************************
*************************************************************** */
/* for(var a = 0; a < 5; a+=1)
{
    console.log(a);
}  */

/* var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

for(var a = 0; a < students.length; a++)
{
    console.log(students[a]);
} */

/* var car = 
{
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'
}

for (var prop in car)
{
    console.log(prop + ': ' + car[prop]);
} */

/* var elements = document.getElementsByClassName("example");

for (var a = 0; a < elements.length; a++)
{
    elements[a].style.color = "red";
    elements[a].style.fontWeight = "bold";
} */

/* ***************************************************************
******************************************************************
********************************Lesson 20*************************
******************************************************************
*************************************************************** */

/* var count = 0;
while(count < 5)
{
    console.log(count);
    count++;
} */

/* var count = 10;

do
{
    console.log(count);
    count++;
} while(count < 5); */

/* ***************************************************************
******************************************************************
********************************Lesson 21*************************
******************************************************************
*************************************************************** */

/* var age = 18;

if (age < 18) 
{

    console.log("Too bad, you're underage");

} 
else if (age > 65)
{

    console.log("Congrats! You're a senior!");

}
else
{
    console.log("Yay! You're an adult!");
} */

//To be approved the student needs the grade to be 7 or higher and the number of absences to be 5 or lower.

/* grade = 8;
absences = 3; */

// Solving the problem with && (and):

/* if (grade >= 7 && absences <= 5)
{
    console.log("Your student is approved for this course! Congrats!")
}
else
{
    console.log("Too bad, your student has failed the approval :( ")
} */

//Solving the problem with || (or):

/* if (grade < 7 || absences > 5)
{
    console.log("Too bad, your student has failed the approval :( ")
}
else
{
    console.log("Your student is approved for this course! Congrats!")
} */

//var name = "Tarun"

/* if (name)
{
    console.log("The name is " + name);
}
else
{
    console.log("The name hasn't been informed");
} */

//console.log(name ? "The name is " + name : "The name has not been informed");

//var age = 208;

/* if (age < 18) 
{

    console.log("Too bad, you're underage");

} 
else if (age > 65)
{

    console.log("Congrats! You're a senior!");

}
else
{
    console.log("Yay! You're an adult!");
} */

// console.log(age < 18 ? "Too bad, you're underage" : age > 65 ? "Congrats! You're a senior!" : "Yay! You're an adult!");

/* ***************************************************************
******************************************************************
********************************Lesson 22*************************
******************************************************************
*************************************************************** */
/* var isMember = false;
var age = 8;

if(isMember || age >= 65)
{
    console.log("This product is free for you");
} 
else
{
    if(age < 18)
    {
        console.log("This product will cost ₹440.73 for you");
    }
    else
    {
        console.log("This product will cost ₹881.46 for you");
    }
} */

/* var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];

document.getElementById("children").innerHTML = "";
for (var a = 0; a < employees.length; a++)
{
        var children = employees[a].children;

    for (var b = 0; b < children.length; b++)
    {
        var child = children[b];
        document.getElementById("children").innerHTML += "<li>" + child + "<li>";
        console.log(child)
    }
} */
/* ***************************************************************
******************************************************************
********************************Lesson 23*************************
******************************************************************
*************************************************************** */

// var name = "John";
/* function create_name() 
{
    var name = "Tarun";
    console.log(name);
} */

// create_name();

/* for (var a = 0; a < 3; a++)
{
    console.log("Parent loop: ", a);

    for(var b = 0; b < 3; b++)
    {
        console.log("Child loop: ", b);
    }
} */

/* function create_name() {
    myName = 'Mary';
    console.log(myName);
}
create_name();
console.log(myName); */

/* ***************************************************************
******************************************************************
********************************Lesson 25*************************
******************************************************************
*************************************************************** */

// var myName = "Tarun";

/* window.onmousemove = function(e)
{
    console.log(e.pageX);
} */

/* ***************************************************************
******************************************************************
********************************Lesson 26*************************
******************************************************************
*************************************************************** */

//Challenge

//Ordered: March, 26, 2020
//Delivered: April, 02, 2020

/* var orderDate = new Date("3/26/2020");
var deliveryDate = new Date("4/2/2020");
var leadTime = Math.floor(deliveryDate - orderDate) / 86400000;
document.getElementById("delivery_time").innerHTML = leadTime; */

/* ***************************************************************
******************************************************************
********************************Lesson 27*************************
******************************************************************
*************************************************************** */

/* console.log("Message 1");
window.setTimeout(function()
{
    console.log("Message 2");
},3000);

document.getElementById("show-loader").onclick = function()
{
    document.getElementById("spinner-loader").style.display = "block";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";   
    },5000)
} */

/* var count = 0;
var timeInterval = window.setInterval(function(){
    console.log(count);
    count++;
    if(count >= 5)
    {
        window.clearInterval(timeInterval);
    }
},1000); */

//Challenge

/* function add_zero_in_the_starting(number){
    if(number < 10)
    {
        return "0" + number.toString();
    }
    else
    {
        return number.toString();
    }
}

window.setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById("hours").innerHTML = add_zero_in_the_starting(hours);
    document.getElementById("minutes").innerHTML = add_zero_in_the_starting(minutes);
    document.getElementById("seconds").innerHTML = add_zero_in_the_starting(seconds);
},1000); */

/* ***************************************************************
******************************************************************
********************************Lesson 28*************************
******************************************************************
*************************************************************** */
/* var x = 0;
while(x < 10)
{
    console.log(x);
    x++;

    if(x == 5)
    {
        break;
    }
} */

/* var num = 0;
while(num < 20)
{
    num++;
    if(num % 2 != 0)
    {
        continue;
    }
    console.log(num);
} */

/* ***************************************************************
******************************************************************
********************************Lesson 29*************************
******************************************************************
*************************************************************** */

/* document.getElementById("show_option").onclick = function(){
    var selectField = document.getElementById("options");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;

    var selectedOption = document.getElementById("options").value;
    console.log(selectedOption);
};

document.getElementById("show_radio").onclick = function(){
    var radio = document.getElementsByName("gender");
    var radio_selected;
    for(a = 0; a < radio.length; a++)
    {
        if(radio[a].checked)
        {
            radio_selected = radio[a];
            document.getElementById("selected_radio").innerHTML = radio_selected.value;
        };
    }
};

document.getElementById("show_check").onclick = function(){
    var check = document.getElementsByName("interest");
    document.getElementById("selected_check").innerHTML = "<ul>";
    for(var a = 0; a < check.length; a++)
    {
        if(check[a].checked){
            document.getElementById("selected_check").innerHTML += "<li>" + check[a].value + "</li>"
        }
    }
    document.getElementById("selected_check").innerHTML += "</ul>";
}; */

/* ***************************************************************
******************************************************************
********************************Lesson 30*************************
******************************************************************
*************************************************************** */
/* document.getElementById("education_level").onchange = function(){
    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;
};

var check = document.getElementsByName("meal");
for(var a = 0; a < check.length; a++)
{
    check[a].onchange = function()
    {
        document.getElementById("selected_check").innerHTML = "";
        for(var b = 0; b < check.length; b++)
        {
            if(check[b].checked)
            {
                document.getElementById("selected_check").innerHTML += "<li>" + check[b].value + "</li>";
            }
        }
    }
} */

//Sir's code below
/* var check = document.getElementsByName("meal");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("selected_check").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
} */

/* ***************************************************************
******************************************************************
********************************Lesson 33*************************
******************************************************************
*************************************************************** */
/* $("#hide").click(function()
{
    $(".example").hide()
}); */

/* ***************************************************************
******************************************************************
********************************Lesson 34*************************
******************************************************************
*************************************************************** */

/* var contento = $("#sample_text").html();
console.log(contento);
$("#sample_text").html("New contento"); */

/* var text_only = $("#sample-text-only").html();
console.log(text_only);

$("#change_image").click(function()
{
    $("#image_js").attr("src", "https://toppng.com/uploads/preview/jquery-logo-vector-115739557123qrvlkptfh.jpg")
    $("#change_image").hide();
}); */
//change_image
//image_js

/* ***************************************************************
******************************************************************
********************************Lesson 35*************************
******************************************************************
*************************************************************** */
/* var contentInput = $("#name_field").val();
console.log(contentInput); */

/* $("#options").change(function()
{
    var newValue = $("#options option:selected").text()
    console.log(newValue);
});

$("input[name = 'gender']").change(function()
{
    console.log($("input[name = 'gender']:checked").parent().text());
}); */

/* $("input[name = 'interest']").change(function()
{
    var selectedCheckBoxes = $("input[name = 'interest']:checked");
    $.each(selectedCheckBoxes, function(index, value)
    {
        console.log($(value).parent().text());
    });
}); */

/* ***************************************************************
******************************************************************
********************************Lesson 36*************************
******************************************************************
*************************************************************** */

//example_paragraph
/* $("#add_class").click(function()
{
    $("#example-paragraph").addClass("styling");
});

$("#remove_class").click(function()
{
    $("#example-paragraph").removeClass("styling");
});

$("#toggle_class").click(function()
{
    $("#example-paragraph").toggleClass("styling");
}); */

/* ***************************************************************
******************************************************************
********************************Lesson 37*************************
******************************************************************
*************************************************************** */

//Read event for the document object
/* $(function(){

    //Add all the code of your page inside here
    
}); */

/* $("element").on({
    click: function()
    {
        //Code to be executed
    },
    click: function()
    {
        //Code to be executed
    },

}); */

//Challenge
/* $("#fullName").keyup(function()
{
    if($("#fullName").val() == "")
    {
        $("#submit").hide()
    }
    else
    {
        $("#submit").show();
    }
    $("#fullName").val() == "" ? $("#submit").hide() : $("#submit").show();
}); */

/* ***************************************************************
******************************************************************
********************************Lesson 38*************************
******************************************************************
*************************************************************** */
/* $("#hide-button").click(function()
{
    $("#hide-button").hide(4000, function()
    {
        $("#hidden-text").show();
    });
});

$("#toggle-tab").click(function()
{
    $("#tab-content").slideToggle();
    $("#toggle-tab").toggleClass("flip");
}); */

/* ***************************************************************
******************************************************************
********************************Lesson 39*************************
******************************************************************
*************************************************************** */
/* $("#animate").click(function()
{
    $("#square").animate({
        width: '+=50px',
        height: '+=50px',
        marginLeft: '+=50px'
    },500);

    $("#square").animate({
        height: '+=50px'
    },20);
}); */