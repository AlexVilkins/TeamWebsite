<template>
  <v-card flat style="background: transparent">
    <v-row justify="center">
      <v-col md="3">
        <v-card>
          <v-img
          :width="150"
          class="ma-10"
          cover
          src="../../assets/delivery.png"
          ></v-img>
          <v-card-title> Бесплатная доставка продукции </v-card-title>
          <v-card-text> по всей России при заказе от 35 000 рублей </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card>
          <v-img
          class="ma-10"
          :width="150"
          cover
          src="../../assets/quality.png"
          ></v-img>
          <v-card-title> Контроль качества по утвержденному образу </v-card-title>
          <v-card-text> + выборочная проверка каждого 10го/100го изделия </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card>
          <v-img
          class="ma-10"
          :width="150"
          cover
          src="../../assets/time.png"
          ></v-img>
          <v-card-title> Широкий ассортимент одежды для нанесения и печати </v-card-title>
          <v-card-text> в том числе собственного производства </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="6">
        <v-card>
          <v-container>
          <div class="text-h5 mb-1">
            1 СОГЛАСОВАНИЕ ЗАКАЗА
          </div>
          <div>
            Отправьте заявку и менеджер подберёт для вашего тиража оптимальный метод печати. Мы печатаем как на текстиле своего производства, так и на материалах заказчика. Можем пошить изделия под ваш заказ или обеспечить лучшие цены от наших поставщиков.
          </div>
          <v-divider class="border-opacity-100"></v-divider>
          <div class="text-h5 mb-1">
            2 ДОГОВОР И ОПЛАТА
          </div>
          <div>
            После подписания договора мы выставим счёт. Со всеми клиентами мы работаем по 100% предоплате. Оплатить заказ можно по безналичному расчёту или наличными в офисах компании.
          </div>
          <v-divider class="border-opacity-100"></v-divider>
          <div class="text-h5 mb-1">
            3 ПРОИЗВОДСТВО И ДОСТАВКА
          </div>
          <div>
            После оплаты заказ уходит в производство. Этот процесс занимает от 3 до 5 рабочих дней. Вы можете приехать к началу печати для согласования образца. Готовые изделия мы упакуем и доставим в согласованное с вами время. Также вы можете забрать тираж самостоятельно.
          </div>
        </v-container>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card>
          <v-container>
            <div class="text-h4 d-flex justify-center mb-6 bg-surface-variant">
              Калькулятор заказа
            </div>
            <v-text-field label="Почта"/>
            <v-text-field label="Как вас зовут?"/>
            <v-text-field label="Адрес"/>
            <v-combobox
              label="Количество изделий в заказе"
              :items="[
                'до 20 шт.',
                '20-50 шт.',
                '50-100 шт.',
                '100-200 шт.',
                '200-500 шт.',
                'более 500 шт.']"
            ></v-combobox>
            <v-btn>
              Загрузить фото
            </v-btn>
            <v-btn>
              Рассчитать
            </v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md=12>
        <v-card>
          <v-container>
            
            
          </v-container>
        </v-card>
      </v-col>
    </v-row>










    <!-- <v-row align="center">
      <v-col md="4">
        <v-img
        :width="500"
        src="../../assets/soul.jpg"
        ></v-img>
    </v-col>
    <v-col md="8">
      <h1>Коллектив - Команда - Корпоративный дух</h1>
      <v-text>Повышение коропортивного духа одна из основных задач, решение которой позволяет повысить эффективность работы коллектива. Наша продукция поможет вам с решением таких проблем путем создания команды, логотипа и мерча.</v-text>
    </v-col>
  </v-row>

  <v-row align="center">
    <v-col md="8">
      <h1>Тренировки - команда - мотивация</h1>
      <v-text>Тренировки со своей командой становятся интереснее и азартнее. А какая команда без клуба и формы?</v-text>
    </v-col>
    <v-col md="4">
      <v-img
      :width="500"
       src="../../assets/footbal.jpg"></v-img>
    </v-col>
  </v-row>

  <v-row align="center">
    <v-col md="4">
      <v-img
      :width="500"
      src="../../assets/family.jpg"></v-img>
    </v-col>
    <v-col md="8">
      <h1>семья - отдых - </h1>
      <v-text>дружные семья должна быть в одном??</v-text>
    </v-col>
  </v-row> -->
      
      
  

    <!-- <v-row>
      <v-col md="4">
        <v-card elevation="10">
          <v-avatar size="100" class="ma-4">
            <img src="../../assets/i.webp"/>
          </v-avatar><strong> Military User</strong>
          <v-card-text class="ma-2">
            Всего запросов: {{ all_requests.data }}
          </v-card-text>
          <v-card-text class="ma-2">
            Дата последенего запроса: {{last_date.date}}
          </v-card-text>
          <v-card-text class="ma-2"> 
            Текущие задачи: 0
          </v-card-text>
          <v-btn
            class="ma-2 white--text"
            
            :color="$route.meta.theme"
          >
            Режим PRO
          </v-btn>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card elevation="10" flat style="background: transparent">
          <Map :points="points" :center="center" :zoom='zoom'/>
        </v-card>
      </v-col>
    </v-row> -->
  </v-card>
</template>


<script>

// import Map from "@/components/map/Map.vue"
// import axios from 'axios'



// export default {
//   name: 'app',
//   components: {
//     Map,
//   },
//   data() {
//     return {
      
//       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//       attribution:'oGEOsint',
//       markerDetails: [],
//       files: '',
//       all_requests: [],
//       last_date: [],
//       center: [37.99349092, 6.93536352],
//       zoom: 2,
//       points: [],
      
//     }
//   },
//   async created() {
//     const response_date = await axios.get(
//       "http://127.0.0.1:8000/last_date"
//     );
//     this.last_date = response_date.data;
//     const response_len_request = await axios.get(
//       "http://127.0.0.1:8000/len_all_requests"
//     );
//     this.all_requests = response_len_request.data;
//     axios.get(
//       "http://127.0.0.1:8000/all_coords"
//     ).then((response) => {
//       this.points = response.data;
//     })
//   },
// };
</script>
