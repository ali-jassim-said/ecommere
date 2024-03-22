<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Your WishList</h4>
        </div>
      </div>
  
      <!-- diaplay products -->
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-6 col-xl-3 justify-content-around d-flex">
            <ProductBox :product="product"/>
        </div>
      </div>
    
    </div>
  </template>
  <script>
import axios from 'axios';
import ProductBox from '@/components/Products/ProductBox.vue';
  export default {
  components: { ProductBox },
    name: 'WishList',
    data(){
        return{
            token: null,
            products: null
        }
    },
    props: ['baseURL'],
    methods:{
    async    fetchWishes(){
         await axios.get(`${this.baseURL}wishlist/${this.token}`).then(res => {
            this.products = res.data
         }).catch( err => {
            console.log(err)
         })   
        }
    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.fetchWishes()
    },
  }
  </script>