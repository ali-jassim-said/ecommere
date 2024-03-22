<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3>Add Category</h3>
      </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6"><form>
        <div class="form-group">
          <label for=""> Name</label>
          <input type="text" class="form-control" v-model="categoryName" />
        </div>
        <div class="form-group">
          <label for=""> Description</label>
          <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <label for=""> Image</label>
          <input type="text" class="form-control" v-model="imageUrl" />
        </div>
        <button type="button" class="btn btn-primary" @click="addCategory()">Submit</button>
      </form></div>
        <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert"
export default {
  name: "AddCategory",
  data(){
    return{
        categoryName: "",
        description: "",
        imageUrl: "",
    }
  },
  props: ["baseURL"],
  methods:{
    addCategory(){
        const newCategory = {
            categoryName: this.categoryName,
            description: this.description,
            imageUrl: this.imageUrl
        }

        axios.post(`${this.baseURL}category/create`, newCategory, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
          this.$router.push({name: 'category'})
            sweetalert({
                text: "Category added successfully",
                icon: "success"
            })
        }).catch(err => {
            console.log(err)
        })
    }
  }

};
</script>

<style></style>