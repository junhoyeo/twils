<script>
  export default { 
    name: 'JunoTwil',
    props: {
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
      <li 
        v-if="type === 'string'"
        v-html="marked(text)"
      />
      <pre v-else-if="type === 'code'"><code>{{ text }}</code></pre>
    </template>
    <ul v-if="twils">
      <li>
        <juno-twil
          v-for="(twil, idx) in twils" 
          :key="`twil-${nesting}-${idx}`"
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
  }

  li {
    color: #2A2B4A;
    line-height: 1em;
  }
}
</style>
