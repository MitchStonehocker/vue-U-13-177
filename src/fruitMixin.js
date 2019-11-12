export const fruitMixin = {
  data () {
    return {
      fruits: ['Apple','Banana','Manog','Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText)
      })
    }
  }
}