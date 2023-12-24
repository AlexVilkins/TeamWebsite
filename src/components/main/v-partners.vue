<template>
    <v-col md="6">
        <!-- <v-card> -->
            <div class="imgg">
            <v-img 
            max-width="300px"
            :src="require('@/assets/' + partners.img )"/>
        </div>
        <!-- </v-card> -->
        
    </v-col>
</template>

<script>
export default {
    props: {
        partners: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">

.imgg {
    display: flex;
    justify-content: center;
    // border: solid 3px #D9CDED;
}

</style>