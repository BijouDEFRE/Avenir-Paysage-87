function sendMail () {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send("service_8aiw497", "template_7cick6l", tempParams)
    .then(function (response) {
        console.log("success", response.status);
    });
}