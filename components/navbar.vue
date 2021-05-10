<template>
    <div class="navbarcomp">
        <nav class="navbar navbar-expand-md navbar-light nav-cust" aria-label="Fourth navbar example">
          <div class="container-fluid">
              <nuxt-link to="/" class="navbar-brand headline mx-auto text-center"><i class="pe-2 bi bi-house-door"></i>HOUSE SEARCH</nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample04">
              {% if user.is_authenticated %}
              <ul class="navbar-nav mb-2 mb-md-0">
                <li class="nav-item">
                  <nuxt-link to="/logout">ログアウト</nuxt-link>
                </li>
              </ul>
              {% else %}
              <ul class="navbar-nav mb-2 mb-md-0">
                <li class="nav-item">
                  <nuxt-link to="/login">ログイン</nuxt-link>
                </li>
              </ul>
              {% endif %}
            </div>
          </div>
        </nav>
    </div>
</template>