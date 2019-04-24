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
      <span class="date">{{ twil.start_date }} ~ {{ twil.end_date }}</span>
      <div class="summary" v-html="marked(twil.summary)"/>
      <div class="twil-list">
        <juno-twil :twils="twil.twils" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title, .date, .summary, .twil-list {
  width: 90%;
  margin: auto;
}

.twil-wrap {
  .title {
    font-size: 2.5em;
    font-weight: 700;
    user-select: none;
    line-height: 1.2;
  }

  .date {
    font-size: 1.5em;
    font-weight: 700;
    color: rgba(255, 109, 109, 0.596);
    display: block;
  }
  
  .summary {
    font-size: 1.2em;
    font-weight: 400;
    color: #2A2B4A;
    user-select: text;
    margin-bottom: 0.5rem;
  }
}

.twil-list {
  width: 90%;
}

@media (max-width: 800px) {
  .twil-list {
    width: 100%;
  }
}
</style>
