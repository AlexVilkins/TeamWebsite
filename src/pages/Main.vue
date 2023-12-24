<template>
  <div>
    <v-img
      class="image-container"
      src="../assets/1645088686_36-phonoteka-org-p-veb-dizain-fon-38.jpg"
    >
    <Header @anchorClick="handleClick"/>
    <transition 
      appear
      name="heading"
    >
      <div class="team-name">VHSteam</div>
    </transition>
      <div class="team-text" >
        Мы коллектив профессиональных программистов, <br>предлагающих высококачественные решения.
      </div>
      <div class="btns">
        <v-btn outlined 
          class="btn" 
          color="#DC59E5"
          @click="openTg">telegram
        </v-btn>  
        <v-btn tonal
          class="btn"  
          color="#DC59E5"
          @click="openFl">freelance
        </v-btn>
      </div>
    </v-img>
    <vDialogExample
      v-model="dialog"
    />
    <v-container>
      <v-row>
        <div ref="href_why_we" class="title-text">
            Почему именно мы?
        </div>
      </v-row>
      <v-row>
        <About
          v-for="ab in about"
          :key=ab.id
          :about="ab"
        />
      </v-row>
      <v-row>
        <div 
          ref="href_connection" 
          class="title-text-l">
            Как с нами связаться?
        </div>
      </v-row>
          <v-row>
            <v-col md="12">
                <v-row>
                  <v-col md="6">
                    <v-container class="application">
                      <div class="aplication">
                        Оставьте заявку и мы свяжемся с вами!
                      </div>
                      <v-form 
                        @submit.prevent="submit"
                        class="pa-10"
                      >
                        <v-text-field
                          required
                          v-model="name"
                          label="Имя"
                          counter="30"
                          :rules="[rules.required, rules.nameCounter, rules.nameSymbols]"
                          placeholder="Иванов Иван Иванович"
                          prepend-inner-icon="mdi mdi-rename"
                        ></v-text-field>
                        <v-text-field
                          v-model="phone"
                          :rules="[rules.required, rules.phoneSymbols]"
                          label="Телефон"
                          counter="11"
                          placeholder="8(999)777-00-33"
                          prepend-inner-icon="mdi mdi-phone-in-talk"/>
                        <v-text-field
                          v-model="email"
                          :rules="[rules.required, rules.email]"
                          label="Email"
                          placeholder="ivanivanov@gmail.com"
                          prepend-inner-icon="mdi-email-outline"/>
                        <v-textarea
                        v-model="message"
                        prepend-inner-icon="mdi mdi-message-processing-outline"
                        :rules="[rules.textCounter]"
                        counter="250"
                        label="Сообщение"
                        ></v-textarea>
                        <v-btn color="#D9CDED" block type="submit">Отправить</v-btn>
                      </v-form>
                    </v-container>
                  </v-col>
                  <v-col md="6">
                    <div class="aplication">
                      Наш телеграм бот
                    </div>
                    <v-img
                      src="../assets/fotor-2023110519449.png"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <div 
                ref="href_examples" 
                class="title-text"> 
                Примеры работ!
              </div>
            </v-row>
            <v-row>
              <vExample
                v-for="example in photos"
                :key="example.id"
                :example="example"
                @openPhoto="openPhoto"
              />
            </v-row>
            <v-row>
              <div ref="href_about_us" class="title-text-l">
                Немного о нас
              </div>
            </v-row>
            <v-row align="center">
              <v-col md="6">
                <v-img src="../assets/User-research-bro.png"></v-img>
              </v-col>
              <v-col md="6">
                <div class="about-us">
                  Элитный коллектив профессиональных программистов, предлагающих высококачественные решения. Мы готовы воплотить ваши идеи в реальность, обеспечивая высокую надежность, эффективность и безопасность. Доверьтесь нам, и мы воплотим ваше видение в инновационные программные решения, поддерживая вас на каждом этапе процесса разработки.
                </div>
              </v-col>
            </v-row>
            <v-row>
              <div ref="href_customers" class="title-text">
                Наши клиенты         
              </div>
            </v-row>
            <v-row align="center">
              <vPartners
                v-for="partner in partners"
                :key="partner.id"
                :partners="partner"
              />
            </v-row>
          <v-row>
            <div ref="href_question" class="title-text-l">
                Вопрос - Ответ
            </div>
          </v-row>
          <v-row>
            <vFaq
              v-for="question in questions"
              :key="question.id"
              :questions="question"
            />
          </v-row>
          <transition 
            name="backToTop"
            mode="out-in"
          >
            <button 
              class="toTop"
              @click = "toTop"
              @mouseenter="startAnimation"
              @mouseleave="stopAnimation"
            >
              <img 
                :class="{'animate_image': isAnimating}"
                src="@/assets/upload.png" 
                :width=25
              >
            </button>
          </transition>
    </v-container>
    <Footer/>
  </div>
