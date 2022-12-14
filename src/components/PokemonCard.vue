<template>
    <div class="card" :style="cssVars">
        <div class="idPokemon"> {{ pokemonIdSintax(pokemonUrl.id) }} </div>
        <div class="nomePokemon"> {{ name }} </div>
        <div class="tipoPokemon" v-for="type in typeList" :key="type">
            <div>
                <p>
                    {{ pokemonTypeTranslate(type.type.name) }}
                </p>
            </div>
        </div>

        <div class="foto"> <img v-bind:src="pokemonUrl.sprites?.front_default"></div>
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import axios, { Axios, AxiosInstance } from "axios";
import getPokemonImageUrl from '@/services/api';

export default defineComponent({
    props: {
        name: String,
        url: String,
        img: String
    },
    data() {
        return { pokemonUrl: {} as any, pokemonId: "" as any, pokemonType: "" as any, typeList: [] , typeColor: "" as string }
    },
    beforeMount() {
        axios.get(`${this.url}`)
            .then(response => {
                this.pokemonUrl = JSON.parse(JSON.stringify(response.data))
                this.typeList  = this.pokemonUrl.types
                
                
            })
            .catch(error => {
                console.log(error)
                console.log('nao funcionou iiiiiiiiii')
            })
        this.pokemonCardColorPicker(this.typeList[0].type.name)        
    },
    methods: {
        pokemonIdSintax(crudeId: number) {
            if (crudeId < 10) {

                return `#00${crudeId}`
            } else if (crudeId < 100) {
                return `#0${crudeId}`
            } else if (crudeId < 1000) {
                return `#${crudeId}`
            }

        },

        pokemonTypeTranslate(type: string) {

            if (type === "grass") {

                return "Planta"
            } else if (type == "normal") {

                return "Comum"
            } else if (type == "fighting") {

                return "Lutador"
            } else if (type == "flying") {

                return "Voador"
            } else if (type == "poison") {

                return "Veneno"
            } else if (type == "ground") {

                return "Terrestre"
            } else if (type == "rock") {

                return "Pedra"
            } else if (type == "bug") {

                return "Inseto"
            } else if (type == "ghost") {

                return "Fantasma"
            } else if (type == "stell") {

                return "Metal"
            } else if (type == "fire") {

                return "Fogo"
            } else if (type == "water") {

                return "Agua"
            } else if (type == "electric") {

                return "Eletrico"
            } else if (type == "psychic") {

                return "Psiquico"
            } else if (type == "ice") {

                return "Gelo"
            } else if (type == "dragon") {

                return "Dragão"
            } else if (type == "dark") {

                return "Noturno"
            } else if (type == "fairy") {

                return "Fada"
            } else if (type == "unknown") {

                return "Desconhecido"
            } else if (type == "shadow") {

                return "Sombra"
            }
        },

        getPokemonImageUrlConsume(url: string) {
            return getPokemonImageUrl(url)
        },

        pokemonCardColorPicker(type: string) {
            if (type === "grass") {
                this.typeColor = "#46A487"
            } else if (type == "normal") {
                this.typeColor = "#F2F2F2"

            } else if (type == "fighting") {
                this.typeColor = "#D56723"

            } else if (type == "flying") {
                this.typeColor = "#F2F2F2"

            } else if (type == "poison") {
                this.typeColor = "#B97FC9"

            } else if (type == "ground") {
                this.typeColor = "#b59475"

            } else if (type == "rock") {
                this.typeColor = "#A38C21"

            } else if (type == "bug") {
                this.typeColor = "#668F38"

            } else if (type == "ghost") {
                this.typeColor = "#B97FC9"

            } else if (type == "stell") {
                this.typeColor = "#9EB7B8"

            } else if (type == "fire") {
                this.typeColor = "#FB6C6C"

            } else if (type == "water") {
                this.typeColor = "#46C5D7"

            } else if (type == "electric") {
                this.typeColor = "#FFCE4B"

            } else if (type == "psychic") {
                this.typeColor = "#DB5CA6"

            } else if (type == "ice") {
                this.typeColor = "#30A7D7"

            } else if (type == "dragon") {
                this.typeColor = "#F16E57"

            } else if (type == "dark") {
                this.typeColor = "#B4B4B4"

            } else if (type == "fairy") {
                this.typeColor = "#FDB9E9"

            } else if (type == "unknown") {
                this.typeColor = "#B4B4B4"

            } else if (type == "shadow") {
                this.typeColor = "#B97FC9"

            }



        }





    },
    computed: {
        cssVars() {
            console.log(this.typeColor)
            return {
                '--bg-color': this.typeColor,
            }
        }
    }

})
</script>

<style lang="scss">
.card {

    box-sizing: border-box;

    width: 243px;
    height: 165px;

    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);

    .idPokemon {
        padding-right: 9px;
        padding-top: 9px;
        display: flex;
        justify-content: flex-end;


    }

    .nomePokemon {
        margin-left: 10px;
        text-transform: capitalize;

    }

    .tipo {
        display: GRID;
        padding-left: 10px;
    }

    .foto {

        img {
            max-width: 80px;
            max-height: 70px;
        }

        padding-bottom: 1px;
        padding-right: 9px;
        display: flex;
        justify-content: flex-end;
    }




}
</style>