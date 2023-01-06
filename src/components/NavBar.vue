<template>
    <nav>

        <div class="imagem">
            <img src="../assets/pokemon_logo.png">

        </div>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>

            <li>
                <router-link to="/pokemons">Pokemons</router-link>
            </li>

            <li>
                <router-link to="/contato">Contato</router-link>
            </li>

        </ul>

    </nav>


</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar-vue'
})

</script>

<style lang="scss" scoped>
.imagem {
    margin-top: 14px;
    margin-bottom: 19px;
    margin-left: 157px ;
    width: 159px;
    height: 60px;

    img{
        
        width: 100%;
        height: 100%;
    }
}
nav {
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center ;
    text-align: center;

    ul {
        display: flex;
        margin-right: 310px;

        li {

            list-style: none;
            margin-left: 100px;

            a {
                text-transform: uppercase;
                text-decoration: none;
                font-weight: 400;
                
                color: black;
                font-size: 25px;
                &:hover{
                    border-bottom: 2px solid black;
                    font-weight: 700;
                }
            }
        }

    }
}
</style>
