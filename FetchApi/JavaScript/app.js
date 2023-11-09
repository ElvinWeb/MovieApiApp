const API_URL = "https://api.tvmaze.com/shows";
const cardsContainer = document.querySelector(".cards-container");
axios
  .get(API_URL)
  .then((result) => {
    result.data.forEach((card) => {
      cardsContainer.innerHTML += `
        <div class="card col-3 shadow-sm" style="width: 18rem">
            <img src="${card.image.medium}" class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">Premiere: ${card.premiered}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">IMDB Rating: ${card.rating.average} </li>
                <li class="list-group-item">Genre: ${card.genres[0]} </li>
                <li class="list-group-item">Language: ${card.language}</li>
            </ul>
            <div class="card-body d-flex">
                <a href="${card.officialSite}" class="card-link btn btn-primary">Go to website</a>
                <a href="../Html/detail.html?id=${card.id}" class="card-link btn btn-success">Go to detail</a>
            </div>
      </div>`;
    });
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
