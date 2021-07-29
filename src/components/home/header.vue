<template>
  <div id="header">header</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  box-shadow: 0px 10px 50px -15px rgb(0 0 0 / 10%) !important;
}
</style>