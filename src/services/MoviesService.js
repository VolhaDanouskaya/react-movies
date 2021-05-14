class MoviesService {
  apiURL = 'http://localhost:4000/movies/';

  fetchMovies = (filter, sort) => {
    return fetch(this.buildUrl(filter, sort)).then((res) => res.json());
  };

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

  buildUrl = (filter, sort) => {
    if (filter && filter !== 'All') {
      return `${this.apiURL}?filter=${filter}&sortBy=${sort}&sortOrder=desc`;
    }
    return `${this.apiURL}?sortBy=${sort}&sortOrder=desc`;
  };
}

export default new MoviesService();
