<template>
  <div>
    <p class="home_head">RECOMMEND MOVIE FOR YOU</p>
    <div class="scrolling-wrapper">
      <button
        class="card home_card"
        v-for="movie of this.movie"
        :key="movie.id"
      >
        <div id="card" class="card" @click="selectmovie(movie)">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                v-bind:src="imagePath(movie.movie_image)"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div id="media" class="media">
              <div class="media-content">
                <p id="title " class="whitefontz">{{ movie.movie_name }}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.home_card {
  display: inline-block;
  width: 20%;
  margin: 2%;
  height: 400px;
  border-radius: 20px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
import MovieService from "../service/MovieService";
export default {
  data() {
    return {
      movie: [],
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      try {
        let keep = await MovieService.getRecommendMovie();
        console.log(keep.data, "Data");
        console.log(keep.data.length);
        for (let mov of keep.data) {
          if (mov.length != undefined) {
            for (let recom of mov) {
              this.movie.push(recom);
            }
          }else{
            this.movie.push(mov)
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    selectmovie(movie) {
      this.$store.commit("keepmovie", movie);
      this.$router.push({ name: "Theater" });
    },
  },
};
</script>

