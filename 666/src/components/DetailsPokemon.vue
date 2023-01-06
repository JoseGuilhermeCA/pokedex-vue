<template>

    <div class="card_Details" :style="cssVars">
        <div class="ladoEsquerdo_Details">
            <div class="foto_Details"> <img v-bind:src="pokemonUrl.sprites?.front_default"></div>

            <div class="tipoPokemon_Details" v-for="item in typeList" :key="item">
                <div class="typexx_Details">
                    <p>
                        {{ pokemonTypeTranslate(item.type.name) }}


                    </p>
                </div>
            </div>
        </div>
        <div class="ladoDireito_Details">
            <div class="headerRightSide_Details">
                <div class="nomePokemon_Details"> {{ name }} </div>
                <div class="idPokemon_Details"> {{ pokemonIdSintax(pokemonUrl.id) }} </div>


            </div>
            <div class="description_Details"> {{ description }} </div>

            <div class="health_Details">

                <div class="PokemonProporties_Details">
                    <div> <img src="@/assets/peso.png">
                        {{ (peso * 0.1).toFixed(1) }} Kg

                    </div>


                    <p> PESO </p>


                </div>
                <div class="PokemonProporties_Details">
                    <div>
                        <img src="@/assets/altura.png">
                        {{ (altura * 0.1).toFixed(1) }} m
                    </div>

                    <div>

                        <p> ALTURA </p>
                    </div>


                </div>

                <div class="PokemonProporties_Details">
                    <div> {{ hab }} </div>
                    <div>
                        <p> Habilidade Principal </p>
                    </div>



                </div>

            </div>



            <div class="atk">

                ATAQUE: {{ powerStatusAtk }}

                <div class="progress">

                    <div class="progress-bar"></div>
                </div>
            </div>


            <div class="progress_def">
                <div class="progress-bar-def"></div>
            </div>

        </div>



    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios, { Axios, AxiosInstance } from "axios";
import getPokemonImageUrl from '@/services/api';
import { descriptionArray } from '@/utils/pokemonDescriptionsDic';


export default defineComponent({
    props: {
        name: String,
        url: String,
        img: String
    },
    data() {
        return { pokemonUrl: {} as any, pokemonId: "" as any, pokemonType: "" as any, typeList: [] as any, typeColor: "" as string, backgroundTypeColor: "white" as string, fontTypeColor: "black", description: '', peso: 0, altura: 0, hab: [], powerStatusAtk: 0, barProgressColor: '' }
    },
    beforeMount() {
        console.log(this.url, this.name)
        axios.get(`${this.url}`)
            .then(response => {
                this.pokemonUrl = JSON.parse(JSON.stringify(response.data))
                this.typeList = this.pokemonUrl.types
                this.pokemonCardColorPicker(this.typeList[0].type.name)
                this.description = descriptionArray[response.data.id]
                this.peso = this.pokemonUrl.weight
                this.altura = this.pokemonUrl.height
                this.hab = this.pokemonUrl.abilities[0].ability.name
                this.powerStatusAtk = this.pokemonUrl.stats[1].base_stat
                console.log(this.powerStatusAtk)
                this.barProgressColorPicker();

            })
            .catch(error => {
                console.log(error)
                console.log('Não foi kkk')
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
        },


        barProgressColorPicker() {
            // this.powerStatusAtk
            if (this.powerStatusAtk > 80) {
                this.barProgressColor = 'green'

            } else {
                this.barProgressColor = 'red'
            } console.log(this.powerStatusAtk)
        },


    },
    computed: {
        cssVars() {

            return {
                '--bar-progress-color': this.barProgressColor,
                '--bar-progress': `${this.powerStatusAtk}%`,
                '--bg-color': this.typeColor,
                '--type_bg-color': this.backgroundTypeColor,
                '--font_bg-color': this.fontTypeColor
            }
        }
    }
})
</script>
<style lang="scss" scoped>
.card_Details {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');


    box-sizing: border-box;
    width: 1600px;
    height: 600px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);

    padding-right: 10px;

    .ladoEsquerdo_Details {
        background-color: var(--bg-color);
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
        border-radius: 8px;
        width: 45%;
    }

    .ladoDireito_Details {

        width: 55%;
        padding: 20px;

        .headerRightSide_Details {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .health_Details {
            margin-top: 30px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }



        .PokemonProporties_Details {
            font-size: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 5px;

            div {
                display: flex;
                align-items: center;
                gap: 5px;
                margin-top: auto;
            }

            p {

                opacity: 0.2;
            }
        }
    }

    .atk {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    .progress {
        border-radius: 4px;
        width: 300px;
        height: 5px;
        background-color: #777;
        position: relative;
    }

    .progress .progress-bar {
        position: absolute;
        height: 100%;
        width: 250px;
        background-color: var(--bar-progress-color);
        animation: progress-animation 6s infinite;
    }


    // .progress_def {
    //     margin-top: 5px;
    //     width: 300px;
    //     height: 15px;
    //     background-color: #777;
    //     position: relative;
    // }

    // .progress_def .progress-bar-def {

    //     position: absolute;
    //     height: 100%;
    //     background-color: #add555;
    //     animation: progress-animation 6s infinite;
    // }

    @keyframes progress-animation {
        0% {
            width: 0%;
        }

        100% {
            width: var(--bar-progress)
        }

    }


    .description_Details {
        margin-top: 20px;
        font-size: 30px;
    }


    .idPokemon_Details {

        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 40px;


        display: flex;
        justify-content: flex-end;
        color: var(--bg-color);
    }

    .nomePokemon_Details {
        font-size: 80px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;

        text-transform: capitalize;
        color: black;
    }

    .tipoPokemon_Details {
        display: grid;



        background-color: var(--type_bg-color);
        opacity: 0.2;
        border-radius: 38px;
        margin-left: 13px;
        margin-right: 600px;
        margin-top: 5px;
        padding: 0px 4.5px 0px 4.5px;


        .typexx_Details {


            p {
                margin-left: 10px
            }
        }

    }

    .foto_Details {


        display: flex;
        object-fit: cover;
        justify-content: center;
        align-items: center;
        margin: 5px;
        width: 100%;
        height: 400px;
        padding-bottom: 80px;

        img {
            width: 100%;
            height: 100%;
        }


    }


}
</style>