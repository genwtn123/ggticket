<template>
  <div class="containertop">
    <div class="column">
      <p class="medfontblue">โปรโมชั่นสุดพิเศษ</p>
    </div>

    <div class="column bar">
      <div class="row">
        <div class="column"><p class="medfontblue">ทั้งหมด</p></div>
        <div class="column"><p class="medfontblue">Movie</p></div>
        <div class="column"><p class="medfontblue">Food & Beverage</p></div>
      </div>
    </div>

    <div class="is-multiline columns is-variable is-8">
      <div id="card_product" class="column is-one-fifth m-5">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div class="media">
            <div class="media-content">
              <p class="smallfont">
                ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์ สำหรับสมาชิก
              </p>
              <p class="subtitle is-6 has-text-danger mt-2">
                จำกัดจำนวน 10000 สิทธิ์
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="card_product" class="column is-one-fifth m-5">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div class="media">
            <div class="media-content">
              <p class="smallfont">
                ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์ สำหรับสมาชิก
              </p>
              <p class="subtitle is-6 has-text-danger mt-2">
                จำกัดจำนวน 10000 สิทธิ์
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="card_product" class="column is-one-fifth m-5">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div class="media">
            <div class="media-content">
              <p class="smallfont">
                ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์ สำหรับสมาชิก
              </p>
              <p class="subtitle is-6 has-text-danger mt-2">
                จำกัดจำนวน 10000 สิทธิ์
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="card_product" class="column is-one-fifth m-5">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div class="media">
            <div class="media-content">
              <p class="smallfont">
                ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์ สำหรับสมาชิก
              </p>
              <p class="subtitle is-6 has-text-danger mt-2">
                จำกัดจำนวน 10000 สิทธิ์
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="card_product" class="column is-one-fifth m-5">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="image" alt="Placeholder image" />
          </div>
          <div class="media">
            <div class="media-content">
              <p class="smallfont">
                ดูหนังราคาพิเศษ 80 บาทเฉพาะวันหยุดเสาร์ อาทิตย์ สำหรับสมาชิก
              </p>
              <p class="subtitle is-6 has-text-danger mt-2">
                จำกัดจำนวน 10000 สิทธิ์
              </p>
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
.containertop {
  margin-top: 40px;
}
.medfontblue {
  font-size: 25px;
  color: #000080;
}
.bar {
  height: 50px;
  background-color: #6495ed;
}
.card-image {
  width: 230px;
}
.smallfont {
  font-size: 20px;
}
</style>
