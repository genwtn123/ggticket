<template>
  <div class="backgroundblack">
    <div class="backgroundgray">
      <div class="column spacetop ml-9 mr-9 mb-5">
        <p class="title_pro_e">Promotion</p>
        <p class="title_pro_t">โปรโมชั่น</p>
      </div>
      <div class="is-multiline columns is-variable is-2 ml-9 mr-9">
        
        
        <div v-for="ad in advertisement"
        :key="ad.ad_id"  class="column is-one-third mt-5">
          <div id="card_pro" class="card">
            <div id="card_img_pro" class="card-image">
              <figure class="image is-1by1">
                <img :src="imagePath(ad.ad_image)" alt="Placeholder image" />
              </figure>
            </div>
            <div id="card_body_pro" class="card-content">
              <div id="food" class="media">
                <div class="media-content">
                  <p id="detail_pro " class="whitefont">
                    {{ad.ad_name}}
                  </p>
                  <p id="condition" class="whitefont">{{ad.ad_detail}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
        
      
      </div>
    </div>
  </div>
  
</template>

<script>
import AdService from "../service/AdService";
export default {
  mounted(){
    this.getad();
  }
   ,
  data() {
    return {
      image_pro:
        "https://www.ryt9.com/img/files/20200805/iq1ae0ceafc9324bf358ca899a26c3831c.jpg",
      advertisement: []
    };
  },
  methods: {
    async getad(){
      try{
        let keep = await AdService.getad();
        console.log(keep);
        this.advertisement = keep.data
      }
      catch(err){
        console.log(err)
      }
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
  }
};
</script>

<style>
.v-application--wrap{
  background: #121212;
}
#condition {
  color: #121212;
  font-size: 20px;
}
#card_img_pro {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.spacetop {
  margin-top: 60px;
}
.title_pro_t {
  font-size: 30px;
  color: #6f717b;
  text-align: left;
  border-bottom: #dcdcdc 5px solid;
}
.title_pro_e {
  font-size: 40px;
  color: #dcdcdc;
  text-align: left;
}

.backgroundgray {
  background-color: #212835;
}
.whitefont {
  color: #dcdcdc;
  font-size: 20px;
}
#card_pro {
  background-color: #ff7810;
  border-radius: 20px;
  width: 70%;
  text-align: center;
}
#card_body_pro {
  height: 220px;
}
#detail_pro {
  height: 62px;
}
</style>
