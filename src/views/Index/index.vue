<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header-component-page";
import FooterComponent from "@/components/Footer-component-page";

export default {
  components: {
    "header-component": HeaderComponent,
    "footer-component": FooterComponent,
  },
};
</script>

<style scoped></style>
