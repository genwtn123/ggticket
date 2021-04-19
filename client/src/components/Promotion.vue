<template>
  <div class="container">
    <div class="row">
      <div
        class="column mt-5"
        style="height: 50px; text-align: center;"
      >
        <p style="font-size: 25px; color: #000080">โปรโมชั่นสุดพิเศษ</p>
      </div>

      <div class="column" style="height: 50px; background-color: #6495ed">
        <t style="font-size: 25px; color: #000080; margin-left: 270px"
          >ทั้งหมด</t
        >
        <t style="font-size: 25px; color: #000080; margin-left: 270px">Movie</t>
        <t style="font-size: 25px; color: #000080; margin-left: 270px"
          >Food & Beverage</t
        >
      </div>

      <div class="is-multiline columns is-variable is-8">
        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 230px">
              <img v-bind:src="image" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px">
                  ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์
                  สำหรับสมาชิก
                </p>
                <p class="subtitle is-6 has-text-danger mt-2">จำกัดจำนวน 10000 สิทธิ์</p>
              </div>
            </div>
          </div>
        </div>

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 230px">
              <img v-bind:src="image" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px">
                  ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์
                  สำหรับสมาชิก
                </p>
                <p class="subtitle is-6 has-text-danger mt-2">จำกัดจำนวน 10000 สิทธิ์</p>
              </div>
            </div>
          </div>
        </div>
        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 230px">
              <img v-bind:src="image" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px">
                  ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์
                  สำหรับสมาชิก
                </p>
                <p class="subtitle is-6 has-text-danger mt-2">จำกัดจำนวน 10000 สิทธิ์</p>
              </div>
            </div>
          </div>
        </div>
        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 230px">
              <img v-bind:src="image" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px">
                  ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์
                  สำหรับสมาชิก
                </p>
                <p class="subtitle is-6 has-text-danger mt-2">จำกัดจำนวน 10000 สิทธิ์</p>
              </div>
            </div>
          </div>
        </div>
        

        <div id="card_product" class="column is-one-fifth m-5">
          <div class="card">
            <div class="card-image" style="width: 230px">
              <img v-bind:src="image" alt="Placeholder image" />
            </div>
            <div class="media">
              <div class="media-content" style="text-align: center">
                <p style="font-size: 20px">
                  ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์
                  สำหรับสมาชิก
                </p>
                <p class="subtitle is-6 has-text-danger mt-2">จำกัดจำนวน 10000 สิทธิ์</p>
              </div>
            </div>
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
        "https://www.ryt9.com/img/files/20200805/iq1ae0ceafc9324bf358ca899a26c3831c.jpg",
    };
  },
  methods: {},
};
</script>

<style>
</style>
