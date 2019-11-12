<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUppercase }}</p>
      <p>{{ text | to-lowercase }}</p>
      <h3>Chained filters</h3>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <p>{{ text | to-lowercase | toUppercase }}</p>
      <hr>
      <p>Filtering with computed values.</p>
      <input v-model="filterText">
      <ul>
        <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
export default {
  mixins: [fruitMixin],
  data () {
    return {
      text: 'Hello There!',
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style>

</style>
