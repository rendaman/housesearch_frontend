export default {
    async asyncData({ $axios, params }) {
        const url = 'api/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url)
        return {maker}
    },
}
