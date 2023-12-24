<!-- <template>
    <v-col md="3">
        <v-card>
            <v-card-title class="justify-center">
                {{ category.title }}
            </v-card-title>
            <v-card-text>
                <v-img
                class="mx-auto"
                :width="250"
                :src="require('@/assets/' + category.img )"
                >
                </v-img>
            </v-card-text>
        </v-card>
    </v-col>
</template> -->

<template>
    <div>
        <v-btn>
           <slot>
            <p> Пока! </p>
           </slot>
        </v-btn>
    </div>
</template>


<script>
export default {
  name: "v-categories",
  props: {
    category: {
        type: Object,
        required: true,
    }
  }
};
</script>

<style lang="scss" scoped>

</style>