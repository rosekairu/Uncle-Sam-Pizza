$(document).ready(function () {
    $("#submit-button").click(function (event) {
        //event.preventDefault();
        var name = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        // form validation
        if (name == "") {
            alert("Please enter your name");
            return false;
        } else if (email == "") {
            alert("Please enter your email address")
            return false;
        } else if (subject == "") {
            alert("Please enter the subject matter")
            return false;
        } else if (message == "") {
            alert("Please give us feedback")
            return false;
        } else {
            alert("Dear " + name + ", we have received your message. Thank you for reaching out to us.");
        }
        $("button").on('click', function () {
            $('form').each(function () {
                this.reset();
            });
        });

    });
});