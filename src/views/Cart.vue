<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping</h3>
      </div>
      <div
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        class="row mt-2 pt-3"
      >
        <div class="col-2"></div>
        <div class="col-md-3">
          <img
            :src="cartItem.product.imageURL"
            alt=""
            class="w-100 card-image-top embed-responsive embed-responsive-16by9"
            style="object-fit: cover"
          />
        </div>

        <!-- display product name, quantity -->
        <div class="col-md-5 px-3">
          <div class="card-block px-3">
            <h6 class="card-title">
              <router-link :to="{ name: 'ShowDetails', params: { id: cartItem.product.id} }">
                {{ cartItem.product.name }}
              </router-link>
            </h6>

            <p class="mb-0 font-weight-bold" id="item-price">
              $ {{ cartItem.product.price }} per unit
            </p>
            <p class="mb-0">Quantity:{{ cartItem.quantity }}</p>
          </div>
          <p class="mb-0">
            Total:
            <span class="font-weight-bold">
              $ {{ cartItem.product.price * cartItem.quantity }}
            </span>
          </p>
          <a href="#" class="text=right" @click="deleteItem(cartItem.id)"
            >Remove from cart</a
          >
        </div>
        <div class="col-2"></div>
        <div class="col-12"><hr /></div>
      </div>

      <!-- display the price -->
      <div class="total-cost pt-2 text-right">
        <h5>Total : ${{ totalCost.toFixed(2) }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CartView",
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  props: ["baseURL"],
  methods: {
    async listCartItems() {
      await axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteItem(id) {
      await axios
        .delete(`${this.baseURL}cart/delete/${id}?token=${this.token}`)
        .then((res) => {
          if (res.status === 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>

<style></style>
