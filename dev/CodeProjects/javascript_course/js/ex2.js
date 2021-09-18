//Question No. 1
function celsiusToFahrenheit(celsius)
{
    var fahrenheit = (9 * celsius / 5) + 32
    return fahrenheit;
}

var celsius1 = parseFloat (document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML = celsiusToFahrenheit(celsius1);

var celsius2 = parseFloat (document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = celsiusToFahrenheit(celsius2);

var celsius3 = parseFloat (document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML = celsiusToFahrenheit(celsius3);

//Question No. 2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification = classification.slice(-3,);
//best_students
document.getElementById("best_students").innerHTML = classification;

//Question No. 3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_star_reviews': 4,
    'total_reviews': function()
    {
        var total = this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_star_reviews'];
        return total;
    }
}

document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];

var percentage = Math.round (course['5_stars_reviews'] / course.total_reviews() * 100);
document.getElementById("reviews_5_stars").innerHTML = percentage.toString() + "%";


//Question No. 4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList.pop();
shoppingList.unshift("Chocolate");
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);

//Get the last item and place it at the beginning of the list. {Done}
//Add two more items at the end of the list: Cheese and Eggs {Done}
//Show the updated list in the console {Done}