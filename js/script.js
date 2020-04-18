var deliveryaddress;

function insert(myForm) {

    var a = prompt("Please enter your delivery address", "Your address here");
    document.getElementById('address').value = a;
    deliveryaddress = a;
}

function total(myForm) {
    var total = 0.00;
    var topping = 1.50;
    var count = 0;
    if (document.getElementById('small').checked) {

        total += 5.00
    }
    if (document.getElementById('medium').checked) {

        total += 6.00
    }
    if (document.getElementById('large').checked) {



function blank(myForm) {
    document.getElementById('carryout').checked = true;
    document.getElementById('small').checked = true;
    document.getElementById('address').value = "";
    for (var a = 0; a < 13; a++) {
        var topname = "topping" + a;
        document.getElementById(topname).checked = false;
    }
