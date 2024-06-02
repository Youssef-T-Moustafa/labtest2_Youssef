<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1>About</h1>
      <table>
        <tr>
          <th>Name</th>
          <td>{{ profile.name }}</td>
        </tr>
        <tr>
          <th>Course Year</th>
          <td>{{ profile.courseYear }}</td>
        </tr>
        <tr>
          <th>Matrix No.</th>
          <td>{{ profile.matrixNo }}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{{ profile.address }}</td>
        </tr>
      </table>
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
    ...mapGetters(["profile"]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("@/assets/images/bg-img.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  overflow-y: auto;
}

.content {
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: auto;
  color: #fff;
  position: relative;
  padding: 20px;
}

.content h1 {
  font-family: "Times New Roman";
  font-size: 55px;
  padding-left: 20px;
  margin-top: 9%;
  letter-spacing: 2px;
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #fff;
}

tr {
  border-bottom: 1px solid #fff;
}

th,
td {
  padding: 10px;
  text-align: left;
  font-size: 18px;
  font-family: Arial, sans-serif;
}

th {
  color: #ff7200;
  border-right: 1px solid #fff;
}

td {
  color: #fff;
}
</style>
