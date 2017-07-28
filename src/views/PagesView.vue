<template>
  <div>
    <HeaderBar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderBar
    }
  }
</script>

<style lang="scss" scoped>


</style>
