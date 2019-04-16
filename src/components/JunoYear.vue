<script>
import JunoProject from './JunoProject'

export default {
  name: 'JunoYear',

  components: {
    JunoProject
  },

  props: {
    year: {
      type: Number,
      required: true
    }
  },

  data () {
    const yearData = require(`../assets/projects/${this.year}.json`)
    return {
      summary: yearData.summary,
      projects: yearData.projects
    }
  }
}
</script>

<template>
  <div :id="`year-${year}`">
    <h2>{{ year }} <span class="summary">{{ summary }}</span></h2>
    <div class="projects">
      <div
        class="project-wrap"
        v-for="(project, idx) in projects"
        :key="`project-${year}-${idx}`"
      >
        <juno-project
          :year="year"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: #E8707B;
  font-weight: 700;
  font-size: 2em;
  user-select: none;
}

.summary {
  font-size: 0.5em;
  font-weight: 400;
  color: #2A2B4A;
  user-select: text;
}

.projects {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

.project-wrap {
  display: block;
  margin: 0.5em;
}
</style>
