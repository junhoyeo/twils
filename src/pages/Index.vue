<script>
import JunoProfile from '../components/JunoProfile'

export default {
  name: 'index',

  components: {
    JunoProfile
  },

  created() { 
    // load twil objects
    let start = (this.twilIndex - 5 < 0) ? 1 : this.twilIndex - 5
    for(let idx = start; idx <= this.twilIndex; idx++) {
      try {
        this.twils.splice(-1, 0, require(`../assets/twil/${idx}.json`))
      } catch {
        continue
      }
    }
    this.twils.sort((a, b) => (a.start_date < b.start_date) ? 1 : -1)
  },

  data() {
    return {
      twilIndex: require('../assets/twil/index.json').index,
      twils: []
    }
  }
}
</script>

<template>
  <div class="content">
    <juno-profile title="Blog"/>
    <div class="twils">
      <router-link
        :to="{ name: 'TWIL', params: {twilId: twil.id } }"
        v-for="(twil, idx) in twils"
        :key="idx"
        class="twil-wrap"
      >
        <div class="twil">
          <span class="twil__title">This Week I Learned #{{ twil.id }}</span>
          <span class="twil__date">{{ twil.start_date }} ~ {{ twil.end_date }}</span>
          <div class="twil__summary" v-html="marked(twil.summary)"/>
        </div>
      </router-link>
      <div
        v-if="!twils.length"
        class="no-twil"
      >
        아직 등록된 TWIL이 없습니다!
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.twil-wrap {
  color: #2A2B4A;
}

.twil {
  padding-bottom: 0.5em;
  border-bottom: 2px solid $light;
  cursor: pointer;

  &__title {
    font-size: 2.5em;
    font-weight: 700;
    color: $regular;
  }

  &__date {
    font-size: 1.5em;
    font-weight: 700;
    color: $light;
    display: block;
  }

  &__summary {
    display: block;
    font-size: 1.2em;
  }
}

.twil:hover, .twil:focus {
  background-color: $lightest;
}

.no-twil {
  margin-top: 1.5em;
  font-size: 1.5em;
  font-weight: 500;
  color: $regular;
  width: 100%;
  text-align: center;
}
</style>
