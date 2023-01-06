<template>
  <container class="home">
    <section class="textSection">
      <div class="txt">
        <h1> Qual pokemon <br>
          voce escolheria?
        </h1>

        <p>Você Pode saber o tipo de Pokémon, seus pontos fortes,<br>
          fracos e habilidades.</p>
      </div>



      <div class="buttonDiv">
        <router-link to="/pokemons">
          <button class="ListButton">
            Veja os Pokemons
          </button>
        </router-link>
      </div>
    </section>

    <section>
      <div class="imagemHome">
        <img src="../assets/homepageImage.png" alt="">
      </div>
    </section>  

  </container>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import Button from '../components/Button.vue'

export default defineComponent({
  components: {
    
  }

})

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');

.home {
  display: grid;
  grid-template-columns: 1fr 1fr ;
}

.textSection {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 170px;
  
}

.txt {

  

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 54px;
    line-height: 76px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;

  }


}

.buttonDiv {
 

} 

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

.ListButton:hover{
  cursor: pointer;
  width: 250px;
  height: 74px;

}
.imagemHome {



}
</style>

