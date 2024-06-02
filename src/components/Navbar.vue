<template>
  <div class="navbar">
    <div class="icon">
      <h1 class="logo">Web Technology</h1>
      <br />
      <h1 class="logo">Lab Test 2</h1>
    </div>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/" exact-active-class="active">HOME</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="active">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/profile" active-class="active">PROFILE</router-link>
        </li>
        <li>
          <router-link to="/photos" active-class="active">PHOTOS</router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <input
        class="srch"
        type="search"
        v-model="searchQuery"
        @input="searchPhotos"
        placeholder="Find Photos"
      />
      <button class="btn" @click="searchPhotos">Find</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavbarComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
    searchPhotos() {
      this.fetchPhotos({ query: this.searchQuery });
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 75px;
  margin: auto;
  background-color: #333;
  background-position: center;
  background-size: cover;
}

.icon {
  width: 20%;
  float: left;
  height: 70px;
}

.logo {
  color: #fc8d1e;
  font-size: 20px;
  font-weight: bold;
  font-family: Cambria;
  padding-left: 50px;
  float: left;
  padding-top: 10px;
  margin-top: 0px;
}

.menu {
  width: 50%;
  float: left;
  height: 70px;
}

ul {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
  margin-left: 30px;
  margin-top: 27px;
  font-size: 14px;
}

ul li a {
  text-decoration: none;
  color: #fff;
  font-family: Arial;
  font-weight: bold;
  transition: 0.4s ease-in-out;
}

ul li a:hover {
  color: #ff7200;
}

ul li .active {
  color: #ff7200;
}

.search {
  width: 29%;
  float: left;
  margin-left: 1%;
}

.srch {
  font-family: "Times New Roman";
  width: 150px;
  height: 30px;
  background: transparent;
  border: 1px solid #ff7200;
  margin-top: 20px;
  color: #fff;
  border-right: none;
  font-size: 16px;
  float: left;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.btn {
  width: 80px;
  height: 30px;
  background: #ff7200;
  border: 2px solid #ff7200;
  margin-top: 20px;
  color: #fff;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 900;
}

.btn:focus {
  outline: none;
}

.srch:focus {
  outline: none;
}
</style>
