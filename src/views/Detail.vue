<template>
  <main class="cards">
    <article class="card">
      <img :src="member.avatar_url" alt="" />
      <div class="text">
        <h3 class="animate__animated animate__backInLeft">{{ member.name }}</h3>
        <p>Company: {{ member.company }}</p>
        <p>Blog: {{ member.blog }}</p>
        <button @click="$router.go(-1)">BACK</button>
      </div>
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import { MemberEntity } from "../services/members";
import { getMember } from "../services/members";

export default defineComponent({
  data: () => ({
    member: {} as MemberEntity,
  }),
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id);
    },
  },
  async created() {
    this.member = await getMember.get(this.id);
  },
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
.card {
  flex: 0 0 350px;
  margin: 5rem;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);

  img {
    max-width: 20rem;
  }

  .text {
    padding: 0 20px 20px;

    button {
      background: #848aba;
      border: 0;
      color: white;
      cursor: pointer;
      padding: 10px;
      width: 100%;
      transition: 0.5s ease;

      &:hover {
        background-color: #84a5ba;
      }
    }
  }
}
</style>
