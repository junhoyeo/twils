<script>
import JunoBadge from '../components/JunoBadge'

export default {
  name: 'JunoProject',
  components: {
    JunoBadge
  },
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
    onClickLink () {
      if (this.project.url)
        window.open(this.project.url, '_blank').focus()
    }
  }
}
</script>

<template>
  <div class="project">
    <div
      class="image"
      :class="{ full: project.full }"
      @click="onClickLink"
    >
      <img :src="require(`../images/projects/${year}/${project.image}.png`)">
    </div>
    <div class="content">
      <span class="name">{{ project.name }}
        <span class="date">{{ project.date }}</span>
      </span>
      <div
        class="tags"
        v-if="project.tags"
      >
        <juno-badge
          v-for="(tag, idx) in project.tags"
          :key="idx"
          :text="tag"
        />
      </div>
      <p class="summary">{{ project.summary }}</p>
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
    color: $light;
  }

  .summary {
    font-weight: 400;
    color: $content;
    font-size: 0.9em;
    line-height: 1.2;
    text-align: justify;
  }

  .image {
    position: relative;
    background-color: $project-background;
    box-shadow: 5px 5px 32px -18px $project-shadow;
    margin-bottom: 0.3em;
    cursor: pointer;
  }

  .image.full {
    height: 20vh;
  }

  img {
    display: flex;
    height: 20vh;
    width: auto;
    margin: auto;
    box-shadow: 3px 3px 32px -18px $project-shadow;
    object-position: center;
    object-fit: cover;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .full img {
    position: absolute; top:0; left: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    border: none;
    flex-direction: column;
    padding: 0.3em;
  }
}
</style>
