<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center pt-3">
          <!-- display logo -->
        </div>
      </div>
  
      <!-- header -->
  
      <div class="row">
        <div class="col-12 justify-content-center d-flex pt-3">
          <div id="signup" class="flex-item border">
            <h2 class="pt-4 pl-4">Create Account</h2>
            <form @submit="signup" class="pt-4 pl-4 pr-4">
              <div class="form-group">
                <label for="Email">Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-row">
                <div class="col">
                  <div class="form-group">
                    <label> First Name</label>
                    <input
                      type="text"
                      v-model="firstName"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label> Last Name</label>
                    <input
                      type="text"
                      v-model="lastName"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
  
              <!-- password -->
              <div class="form-group">
                <label for="Password"> Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  required
                />
              </div>
  
              <!-- confirm password -->
              <div class="form-group">
                <label for="Password"> Confirm password</label>
                <input
                  type="password"
                  v-model="confirmPassword"
                  class="form-control"
                  required
                />
              </div>

              <button class="btn btn-primary mt-2">Create Account</button>
            </form>
          </div>
        </div>
      </div>
  
      <!-- form -->
    </div>
    
    <!--    Burger Button-->

      <!-- dropdown for browse -->
      <!-- dropdown for account -->


  </template>
  <script>
  import axios from 'axios';
    import sweet from 'sweetalert';
    export default{
        data(){
            return{
                email: null,
                firstName: null,
                lastName: null,
                password:null,
                confirmPassword: null,
            }
        },
        props:['baseURL'],
        methods:{
        async    signup(e){
            e.preventDefault()
            if(this.password === this.confirmPassword){
                const user = {
                    email: this.email,
                    password: this.password,
                    firstName: this.firstName,
                    lastName: this.lastName
                }
                console.log(user)
            await axios.post(`${this.baseURL}user/signup`, user).then(() => {
                this.$router.push({ name: 'home'})
                sweet({
                    text: 'signup successful',
                    icon: 'success'
                })
            }).catch(err => {
    if (err.response && err.response.status === 400) {
        // Bad Request, handle specific error messages
        if (err.response.data === 'User already exists') {
            sweet({
                text: 'User with this email already exists.',
                icon: 'error'
            });
        } else {
            // Handle other possible 400 errors
            sweet({
                text: 'Bad Request. Please check your input.',
                icon: 'error'
            });
        }
    } else {
        // Handle other types of errors
        console.error(err);
    }
});




            }else{
                sweet({
                    text: "not the same password",
                    icon: 'error'
                })
            }
        }
        }
    }
  </script>
  <style scoped>
  .btn-primary {
    background-color: #f0c14b;
    color: #000;
  }
  
  @media screen and (min-width: 992px) {
    #signup {
      width: 40%;
    }
  }
  </style>