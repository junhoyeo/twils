<script>
import JunoProfile from '../components/JunoProfile'
import JunoTwil from '../components/JunoTwil'

export default {
  name: 'projects',
  components: {
    JunoProfile,
    JunoTwil
  },

  data() {
    return {
      twil: {
        id: this.$route.params.twilId
      }
    }
  },

  created () {
    try {
      this.twil = require(`../assets/twil/${this.twil.id}.json`)
    } catch {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="content">
    <juno-profile title="TWIL"/>
    <div class="twil-wrap">
      <div class="title">
        This Week I Learned #{{ twil.id }}
      </div>
      <div class="summary">
        {{ twil.summary }}
      </div>
      <div class="twil-list">
        <juno-twil :twils="twil.twils" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.twil-wrap {
  .title {
    font-size: 2.5em;
    font-weight: 700;
    user-select: none;
  }
  
  .summary {
    font-size: 1.5em;
    font-weight: 400;
    color: #2A2B4A;
    user-select: text;
  }
}
</style>
