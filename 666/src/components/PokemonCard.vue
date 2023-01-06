<template>

    <div class="card" :style="cssVars">
        <div class="ladoEsquerdo">
            <div class="nomePokemon"> {{ name }} </div>
            <div class="tipoPokemon" v-for="item in typeList" :key="item">
                <div class="typexx">
                    <p>
                        {{ pokemonTypeTranslate(item.type.name) }}


                    </p>
                </div>
            </div>
        </div>
        <div class="ladoDireito">
            <div class="idPokemon"> {{ pokemonIdSintax(pokemonUrl.id) }} </div>
            <div class="foto"> <img v-bind:src="pokemonUrl.sprites?.front_default"></div>
        </div>

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
        
    },
    data() {
        return { pokemonUrl: {} as any, pokemonId: "" as any, pokemonType: "" as any, typeList: [] as any, typeColor: "" as string, backgroundTypeColor: "white" as string, fontTypeColor: "black"}
    },
    beforeMount() {
        axios.get(`${this.url}`)
            .then(response => {
                this.pokemonUrl = JSON.parse(JSON.stringify(response.data))
                this.typeList = this.pokemonUrl.types
                this.pokemonCardColorPicker(this.typeList[0].type.name)


            })
            .catch(error => {
                console.log(error)
                console.log('nao funcionou iiiiiiiiii')
            })

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
                this.typeColor = "#eaeaea"
                this.backgroundTypeColor = "black"
                this.fontTypeColor = "white"
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

            return {
                '--bg-color': this.typeColor,
                '--type_bg-color': this.backgroundTypeColor,
                '--font_bg-color': this.fontTypeColor
            }
        }
    }
})
</script>
<style lang="scss" scoped>
.card {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');


    box-sizing: border-box;
    width: 100%;
    height: 160px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    background-color: var(--bg-color);

    padding-right: 10px;

    .ladoEsquerdo {
        width: 45%;
    }

    .ladoDireito {
        width: 55%;
    }

    .idPokemon {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        padding-right: 9px;
        padding-top: 9px;
        display: flex;
        justify-content: flex-end;
        opacity: 0.3;
    }

    .nomePokemon {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        margin-top: 30px;
        padding: 0px 0px 0px 15px;
        text-transform: capitalize;
        color: white;
    }

    .tipoPokemon {
        display: grid;

        color: var(--font_bg-color);
        background-color: var(--type_bg-color);
        opacity: 0.2;
        border-radius: 38px;
        margin-left: 13px;
        margin-top: 5px;
        padding: 0px 4.5px 0px 4.5px;

        .typexx {


            p {
                margin-left: 10px
            }
        }

    }

    .foto {

        display: flex;
        justify-content: flex-end;
        padding-right: 5px;
        width: 135px;
        height: 130px;

        img {
            width: 100%;
            height: 100%;
        }


    }
}
</style>