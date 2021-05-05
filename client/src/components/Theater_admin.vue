<template>
  <v-container>
    <div style="line-height: 32pt" class="columns pt-6 mt-6">
      <div class="column is-2">
        <div class="title_head">Theater</div>
        <div class="title_sub">จัดการโรงภาพยนต์</div>
      </div>
      <div class="column pt-5" style="text-align: left">
        <img
          style="width: 40px; height: 40px"
          src="../assets/plus.png"
          alt=""
          @click="add_isopen = true"
        />
      </div>
    </div>
    <div v-for="theater in theaters" :key="theater.theater_id">
      <div class="columns is-2 atheater_box my-6">
        <div class="atheater_box_head column is-8">
          Theater {{theater.theater_name}}
          <span class="atheater_box_sub"
            >size
            <span style="color: #ffffff">{{theater.theater_size}}</span>
          </span>
        </div>
        <div class="column">
          <v-btn
            v-if="topen"
            @click="topen = !topen"
            class="atheater_btn mr-6"
            color="#29FEA5"
            >OPEN</v-btn
          >
          <v-btn
            v-if="!topen"
            @click="topen = !topen"
            class="atheater_btn mr-6"
            color="#FE2929"
            >CLOSE</v-btn
          >
          <v-btn
            class="atheater_btn"
            color="#FD7014"
            @click="edit_isopen = true"
            >EDIT</v-btn
          >
        </div>
      </div>
    </div>

    <!-- add modal -->
    <div class="modal" :class="{ 'is-active': add_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card modal-card_admin" style="">
        <header
          class="modal-card-head has-background-black"
          style="border-style: hidden"
        >
          <span class="modal-card-title pl-3 py-1" style="text-align: left"
            ><img src="../assets/Logo.png" class="logo_card"
          /></span>
          <button
            class="delete"
            aria-label="close"
            @click="add_isopen = flase"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pt-3 pb-4"
            style="text-decoration: none; font-size: 30px"
          >
            Add Theater
          </p>
          <div class="columns">
            <div
              class="column is-3"
              style="text-align: right; padding-top: 3.6%"
            >
              <p class="profile_modal_txt py-2 pb-6">Name :</p>
              <p class="profile_modal_txt py-4">Size :</p>
            </div>

            <div class="column pt-6 is-7">
              <v-text-field
                v-model="add_name"
                label="name"
                rounded
                dense
                solo
              ></v-text-field>

              <v-select
                v-model="add_size"
                :items="all_size"
                label="size"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>
            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
              style="
                background-color: #fd7014;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="addTheater"
            >
              ADD
            </button>
            <button
              style="
                background-color: #222831;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="add_isopen = flase"
            >
              CANCEL
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- add modal -->

    <!-- edit modal -->
    <div class="modal" :class="{ 'is-active': edit_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card modal-card_admin">
        <header
          class="modal-card-head has-background-black"
          style="border-style: hidden"
        >
          <span class="modal-card-title pl-3 py-1" style="text-align: left"
            ><img src="../assets/Logo.png" class="logo_card"
          /></span>
          <button
            class="delete"
            aria-label="close"
            @click="edit_isopen = flase"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Edit Theater
          </p>
          <div class="columns">
            <!-- <div class="column pt-3 is-3 pl-6 ml-5">
              <div class="columns" style="width: 350px">
                <p style="color: white" class="column is-4">
                  A
                  <img
                    class="seat_image"
                    v-bind:src="image_seat"
                    alt="Placeholder image"
                  />
                </p>
                <v-checkbox v-model="checkbox" class="column"></v-checkbox>
              </div>

              <div class="columns" style="width: 350px">
                <p style="color: white" class="column is-4">
                  B
                  <img class="seat_image"
                    v-bind:src="image_seat"
                    alt="Placeholder image"
                  />
                </p>
                <v-checkbox v-model="checkbox" class="column is-1"></v-checkbox>
              </div>

              <div class="columns" style="width: 350px">
                <p style="color: white" class="column is-4">
                  C
                  <img
                    class="seat_image"
                    v-bind:src="image_seat"
                    alt="Placeholder image"
                  />
                </p>
                <v-checkbox v-model="checkbox" class="column is-1"></v-checkbox>
              </div>

              <div class="columns" style="width: 350px">
                <p style="color: white" class="column is-4">
                  D
                  <img
                    class="seat_image"
                    v-bind:src="image_seat"
                    alt="Placeholder image"
                  />
                </p>
                <v-checkbox v-model="checkbox" class="column is-1"></v-checkbox>
              </div>

              <div class="columns" style="width: 350px">
                <p style="color: white" class="column is-4">
                  E
                  <img
                    class="seat_image"
                    v-bind:src="image_seat"
                    alt="Placeholder image"
                  />
                </p>
                <v-checkbox v-model="checkbox" class="column is-1"></v-checkbox>
              </div>
            </div> -->

            <div
              class="column is-2"
              style="text-align: right; padding-top: 3.6%"
            >
              <p class="profile_modal_txt py-2 pb-6">Name :</p>
              <p class="profile_modal_txt py-4">Size :</p>
            </div>

            <div class="column is-9 pt-6">
              <v-text-field
                v-model="name"
                label="name"
                rounded
                dense
                solo
              ></v-text-field>

              <v-select
                v-model="size"
                :items="all_size"
                label="size"
                required
                rounded
                dense
                solo
                class="pt-3"
              ></v-select>
            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
              style="
                background-color: #fd7014;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
            >
              EDIT
            </button>
            <button
              style="
                background-color: #222831;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="delete_isopen = true"
            >
              DELETE
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- edit modal -->

    <!-- delete modal -->
    <div class="modal" :class="{ 'is-active': delete_isopen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header
          class="modal-card-head has-background-black"
          style="border-style: hidden"
        >
          <span class="modal-card-title pl-3 py-1" style="text-align: left"
            ><img src="../assets/Logo.png" class="logo_card"
          /></span>
          <button
            class="delete"
            aria-label="close"
            @click="delete_isopen = flase"
          ></button>
        </header>
        <section class="modal-card-body profile_modal">
          <div style="font-size: 20px; text-align: center; color: white">
            Are you sure that you want to delete ?
          </div>
        </section>
        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
              style="
                background-color: #fd7014;
                border-style: hidden;
                color: white;
              "
              class="button mx-3 px-6"
            >
              OK
            </button>
            <button
              style="
                background-color: #222831;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
              @click="delete_isopen = flase"
            >
              CANCEL
            </button>
          </div>
        </footer>
      </div>
    </div>
    <!-- delete modal -->
  </v-container>
