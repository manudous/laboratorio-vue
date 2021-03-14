<template>
  <main class="cards">
    <article class="card" v-for="member in list" :key="member.id">
      <router-link :to="`/detail/${member.login}`">
        <img :src="member.avatar_url" alt="" />
        <div class="text">
          <h3>{{ member.login }}</h3>
          <p>Id: {{ member.id }}</p>
        </div>
      </router-link>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["list"],
});
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
.card {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}
.card img {
  width: 20rem;
}
.card .text {
  padding: 0 20px 20px;
}
</style>
