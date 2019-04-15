<script>
import JunoProfile from '../components/JunoProfile'
import JunoYear from '../components/JunoYear'

export default {
  name: 'projects',
  components: {
    JunoProfile,
    JunoYear
  }
}
</script>

<template>
  <div class="content">
    <juno-profile title="Portfolio"/>
    <juno-year :year="2019" />
    <juno-year :year="2018" />
  </div>
</template>
