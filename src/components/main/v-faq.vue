<template>
<v-col md="6">
    <div class="block">
      <div class="question">
      <v-img
      class="question-img"
      
      src="@/assets/free-icon-question-1055522.png"></v-img>
    
      <div>
        {{ questions.question }}
      </div>
    </div>
    <div class="answer">
        {{ questions.answer }}
    </div>
  </div>
  </v-col>
</template>

<script>
export default {
    props: {
        questions: {
            type: Object,
            requested: true,
        }
    }
}
</script>

<style lang="scss">

.block {
  border: solid 3px #D9CDED;
}

.question {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-style: italic;

  font-size: 30px;
  font-family: "Georgia";
}

.question-img {
  max-width: 50px;
  margin:  10px;
}

.answer {
  font-size: 25px;
  font-family: "LeoHand Light";
  font-style: italic;
  margin: 10px;
}

</style>