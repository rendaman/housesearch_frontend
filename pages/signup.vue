<template>
    <div class="signup">
        <main class="form-signin">
            <form class="form-signin" method="POST" action=''>
                <h1 class="h5 mb-3 fw-normal">会員登録入力</h1>
                <label for="inputEmail" class="visually-hidden">ユーザ名</label>
                <input type="text" class="form-control" name='username' placeholder="ユーザ名" required autofocus>
                <label for="inputPassword" class="visually-hidden">パスワード</label>
                <input type="password" id="inputPassword" class="form-control" name='password' placeholder="パスワード" required>
                <div class="checkbox mb-3"></div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">登録する</button>
            </form>
        </main>
    </div>
</template>

<script>
</script>

<style lang="scss">
.signup {
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