</template>


<script>
import Header from "@/components/main/Header.vue";
import Footer from "@/components/main/Footer.vue";
// import Categories from "@/components/main/v-categories.vue";
import About from "@/components/main/v-about.vue";
import vExample from "@/components/main/v-example.vue";
import vDialogExample from "@/components/main/v-dialogExample.vue";
// import vMap from "@/components/main/v-map.vue";
import VExample from "@/components/main/v-example.vue";
import vFaq from "@/components/main/v-faq.vue"
import vPartners from "@/components/main/v-partners.vue"; 
// import Navbar from "@/components/main/Navbar.vue";

export default {
  name: "Main",
  components: {
    Header,
    Footer,
    // Categories,
    About,
    vExample,
    vDialogExample,
    // vMap,
    // Navbar,
    VExample,
    vFaq,
    vPartners,
},
  methods: {
    startAnimation() {
      this.isAnimating = true;
      console.log('startAnim')
    },
    stopAnimation() {
      this.isAnimating = false;
    },
    toTop() {
      window.scrollTo({top, behavior: 'smooth'})
    },
    handleClick(data) {
      console.log(data)
      const someRef = data
      this.$refs[someRef].scrollIntoView({behavior: 'smooth'})
    },
    openFl() {
      window.location="https://www.fl.ru/users/alexboytsov53/portfolio/"
    },
    openTg() {
      window.location="https://t.me/hetag_testBot"
    },
    openPhoto(){
      this.dialog = true
    },
    fetchPhoto() {
      this.axios.get(
        'https://jsonplaceholder.typicode.com/photos?_limit=8'
        )
        .then(response => this.photos = response.data)
    },
    submit() {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
        && (this.rules.name != "")
        && (/^[a-z, A-Z, а-я, А-Я]{0,30}$/.test(this.name))
        && (/^[0-9]{11}$/.test(this.phone)
        && (this.message.length <= 250)))
      {
        const fullMessage = "Имя: "+this.name+"\nНомер телефона: "+this.phone+"\nПочта: "+this.email+"\nСообщение: "+this.message
        console.log(fullMessage)
        this.$http.post('https://api.telegram.org/bot'+ this.token +'/sendMessage?chat_id='+this.chatID+'&text='+fullMessage)
      }
    },
  },
  mounted() {
    this.fetchPhoto()
  },
  data: () => ({
    isAnimating: false,
    currentPhoto: '',
    dialogVisible: false,
    dialog: false,
    photos: [],
    name: "",
    email: "",
    phone: "",
    message: "",
    token: "6930528164:AAELzb3kOCk6QkOA8IDLW9L3vy67lwoNwfI",
    chatID: "818593487",
    rules: {
      required: value => !!value || 'Обязательное поле для ввода',
      nameSymbols: value => {
        const pattern = /^[a-z, A-Z, а-я, А-Я]{0,30}$/
        return pattern.test(value) || 'Некоррктное имя'
      },
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Некорректный e-mail'
      },
      phoneSymbols: value => {
        const pattern = /^[0-9]{11}$/
        return pattern.test(value) || 'Некорректный номер телефона'
      },
      textCounter: value => value.length <= 250 || 'Превышен лимит символов',
    },
    categories: [
      {id: 1, title: "Футболки", img: "free-icon-tshirt-863684.png"},
      {id: 2, title: "Толстовки", img: "free-icon-hoodie-2774432.png"},
      {id: 3, title: "Сумки", img: "free-icon-handbag-4435373.png"},
      {id: 4, title: "Штаны", img: "free-icon-trousers-2774478.png"},
      {id: 5, title: "Кепки", img: "free-icon-cap-10489356.png"},
    ],
    about: [
      {id:0,img: "free-icon-book-828370.png", text: "Высокий уровень знаний и опыт владения различными языками программирования и технологиями"},
      {id:1,img: "free-icon-dashboard-7663921.png", text: "Умение создавать чистый, эффективный и надежный код, а также проводить тестирование программ"},
      {id:2,img: "free-icon-coding-language-2721590.png", text: "Знание передовых технологий в сфере программирования, а также стремление к постоянному самосовершенствованию"},
      {id:3, img: "free-icon-mechanism-2364240.png", text: "Способность эффективно работать в сжатые сроки и в условиях высокого давления"},
      {id:4, img:"free-icon-24-hours-899061.png", text: "Способность завершать задачи в срок и придерживаться требуемого качества работы"},
      {id:5, img: "free-icon-artificial-intelligence-2658160.png", text: "Высокий уровень знаний и опыт владения различными языками программирования и технологиями"},
    ],

    questions: [
      {id:0, question: "Сколько стоит создание сайта?", answer: "      Стоимость создания сайта может варьироваться в зависимости от различных факторов, таких как сложность дизайна, функциональные требования, объем контента и т. д. Напишите нам, чтобы получить точную оценку стоимости создания конкретного сайта."},
      {id:1, question: "Какая поддержка будет предоставляться после запуска сайта?", answer: "После запуска сайта, может быть предоставлена различная поддержка. Например, техническая поддержка, обновление контента, регулярное резервное копирование данных или дальнейшая оптимизация сайта."},
      {id:2, question: "Возможно ли сделать сайт на определенной платформе или с использованием конкретных технологий?", answer: "Да, возможно создать сайт на конкретной платформе или с использованием определенных технологий. Однако это зависит от того, какие требования у вас к сайту и какие возможности предоставляют выбранные платформа или технологии."},
      {id:3, question: "Что если мне не понравится?", answer: "В начале сотрудничества выясняем все пожелания и предлагаем различные варианты решения. На каждом этапе реализации предоставляем чекпоинты. Благодаря контролю каждого этапа вы сами становитесь частью нашей команды, что исключает «кота в мешке»."},
    ],

    partners: [
      {id:0, img: "x8team.png"},
      {id:1, img: "pandora10.png"},
      {id:2, img: "siriys.jpg"},
      {id:3, img: "desision_store.jpg"},
    ]
  }),
};
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.team-name {
  display: flex;
  justify-content: flex-end;
  font-family: "Diamond";
  margin-right: 10%;
  margin-top: 5%;
  color: white;
}

