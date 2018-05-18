<template>
  <el-container class="app-container">
    <el-header class="header">
      <app-header />
    </el-header>
    <el-container>
      <el-aside width="200px" height="100%">
        <app-left />
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import appLeft from './components/app-left/index.vue';
  import appHeader from './components/app-header/index.vue';
  import appBread from './components/app-bread/index.vue';
  export default {
    name: 'App',
    components: {
      'app-left': appLeft,
      'app-header': appHeader,
      'app-bread': appBread
    }
  }
</script>

<style>
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
  body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
  h1, h2, h3, h4, h5, h6{ font-size:100%; }
  address, cite, dfn, em, var { font-style:normal; }
  code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
  small{ font-size:12px; }
  ul, ol { list-style:none; }
  a { text-decoration:none; }
  a:hover { text-decoration:underline; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  legend { color:#000; }
  fieldset, img { border:0; }
  button, input, select, textarea { font-size:100%; }
  table { border-collapse:collapse; border-spacing:0; }
  html, body{
    height: 100%;
    width: 100%;
  }
  body{
    background-color: #323052;
  }
  .header{
    background-color: #2a2c44;
  }
</style>
