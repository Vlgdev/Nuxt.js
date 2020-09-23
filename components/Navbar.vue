<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand">Nuxt</span>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link no-prefetch exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li v-if="!hasToken" class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li v-else class="nav-item">
          <a active-class="active" class="nav-link" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>