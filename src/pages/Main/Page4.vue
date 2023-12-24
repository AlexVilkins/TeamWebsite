<template>
  <v-card flat style="background: transparent">
    <!-- <v-row style="z-index: 20">
      <v-col md="4">
        <v-card elevation="10">
          <v-card-title> Панель управления </v-card-title>
          <v-file-input class="ma-4" v-model="file" />
          <v-progress-linear
            indeterminate
            v-show="line"
            :color="$route.meta.theme"
          ></v-progress-linear>
          <v-card-actions>
            <v-btn
              :color="$route.meta.theme"
              class="ma-2 white--text"
              @click="submitFile()"
            ><v-icon>mdi mdi-download</v-icon>
              Загрузить
            </v-btn>
          </v-card-actions>
          <v-alert
              dense
              text
              type="success"
              v-show="alert"
            >
            Данные проанализированы <strong>успешно!</strong>
          </v-alert>
        </v-card>
        <br/>
        <v-card elevation="10">
          <v-card-text>Координаты изображения: {{ points }}</v-card-text>
          <v-img :src="url" aspect-ratio="1.7"></v-img>
        </v-card>
      </v-col>

      <v-col md="8">
        <v-card elevation="10" flat style="background: transparent">
          <Map :points="points" :center="center" :zoom='zoom'/>
        </v-card>
      </v-col>
    </v-row> -->
  </v-card>
</template>



<script>
// import Map from "@/components/map/Map.vue";
// import axios from 'axios'

// export default {
//   name: "Page4",
//   components: {
//     Map,
//   },

//   data() {
//     return {
//       file: null,
//       points: [],
//       news: [
//         "https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png",
//       ],
//       line: false,
//       alert: false,
//       center: [59.937, 30.3089],
//       zoom: 10
//     };
//   },

//   methods: {
//     handleFilesUpload() {
//       this.file = this.$refs.file.files[0];
//     },
//     async submitFile() {
//       this.line = true
//       let formData = new FormData();
//       formData.append("file", this.file);
//       axios.post("http://127.0.0.1:8000/uploud_image", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((response) => {
//           this.points = [response.data];
//           this.center = response.data.geometry.coordinates;
//           this.zoom = 12;
//           this.line = false;
//           this.alert = true
//         });
//     },
//   },

//   computed: {
//     url() {
//       if (!this.file) return;
//       return URL.createObjectURL(this.file);
//     },
//   },
// };
</script>


<style lang="scss">
</style>