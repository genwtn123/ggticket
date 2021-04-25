<template>
<div class="backgroundblack">
  <div class="backgroundgray">
    <div class="column spacetop ml-9 mr-9">
        <p class="movie_e">Movie</p>
        <p class="movie_t">ภาพยนตร์</p>
      </div>
    
    <div class="container is-max-desktop">
      
      <div class="is-multiline columns is-variable is-2 mb-5">
        <!-- Start สินค้า -->
        <div class="column is-one-quarter">
          <a href="order.html">
            <div
              id="card" class="card"
              
            >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img v-bind:src="image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div id="media" class="media">
                  <div class="media-content">
                    <p id="title " class="whitefont">Spongebob Movie</p>
                    <p class="whitefont">01-April-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-one-quarter">
          <a href="order.html">
            <div
              id="card" class="card"
              
            >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img v-bind:src="image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div id="media" class="media">
                  <div class="media-content">
                    <p id="title" class="whitefont">Spongebob Movie</p>
                    <p class="whitefont">01-April-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-one-quarter">
          <a href="order.html">
            <div
              id="card" class="card"
              
            >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img v-bind:src="image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div id="media" class="media">
                  <div class="media-content">
                    <p id="title" class="whitefont">Spongebob Movie</p>
                    <p class="whitefont">01-April-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-one-quarter">
          <a href="order.html">
            <div
              id="card" class="card"
              
            >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img v-bind:src="image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div id="media" class="media">
                  <div class="media-content">
                    <p id="title" class="whitefont">Spongebob Movie</p>
                    <p class="whitefont">01-April-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

         <div class="column is-one-quarter">
          <a href="order.html">
            <div
              id="card" class="card"
              
            >
              <div class="card-image">
                <figure class="image is-1by1">
                  <img v-bind:src="image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div id="media" class="media">
                  <div class="media-content">
                    <p id="title" class="whitefont">Spongebob Movie</p>
                    <p class="whitefont">01-April-2021</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
    };
  },
  methods: {},
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
  margin-left: 15%;
  margin-right: 15%;
}
.whitefont {
  color: #dcdcdc;
  font-size: 20px;
}
#media {
  height: 100px;
}
#card{
  background-color: #ff7810; 
  border-radius: 20px;
}
.backgroundblack{
  background-color: #121212;
}
</style>
