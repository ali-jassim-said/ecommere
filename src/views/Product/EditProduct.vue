<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3"> Edit Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form v-if="product">
                    <div class="form-group">
                        <label> Category</label>
                        <select class="form-control" v-model="product.categoryId" required>
                            <option v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"> {{category.categoryName}}</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name" required/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="product.description" required/>
                    </div>
                    <div class="form-group">
                        <label>Image URL</label>
                        <input type="text" class="form-control" v-model="product.imageURL" required/>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="product.price" required/>
                    </div>
                    <button type="button" class="btn btn-primary"
                            @click="editProduct" >Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import sweet from "sweetalert";
export default {
    name: 'EditProduct',
    data() {
    return {
      product: null,
      id: null,
    };
  },
  props: ["products", "baseURL", "categories"],
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((prod) => {
      return prod.id == this.id;
    });
  },
  methods: {
    async editProduct(){
        await axios.post(`${this.baseURL}product/update/${this.id}`, this.product).then(() => {
            this.$router.push({name: 'product'});
            sweet({
                text: "good",
                icon: 'success'
            })
        }).catch( err => {
            console.log(err)
        })
    }
  }
}
</script>