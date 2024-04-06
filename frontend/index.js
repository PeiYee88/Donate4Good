var donor_button = document.getElementsByClassName("donor-button")[0];
var charity_button = document.getElementsByClassName("charity-button")[0];


// donor_button.addEventListener("click", () => {
//     window.location.href = "donor.html";
// })


// donor_button.addEventListener("click", () => {
//     console.log("Donor button clicked!");

//     alert("Donor button clicked!");
// });

donor_button.addEventListener('click', async () => {
    try {
        // alert("he");
        console.log("click")
        // Make a GET request to fetch count of documents from backend API
        const response = await fetch('http://localhost:3000/api');
        const data = await response.json();
        console.log('Number of documents:', data.count);
        // Redirect or perform other actions based on the response
    } catch (error) {
        console.error('Error:', error);
        // Handle errors
    }
});


charity_button.addEventListener("click", () => {
    window.location.href = "charity.html";
})
