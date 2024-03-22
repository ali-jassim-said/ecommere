<template>
  <NavbarVue :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <router-view
    v-if="categories && products"
    :categories="categories"
    :baseURL="baseURL"
    :products="products"
    @fetchData="fetchData"
    style="min-height: 50vh;"
  />
  <Footer />
</template>
<script>
import axios from "axios";
import NavbarVue from "./components/NavbarView.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      token: null,
      cartCount: 0
    };
  },
  components: {
    NavbarVue,
    Footer
},
  methods: {
    async fetchData() {
      // api call all the categories
      await axios
        .get(`${this.baseURL}category/`)
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      // api call all the products
      await axios
        .get(`${this.baseURL}product/`)
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

        if(this.token){
          await axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartCount = result.cartItems.length;
        })
        .catch((err) => {
          console.log(err);
        });
        }
    },
    resetCartCount(){
      this.cartCount = 0
    }
  },
  mounted() {
    this.fetchData();
    this.token = localStorage.getItem('token');
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
