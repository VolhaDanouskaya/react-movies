class MoviesService {
  apiURL = 'http://localhost:4000/movies/';

  fetchMovies = (filter, sort, query) => fetch(this.buildUrl(filter, sort, query)).then((res) => res.json());

  getMovieById = (id) => fetch(this.apiURL + id);

  addMovie = (movie) =>
    fetch(this.apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }).then((res) => res.json());

  updateMovie = (movie) =>
    fetch(this.apiURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });

  deleteMovie = (id) => fetch(this.apiURL + id, { method: 'DELETE' });

  buildUrl = (filter, sort, query) => {
    let url = `${this.apiURL}?sortBy=${sort}&sortOrder=desc`;
    if (filter && filter !== 'All') {
      url += `?filter=${filter}`;
    }
    if (query) {
      url += `&search=${query}&searchBy=title`;
    }
    return url;
  };
}

export default new MoviesService();
