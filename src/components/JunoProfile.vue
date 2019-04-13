<script>
export default {
  name: 'JunoProfile'
}
</script>

<template>
  <div class="profile">
    <div class="intro">
      <h1><img class="image" src="https://avatars0.githubusercontent.com/u/32605822?s=460" /> JunhoYeo</h1>
      <blockquote>
        정보기술을 이용해서 세상에 기여하고 싶은 고등학생
      </blockquote>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: block;

  .image {
    display: inline-block;
    vertical-align:text-bottom;
    width: 10vw;
    border-radius: 50%;
  }

  .intro {
    width: 60%;
    margin: 0.5em;
  }

  h1 {
    font-size: 3em;
  }
}
</style>
