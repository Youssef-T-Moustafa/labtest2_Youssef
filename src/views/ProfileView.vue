<template>
  <div class="main">
    <Navbar />
    <div class="content">
      <form @submit.prevent="saveChanges">
        <div class="row">
          <label>Name</label>
          <span>:</span>
          <input v-model="profile.name" type="text" class="input" />
        </div>
        <div class="row">
          <label>Course Year</label>
          <span>:</span>
          <input v-model="profile.courseYear" type="text" class="input" />
        </div>
        <div class="row">
          <label>Matrix No.</label>
          <span>:</span>
          <input v-model="profile.matrixNo" type="text" class="input" />
        </div>
        <div class="row">
          <label>Address</label>
          <span>:</span>
          <input v-model="profile.address" type="text" class="input" />
        </div>
        <div class="buttons">
          <button type="submit" class="btn save">Save</button>
          <button type="button" @click="resetData" class="btn reset">
            Reset
          </button>
        </div>
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
.main {
  width: 100%;
  background-color: #000;
  background-image: url("@/assets/images/bg-img.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}

.content {
  width: 80%;
  height: auto;
  margin: auto;
  color: #fff;
  position: relative;
  padding-top: 50px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.row label {
  flex: 1;
  font-size: 18px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.row span {
  flex: 0 0 20px;
  color: #ff7200;
  text-align: center;
  font-size: 18px;
}

.input {
  flex: 2;
  background: transparent;
  border: 1px solid #ff7200;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
