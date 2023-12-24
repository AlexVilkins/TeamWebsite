<template>
    <v-dialog
        v-model="dialog"
        width="600"
      >
        <v-card>
          <v-container>
            <v-card-title class="justify-center">
              Напишите нам
            </v-card-title>
            <v-form @submit.prevent>
              <v-text-field
                v-model="name"
                label="Ваше имя"
                placeholder="Иванов Иван Иванович"
                prepend-inner-icon="mdi mdi-rename"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                label="Телефон?"
                placeholder="89997770033"
                prepend-inner-icon="mdi mdi-phone-in-talk"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Почта"
                placeholder="johndoe@gmail.com"
                prepend-inner-icon="mdi-email-outline"
              ></v-text-field>
              <v-textarea 
              prepend-inner-icon="mdi mdi-message-processing-outline"
              label="Label"
              ></v-textarea>
            </v-form>
            <v-card-actions>
              <v-btn color="#D858E1" block @click="dialog = false">Отправить</v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
</template>

<script> 
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        dialog: false,
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
    }),
    watch: {
        value(newValue) {
            this.dialog = newValue
        },
        dialog(newValue) {
            this.$emit('update :input', newValue)
        }
    }
}
</script>