<template>
  <div class="backgroundblack">
      <div class="column ml-9 mr-9">
        <p class="movie_e">Movie</p>
        <p class="movie_t">ภาพยนตร์</p>
      </div>

      <div class="container is-max-desktop">
        <div class="is-multiline columns is-variable is-2 mb-5">
          
          
          <button class="column is-one-quarter" v-for="movie of this.movie" :key="movie.movie_id">
              <div id="card" class="card" @click="selectmovie(movie)">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img v-bind:src="imagePath(movie.movie_image)" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div id="media" class="media">
                    <div class="media-content">
                      <p id="title " class="whitefontz">{{movie.movie_name}}</p>
                      <p class="whitefont">Available on : {{movie.movie_releasetime}}</p>
                      <p class="whitefont">Type : {{movie.movie_type}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import MovieService from "../service/MovieService";
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      movie : [],
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      try {
        let keep = await MovieService.getMovie();
        console.log(keep);
        for(let mov in keep.data){
          keep.data[mov].movie_releasetime =  keep.data[mov].movie_releasetime.match(/.+(?=T)/)[0]

        }
        this.movie = keep.data
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
    selectmovie(movie){
      this.$store.commit("keepmovie", movie);
      this.$router.push({name:'Theater'})
    }
  },
};
</script>

<style>
.spacetop {
  margin-top: 60px;
}
.movie_t {
  font-size: 30px;
  color: #6f717b;
  border-bottom: #dcdcdc 5px solid;
  text-align: left;
}
.movie_e {
  font-size: 40px;
  color: #dcdcdc;
  text-align: left;
}

.backgroundgray {
  background-color: #212835;
  margin-left: 12%;
  margin-right: 12%;
  padding-left: 2%;
  padding-bottom: 12%;
}
.whitefont {
  color: #dcdcdc;
  font-size: 20px;
  text-align: left;
}
.whitefontz {
  color: #04009a;
  font-size: 25px;
}

#media {
  height: 100px;
}
#card {
  background-color: #ff7810;
  border-radius: 20px;
}
.backgroundblack {
  background-color: #121212;
}
</style>
