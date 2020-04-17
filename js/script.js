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

        total += 7.00
    }
    if (document.getElementById('topping0').checked) {
        count++;
    }
    if (document.getElementById('topping1').checked) {
        count++;
    }
    if (document.getElementById('topping2').checked) {
        count++;
    }
    if (document.getElementById('topping3').checked) {
        count++;
    }
    if (document.getElementById('topping4').checked) {
        count++;
    }
    if (document.getElementById('topping5').checked) {
        count++;
    }
    if (document.getElementById('topping6').checked) {
        count++;
    }
    if (document.getElementById('topping7').checked) {
        count++;
    }
    if (document.getElementById('topping8').checked) {
        count++;
    }
    if (document.getElementById('topping9').checked) {
        count++;
    }
    if (document.getElementById('topping10').checked) {
        count++;
    }
    if (document.getElementById('topping11').checked) {
        count++;
    }
    if (document.getElementById('topping12').checked) {
        count++;
    }

    total += count * topping;
    if (document.getElementById('delivery').checked) {
        total = total * 1.10;
    }
    var result = Math.round(total * 100) / 100;
    if (document.getElementById('delivery').checked) {
        alert('Your Total will be $' + result + ' delivered to ' + deliveryaddress);
    } else {
        alert('Your Total will be $' + result + ' and will be ready for pickup in 30 minutes');
    }
}

function blank(myForm) {
    document.getElementById('carryout').checked = true;
    document.getElementById('small').checked = true;
    document.getElementById('address').value = "";
    for (var a = 0; a < 13; a++) {
        var topname = "topping" + a;
        document.getElementById(topname).checked = false;
    }

}