<template>
  <div class="navbarcomp">
      <nav class="navbar navbar-expand-md navbar-light nav-cust" aria-label="Fourth navbar example">
        <div class="container-fluid">
          <nuxt-link to="/" class="navbar-brand headline mx-auto text-center"><i class="pe-2 bi bi-house-door"></i>HOUSE SEARCH</nuxt-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarsExample04">    
            <ul class="navbar-nav mb-2 mb-md-0">
              <li class="nav-item">
                <div v-if="$auth.loggedIn">
                  <span>こんにちは{{ $auth.user }}さん</span>
                  <a href="" @click.prevent="$auth.logout()">ログアウト</a>
                </div>
                <div v-else>
                  <nuxt-link to="/login">ログイン</nuxt-link>
                  <nuxt-link to="/signup">会員登録（無料）</nuxt-link>
                  <span>こんにちはゲストさん</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>

<script></script>

<style lang="scss">
.navbarcomp {
  footer.container {
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  }

.footshare{
    font-size: 16px;
    i {
      font-size: 24px;
    }
  }

  .headline {
    font-family: 'ヒラギノ明朝 ProN', 'Hiragino Mincho ProN', sans-serif;
    font-weight: bold; 
  }

  .nav-cust {
    border-bottom: solid 1px #BCBCBC;
  }

  .nav-item {
    font-size: 14px;
    float: right;
  }

  i.bi-house-door {
    font-size: x-large;
  }

  /* スマホ用 */
  @media screen and (max-width:480px) { 
    .nav-item {
      font-size: 12px;
    }
  }
}
</style>