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
        'width': (this.show) ? '18em' : '0'
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
      <span class="footer-wrap">
        <div class="footer">
          <a href="https://github.com/junhoyeo/junhoyeo.github.io" target="_blank">
            <i class="fab fa-github-square fa-3x"></i>
          </a>
          <div class="copyright">
            © 2019 <a href="https://github.com/JunhoYeo" target="_blank">JunhoYeo</a>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: $overlay;
  visibility: visible;
  transition: 0.1s;
}

.sidemenu {
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: $content;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: inset 3px 3px 32px -10px rgb(28, 28, 49);
}

.footer-wrap {
  position: absolute;
  bottom: 0.5em;
  text-align: center;
  width: 100%;
}

.footer {
  width: 50%;
  margin: auto;
  position: relative;
  color: $lighten;
  padding-left: 0.5em;

  .copyright {
    font-size: 0.95em;
  }

  .copyright a {
    color: $lighten;
    font-weight: bold;
  }

  .copyright a:hover, a:focus {
    color: $lighter;
  }

  .fab {
    float: right;
    margin-right: 0.1em;
    color: $lighten;
  }

  .fab:hover {
    color: $lighter;
  }

  .fav:focus {
    color: $lighter;
    // border: 1px solid #C4D7ED;
  }
}
</style>
