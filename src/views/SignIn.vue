<template>
    <div class="conatiner">
      <div class="row">
        <div class="col-12 justify-content-center d-flex flex-row pt-5">
          <div id="signin" class="flext-item border">
            <h2 class="pt-4">Sign-In</h2>
            <form @submit.prevent class="form-group pt-4 pl-4 pr-4">
              <div class="form-group">
                <label>Email </label>
                <input v-model="email" type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Password </label>
                <input v-model="password" type="password" class="form-control" />
              </div>
              <button @click="SignIn" class="btn btn-primary mt-2 py-0">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import swal from 'sweetalert';
  export default {
    data(){
        return{
            email: null,
            password: null,
        }
    },
    props: ["baseURL"],
    methods: {
        async SignIn(){
            const user = {
                email: this.email,
                password: this.password,
            }
            await axios.post(`${this.baseURL}user/signIn`, user).then((res) => {
                localStorage.setItem('token', res.data.token)
                swal({
                    text: 'login',
                    icon: 'success'
                })
                this.$emit('fetchData')
                this.$router.push({ name: 'home'})
            }).catch( err => {
                console.log(err)
            })
        }
    }
  }
  </script>
  <style scoped>
  .btn-primary {
    background-color: #f0c14b;
    color: black;
  }
  
  @media screen and (min-width: 992px) {
    #signin {
      width: 40%;
    }
  }
  </style>