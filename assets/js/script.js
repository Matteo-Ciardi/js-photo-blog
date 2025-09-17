// COSTANTE PER API
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

// OUTPUT
const fullCard = document.getElementById("card-container");

axios.get(apiRef).then((response) => {
    const posts = response.data;

    let postsList = "";

    posts.forEach(postElement => {
        // console.log(postElement);

        postsList += `<div id="card">
        <img id="card-img" src="${postElement.url}">
        <div class="card-body">
            <p id="date">${postElement.date}</p>
            <p id="title">${postElement.title.toUpperCase()}</p>
        </div>
    </div>`;
    });
    fullCard.innerHTML = postsList;
})

