<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <h1>Profile</h1>
      <form @submit.prevent="saveChanges">
        <table>
          <tr>
            <th>Name</th>
            <td><input v-model="profile.name" type="text" class="input" /></td>
          </tr>
          <tr>
            <th>Course Year</th>
            <td>
              <input v-model="profile.courseYear" type="text" class="input" />
            </td>
          </tr>
          <tr>
            <th>Matrix No.</th>
            <td>
              <input v-model="profile.matrixNo" type="text" class="input" />
            </td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              <input v-model="profile.address" type="text" class="input" />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="buttons-cell">
              <div class="buttons">
                <button type="submit" class="btn save">Save</button>
                <button type="button" class="btn reset" @click="resetData">
                  Reset
                </button>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
  methods: {
    ...mapMutations(["setProfile"]),
    saveChanges() {
      this.setProfile(this.profile);
      alert("Changes Saved!");
    },
    resetData() {
      this.setProfile({
        name: "Youssef Moustafa",
        courseYear: "3SECJH",
        matrixNo: "A21MJ0145",
        address: "UTMKL, Kuala Lumpur",
      });
    },
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

.input {
  width: 100%;
  background: transparent;
  border: 1px solid #ff7200;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
}

.buttons-cell {
  text-align: center; /* Center the content horizontally */
  padding: 20px 10px; /* Add some padding for better spacing */
}

.buttons {
  display: inline-block; /* Keep the buttons inline */
}

.btn {
  width: 100px;
  height: 40px;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: 0.2s ease;
}

.btn.save {
  background: #28a745;
}

.btn.reset {
  background: #dc3545;
}

.btn:hover {
  opacity: 0.8;
}
</style>
