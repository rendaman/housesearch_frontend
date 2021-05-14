<template>
    <div class="login">
        <main class="form-signin">
            <form class="form-signin" method="" action=''>
                <h1 class="h5 mb-3 fw-normal">ログインはこちらから</h1>
                <input type="text" class="form-control" v-model='username' placeholder="ユーザ名" required autofocus>
                <input type="password" class="form-control" v-model='password' placeholder="パスワード" required>
                <div class="w-100 btn btn-lg btn-secondary mb-3" @click="loginWithAuthModule">ログインする</div>
                <nuxt-link to="/signup" class="w-100 btn btn-lg btn-primary">会員登録（無料）</nuxt-link>
            </form>
        </main>
    </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/');
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginWithAuthModule () {
      await this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then((response) => {
          return response
        },
        (error) => {
          return error
        })
    }
  }
}
</script>

<style lang="scss">
.login {
    a.btn {
      color:#fff;
    }

    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: auto;
    }
    .form-signin .checkbox {
      font-weight: 400;
    }
    .form-signin .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
    }
    .form-signin .form-control:focus {
      z-index: 2;
    }
    .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
}
</style>