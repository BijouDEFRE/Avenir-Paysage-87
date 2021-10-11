// listener for view profile in "Linkedin"
const likedinProfil = document.querySelector("#twitter").addEventListener("click", () => {
    if (window.confirm("Voulez vous voir ma page sur Twitter ?")) {
        window.open("https://www.google.com/maps/place/Avenir+paysage+87/@45.858641,1.2318975,12z/data=!4m5!3m4!1s0x0:0xd0be6344ab318fc5!8m2!3d45.858641!4d1.2318975");
    }
});

// listener for view profile in "Facebook"
const facebookProfil = document.querySelector("#facebook").addEventListener("click", () => {
    if (window.confirm("Voulez vous voir ma page sur Facebook ?")) {
        window.open("https://www.facebook.com/pages/category/Landscape-Company/Avenir-Paysage-87-103327041807703/");
    }
});

export {
    // redirect,
    // opquast,
    likedinProfil,
    facebookProfil,
}