</template>

<script>
import TheaterAdmin from "../admin/TheaterAdmin";
export default {
  data() {
    return {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
      image_seat:
        "https://cdn3.iconfinder.com/data/icons/movie-entertainment-filled-outline-style/64/13_seat-movie-cinema-chair-theater-512.png",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
      all_size: ["S", "M", "L"],
      topen: false,
      checkbox: true,
      theaters: [],
      add_name: "",
      add_size: "",
      new: []
    };
  },
  mounted() {
    this.getTheater();
  },
  methods: {
    async getTheater(){
      try {
        let keep = await TheaterAdmin.getTheater();
        console.log(keep);
        this.theaters = keep.data
      } catch (err) {
        console.log(err);
      }
    },

    createForm: function () {
      let form = new FormData();
      form.append("theater_name", this.add_name);
      form.append("theater_size", this.add_size);
      this.new.push(this.add_name);
      this.new.push(this.add_size);
      console.log(form);
      return form;
    },

    async addTheater(){
      if(this.add_name != "" && this.add_size != ""){
        var result = await TheaterAdmin.addTheater(this.createForm());
        console.log("res", result.status);
        console.log("success by vuejs");
        alert("Success");
        this.theaters.push({"theater_name": this.add_name, "theater_size": this.add_size})
        this.add_isopen = false
        this.add_name = ""
        this.add_size = ""
        }else{
          alert("Pls fill all")
        }
    }

  },
};
</script>

<style>
.atheater_box {
  border: 3px solid #fd7014;
  height: 120px;
}

.atheater_box_head {
  padding-top: 35px;
  font-size: 38px;
  color: #ffffff;
  text-align: left;
  padding-left: 5%;
}

.atheater_box_sub {
  padding-top: 35px;
  font-size: 30px;
  color: #74787d;
}

.atheater_btn {
  margin-top: 20px;
  height: 50px !important;
  width: 150px !important;
  border-radius: 0px;
  font-size: 30px !important;
}

.seat_image {
  width: 50px;
}

.logo_card {
  text-align: left;
  width: 170px;
  height: 30px;
}

.profile_modal {
  background-color: #222831 !important;
}

.profile_modal_txt {
  color: #a1a4a8;
}
</style>