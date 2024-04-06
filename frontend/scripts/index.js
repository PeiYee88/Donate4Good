var donor_button = document.getElementsByClassName("donor-button")[0];
var charity_button = document.getElementsByClassName("charity-button")[0];


donor_button.addEventListener("click", () => {
    window.location.href = "../pages/donor.html";
})


charity_button.addEventListener("click", () => {
    window.location.href = "../pagescharity.html";
})
