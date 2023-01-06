<template>

    <div class="card_Details" :style="cssVars">
        <div class="ladoEsquerdo_Details">
            <div class="foto_Details"> <img v-bind:src="pokemonUrl.sprites?.front_default"></div>
            <div class="pokemonDetailsWrapper">
                <div class="tipoPokemon_Details" v-for="item in typeList" :key="item">
                    <div class="typexx_Details">
                        <p>
                            {{ pokemonTypeTranslate(item.type.name) }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="ladoDireito_Details">
            <div class="headerRightSide_Details">
                <div class="nomePokemon_Details"> {{ name }} </div>
                <div class="idPokemon_Details"> {{ pokemonIdSintax(pokemonUrl.id) }} </div>
            </div>
            <div class="containerDetailsPokemon">

                <div class="description_Details"> {{ description }} </div>

                <div class="health_Details">

                    <div class="PokemonProporties_Details">
                        <div> <img src="@/assets/peso.png" class="balanca">
                            {{ (peso * 0.1).toFixed(1) }} Kg

                        </div>
                        <p> PESO </p>
                    </div>
                    <div class="PokemonProporties_Details">
                        <div>
                            <img src="@/assets/altura.png" class="regua">
                            {{ (altura * 0.1).toFixed(1) }} m
                        </div>

                        <div>

                            <p> ALTURA </p>
                        </div>
                    </div>
                    <div class="PokemonProporties_Details">
                        <div> {{ hab }} </div>
                        <div>
                            <p> Poder Principal </p>
                        </div>
                    </div>
                </div>
                <div class="bar">
                    <div class="powerRow">
                        <div class="statusText">
                            <p> Ataque: </p>
                            {{ powerStatusAtk }}
                        </div>
                        <div class="progress">
                            <div class="progress-bar pb-atk"></div>
                        </div>
                    </div>
                    <div class="powerRow">
                        <div class="statusText">
                            <p> Defesa: </p>
                            {{ powerStatusDef }}
                        </div>
                        <div class="progress">

                            <div class="progress-bar pb-def"></div>
                        </div>

                    </div>
                    <div class="powerRow">
                        <div class="statusText">
                            <p> VL Ataque: </p>
                            {{ powerStatusVlAtq }}
                        </div>
                        <div class="progress">
                            <div class="progress-bar pb-velAtk"></div>
                        </div>
                    </div>
                    <div class="powerRow">
                        <div class="statusText">
                            <p>Total: </p>
                            {{ powerStatusTotal }}

                        </div>

                        <div class="progress">
                            <div class="progress-bar pb-total"></div>
                        </div>

                    </div>
                </div>

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
        return {
            pokemonUrl: {} as any, pokemonId: "" as any, pokemonType: "" as any, typeList: [] as any, typeColor: "" as string,
            backgroundTypeColor: "white" as string, fontTypeColor: "black", description: '', peso: 0, altura: 0, hab: [], powerStatusAtk: 0,
            barProgressColorAtk: '', barProgressColorDef: '', barProgressColorVelAtk: '', barProgressColorTotal: '', powerStatusDef: 0, powerStatusVlAtq: 0, powerStatustotalBarProgress: 0, powerStatusTotal: 0,
        }
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
                this.powerStatusDef = this.pokemonUrl.stats[2].base_stat
                this.powerStatusVlAtq = this.pokemonUrl.stats[5].base_stat
                this.powerStatusTotal = (this.powerStatusAtk + this.powerStatusDef + this.powerStatusVlAtq)
                this.powerStatustotalBarProgress = ((this.powerStatusAtk + this.powerStatusDef + this.powerStatusVlAtq) / 300 * 100)
                this.barProgressColorPicker();
                this.barProgressColorPickerDef();
                this.barProgressColorPickerVelAtk();
                this.barProgressColorPickerTotal()

            })
            .catch(error => {
                console.log(error)
                
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
            
            if (this.powerStatusAtk > 80) {
                this.barProgressColorAtk = '#48D0B0'
            } else {
                this.barProgressColorAtk = '#FB6C6C'
            }
        },
        barProgressColorPickerDef() {
            if (this.powerStatusDef > 80) {
                this.barProgressColorDef = '#48D0B0'
            } else {
                this.barProgressColorDef = '#FB6C6C'
            }
        },
        barProgressColorPickerVelAtk() {
            if (this.powerStatusVlAtq > 80) {
                this.barProgressColorVelAtk = '#48D0B0'
            } else {
                this.barProgressColorVelAtk = '#FB6C6C'
            }
        },
        barProgressColorPickerTotal() {
            if (this.powerStatusTotal > 240) {
                this.barProgressColorTotal = '#48D0B0'
            } else {
                this.barProgressColorTotal = '#FB6C6C'
            }
        },
    },
    computed: {
        cssVars() {
            let powerRowStatusAtk = 0;
            let powerRowStatusDef = 0;
            let powerRowStatusVel = 0;
            let powerRowStatusTotal = 0;

            if (this.powerStatusAtk > 100) {
                powerRowStatusAtk = 100
            } else {
                powerRowStatusAtk = this.powerStatusAtk
            }

            if (this.powerStatusDef > 100) {
                powerRowStatusDef = 100
            } else {
                powerRowStatusDef = this.powerStatusDef
            }

            if (this.powerStatusVlAtq > 100) {
                powerRowStatusVel = 100
            } else {
                powerRowStatusVel = this.powerStatusVlAtq
            }

            if (this.powerStatusTotal > 300) {
                powerRowStatusTotal = 100
            } else {
                powerRowStatusTotal = this.powerStatustotalBarProgress
            }
            return {
                '--bar-progress-colorAtk': this.barProgressColorAtk,
                '--bar-progress-colorDef': this.barProgressColorDef,
                '--bar-progress-colorVlAtk': this.barProgressColorVelAtk,
                '--bar-progress-colorTotal': this.barProgressColorTotal,
                '--bar-progressAtk': `${powerRowStatusAtk}%`,
                '--bar-progressDef': `${powerRowStatusDef}%`,
                '--bar-progressVelAtk': `${powerRowStatusVel}%`,
                '--bar-progressTotal': `${powerRowStatusTotal}%`,
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
    width: 100%;
    max-width: 800px;
    height: 371px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);

    .containerDetailsPokemon {
        padding-right: 38px;
    }

    .ladoEsquerdo_Details {
        margin-right: -10px;
        background-color: var(--bg-color);
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
        border-radius: 8px;
        width: 45%;
        position: relative;
    }

    .pokemonDetailsWrapper {
        display: flex;
        justify-content: flex-end;
        gap: 20px;

        position: absolute;
        width: 100%;
        right: 20px;
        bottom: 5%;

    }

    .ladoDireito_Details {

        width: 55%;
        padding: 26px 23px 36px 46px;

        .headerRightSide_Details {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .health_Details {
            margin-top: 30px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-between;
            align-items: center;
        }
        .PokemonProporties_Details {
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 5px;
            text-transform: capitalize;

            border-right: 1px solid #E0E0E0;

            &:nth-child(2) {
                padding: 0 24px;
            }

            &:last-child {
                padding-left: 24px;
                border-right: 0;
            }

            div {
                display: flex;
                align-items: center;
                gap: 5px;
                margin-top: auto;
            }

            p {
                opacity: 0.2;
            }

            .regua {
                max-width: 8px;
            }

            .balanca {
                max-width: 16px;
            }
        }
    }
    .bar {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .powerRow {
            display: grid;
            grid-template-columns: 2fr 5fr;
            align-items: center;

        }

        .statusText {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            text-transform: capitalize;
        }

    }
        .progress {
        border-radius: 110px;

        height: 5px;
        background-color: #F4F5F4;
        margin-left: 12px;

        .progress-bar {
            border-radius: 110px;
            height: 100%;

        }

        .pb-atk {
            width: var(--bar-progressAtk);
            background-color: var(--bar-progress-colorAtk);
        }

        .pb-def {
            width: var(--bar-progressDef);
            background-color: var(--bar-progress-colorDef);
        }

        .pb-velAtk {
            width: var(--bar-progressVelAtk);
            background-color: var(--bar-progress-colorVlAtk);

        }

        .pb-total {
            width: var(--bar-progressTotal);
            background-color: var(--bar-progress-colorTotal);
        }

    }
    .description_Details {
        margin-top: 20px;
        font-size: 14px;
    }
    .idPokemon_Details {

        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 24px;
        display: flex;
        justify-content: flex-end;
        color: var(--bg-color);
    }

    .nomePokemon_Details {
        font-size: 36px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;

        text-transform: capitalize;
        color: black;

        @media(min-width: 1368px) {
            font-size: 38px;
        }
    }

    .tipoPokemon_Details {
        display: grid;


        color: var(--font_bg-color);
        background-color: var(--type_bg-color);
        opacity: 0.2;
        border-radius: 38px;

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
        justify-content: center;
        align-items: center;
        margin: 5px;
        width: 100%;
        height: 400px;
        height: 100%;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
}
</style>