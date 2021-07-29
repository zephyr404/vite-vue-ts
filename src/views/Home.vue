<template>
  <app-header></app-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appHeader from "../components/home/header.vue";

export default defineComponent({
  name: "Home",
  components: { appHeader },
});
</script>

<style lang="scss" scoped>
</style>