.team-text {
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  font-family: "Georgia";
  color: white; 
}
.title-text, .title-text-l {
  display: flex;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 50px;
  font-family: "FF Meta Serif";
}

.about-us {
  border: solid 10px #D9CDED;
  padding: 20px;
  align-content: center;
  font-size: 30px;
  font-family: "Georgia";
}

.aplication {
  display: flex;
  font-family: "FF Meta Serif";
  font-size: 30px;
}

.btns {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn {
  margin-right: 30px;
  width: 10%;
  height: 20%; 
}

.heading-enter-active, .heading-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.heading-enter, .heading-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: rotate(20deg);
  opacity: 0;
}


@media screen and ( min-width: 1433px ) {
  .team-name {font-size: 150px;}
  .title-text {
    font-size: 100px;
    justify-content: flex-start
  }
  .aplication {
    justify-content: center;
    font-size: x-large;
  }
  .title-text-l {
    font-size: 90px;
    justify-content: flex-end
  }
  .team-text {font-size: 30px;}
  .btn {font-size: 14px;}
}

@media screen and (min-width: 900px) and (max-width: 1433px) {
  .team-name {font-size: 70px;}
  .title-text, .title-text-l {
    font-size: 80px;
    justify-content: center;
  }
  .aplication {
    justify-content: center;
    font-size: large;
  }
  .team-text {font-size: 25px;}
  .btn {font-size: 14px;}
}

@media screen and (min-width: 430px) and ( max-width: 900px ) {
  .team-name {font-size: 70px;}
  .title-text, .title-text-l {
    font-size: 40px;
    justify-content: center;
  }
  .aplication {
    justify-content: center;
    font-size: medium;
  }
    
  .team-text {font-size: 20px;}
  .btn {font-size: 10px;}
}

@media screen and ( max-width: 430px ) {
  .team-name {font-size: 50px;}
  .title-text, .title-text-l {
    font-size: 30px;
    justify-content: center;
  }
  .aplication {
    justify-content: center;
    font-size: small;
  }
  .team-text {font-size: 15px;}
  .btn {font-size: 8px;}
}

// .backToTop-enter-active, 
// .backToTop-leave-active {
//   // transition: transform 0.5s;
//   transform: translate(10px) !important;
// }
// .backToTop-enter,
// .backToTop-leave-to {
//   // transform: translateY(10px);
//   transition: all .3s ease;
// }


.animate-image {
  transition: transform 5s;
}

.animate-image:hover {
  transform: translateY(50px);
}
</style>