$(document).ready(function () {
    $(".tablehead").click(function () {
        $(this).next("div").slideToggle("slow");
    });
});

function invoice() {

    // Setting size and sizePrice based on selection
    var size = document.querySelector('input[name="size"]:checked').value;
    console.log("size=" + size);
    var sizePrice = 0;
    if (size === "Small") {
        sizePrice = 800;
    };
    if (size === "Medium") {
        sizePrice = 1000;
    };
    if (size === "Large") {
        sizePrice = 1200;
    };
    if (size === "Mega") {
        sizePrice = 1400;
    };
    console.log("sizePrice=" + sizePrice);

    // Setting cheese and cheesePrice based on size + extra cheese selection
    var cheese = document.querySelector('input[name="cheese"]:checked').value;
    console.log("cheese=" + cheese);
    var cheesePrice = 100;
    if (cheese === "Extra") {
        if (size === "Small") {
            cheesePrice = 100;
        } else if (size === "Medium") {
            cheesePrice = 200;
        } else if (size === "Large") {
            cheesePrice = 300;
        } else {
            cheesePrice = 400;
        };
    };
    console.log("cheesePrice=" + cheesePrice);

    // Setting crust and crustPrice based on selection
    var crust = document.querySelector('input[name="crust"]:checked').value;
    console.log("crust=" + crust);
    var crustPrice = 150
    if (crust = "Cheese-Stuffed") {
        crustPrice = 300;
    };
    console.log("crustPrice=" + crustPrice);

    // Setting sauce based on selection
    var sauce = document.querySelector('input[name="sauce"]:checked').value;
    console.log("sauce=" + sauce);

    // Setting meatSelect array and meatPrice based on multiple check boxes selected. Also setting up meatDisplay to convert the array into a convenient string.
    var meatPrice = 200
    var meat = document.getElementsByName("meat");
    var meatSelect = [];
    var meatDisplay = "";
    for (var i = 0; i < meat.length; i++) {
        if (meat[i].checked) {
            meatSelect.push(meat[i].value);
        };
    };
    console.log("meatSelect=" + meatSelect);
    if (meatSelect.length === 1) {
        meatDisplay = meatSelect[0];
    } else if (meatSelect.length > 1) {
        for (i = 0; i < meatSelect.length; i++) {
            meatDisplay += meatSelect[i];
            if (i < (meatSelect.length - 1)) {
                meatDisplay += ", ";
            };
        };
    };
    meatPrice = meatSelect.length * 2;
    console.log("meatPrice=" + meatPrice);
    if (meatSelect.length === 0) {
        meatDisplay = "No Meats";
    }

    // Setting vegSelect array and vegPrice based on multiple check boxes selected
    var vegPrice = 100;
    var veg = document.getElementsByName("veg");
    var vegSelect = [];
    var vegDisplay = "";
    for (var i = 0; i < veg.length; i++) {
        if (veg[i].checked) {
            vegSelect.push(veg[i].value);
        };
    };
    console.log("vegSelect=" + vegSelect);
    if (vegSelect.length > 4) {
        vegPrice = 2;
    };
    console.log("vegPrice=" + vegPrice);
    if (vegSelect.length === 1) {
        vegDisplay = vegSelect[0];
    } else if (vegSelect.length > 1) {
        for (i = 0; i < vegSelect.length; i++) {
            vegDisplay += vegSelect[i];
            if (i < (vegSelect.length - 1)) {
                vegDisplay += ", ";
            };
        };
    };
    if (vegSelect.length === 0) {
        vegDisplay = "No Vegetables";
    }


    // Calculating totalPrice
    var totalPrice = (vegPrice + meatPrice + crustPrice + cheesePrice + sizePrice);
    console.log("totalPrice=" + totalPrice);

    // Enter values into the invoice table
    $("#size").html(size + " Pizza");
    $("#sizeprice").html(" Ksh" + sizePrice + ".00");
    $("#crust").html(crust + " Crust");
    $("#crustprice").html("Ksh" + crustPrice + ".00");
    $("#cheese").html(cheese + " Cheese");
    $("#cheeseprice").html("Ksh" + cheesePrice + ".00");
    $("#sauce").html(sauce + " Sauce");
    $("#sauceprice").html("+0.00");
    $("#meat").html(meatDisplay);
    $("#meatprice").html("Ksh" + meatPrice + ".00");
    $("#veg").html(vegDisplay);
    $("#vegprice").html("+" + vegPrice + ".00");
    $("#totalprice").html(" Ksh" + totalPrice + ".00");



};