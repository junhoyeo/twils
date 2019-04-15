<script>
export default {
  name: 'SideMenu',
  props: {
    value: {}
  },
  data: function () {
    return {
      show: this.value,
      content: this.value
    }
  },
  watch: {
    show: function (val) {
      this.$emit('input', val)
    },
    value: function (val) {
      this.show = val
      this.content = val
    }
  },
  methods: {
    getSideStyle: function () {
      return {
        'width': (this.show) ? '20em' : '0'
      }
    },
    getOverlayStyle: function () {
      return {
        'visibility': (this.show) ? 'visible' : 'hidden'
      }
    },
    onClickOverlay: function () {
      this.content = false
      this.show = false
    }
  }
}
</script>

<template>
  <div>
    <div class="overlay" :style="getOverlayStyle()" v-on:click="onClickOverlay"/>
    <div class="sidemenu" :style="getSideStyle()">
      <template>
        <slot/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  transition: 0.1s;
}

.sidemenu {
  height: 100%;
  width: 20em;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: #E8A0AB;
  overflow-x: hidden;
  transition: 0.5s;
}
</style>
