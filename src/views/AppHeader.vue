<script setup></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">
          <a>
            <div>
              <img alt="Vue logo" class="logo" src="@/assets/logo_animation.gif" />
              <img
                alt="trahie name animation" class="title" src="@/assets/nametag_animation.gif"/>
            </div></a>
          </router-link>
        </li>
        <li><router-link to="/"><a>Movies</a></router-link></li>
        <li><router-link to="/watchparty"><a>Watchpartys</a></router-link></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 0rem;
}

.router-link-active {
  font-weight: bold;
}

.logo {
  width: 4rem;
  height: 4rem;
  margin-top: 0.5rem;
}

.title {
  height: 4rem;
  margin-right: 1rem;
}
</style>
