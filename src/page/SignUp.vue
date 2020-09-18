<template>
  <div class="wrapper">
    <Card>
      <CardUser :info="info" />
    </Card>
    <Card>
      <SignUpForm  @inputschange="updateInputs" />
    </Card>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'
import CardUser from '../components/CardUser'
import Card from '../components/Card'
export default {
  name: 'SignUp',
  data: function () {
    return {
      info: {
        login: null,
        password: null,
        email: null,
        userName: null
      }
    }
  },
  methods: {
    updateInputs (info) {
      this.info = info
    }
  },
  components: {
    CardUser,
    SignUpForm,
    Card
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #E5E5E5;
  padding: 76px 94px 86px;
  box-sizing: border-box;
}
</style>
