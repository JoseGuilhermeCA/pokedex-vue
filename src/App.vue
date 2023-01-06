<template>

  <Navbar />
  <router-view />




</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/NavBar.vue'


export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },

})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  ;
}
</style>
