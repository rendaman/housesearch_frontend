export default {
  async asyncData({ $axios }) {
    const url = 'api/makers/'
    const makers = await $axios.$get(url)
    return {makers}
  },
  data () {
    return {
      keyword: "",
    }
  },
  computed: {
    filteredMakers () {
      let makers = []
      for(let i = 0; i < this.makers.length; i++) {
        let maker = this.makers[i];
        if(
          maker.name.indexOf(this.keyword) !== -1 ||
          maker.name_hira.indexOf(this.keyword) !== -1 ||
          maker.name_kata.indexOf(this.keyword) !== -1 ||
          maker.name_eng.indexOf(this.keyword) !== -1
        ) {
          makers.push(maker);
        }
      }
      return makers;
    }
  },
}