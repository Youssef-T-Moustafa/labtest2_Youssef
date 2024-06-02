<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1 class="photo-title">List of Photos</h1>
      <hr class="title-line" />
      <ul class="photo-list">
        <li
          v-for="(photo, index) in photos"
          :key="photo.id"
          style="list-style-type: none"
        >
          <div class="photo-item">
            <div>{{ index + 1 }}. {{ photo.title }}</div>
            <img
              class="photo-thumbnail"
              :src="photo.thumbnailUrl"
              alt="Photo thumbnail"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["photos"]),
  },
  mounted() {
    this.$store.dispatch("fetchPhotos");
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("@/assets/images/bg-img.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: auto;
}

.content {
  width: 100vh;
  height: auto;
  margin: auto;
  color: #fff;
  position: relative;
}

.content h1.photo-title {
  font-family: "Times New Roman";
  font-size: 55px;
  padding-left: 20px;
  margin-top: 9%;
  letter-spacing: 2px;
  display: block;
}

.content hr.title-line {
  border: 0;
  height: 1px;
  background: #ffffff;
  margin: 10px 20px;
}

.content span {
  color: #ff7200;
  font-size: 65px;
}

.content .par {
  padding-left: 20px;
  padding-bottom: 25px;
  font-family: "Arial";
  letter-spacing: 1.2px;
  line-height: 30px;
}

ul.photo-list {
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
}

.photo-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.photo-thumbnail {
  width: 50px;
  height: 50px;
}
</style>
