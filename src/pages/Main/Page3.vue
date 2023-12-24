<template>
  <v-card flat style="background: transparent">
    <v-row>
      <v-col>
        <div>
          Photo
        </div>
      </v-col>
    </v-row>






    <!-- <v-row class="d-flex justify-center mb-6">
      
      
      
      <v-col md="3">
        <v-card elevation="10" align="center">
          <v-avatar size="100" class="ma-6">
            <img src="../../assets/NYTimes.png"/>
          </v-avatar>
          <v-card-title class="d-flex justify-center mb-6">
            Парсер NYTimes
          </v-card-title>
          <v-divider/>
          <v-card-action >
          <v-progress-linear
            indeterminate
            v-show="line_NYT"
            :color="$route.meta.theme"
          ></v-progress-linear>
          </v-card-action>
          <v-card-action class=" ma-4 d-flex justify-center">
          <v-btn
            @click="Start_NYT"
            color="green"
            class="ma-4 white--text d-felx"
          ><v-icon class="ma-1">mdi mdi-cloud-search-outline
          </v-icon>Начать сбор</v-btn>
          <v-btn
            @click="Close_NYT"
            color="red"
            class="ma-4 white--text"
          ><v-icon>mdi mdi-close
          </v-icon>Остановить сбор</v-btn>
          </v-card-action>
        </v-card>
        </v-col>


        <v-col md="3">
        <v-card elevation="10" align="center">
          <v-avatar size="100" class="ma-6">
            <img src="../../assets/Ria.webp" />
          </v-avatar>
          <v-card-title class="d-flex justify-center mb-6">
            Парсер RiaNews
          </v-card-title>
          <v-card-action>
          <v-progress-linear
            indeterminate
            v-show="line_Ria"
            :color="$route.meta.theme"
          ></v-progress-linear>
          </v-card-action>
          <v-divider/>
          <v-card-action class=" ma-4 d-flex justify-center">
          <v-btn
            @click="Start_Ria"
            color="green"
            class="ma-4 white--text"
          ><v-icon class="ma-1">mdi mdi-cloud-search-outline</v-icon>Начать сбор</v-btn>
          <v-btn
            @click="Close_Ria"
            color="red"
            class="ma-4 white--text"
          ><v-icon>mdi mdi-close
          </v-icon>Остановить сбор</v-btn>
          </v-card-action>
        </v-card>
        </v-col>


        <v-col md="3">
        <v-card elevation="10" align="center">
          <v-avatar size="100" class="ma-6">
            <img src="../../assets/RBC.png" />
          </v-avatar>
          <v-card-title class="d-flex justify-center mb-6">
            Парсер Rbn News
          </v-card-title>
          <v-card-action>
          <v-progress-linear
            indeterminate
            v-show="line_Rbn"
            :color="$route.meta.theme"
          ></v-progress-linear>
          </v-card-action>
          <v-divider/>
          <v-card-action class="ma-4 d-flex justify-center">
          <v-btn
            @click="Start_Rbn"
            color="green"
            class="ma-4 white--text"
          ><v-icon class="ma-1">mdi mdi-cloud-search-outline</v-icon>Начать сбор</v-btn>
          <v-btn
            @click="Close_Rbn"
            color="red"
            class="ma-4 white--text"
          ><v-icon>mdi mdi-close
          </v-icon>Остановить сбор</v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md='4' v-for="news in news_maker" :key="news.id">
        <v-card elevation="10">
          <v-card-text>
            {{news.title}}
          </v-card-text>
          <v-img
            class="ma-4"
            :src="news.url"
            aspect-ratio="2"
          ></v-img>
          <v-progress-linear
            indeterminate
            v-show="news.load"
            :color="$route.meta.theme"
          ></v-progress-linear>
          <v-row>
            <v-col md="4">
              
              
              
              <v-dialog
                v-model="dialog"
                width="1300"
              
              >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-4"
          :color="$route.meta.theme"
          dark
          v-bind="attrs"
          v-on="on"
        ><v-icon>mdi mdi-search-web</v-icon>
          Анализировать
        </v-btn>
      </template>

      <v-card elevation="10" flat style="background: transparent">
        <Map :points="points" :center="center" :zoom='zoom'/>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          fluid
            color="red"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </v-col>
            <v-col md="8">
              <v-card-text>
                Координаты изображения <strong> {{ points }}</strong>
              </v-card-text>
            </v-col>
          </v-row>
          <v-alert
            dense
            text
            type="success"
            v-show="alert_news"
          >
          Данные проанализированы <strong>успешно!</strong> 
          </v-alert>
        </v-card>
      </v-col>
    </v-row> -->
    
  
  </v-card>
</template>



<script>
// import axios from 'axios'
// import Map from "@/components/map/Map.vue";

// export default {
//   name: "Page3",
//   components: {
//     Map,
//   },
//   data() {
//     return {
//       line_NYT: false,
//       line_Ria: false,
//       line_Rbn: false,
//       dialog: false,
//       news_maker: [].flat(),
//     }
//   },
//   methods:{
//     async Start_NYT() {
//       axios.get(
//         'http://127.0.0.1:8000/all_news_nyt'
//       ).then(async response => {
//         await response.data == 200
//         for (var i=0;;i++) {
//           this.news_maker.push({
//             url: response.data.data[i].url,
//             title: response.data.data[i].title,
//           }),this.line_NYT = true
//         }
//       })
//     },
//     async Start_Ria() {
//       axios.get(
//         'http://127.0.0.1:8000/all_news_ria'
//       ).then(async response => {
//         await response.data == 200
//         for (var i=0;;i++) {
//           this.news_maker.push({
//             url: response.data.data[i].url,
//             title: response.data.data[i].title,
//           }),this.line_Ria = true
//         }
//       })
//     },
//     async Start_Rbn() {
//       axios.get(
//         'http://127.0.0.1:8000/all_news_rbn'
//       ).then(async response => {
//         await response.data == 200
//         for (var i=0;;i++) {
//           this.news_maker.push({
//             url: response.data.data[i].url,
//             title: response.data.data[i].title,
//           }),this.line_Rbn = true
//         }
//       })
//     },

//     Analiz(url) {
//       this.news_maker
//       this.line_news = true
//       setTimeout(() => { this.line_news = false, this.alert_news = true }, 4000)
//       let formData = new FormData();
//       formData.append('file', url)
//       console.log(url)
//       axios.post(
//         'http://127.0.0.1:8000/anal_img', formData,{
//           headers: {
//             "Content-Type": "multipart/form-data",
//           }
//         })
//       .then((response) => {
//         this.points = [response.data]
//       })
//     },
//     Close_NYT() {
//       this.line_NYT = false
//       setTimeout(() => {  this.line = false, this.alert = true }, 4000)
//     },
//     Close_Ria() {
//       this.line_Ria = false
//       setTimeout(() => {  this.line = false, this.alert = true }, 4000)
//     },
//     Close_Rbn() {
//       this.line_Rbn = false
//     }
//   }
// };
</script>


<style lang="scss">
</style>