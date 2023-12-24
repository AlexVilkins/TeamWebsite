<template>
  <v-card flat style="background: transparent">

    <v-layout class="overflow-visible" style="height: 100px;">
    <v-bottom-navigation
      v-model="value"
      color="teal"
      grow
    >
      <v-btn >
        Мужчины
      </v-btn>

      <v-btn>
        Женшины
      </v-btn>

      <v-btn>
        <!-- <v-icon>mdi-children</v-icon> -->

        Дети
      </v-btn>
    </v-bottom-navigation>
  </v-layout>

  <v-row align="center">
    <v-col md="3">
      <v-card>
        <v-img
        class="ma-10"
        cover
        src="../../assets/test/green.jpg">
        </v-img>
        <v-divider class="ma-4"></v-divider>
        <v-card-title> Футболка зеленна </v-card-title>
        <v-card-text> Мужская футболка </v-card-text>
      </v-card>
    </v-col>

    <v-col md="3">
      <v-card>
        <v-img
        class="ma-10"
        cover
        src="../../assets/test/red.jpg">
        </v-img>
        <v-divider class="ma-4"></v-divider>
        <v-card-title> Футболка крассная </v-card-title>
        <v-card-text> Мужская футболка </v-card-text>
      </v-card>
    </v-col>

    <v-col md="3">
      <v-card>
        <v-img
        class="ma-10"
        cover
        src="../../assets/test/yellow.jpg">
        </v-img>
        <v-divider class="ma-4"></v-divider>
        <v-card-title> Футболка желтая </v-card-title>
        <v-card-text> Мужская футболка </v-card-text>
      </v-card>
    </v-col>
    <v-col md="3">
      <v-card>
        <v-img
        class="ma-10"
        cover
        src="../../assets/test/blue.jpg">
        </v-img>
        <v-divider class="ma-4"></v-divider>
        <v-row>
          <v-col md="8">
            <v-card-title> Футболка голубая </v-card-title>
            <v-card-text> Мужская футболка </v-card-text>
          </v-col>
          <v-col>
            <strike class="text-h6"> 2000₽ </strike>
            <h1 class="text-red"> 1490₽ </h1>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>




    <!-- <v-row>
      <v-col md="4">
        <v-card elevation="10">
          <v-card-title>
            Панель управления
          </v-card-title>
          <v-card-actions>
            <v-select
              :color="$route.meta.theme"
              class="ma-4"
              :items="items"
              label="Новостной источник:"
            ></v-select>
          </v-card-actions>
          <v-progress-linear
            indeterminate
            v-show="line"
            :color="$route.meta.theme"
          ></v-progress-linear>
          <v-card-actions>
            <v-btn
              :color="$route.meta.theme"
              class="ma-2 white--text"
              @click="Upload_News"
            >Собрать данные
            </v-btn>
            <v-btn
              :color="$route.meta.theme"
              class="ma-2 white--text"
              @click="Upload_Img"
            >Загрузить данные
            </v-btn>
          </v-card-actions>
          <v-alert
            dense
            text
            type="success"
            v-show="alert"
          >
          Данные собраны <strong>успешно!</strong>
          </v-alert>
        </v-card>
      </v-col>
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
              <v-card-action>
                <v-btn
                  class="ma-4"
                  fluid
                  outlined
                  :color="$route.meta.theme"
                  @click="Analiz(news.url, news.id)"
                  >
                  Анализировать
                </v-btn>
              </v-card-action>
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

// export default {
//   name: "Page2",
//   data() {
//     return {
//       analiz_img: [],
//       news_maker: [].flat(),
//       items: ['RiaNews', 'Rbn', 'NYTimes'],
//       alert: false,
//       line: false,
//       alert_news: false,
//       line_news: false,
//       points: [],
//     }
//   },
//   methods:{
//     async Upload_Img() {
//       axios.get(
//         'http://127.0.0.1:8000/all_img'
//       ).then(async response => {
//         await response.data == 200
//         for (var i=0;;i++) {
//           this.news_maker.push({
//             url: response.data.data[i].url,
//             title: response.data.data[i].title,
//             load: false
//           })
//         }
//       })
//       this.alert = false
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

//     Upload_News() {
//       this.line = true
//       setTimeout(() => {  this.line = false, this.alert = true }, 4000)
//     }
//   }
// }
</script>


<style lang="scss">
</style>