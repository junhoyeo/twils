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
  }
}
</script>


<template>
  <div :class="`year-${year}`">
    <h1>{{ year }}</h1>
    <div 
      :id="`${year}-4`"
      class="month"
    >
      <h1>4월</h1>
      <div class="projects">
        <juno-project />
        <juno-project />
        <juno-project />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.project {
  justify-content: flex-start;
}
</style>
