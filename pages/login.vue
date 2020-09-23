<template>
  <div>
    <div v-if="$route.query.message === 'login'" class="alert alert-danger">Need login first</div>

    <form @submit.prevent="submitHandler">
      <h1>Login page</h1>

      <a class="guest-login" href="#" @click.prevent="$router.push('/')">Login as a guest</a>

      <div class="form-group">
        <input type="text" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    submitHandler() {
      this.$store.dispatch("login");
      this.$router.push("/");
    },
  },
  layout: "empty",
};
</script>

<style scoped>
.guest-login {
  margin: 10px 0;
  display: inline-block;
}
</style>