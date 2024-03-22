<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3>Our Category</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category in categories"
        :key="category.id"
        class="col-lg-4 col-md-6 pt-3 d-flex"
      >
        <category-box-vue :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBoxVue from "@/components/Category/CategoryBox.vue";
export default {
  name: "OurCategory",
  data() {
    return {
      
    };
  },
  props: ["categories"],
  components: {
    CategoryBoxVue,
  },
  methods: {
    
  },

};
</script>

<style></style>
