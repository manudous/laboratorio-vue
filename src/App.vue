<template>
<div>
  <Header />
  <router-view />
</div>
    
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/header/header-component";

export default defineComponent({
  components: {
    Header
  }
});
</script>
