<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-7">
          <div class="form d-flex justify-content-between">
            <div class="image">
              <img src="https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg" />
            </div>
            <form class="my-form">
              <h4 class="font-weight-bold mb-3">Log in to your account</h4>
              <p class="mdb-color-text">
                To log in, please fill in these text fiels with your e-mail address and
                password.
              </p>
              <!-- Email address -->
              <div class="md-form">
                <i class="fas fa-envelope prefix"></i>
                <input
                  type="email"
                  id="emailExample"
                  class="form-control"
                  placeholder="email"
                  v-model="userInfo.email"
                />
              </div>
              <!-- Password -->
              <div class="md-form">
                <i class="fas fa-lock prefix"></i>
                <input
                  type="password"
                  id="passwordExample"
                  class="form-control"
                  placeholder="password"
                  v-model="userInfo.password"
                />
              </div>
              <div class="space">
                <div class="float-right">
                  <button class="btn btn-rounded" type="button" @click="loginUser()">
                    Login
                  </button>
                </div>
              </div>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      alert(this.userInfo.email), alert(this.userInfo.password);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background: #f3f2f2;
}
.row {
  height: 100vh;
}
.form {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.12);
}
.image img {
  width: 220px;
  height: auto;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.my-form {
  padding: 2.5rem;
}
.my-form h4 {
  color: #92aad0;
}
.my-form p {
  font-size: 0.875rem;
  font-weight: 400;
}
.btn {
  background-color: #92aad0;
  right: 0;
}
.btn:hover,
.btn:active,
.btn:focus {
  color: #fff;
}
a {
  bottom: 0;
}
.space {
  padding-bottom: 4rem;
}
.link {
  font-size: 0.875rem;
  float: right;
  color: #6582b0;
}
.link:hover,
.link:active {
  color: #426193;
}
@-webkit-keyframes autofill {
  to {
    color: #666;
    background: transparent;
  }
}

@keyframes autofill {
  to {
    color: #666;
    background: transparent;
  }
}

input:-webkit-autofill {
  -webkit-animation-name: autofill;
  animation-name: autofill;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
