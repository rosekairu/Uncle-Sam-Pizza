$(document).ready(function () {
    $("#submit-button").click(function (event) {
        //event.preventDefault();
        var name = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var location = document.getElementById("location").value;
        var phone = document.getElementById("phone").value;
        // form validation
        if (name == "") {
            alert("Please enter your name");
            return false;
        } else if (email == "") {
            alert("Please enter your email address")
            return false;
        } else if (location == "") {
            alert("Please enter Delivery Address")
            return false;
        } else if (phone == "") {
            alert("Please give us feedback")
            return false;
        } else {
            alert("Dear " + name + ", We Have Received Your Order. Kindly Await Delivery. Thank You.");
        }
        $("button").on('click', function () {
            $('form').each(function () {
                this.reset();
            });
        });

    });
});