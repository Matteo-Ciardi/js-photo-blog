// COSTANTE PER API
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

// OUTPUT
const fullCard = document.getElementById("card-container");

// CHIAMATA AJAX PER GENERARE DATI PER LE CARD
axios.get(apiRef).then((response) => {

    const posts = response.data;

    let postsList = "";

    posts.forEach(postElement => {

        postsList += `
        <div class="card">
            <img class="pin" src="assets/img/pin.svg">
            <img id="card-img" src="${postElement.url}">
            <div class="card-body">
                <p id="date">${postElement.date}</p>
                <p id="title">${postElement.title.toUpperCase()}</p>
            </div>
        </div> `;

    });

    fullCard.innerHTML = postsList;

    // RICHIAMARE OVERLAY SUL CLICK
    const cards = document.querySelectorAll(".card");
    const overlay = document.getElementById("overlay");

    cards.forEach(cardItem => {
        cardItem.addEventListener("click", () => {
            overlay.style.display = "flex";
        });
    });

    // FAR SPARIRE OVERLAY
    const myButton = document.getElementById("button");

    myButton.addEventListener("click", () => {
        overlay.style.display = "none";
    })
});


