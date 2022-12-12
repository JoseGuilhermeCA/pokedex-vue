<template>


    <router-link class="ListButton" to="/pokemons">Veja os Pokemons</router-link>


</template>


<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';



export default defineComponent({
    name: 'Button-vue',


})

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');


.ListButton {
    width: 231px;
    height: 66px;
    border-radius: 11px;
    background-color: #48D0B0;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
    font-size: 20px;
    color: white;
    font-family: 'Inter', sans-serif;
}
</style>