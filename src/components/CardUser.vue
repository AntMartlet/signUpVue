<template>
  <div class="cardUser">
    <h2 class="cardUser__title">New user</h2>
    <p class="cardUser__text">{{personalInfo.userName || info.userName || 'Firstname Lastname'}} / <span>{{personalInfo.login || info.login || 'SomecollLogin'}}</span></p>
    <p class="cardUser__email">{{personalInfo.email || info.email || 'SomeColl@gmail.com'}}</p>
  </div>
</template>

<script>
export default {
  name: 'CardUser',
  props: ['info'],
  computed: {
    personalInfo () {
      return this.$store.state.personalInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.cardUser {
  padding-top: 32px;
  padding-bottom: 32px;
  &__title {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    margin-top: 0;
    margin-bottom: 24px;
  }

  &__text,
  &__email {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 16px;
    span {
      color: rgba(16, 24, 40, 0.6);
    }
  }

  &__email {
    margin-bottom: 0;
  }
}
</style>
