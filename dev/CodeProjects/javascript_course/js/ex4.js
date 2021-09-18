//Question No. 1
var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};
document.getElementById("shipments").onchange = function()
{
    var selectedOption = document.getElementById("shipments").value;
    var leadTime = shipments[selectedOption].leadTime;
    var fee = shipments[selectedOption].fee;
    var orderDate = new Date();
    var deliveryDate = new Date(orderDate.getTime() + (86400000 * leadTime));
    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);
}

//Question No. 2
var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotHH3gOjPDdMu85_mebSwaM_G8Q0evN4slvRhC_CSoHP-a4nQ2X4xgC9VOtTwz3OOG4Q3n_k&usqp=CAc"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX466_.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://mac-more.co.ke/apple/wp-content/uploads/2017/12/02-oct-2017.fw_-5.png"
    }
};

var radioStuff = document.getElementsByName("product");
for(var a = 0; a < radioStuff.length; a++)
{
    radioStuff[a].onchange = function()
    {
        for(var b = 0; b < radioStuff.length; b++)
        {
            if(radioStuff[b].checked)
            {
                var selectedRadioButton = radioStuff[b].value;
                document.getElementById("phone_name").innerHTML = phones[selectedRadioButton].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadioButton].currency + (phones[selectedRadioButton].price.toFixed(2)).toString();
                document.getElementById("phone_image").src = phones[selectedRadioButton].imageUrl;
            }
        } 
    }
}

//Question No. 3

var clockIsRunning = false, startTime, currentTime, elapsedTime = 0, clockInterval, hrs, mins, secs, remainder, formattedTime;

function add_zero_in_the_starting(number){
    if(number < 10)
    {
        return "0" + number.toString();
    }
    else
    {
        return number.toString();
    }
}

document.getElementById("start_stop").onclick = function()
{
    if(!clockIsRunning)
    {
        //start the clock
        clockIsRunning = true;

        if(elapsedTime == 0)
        {
            startTime = new Date().getTime();
        }
        else
        {
            startTime = new Date().getTime() - elapsedTime;
        }
        clockInterval = window.setInterval(function()
        {
            //mils per hour = 3600000
            //mils per minute = 60000
            //mils per second = 1000
            hrs = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hrs * 3600000);
            
            mins = Math.floor(remainder / 60000);
            remainder -= (mins * 60000);

            secs = Math.floor(remainder / 1000);
            remainder -= (secs * 1000);

            formattedTime = add_zero_in_the_starting(hrs) + ":" + add_zero_in_the_starting(mins) + ":" + add_zero_in_the_starting(secs) + ":" + add_zero_in_the_starting(remainder)
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;
            document.getElementById("stopwatch").innerHTML = formattedTime;
        },10);
    }
    else
    {
        //stop the clock
        window.clearInterval(clockInterval)
        clockIsRunning = false;
    }
}

document.getElementById("reset").onclick = function()
{
    startTime = new Date().getTime();
    if(!clockIsRunning)
    {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }
}