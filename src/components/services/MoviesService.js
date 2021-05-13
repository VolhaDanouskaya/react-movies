class MoviesService {
  apiURL = 'http://localhost:4000/movies/';

 fetchMovies = (filter, sort) => {
   if (filter && filter !== 'All') {
     return fetch(`${this.apiURL}?filter=${filter}&sortBy=${sort}&sortOrder=desc`)
       .then(
         (res) => res.json(),
       );
   } if (sort) {
     return fetch(`${this.apiURL}?sortBy=${sort}&sortOrder=desc`).then((res) => res.json());
   }
   return fetch(this.apiURL).then((res) => res.json());
 };

 addMovieAPI = (movie) => fetch(this.apiURL, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(movie),
 }).then((res) => res.json());

 updateMovieAPI = (movie) => fetch(this.apiURL, {
   method: 'PUT',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(movie),
 });

 deleteMovieAPI = (id) => fetch(this.apiURL + id, { method: 'DELETE' });

 sortByReleaseDate = (m) => [...m].sort((a, b) => {
   const firstDate = new Date(a.release_date);
   const secondDate = new Date(b.release_date);
   return secondDate - firstDate;
 });

 sortMovies = (movies, byValue) => {
   switch (byValue) {
     case 'vote_average':
       return [...movies].sort((a, b) => b.vote_average - a.vote_average);
     case 'release_date':
     default:
       return this.sortByReleaseDate(movies);
   }
 };
}

export default new MoviesService();
