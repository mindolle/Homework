const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2UwZjVkYjAyY2Y4ZjE0NWZiNWMwMGU3NGY2N2NjMSIsInN1YiI6IjY1OTUxYmYwZDdhNzBhMTFjNzY5M2JhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTKOQA-TTttftHzF9KVG1gnBFmhCHcEqGJpfWotKnDs'
  }
};

const imageUrl = "https://image.tmdb.org/t/p/w500";

// let list = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


  const getData = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await res.json();
        console.log(data);

        for (let i = 0; i < data.results.length; i++) {
            const card =
            `<div class="card" id="${data.results[i].id}">
                <img src="${imageUrl}${data.results[i].poster_path}" class="image"
                    alt="${data.results[i].title}" onclick="alert('영화 ID : ${data.results[i].id}')" >
                <div class="text">
                    <h3 >${data.results[i].title}</h3>
                    <p>${data.results[i].overview}</p>
                    <strong>평점: ${data.results[i].vote_average}</strong>
                </div>
            </div>`

            let cardlist = document.querySelector("#cardList");
            cardlist.insertAdjacentHTML('beforeend', card);
        }
    } catch (error) {
        console.log("error");
    }
}

getData();