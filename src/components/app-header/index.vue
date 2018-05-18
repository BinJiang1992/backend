<template>
  <div class="header" flex="main:justify">
    <div class="left" flex="cross:center">
      <img src="https://www.bbaex.com//static/img/logo.cf76a0f.png" alt="">
      <span>智障荣儿</span>
    </div>
    <div class="right" flex="cross:center">
      <div>登录</div>
      <div>注册</div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" scoped>
  .header
    color: #fff;
    height: 100%;

  .left
    img
      height: 38px;
      margin-right: 20px;

  .right div
    position relative
    padding 0 10px
    margin 0 10px
    &:first-child:after
      content ''
      position absolute
      right -10px
      top 15%
      border-right 1px solid #fff
      height 70%


</style>
