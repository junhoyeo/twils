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
  color: rgb(253, 226, 168);
  background-color: rgb(238, 171, 178);
  cursor: pointer;
}

.menu-element:not(:last-of-type) {
  border-bottom: 2px solid rgb(229, 142, 151);
}

.menu-element.current {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.5em;
  color: #FFE8B7;
  background-color: rgb(240, 156, 165);
  cursor: not-allowed;
}
</style>
