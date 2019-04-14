<script>
export default {
  name: 'JunoProject',
  props: {
    year: {
      type: Number,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClickLink() {
      window.open(this.project.url, '_blank').focus()
    }
  }
}
</script>

<template>
  <div class="project">
    <div
      class="image"
      @click="onClickLink"
    >
      <img :src="require(`../images/${year}/${project.image}.png`)">
    </div>
    <div class="content">
      <span class="name">{{ project.name }} 
        <span class="date">{{ project.date }}</span>
      </span>
      <p class="info">{{ project.info }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  font-family: 'Noto Sans KR', sans-serif;
  width: 300px;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 0;
  border: none;

  .name {
    font-weight: 900;
    font-size: 1.8em;
    user-select: none;
  }

  .date {
    float: right;
    font-weight: 400;
    font-size: 0.5em;
    color: rgb(170, 139, 158);
  }

  .info {
    font-weight: 400;
    color: #2A2B4A;
    font-size: 0.9em;
    line-height: 1.2;
  }

  .image {
    position: relative;
    background-color: rgb(255, 239, 237);
    box-shadow: 5px 5px 32px -18px #730202;
    margin-bottom: 0.3em;
    cursor: pointer;
  }

  img {
    display: flex;
    height: 20vh;
    width: auto;
    margin: auto;
    box-shadow: 3px 3px 32px -18px #550f0f;
    object-position: center;
    object-fit: cover;
    
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .content {
    border: none;
    flex-direction: column;
    padding: 0.3em;
  }
}
</style>
