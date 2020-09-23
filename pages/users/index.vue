<template>
  <section>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="openUser(user.id)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Users",
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetchUsers");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    openUser(id) {
      this.$router.push(`/users/${id}`);
    },
  },
};
</script>