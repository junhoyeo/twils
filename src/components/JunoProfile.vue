<script>
export default {
  name: 'JunoProfile',

  data() {
    return {
      loading: true
    }
  },

  created() {
    setInterval(() => {
      this.loading = !(this.loading)
    }, 800);
  }
}
</script>

<template>
  <div class="profile">
    <div class="intro">
      <h1 :class="{ 'loading': loading }">
        <img class="image" src="../images/profile.jpeg" />
        Portfolio: JunhoYeo
      </h1>
      <blockquote>
        정보기술을 이용해서 세상에 기여하고 싶은 고등학생
      </blockquote>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: block;
  user-select: none;

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
  }

  .intro {
    width: 80%;
    margin: 0.5em;
    user-select: text;
  }

  h1 {
    font-size: 3em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    color: #BF5967;
    user-select: none;
    // -webkit-text-fill-color: transparent;
    // -webkit-text-stroke-width: 2.2px;
    // -webkit-text-stroke-color: #BF5967;
  }
}
</style>
