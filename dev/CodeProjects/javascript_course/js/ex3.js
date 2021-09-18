//Question No. 1
function celsiusToFahrenheit(celsius)
{
    var fahrenheit = (9 * celsius / 5) + 32
    return fahrenheit;
}
document.getElementById("convert").onclick = function()
{
    var cTemp = parseFloat(document.getElementById("temp_celsius").value);
    if(cTemp == "")
    {
        alert("The temperature informed is invalid")
    }    
    else
    {
        document.getElementById("temp_fahr").innerHTML =  celsiusToFahrenheit(cTemp);
    }
}

//Question No. 2

//2022 - 2050
//anos_copa

var currentYear = 2022;

document.getElementById("anos_copa").innerHTML = "";

while(currentYear <= 2050)
{
    document.getElementById("anos_copa").innerHTML += "<li>" + currentYear + "</li>";
    currentYear += 4;
}

//Question No. 3

document.getElementById("calculate").onclick = function()
{
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = document.getElementById("absences").value;
    var totalClasses = 20;

    if(grade1 == "" || grade2 == "" || absences == "")
    {
        alert("All fields must be filled!");
    }
    else
    {
        var average = (grade1 + grade2) / 2;
        var presence = (totalClasses - absences) / totalClasses;

        var result;
        if(average < 6.5 && presence < 0.7)
        {
            result = "Your student has failed and will not be going to the next grade due to insufficient grade and too many absences."
        }
        else if (average < 6.5)
        {
            result = "Your student has failed and will not be going to the next grade due to insufficient grade."
        }
        else if (presence < 0.7)
        {
            result = "Your student has failed and will not be going to the next grade due to too many absences."
        }
        else
        {
            result = "Your student has been present for a sufficient time and has got good grades so he/she will continue on with the next grade."
        }
    }
}

/* Minimum 70% presence is required to be approved (total number of classes is 20)
Minimum average of 6.5 is required to be approved
If the student fails, we need to inform what was the reason (absences, insufficient grade or both.) */

//Question No. 4
var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

document.getElementById("course_sales").innerHTML = "";
var totalSales = 0;
for (var a = 0; a < sales.length; a++)
{
    var sale = sales[a];
    if(!sale.refundRequested)
    {
        var line = "<tr>";
        line += "<td>" + sale.student + "</td>";
        line += "<td>" + sale.date + "</td>";
        line += "<td>" + sale.amount.toString() + "</td>";
        line += "</tr>";
        document.getElementById("course_sales").innerHTML += line;
        totalSales += sale.amount;
    }
}

document.getElementById("total_sold").innerHTML = totalSales;