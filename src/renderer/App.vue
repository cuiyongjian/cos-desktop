<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'cos-desktop'
  }
</script>

<style>
  /* CSS */
#app {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f7f9;
}
</style>
