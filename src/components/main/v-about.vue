<template>
    <v-col md="6"> 
        <v-card 
        class="card"
        elevation="2" 
        rounded="xl"
        color="#D9CDED"
        >
            <img 
                class="ma-5"
                :width="50"
                :src="require('@/assets/' + about.img )"
            >
            <div class="cardText ma-3">
                {{about.text}}
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
  name: "v-about",
  props: {
    about: {
        type: Object,
        required: true,
    }
  }
};
</script>

<style>
.card {
    display: flex;
    align-items: center;
    /* font-size: x-large; */
    font-family: "Georgia";
}

@media screen and (min-width: 1433px) {
    .card {font-size: x-large;}
}

@media screen and (min-width: 900px) and (max-width: 1433px) {
    .card {font-size: large;}
}

@media screen and (min-width: 430px) and (max-width: 900px) {
    .card {font-size: medium;}
}

@media screen and (max-width: 430px) {
    .card {font-size: small;}
}

</style>