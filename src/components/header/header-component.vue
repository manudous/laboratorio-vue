<template>
  <header class="header">
    <h1>Laboratorio de Vue</h1>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background: #848aba;
  margin-bottom: 1.5rem;

  h1 {
    color: white;
  }
}
</style>
