<template>
  <div class="has-header">
    <list :items='events'></list>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import List from '../components/List.vue'

  export default {
    data () {
      return {}
    },
    components: {
      List
    },
    computed: {
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      ...mapActions([
        'loadMore'
      ])
    },
    mounted () {
      this.loadMore()
    }
  }
</script>

<style lang="scss" scoped>

</style>
