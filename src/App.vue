<template>
  <div id="app">
    <div v-if="!$route.meta.keepAlive">
      <Header />
      <router-view />
    </div>
    <router-view v-if="$route.meta.keepAlive" />
  </div>
</template>

<script>
import Header from './components/HeaderBar/HeaderBar'

export default {
  components: { Header }
}
</script>

<style lang="scss">

  body, html, * {
    margin: 0;
    padding: 0;
    border: 0;

  }

  #app, html, body {
    font-family: MicrosoftYaHei, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;

  }
</style>
