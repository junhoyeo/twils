<script>
export default {
  name: 'JunoSidebarElement',
  props: {
    path: {
      type: String
    }
  },

  computed: {
    computedClass() {
      return { 
        'current': (this.$route.path === this.path)
      }
    }
  },

  methods: {
    onClickLink() {
      this.$router.push(this.path)
    }
  }
}
</script>

<template>
  <div
    class="menu-element"
    :class="computedClass"
    @click="onClickLink"
  >
    <template>
      <slot/>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.menu-element {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  padding: 0.5em;
  color: $highlight;
  background-color: $lighten;
  cursor: pointer;
}

.menu-element:not(:last-of-type) {
  border-bottom: 2px solid $light;
}

.menu-element.current {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.5em;
  color: $highlight;
  background-color: $lighter;
  cursor: not-allowed;
}
</style>
