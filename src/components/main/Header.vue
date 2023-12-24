<template>
  <div class='transparent-navbar'>
    <button
      class="href_why_we"
      @click="handleClick"
    >
      Почему мы
    </button>
    <button
      class="href_connection"
      @click="handleClick">
      Как связаться
    </button>
    <button
      class="href_examples"
      @click="handleClick"
    >
      Примеры работ
    </button>
    <button
      class="href_about_us"
      @click="handleClick"
    >
      Немного о нас
    </button>
    <button
      class="href_customers"
      @click="handleClick"
    >
      Наши клиенты
    </button>
    <button
      class="href_question"
      @click="handleClick"
    >
      Вопрос-Ответ
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(event){
      const button = event.target
      const className = button.classList
      this.$emit('anchorClick', className[0])
    }
  },
}
</script>

<style lang="scss" scoped>


.transparent-navbar {
  display: flex;
  justify-content: space-between;
}

button {
  opacity: .6;
  margin: 15px;
  font-family: "Georgian";
  color: white;
}

button:hover {
  color: white;
  opacity: 1;
}

@media screen and ( min-width: 1433px ) {
  button {font-size: 25px;}
}

@media screen and (min-width: 900px) and (max-width: 1433px) {
  button {font-size: 15px;}
}

@media screen and ( max-width: 900px ) {
  button {font-size: 7px;}
}

@media screen and ( max-width: 430px ) {
  button {font-size: 5px;}
}

</style>