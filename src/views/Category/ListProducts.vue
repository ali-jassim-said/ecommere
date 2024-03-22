<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h4 pt-3>{{ category.categoryName }}</h4>
            <p>{{ msg }}</p>
        </div>
    </div>
    <div class="row">
        <div v-for="product in category.products" :key="product.id" class="col-md6 col-xl-4 col-12 justify-content-around d-flex">
            <product-box :product="product"/>
        </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '@/components/Products/ProductBox.vue';
export default {
  components: { ProductBox },
    data(){
        return{
            id: null,
            category: {},
            msg: ""
        }
    },
    props: ["categories"],
    mounted(){
        this.id = this.$route.params.id;
        this.category = this.categories.find( cate => {
            return cate.id == this.id
        })
        if(this.category.products.length == 0){
            this.msg = 'no products found'
        } else if( this.category.products.length == 1){
            this.msg ="only one product"
        }else{
            this.msg = `${this.category.products.length} products found`
        }

    }
}
</script>

<style>

</style>