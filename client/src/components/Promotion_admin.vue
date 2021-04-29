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
    <div class="pt-6">
      <div
        class="columns"
        style="padding-left: 10%"
        v-for="index in 2"
        :key="index"
      >
        <div
          class="card admin_card mx-6 my-6"
          style="width: 19%; height: 425px"
          v-for="index in 4"
          :key="index"
        >
          <figure class="image">
            <img style="height: 250px" :src="image" alt="Placeholder image" />
          </figure>
          <div class="card-content">
            <div style="font-size: 17px">ซื้อตั๋วราคาพิเศษ 80 บาท</div>
            <p style="font-size: 13px">
              เฉพาะวันเสาร ์ และวันอาทิตย์ สำหรับสมาชิก
            </p>
            <div style="font-size: 15px; color: #520c0c">
              จำนวนจำกัด 100สิทธิ์
            </div>
          </div>
          <footer class="card-footer" style="background-color: white">
            <div
              style="width: 50%; color: #fd7014"
              @click="edit_isopen = true"
              class="card-footer-item"
            >
              Edit
            </div>
            <div
              style="width: 50%; color: #fd7014"
              @click="delete_isopen = true"
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
            @click="add_isopen = flase"
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
            <div class="column is-2" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Title :</p>
              <p class="profile_modal_txt py-4">Detail :</p>
              <p class="profile_modal_txt py-4">Quantity :</p>
            </div>

            <div class="column pr-6">
              <v-file-input
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

              <v-text-field
                v-model="quantity"
                label="quantity"
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
            @click="edit_isopen = flase"
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
            <div class="column is-2" style="text-align: right">
              <p class="profile_modal_txt py-2">Picture :</p>
              <p class="profile_modal_txt py-4">Name :</p>
              <p class="profile_modal_txt py-4">Price :</p>
              <p class="profile_modal_txt py-4">Stock :</p>
            </div>

            <div class="column pr-6">
              <v-file-input
                truncate-length="15"
                label="picture"
                rounded
                dense
                solo
              >
              </v-file-input>

              <v-text-field
                v-model="name"
                label="name"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="price"
                label="price"
                rounded
                dense
                solo
              ></v-text-field>

              <v-text-field
                v-model="stock"
                label="stock"
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
              @click="edit_isopen = flase"
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
export default {
  data() {
    return {
      image:
        "https://www.ryt9.com/img/files/20200805/iq1ae0ceafc9324bf358ca899a26c3831c.jpg",
      add_isopen: false,
      edit_isopen: false,
      delete_isopen: false,
    };
  },
  methods: {},
};
</script>

<style>
</style>