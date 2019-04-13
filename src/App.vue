<script>
import JunoProfile from './components/JunoProfile'
import JunoYear from './components/JunoYear'

export default {
  name: 'app',
  components: {
    JunoProfile,
    JunoYear
  }
}
</script>

<template>
  <div id="app">
    <juno-profile />
    <juno-year :year="2019" />
  </div>
</template>

<style lang="scss">
#app {
  padding-left: 1.5em;
  padding-right: 1.5em;
}
</style>
