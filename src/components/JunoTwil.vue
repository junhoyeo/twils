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
      image: {
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
      <pre v-else-if="type === 'code'"><code>{{ text }}</code></pre>
      <div
        v-else-if="type === 'image'"
        class="twil-image"
      >
        <img :src="require(`../images/twil/${image}.png`)">
        <blockquote>{{ text }}</blockquote>
      </div>
    </template>
    <ul v-if="twils">
      <li>
        <juno-twil
          v-for="(twil, idx) in twils" 
          :id="`twil-${nesting}-${idx}`"
          :key="`twil-${nesting}-${idx}`"
          :day="twil.day"
          :text="twil.text"
          :image="twil.image"
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
  font-size: 1.2rem;

  pre {
    color: #282a36;
    font-size: 1rem;
  }

  li {
    color: #2A2B4A;
    line-height: 1em;
  }
}

@media (max-width: 800px) {
  body ul {
    padding-left: 1.5em;
  }
}

@media (max-width: 500px) {
  body ul {
    padding-left: 0.8em;
  }
}

.twil-day {
  color: #BF5967;
  background-color: white;
  padding: 4px;
  font-size: 1rem;
  font-weight: 400;
  border: 1.5px solid #BF5967;
  border-radius: 12px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.twil-text {
  margin-top: 0.5rem;
  line-height: 1.2;
  display: inline-block;
}

.twil-image {
  text-align: center;

  img {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 900px) {
    img {
      width: 100%;
    }
  }

  blockquote {
    width: fit-content;
    margin: auto;
    margin-top: 0.2em;
  }
}
</style>
