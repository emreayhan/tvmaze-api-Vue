import vuex from "vuex";
import axios from "axios";
import Vue from "vue";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    movies: [],
    movieDetails: {}
  },
  //  we are going to make the call
  actions: {
    LoadMovies() {
      axios
        .get(`https://api.tvmaze.com/search/shows/?`, {
            params: {
              q: "batman"
            }
          })
        .then(res => {
            let movies = res.data
            this.commit('SET_MOVIES',movies)
            })
        .catch(e => console.log(e));
    },
    LoadMovieDetails({commit}, movieId) {
        const url = `https://api.tvmaze.com/shows/${movieId.movieId}`
        axios
        .get(url)
        .then(res => {
            let movieDetails = res.data
            this.commit('SET_MOVIE_DETAILS',movieDetails)
        })
        .catch(e => console.log(e))
    }
  },
  // refresh our state
  mutations: {
      SET_MOVIES (state,movies) {
          state.movies = movies
      },
      SET_MOVIE_DETAILS (state,movieDetails) {
        state.movieDetails = movieDetails
        console.log(movieDetails)
    }
  }
});

