<template>
  <v-container>
    <div style="line-height: 32pt" class="columns">
      <div class="is-2 column">
        <div class="title_head">Promotion</div>
        <div class="title_sub">โปรโมชั่น</div>
      </div>
      <div class="column pt-4" style="text-align: left">
        <img
          style="width: 40px; height: 40px"
          src="../assets/plus.png"
          alt=""
          @click="add_isopen = true"
        />
      </div>
    </div>
    <hr />

    <div class="is-multiline columns">
      <div v-for="ad in advertisement"
        :key="ad.ad_id"
        class="column is-one-quarter mt-5"
      >
        <div class="card admin_card mx-6 my-6">
          <figure class="image">
            <img style="height: 250px" :src="imagePath(ad.ad_image)" alt="Placeholder image" />
          </figure>
          <div class="card-content">
            <div style="font-size: 17px">{{ad.ad_name}}</div>
            <div style="font-size: 15px; color: #520c0c">
              {{ad.ad_detail}}
            </div>
          </div>
          <footer class="card-footer" style="background-color: white">
            <div
              style="width: 50%; color: #fd7014"
              @click="edit(ad.ad_id)"
              class="card-footer-item"
            >
              Edit
            </div>
            <div
              style="width: 50%; color: #fd7014"
              @click="remove(ad.ad_id)"
              class="card-footer-item"
            >
              Delete
            </div>
          </footer>
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
            @click="addc"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Add Promotion
          </p>
          <div class="columns">
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Title :</p>
              <p class="profile_modal_txt py-4">Detail :</p>
            </div>

            <div class="column pr-6 is-8">
              <v-file-input
                v-model="pic"
                truncate-length="15"
                label="picture"
                rounded
                dense
                solo
              >
              </v-file-input>

              <v-text-field
                v-model="title"
                label="title"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="detail"
                label="detail"
                rounded
                dense
                solo
              ></v-text-field>

            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
             @click="createad"
              style="
                background-color: #fd7014;
                border-style: hidden;
                color: white;
              "
              class="button mx-3"
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
              @click="addc"
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
            @click="editc"
          ></button>
        </header>

        <section class="modal-card-body profile_modal">
          <p
            class="regis_txt pb-3"
            style="text-decoration: none; font-size: 30px"
          >
            Edit Promotion
          </p>
          <div class="columns">
            <div class="column is-3" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Title :</p>
              <p class="profile_modal_txt py-4">Detail :</p>
            </div>

            <div class="column pr-6 is-8">
              <v-file-input
                v-model="pic"
                truncate-length="15"
                label="picture"
                rounded
                dense
                solo
              >
              </v-file-input>

              <v-text-field
                v-model="title"
                label="tile"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="detail"
                label="detail"
                rounded
                dense
                solo
              ></v-text-field>

            </div>
          </div>
        </section>

        <footer
          class="modal-card-foot has-background-black"
          style="border-style: hidden"
        >
          <div style="margin: auto">
            <button
            @click="editad"
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
              @click="editc"
            >
              CANCEL
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
            @click="deletec"
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
              @click="removead"
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
              @click="deletec"
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
import AdService from "../service/AdService";
import axios from "axios";
export default {
   mounted(){
    this.getad();
  }
   ,
  data() {
    return {
      image:
        "https://www.ryt9.com/img/files/20200805/iq1ae0ceafc9324bf358ca899a26c3831c.jpg",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
      advertisement: [],
      keep_index: 0,
      title: "",
      detail: "",
      pic: ""
    };
  },
  methods: {
    removead() {
      axios
        .delete(`http://localhost:12000/ad/delete/${this.keep_index}`)
        .then(() => {
          this.getad();
          this.delete_isopen = false;
        })
        .catch((err) => console.log(err));
    },
    createAddForm: function () {
      let form = new FormData();
      form.append("ad_name", this.title);
      form.append("ad_detail", this.detail);
      form.append("ad_image", this.pic);
      return form;
    },
    createEditForm: function () {
      let form = new FormData();
      form.append("ad_name", this.title);
      form.append("ad_detail", this.detail);
      form.append("ad_image", this.pic);
      return form;
    },
    editc() {
      this.edit_isopen = false;
      this.title = "";
      this.detail = "";
      this.pic = "";
    },
    deletec() {
      this.title = "";
      this.detail = "";
      this.pic = "";
      this.delete_isopen = false;
    },
    addc() {
      this.add_isopen = false;
      this.title = "";
      this.detail = "";
      this.pic = "";
    },
    // (null, req.body.ad_name, req.body.ad_detail, req.file.path, req.body.staff_id)
    edit(index){
      this.edit_isopen = true
      this.keep_index = index
    },
    remove(index){
      this.delete_isopen = true
      this.keep_index = index
    },
    async createad() {
      try {
        var result = await AdService.createad(this.createAddForm());
        console.log("res", result.status);
        console.log("success by vuejs");
        alert("Success");
        this.getad();
        this.title = "";
        this.detail = "";
        this.pic = "";
        this.add_isopen = false;
      } catch (err) {
        console.log(err);
      }
    },
    async editad() {
      try {
        var result = await AdService.editad(
          this.createEditForm(),
          this.keep_index
        );
        console.log("res", result.status);
        console.log("success by vuejs");
        alert("Success");
        this.title = "";
        this.detail = "";
        this.pic = "";
        this.getad();
        this.edit_isopen = false;
      } catch (err) {
        console.log(err);
      }
    },
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
  },
};
</script>

<style>
</style>
