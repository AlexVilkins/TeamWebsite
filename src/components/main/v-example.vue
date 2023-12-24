<template>
  <v-col md="4">
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    <!-- <v-card @click="openPhoto">
      <v-card-text>
          <v-img
          class="mx-auto"
          :width="250"
          :src="example.url"
          />
      </v-card-text>
      <v-card-title
      class="justify-center"> 
        {{ example.title }}
      </v-card-title> 
    </v-card> -->
  </v-col>
</template>

<script>
export default {
  name: "v-example",
  props: {
    example: {
        type: Object,
        required: true,
    }
  },
  methods: {
    openPhoto() {
        this.$emit('openPhoto', this.example)
    }
  },
  data: () => ({
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
  })
};
</script>

<style lang="scss" scoped>

</style>