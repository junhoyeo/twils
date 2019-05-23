<script>
export default {
  props: {
    text: {
      type: String,
      default: 'vue.js'
    }
  },
  
  data () {
    return {
      badges: {
        'vue.js': { color: '#42b883', icon: 'fab fa-vuejs' },
        'ai': { color: '#ff9400', icon: 'fas fa-brain' }
      }
    }
  },

  computed: {
    badge () {
      return this.badges[this.text]
    },
    computedStyle () {
      return {
        color: this.badge.color,
        'border-color': this.badge.color
      }
    }
  }
}
</script>

<template>
  <span
    class="badge"
    :style="computedStyle"
  >
    <span class="badge__text">
      <i
        v-if="badge.icon"
        :class="badge.icon"
      />
      {{ text }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
.badge {
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 8px;
  display: inline-block;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 5px 5px 32px -18px rgb(28, 28, 49);
  border: 1px solid #000;
  margin-right: 0.2rem;
  margin-bottom: 5px;
}
</style>
