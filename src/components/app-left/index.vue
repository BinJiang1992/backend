<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#2a2c44"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true">

    <template v-for="(item, i) in navList">
      <el-submenu v-if="item.child && item.child.length !== 0" :index="`${i+1}`" :key="i+1">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(menuItem, ii) in item.child"
                        :index="`${i+1}-${ii+1}`"
                        :key="`${i+1}-${ii+1}`"
                        :route="{path: menuItem.path}">
            {{menuItem.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-if="!item.child || item.child.length == 0"
                    :index="`${i+1}`" :key="i+1"
                    :route="{path: item.path}">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  import navList from './nav';
  export default {
    data() {
      return{
        navList,
      }
    }
  }
</script>
<style lang="scss">
  .el-container{
    height: 100%;
    .el-aside{
      background-color: #2a2c44;
      .el-menu{
        border-right: none;
      }
    }
  }
</style>
