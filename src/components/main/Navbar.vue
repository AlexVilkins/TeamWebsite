<template>
  <div class="mb-6">
    <v-toolbar dark flat class='transparent-navbar'>
      <v-tabs fixed-tabs>
        <v-tab :to="{ name: 'main' }"> Главное </v-tab>
        <v-tab :to="{ name: 'page2' }"> Примеры работ </v-tab>
        <v-tab :to="{ name: 'page3' }"> Свой дизайн </v-tab>
        <v-tab :to="{ name: 'page4' }"> О сайте </v-tab>
      </v-tabs>
    </v-toolbar>

    <div
      class="color-row"
      :style="'background: ' + $route.meta.theme"
    ></div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>


<style lang="scss" scoped >
$navbar-height: 64px;

.color-row {
  height: 500px;
  width: 100%;
  position: absolute;
  margin-top: -$navbar-height;
  z-index: 1;
}

.transparent-navbar {
  background: transparent !important;
  z-index: 2;
  height: $navbar-height;
}
</style>