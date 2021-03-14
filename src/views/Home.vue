<template>
  <MemberList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberList from "../components/memberList/memberList-component.vue";
export default defineComponent({
  name: "Home",
  components: {
    MemberList,
  },
});
</script>
