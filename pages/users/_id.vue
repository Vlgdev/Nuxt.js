<template>
  <div>
    <h1>{{user.name}}</h1>
    <hr />
    <p>{{user.email}}</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { user };
  },
};
</script>
