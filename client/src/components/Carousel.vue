<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="ad of this.ad"
      :src="imagePath(ad.ad_image)"
      :key="ad.ad_id"
      @click="gopromotion()"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import AdService from "../service/AdService";
export default {
  data() {
    return {
      ad: [],
    };
  },
  mounted() {
    this.getAd();
  },
  methods: {
    async getAd() {
      let keep = await AdService.getAd();
      for (let ad of keep.data) {
        if (this.ad.length < 5) {
          this.ad.push(ad);
        }
      }
    },
    gopromotion() {
      this.$router.push({ name: "Promotion" });
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:12000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
  },
};
</script>