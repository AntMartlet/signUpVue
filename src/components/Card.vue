<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(28, 41, 61, 0.05), 0px 2px 6px rgba(28, 41, 61, 0.1);
  border-radius: 8px;
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;
  margin-bottom: 32px;
  min-height: 100px;
  box-sizing: border-box;

  &:last-child {
      margin-bottom: 0;
  }
}
</style>
