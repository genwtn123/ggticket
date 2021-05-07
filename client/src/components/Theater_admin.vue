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
          @click="addopen"
        />
      </div>
    </div>
    <div v-for="theater in theaters" :key="theater.theater_id">
      <div class="columns is-2 atheater_box my-6">
        <div class="atheater_box_head column is-8">
          Theater {{ theater.theater_name }}
          <span class="atheater_box_sub"
            >size
            <span style="color: #ffffff">{{ theater.theater_size }}</span>
          </span>
        </div>
        <div class="column">
          <v-btn
            v-model="theater.theater_status"
            v-if="theater.theater_status"
            @click="edit_status(theater)"
            class="atheater_btn mr-6"
            color="#29FEA5"
            >OPEN</v-btn
          >
          <v-btn
            v-model="theater.theater_status"
            v-if="!theater.theater_status"
            @click="edit_status(theater)"
            class="atheater_btn mr-6"
            color="#FE2929"
            >CLOSE</v-btn
          >
          <v-btn
            class="atheater_btn"
            color="#FD7014"
            @click="edit_modal(theater)"
            >EDIT</v-btn
          >
        </div>
      </div>
    </div>

    <!-- add modal -->
    <div class="modal" :class="{ 'is-active': add_isopen }">
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
            @click="add_isopen = false"
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
              <v-form ref="addform">
              <v-text-field
                v-model="add_name"
                label="name"
                rounded
                dense
                solo
                :rules="[() => !!add_name || 'This field is required']"
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
                :rules="[() => !!add_size || 'This field is required']"
              ></v-select>
              </v-form>
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
              @click="add_isopen = false"
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
      <div class="modal-card modal-card_admin" style="width: 80% !important">
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
            @click="
              edit_isopen = false;
              want_seat = [];
              getTheater();
            "
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
            <div
              class="column is-3"
              style="text-align: right; padding-top: 2.6%"
            >
              <p class="profile_modal_txt py-2 pb-6">Name :</p>
              <p class="profile_modal_txt py-4">Size :</p>
            </div>

            <div class="column is-6 pt-6">
              <v-form ref="valid">
                <v-text-field
                  v-model="val.theater_name"
                  label="name"
                  rounded
                  dense
                  solo
                  :rules="[
                    () => !!val.theater_name || 'This field is required',
                  ]"
                ></v-text-field>
              </v-form>

              <v-select
                :disabled="true"
                v-model="val.theater_size"
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

          <div class="pt-3 is-3">
            <div
              class="columns is-centered"
              style="font-size: 25px; color: white"
              v-for="index in seat_w"
              :key="'s' + index"
            >
              <span class="pt-3 pr-6">{{
                rows[honey_w + seat_w - index]
              }}</span>
              <span
                style="color: white; font-size: 12px"
                v-for="seat in want_seat"
                :key="seat.seat_no"
              >
                <span
                  v-if="
                    seat.seat_name.substring(0, 1) ==
                    rows[honey_w + seat_w - index]
                  "
                  style="width: 100%"
                  @click="editSeat(seat)"
                >
                  <img
                    v-if="seat.seat_status"
                    class="seat_image"
                    v-bind:src="image_seat"
                  />
                  <img
                    v-if="!seat.seat_status"
                    class="seat_image"
                    v-bind:src="seat_mark"
                  />
                </span>
              </span>
            </div>

            <div
              class="columns is-centered"
              style="font-size: 25px; color: white"
              v-for="index in honey_w"
              :key="'h' + index"
            >
              <span class="pt-3 pr-6">{{ rows[honey_w - index] }}</span>
              <span
                style="color: white; font-size: 12px"
                v-for="seat in want_seat"
                :key="seat.seat_no"
              >
                <span
                  v-if="seat.seat_name.substring(0, 1) == rows[honey_w - index]"
                  style="width: 100%"
                  @click="editSeat(seat)"
                >
                  <img
                    v-if="seat.seat_status"
                    class="seat_image"
                    v-bind:src="image_honeymoon"
                  />
                  <img
                    v-if="!seat.seat_status"
                    class="seat_image"
                    v-bind:src="honeymoon_mark"
                  />
                </span>
              </span>
            </div>
            <p></p>
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
              @click="edit()"
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
            @click="delete_isopen = false"
          ></button>
        </header>
        <section class="modal-card-body profile_modal">
          <div style="font-size: 20px; text-align: center; color: white">
            Are you sure that you want to delete
            <p></p>
            Theater :
            <span style="color: red"> " {{ save.theater_name }} " </span> ?
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
              @click="delTheather"
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
              @click="delete_isopen = false"
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
      image_honeymoon:
        "https://cdn4.iconfinder.com/data/icons/movie-41/512/Honeymoon-seat-sofa-movie-Cinema-128.png",
      honeymoon_mark: "https://sv1.picz.in.th/images/2021/05/06/AmfNWb.png",
      seat_mark: "https://sv1.picz.in.th/images/2021/05/06/AmfBKf.png",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
      all_size: ["S", "M", "L"],
      checkbox: true,
      theaters: [],
      add_name: "",
      add_size: "",
      edit_name: "",
      edit_size: "",
      new: [],
      val: [],
      save: [],
      seat_w: 0,
      seat_l: 0,
      honey_w: 0,
      honey_l: 0,
      rows: ["A", "B", "C", "D", "E", "F", "G", "H"],
      save_seat: {},
      showtime: [],
      all_seat: [],
      want_seat: [],
    };
  },
  mounted() {
    this.getTheater();
  },
  methods: {
    async getTheater() {
      try {
        let keep = await TheaterAdmin.getTheater();
        console.log(keep);
        this.theaters = keep.data[0];
        keep.data[2].forEach((item) => {
          this.showtime.push(item.theater_id);
        });
        this.all_seat = keep.data[3];
      } catch (err) {
        console.log(err);
      }
    },

    edit_modal(theater) {
      this.edit_isopen = true;
      this.save = theater;
      this.val = {
        theater_id: theater.theater_id,
        theater_name: theater.theater_name,
        theater_size: theater.theater_size,
        theater_status: theater.theater_status,
      };
      this.name = theater.theater_name;

      this.all_seat.forEach((seat) => {
        seat.theater_id == this.val.theater_id ? this.want_seat.push(seat) : 0;
      });

      if (theater.theater_size == "S") {
        this.seat_w = 3;
        this.seat_l = 10;
        this.honey_w = 2;
        this.honey_l = 10;
      } else if (theater.theater_size == "M") {
        this.seat_w = 4;
        this.seat_l = 12;
        this.honey_w = 2;
        this.honey_l = 12;
      } else if (theater.theater_size == "L") {
        this.seat_w = 6;
        this.seat_l = 16;
        this.honey_w = 2;
        this.honey_l = 16;
      }
    },

    createEditForm: function () {
      let form = new FormData();
      form.append("theater_id", this.val.theater_id);
      form.append("theater_status", this.val.theater_status ? 1 : 0);
      form.append("theater_name", this.val.theater_name);
      form.append("theater_size", this.val.theater_size);
      console.log(form);
      return form;
    },

    createStatusForm: function (theater) {
      let form = new FormData();
      form.append("theater_id", theater.theater_id);
      form.append("theater_status", theater.theater_status ? 1 : 0);
      form.append("theater_name", theater.theater_name);
      form.append("theater_size", theater.theater_size);
      console.log(form);
      return form;
    },

    async edit() {
      if (this.$refs.valid.validate()) {
        var result = await TheaterAdmin.editTheater2(
          this.createEditForm(),
          this.val.theater_id
        );
        console.log("res", result.status);
        console.log("success by vuejs");
        alert("Success");

        this.theaters.forEach((theater, index) => {
          if (this.val.theater_id == theater.theater_id)
            this.theaters.splice(index, 1, this.val);
        });
        this.want_seat = [];
        this.edit_isopen = false;
      }
    },

    async edit_status(theater) {
      theater.theater_status = !theater.theater_status;
      var result = await TheaterAdmin.editTheater2(
        this.createStatusForm(theater),
        theater.theater_id
      );
      console.log("res", result.status);
      console.log("success by vuejs");

      this.theaters.forEach((theater, index) => {
        if (this.val.theater_id == theater.theater_id)
          this.theaters.splice(index, 1, this.val);
      });
      this.edit_isopen = false;
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

    async addTheater() {
      if(this.$refs.addform.validate()){
      if (this.add_name != "" && this.add_size != "") {
        var result = await TheaterAdmin.addTheater(this.createForm());
        console.log("res", result.status);
        console.log("success by vuejs");
        alert("Success");
        this.theaters.push({
          theater_name: this.add_name,
          theater_size: this.add_size,
          theater_status: 1,
        });
        this.add_isopen = false;
        this.add_name = "";
        this.add_size = "";
        this.getTheater();
      } else {
        alert("Pls fill all");
      }
      }
    },

    async delTheather() {
      // if (!this.showtime.includes(this.val.theater_id)) {
      //   await TheaterAdmin.delTheater(this.val.theater_id);
      //   this.delete_isopen = false;
      //   this.edit_isopen = false;
      //   this.theaters.forEach((item, index) => {
      //     if (item.theater_id == this.val.theater_id)
      //       this.theaters.splice(index, 1);
      //   });
      // } else {
      //   alert(
      //     "Foreign Key alert! \n You must delete showtimes that use this theater first"
      //   );
      //   this.delete_isopen = false;
      // }
      await TheaterAdmin.delTheater(this.val.theater_id);
      this.delete_isopen = false;
      this.edit_isopen = false;
      this.getTheater();
    },

    async editSeat(seat) {
      seat.seat_status = !seat.seat_status;
      var result = await TheaterAdmin.editSeat(
        this.createSeatForm(seat),
        seat.seat_no
      );
      console.log("res", result.status);
      console.log("success by vuejs");
    },

    createSeatForm: function (seat) {
      let form = new FormData();
      form.append("seat_no", seat.seat_no);
      form.append("seat_status", seat.seat_status ? 1 : 0);
      form.append("theater_id", seat.theater_id);
      form.append("seat_name", seat.seat_name);
      form.append("type_of_seat", seat.type_of_seat);
      form.append("seat_price", seat.seat_price);
      console.log(form);
      return form;
    },
    addopen(){
      this.add_isopen = true
      this.$refs.addform.reset()
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
  width: 60px;
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