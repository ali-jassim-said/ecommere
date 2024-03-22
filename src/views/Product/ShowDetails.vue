<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!--            display image-->
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" class="img-fluid" />
      </div>
      <!--            display product details-->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input type="number" class="form-control" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button class="btn" id="add-to-cart-button" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
        <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0"
          @click="addToWishlist()"
        >
          {{ wishlistString }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
name: 'ShowDetails',
data(){
    return{
        product: {},
        id: null,
        category: {},
        wishlistString: 'Add to wishlist',
        token: null,
        quantity: 1,
    }
},
props: ["products", "baseURL", "categories"],
mounted(){
    this.id = this.$route.params.id;
    this.product = this.products.find( prod => {
        return prod.id == this.id
    })
    this.category = this.categories.find( cate => {
        return cate.id == this.product.categoryId
    })
    this.token = localStorage.getItem('token');
},
methods:{
   async addToWishlist(){
        if(!this.token){
            swal({
                text: 'error',
                icon: 'error'
            })
            return;
        }
        await axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
            id: this.product.id
        }).then(res => {
            if(res.status === 201){
                this.wishlistString = 'Added to wishlist'
                swal({
                text: 'Added successful',
                icon: 'success'
            })
            }
        }).catch( err => {
            console.log(err)
        })

    },

async    addToCart(){
    if(!this.token){
            swal({
                text: 'error',
                icon: 'error'
            })
            return;
        }
        await axios.post(`${this.baseURL}cart/add?token=${this.token}`, {
            productId: this.id,
            quantity: this.quantity
        }).then( res => {
            if(res.status === 201){
                swal({
                    text: 'added to cart',
                    icon: 'success'
                })
            }
            this.$emit('fetchData')
        }).catch(err => {
            console.log(err)
        })
    }
}
}
</script>

<style>
.category {
  font-weight: 400;
}
#wishlist-button {
  background-color: #b9b9b9;
}
#add-to-cart-button {
  background-color: #febd69;
}
</style>
