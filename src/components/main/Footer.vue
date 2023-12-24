<template>
  <v-footer padless >
    <v-card class="flex" flat tile color="#7E57C1">
      <v-card-text class="p-4 white--text text-center">
       <strong>©  {{ new Date().getFullYear() }} Created by VHSteam </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>