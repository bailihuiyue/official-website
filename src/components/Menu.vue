<template>
  <el-menu default-active="/" :mode="mode" @select="handleSelect" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/news">新闻资讯</el-menu-item>
    <el-menu-item index="/product">产品中心</el-menu-item>
    <el-menu-item index="/case">经典案例</el-menu-item>
    <el-menu-item index="/goin">走进科建</el-menu-item>
    <el-menu-item index="/download">下载APP</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    mode: {
      type: String
    },
    handleSelect: {
      type: Function
    }
  }
};
</script>

<style>
</style>