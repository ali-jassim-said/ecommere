<template>
  <div class="container py-4">
  <router-link :to="{ name: 'category'}">
    <button class="btn btn-primary btn-lg">Admin Category</button>
  </router-link>
  <br />
  <router-link :to="{ name: 'product'}">
    <button class="btn btn-primary btn-lg">Admin Product</button>
  </router-link>
</div>
</template>
<script>
export default {
  name: "AdminVue",
};
</script>
<style>
.btn {
  margin-bottom: 20px;
}
</style>
