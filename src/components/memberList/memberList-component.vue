<template>
  <div class="wrapper">
    <section class="form">
      <form v-on:submit.prevent="onSubmit">
        <label class="formLabel">Insert Company: </label>
        <input type="text" v-model.trim="message" class="formInput" />
        <button
          class="button"
          type="submit"
          @click="
            {
              handleClick($event);
            }
          "
        >
          Search
        </button>
      </form>
    </section>
    <Member :list="list" />
  </div>
</template>

<script lang="ts">
import { getMembers } from "../../services/members";
import { MemberEntity } from "../../services/members";
import { defineComponent } from "vue";

import Member from "./components/member-component.vue";

export default defineComponent({
  components: {
    Member,
  },
  data() {
    return {
      list: [] as MemberEntity[],
      message: "",
    };
  },
  methods: {
    getMembers: async function(): Promise<MemberEntity[]> {
      return await getMembers
        .get(this.$store.getters.company)
        .then((response) => (this.list = response));
    },
    handleClick: function(): void {
      if (this.message !== "") {
        this.$store.commit("CHANGE_COMPANY", this.message);
        this.getMembers();
      }
    },
  },
  async created() {
    this.list = await getMembers.get(this.$store.getters.company);
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  .formLabel {
    font-family: “Helvetica”, arial, sans-serif;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 8px;
  }
  .formInput[type="text"] {
    appearance: none;
    color: #1d1d1d;
    font-family: “Helvetica”, arial, sans-serif;
    font-size: 18px;
    border: 1px solid #ecf0f1;
    border-radius: 0.5rem;
    background: #ecf0f1;
    padding: 4px;
    display: inline-block;
    visibility: visible;
    width: 20rem;

    &:focus {
      color: #495057;
      background-color: #ffffff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  $color: #848aba;

  .button {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color;
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken($color, 15%);
      transition: all 0.3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
}
</style>
