<script>
import JunoSidebar from '../components/JunoSidebar'
import JunoSidebarElement from '../components/JunoSidebarElement'

export default {
  name: 'JunoProfile',

  components: {
    JunoSidebar,
    JunoSidebarElement
  },

  props: {
    title: {
      type: String,
      default: 'Blog'
    }
  },

  data() {
    return {
      menuShow: false
    }
  },

  methods: {
    onClickProfile () {
      this.$router.push('/')
    },

    onClickMenu: function () {
      this.menuShow = (this.menuShow) ? false : true
    }
  }
}
</script>

<template>
  <div
    class="profile"
  >
    <div class="intro">
      <h1>
        <img
          class="image" src="../images/profile.jpeg"
          @click="onClickProfile"
        />
        <span @click="onClickProfile">
          {{ title }}: JunhoYeo
        </span>
        <i class="fas fa-bars" v-on:click="onClickMenu"></i>
      </h1>
      <blockquote>
        정보기술을 이용해서 세상에 기여하고 싶은 고등학생
      </blockquote>
    </div>
    <juno-sidebar v-model="menuShow">
      <juno-sidebar-element path="/">
        블로그
      </juno-sidebar-element>
      <juno-sidebar-element path="/projects">
        프로젝트
      </juno-sidebar-element>
    </juno-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: block;
  user-select: none;
  font-family: 'Noto Sans KR', sans-serif;

  .image {
    display: inline-block;
    vertical-align:text-bottom;
    width: 10vw;
    border: 2px solid #BF5967;
    border-radius: 50%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
  }

  .intro {
    width: 80%;
    margin: 0.5em;
    user-select: text;
  }

  h1 {
    font-size: 3em;
    font-weight: 900;
    color: #BF5967;
    user-select: none;
    // -webkit-text-fill-color: transparent;
    // -webkit-text-stroke-width: 2.2px;
    // -webkit-text-stroke-color: #BF5967;
  }

  h1 span {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    h1 span {
      display: block;
    }
  }

  .fa-bars {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    cursor: pointer;
  }
}
</style>
