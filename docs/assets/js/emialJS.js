function sendMail () {

    let tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send("service_8aiw497", "template_7cick6l", tempParams)
    .then(function (response) {
        console.log("success", response.status);
        alert("le message a été envoyé avec succès");
    });

    setTimeout(
        document.querySelector(".contact-form").reset(),
        1000
    )
}