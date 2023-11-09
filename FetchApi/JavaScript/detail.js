const movieUrl = new URLSearchParams(location.search).get("id");
const API_URL = `https://api.tvmaze.com/shows/${movieUrl}`;
const movieDetail = document.querySelector(".movie-container");
axios
  .get(API_URL)
  .then((detail) => {
    movieDetail.innerHTML = `<div class="row movie">
        <div class="moive-img col-lg-6">
          <img
            src="${detail.data.image.medium}"
            alt=""
          />
        </div>
        <div class="details col-lg-6">
          <div class="details-head">
            <h1 class="detail-title">${detail.data.name}</h1>
            <i class="detail-description">
              ${detail.data.summary}
            </i>
          </div>
          <div class="details-body">
            <ul class="detail-items">
              <li class="detail-item"><b>IMDB Point:</b> ${detail.data.rating.average}</li>
              <li class="detail-item"><b>Language:</b> ${detail.data.language}</li>
              <li class="detail-item">
                <b>Genre:</b> ${detail.data.genres}
              </li>
              <li class="detail-item"><b>Premiered:</b> ${detail.data.premiered}</li>
              <li class="detail-item"><b>Ended:</b> ${detail.data.ended}</li>
            </ul>
          </div>
        </div>
      </div>`;
    console.log(detail);
  })
  .catch((err) => {
    console.log(err);
  });
