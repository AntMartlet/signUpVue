<template>
  <div class="signUpForm">
    <p v-if="msg" class="signUpForm__msg">{{msg}}</p>
    <form
      @submit="submitForm"
      v-else
    >
      <h2 class="signUpForm__title">Sign up</h2>
      <div class="signUpForm__inputs">
        <div v-for="(input, key) in inputs" class="input" :class="{ 'input--half': key > 2 }" :key="input.id">
          <div class="input__container">
            <label class="input__label" :for="input.id">{{input.label}}</label>
            <input
              class="input__input"
              v-model.trim="input.value"
              :placeholder="input.placeholder"
              :id="input.id"
              :name="input.id"
              @keydown="changeInputs"
            />
            <label class="input__error">{{input.error}}</label>
          </div>
        </div>
      </div>
      <div class="signUpForm__buttons">
        <input
          class="signUpForm__btn"
          type="submit"
          value="Sign up"
        >
        <input
          class="signUpForm__btn signUpForm__btn--reset"
          type="button"
          value="Reset"
          @click="resetForm()"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data: function () {
    return {
      msg: null,
      inputs: [
        {
          id: 'login',
          label: 'Login*',
          placeholder: 'SomecollLogin',
          value: '',
          required: true,
          error: ''
        },
        {
          id: 'e-mail',
          label: 'E-mail*',
          placeholder: 'SomeCool@gmail.com',
          value: '',
          required: true,
          error: ''
        },
        {
          id: 'password',
          label: 'Password*',
          placeholder: 'SomeCool@gmail.com',
          value: '',
          required: true,
          error: ''
        },
        {
          id: 'first_name',
          label: 'First name',
          placeholder: '',
          value: '',
          error: ''
        },
        {
          id: 'last_name',
          label: 'Last name',
          placeholder: '',
          value: '',
          error: ''
        }
      ]
    }
  },
  methods: {
    submitForm (e) {
      e.preventDefault()
      this.inputs = this.inputs.map(elem => {
        if (elem.required) {
          elem.error = elem.value ? '' : 'Заполните поле'
        }
        if (elem.id === 'e-mail') {
          elem.error = this.validEmail(elem.value) ? '' : 'Исправьте e-mail'
        }
        return elem
      })
      const errorElems = this.inputs.filter(input => input.error.length > 0)
      if (!errorElems.length) {
        this.msg = 'Успешная регистрация'
        this.$store.commit('changeInfo', {
          login: this.getValue('login'),
          password: this.getValue('password'),
          email: this.getValue('e-mail'),
          userName: `${this.getValue('first_name')} ${this.getValue('last_name')}`
        })
      }
    },
    getValue (id) {
      return this.inputs.find(item => item.id === id).value
    },
    resetForm () {
      this.inputs = this.inputs.map(elem => {
        elem.error = ''
        elem.value = ''
        return elem
      })
      this.$emit('inputschange', {
        login: null,
        email: null,
        userName: null
      })
    },
    validEmail: function (email) {
      var validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return validation.test(email)
    },
    changeInputs (event) {
      this.$emit('inputschange', {
        login: this.getValue('login').length > 0 ? this.getValue('login') : null,
        email: this.getValue('e-mail').length > 0 ? this.getValue('e-mail') : null,
        userName: this.getValue('first_name').length > 0 || this.getValue('last_name').length > 0 ? `${this.getValue('first_name')} ${this.getValue('last_name')}` : null
      })
    }
  }
}
</script>

<style lang="scss">
.signUpForm {
  padding-top: 64px;
  padding-bottom: 64px;

  &__title {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    margin-top: 0;
    margin-bottom: 48px;
  }

  &__buttons {
    display: flex;
  }

  &__btn {
    cursor: pointer;
    display: inline-block;
    padding: 12px 24px;
    background: #2F9AFF;
    border: 1px solid rgba(16, 24, 40, 0.1);
    color: white;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 15px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    &--reset {
      background: linear-gradient(0deg, rgba(47, 154, 255, 0.3), rgba(47, 154, 255, 0.3)), #FFFFFF;
      border: 1px solid rgba(16, 24, 40, 0.05);
      color: #101828;
    }
  }

  &__msg {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    color: green;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__inputs {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 16px;
  }
}

.input {
  margin-bottom: 4px;
  grid-column-start: 1;
  grid-column-end: 3;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: rgba(16, 24, 40, 0.6);
    margin-bottom: 4px;
    text-align: left;
  }

  &__input {
    border: 1px solid rgba(16, 24, 40, 0.25);
    box-sizing: border-box;
    box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.05), inset 0px 2px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    height: 36px;
  }

  &__error {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: red;
    height: 12px;
  }

  &--half {
    grid-column-start: auto;
    grid-column-end: auto;
  }
}
</style>
