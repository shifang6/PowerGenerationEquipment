<template>
  <div>
    <!--    顶部-->
    <header-component :getTitleName="$route.meta.title"></header-component>
    <router-view></router-view>
    <!--    底部-->
    <footer-component></footer-component>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header-component-page";
import FooterComponent from "@/components/Footer-component-page";
//一键置顶
import BackToTop from "@/components/BackToTop";
export default {
  name: "HomeCenterIndex",
  components: {
    "header-component": HeaderComponent,
    "footer-component": FooterComponent,
    "back-to-top": BackToTop,
  },
};
</script>

<style scoped></style>
