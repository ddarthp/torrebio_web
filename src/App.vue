<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Icon from 'vue-md-icons/src/components/Icon'
export default {
  name: 'App',
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import './main.scss';
</style>
