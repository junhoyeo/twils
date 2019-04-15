<script>
  export default { 
    name: 'JunoTwil',
    props: {
      day: {
        type: String
      },
      text: {
        type: String
      },
      type: {
        type: String
      },
      twils: {
        type: Array,
        required: false
      },
      nesting: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<template>
  <div class="twil">
    <template
      v-if="text"
    >
      <li v-if="type === 'string'">
        <span 
          v-if="day"
          class="twil-day"
        >
          {{ day }}
        </span>
        <span class="twil-text" v-html="marked(text)"/>
      </li>
      <!-- <li 
        v-if="type === 'string'"
        v-html="marked(text)"
      /> -->
      <pre v-else-if="type === 'code'"><code>{{ text }}</code></pre>
    </template>
    <ul v-if="twils">
      <li>
        <juno-twil
          v-for="(twil, idx) in twils" 
          :key="`twil-${nesting}-${idx}`"
          :day="twil.day"
          :text="twil.text"
          :type="twil.type"
          :twils="twil.twils"
          :nesting="nesting + 1"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.twil {
  font-size: 1.5rem;

  pre {
    width: 80%;
    color: #282a36;
    font-size: 1rem;
  }

  li {
    color: #2A2B4A;
    line-height: 1em;
  }
}

.twil-day {
  color: #BF5967;
  background-color: white;
  padding: 2px;
  padding-left: 7px;
  font-size: 1.2rem;
  font-weight: 400;
  border: 1.5px solid #BF5967;
  border-radius: 12px;
  margin-right: 0.5rem;
}

.twil-text {
  display: inline-block;
}
</style>
