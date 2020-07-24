

const petForm = document.querySelector("#pet-form");

petForm.addEventListener("submit", fetchAnimals);

//fetch animals from API
function fetchAnimals(e){
    e.preventDefault();
    
    //get user input
    const key = "CIbntt4JECoiWAAsvrXjBl6d0U2btsVpxB2RvYeDvgbvMOfqC9";
    const secret = "f6UaLPI7VZCvetLSQocjTKt0HcMUktilmMOmmcE1"
    const zip = document.querySelector("#zip").value;
    let queryURL = `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${key}&client_secret=${secret}`;

    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET",     
     })
    
    .then(function(data) {
        console.log(data);


    })
    .catch(function(err) {
        console.log(err);
    })
}

function callback(data) {

    console.log(data);
}

function refreshTokens() {
     //get user input
     const key = "h1e0Cf85GZzgeV4OwnUCy9UJzHFkRXHMB4TRw8JC0cS8m38yO2";
     const secret = "U8stylEdGcG0wL1hLccvptLw3491npRMjBP41me2"
    //  const zip = document.querySelector("#zip").value;
     let queryURL = `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=${key}&client_secret=${secret}`;
     console.log(queryURL)
    
     return $.ajax({
         dataType: "json",
         url: queryURL,
         method: "GET",     
      });
     
}

refreshTokens()
.then(function(tokenResponse) {
    console.log(tokenResponse);
})
.catch(function(errorResponse) {
    console.log(errorResponse);
})