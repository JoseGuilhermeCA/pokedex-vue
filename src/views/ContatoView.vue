<template>

  <div class="container">
    <div class="imgContact">
      <img src="../assets/psyduck.gif">
    </div>

    <div class="textContact">
      <h1> Jose Guilherme</h1>
    </div>

    <div class="contato">
      <img src="../assets/linkedin-icon.png" id="icon">
      <a href="https://www.linkedin.com/in/josé-guilherme-11a4a817b/"> LINKEDIN </a>
      <img src="../assets/Github-icon.png" id="icon">
      <a href="https://github.com/JoseGuilhermeCA"> GITHUB </a>

    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({


})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

}

 .textContact{
  font-family: 'Roboto', sans-serif;
 }

.contato {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;

    color: black;
    font-size: 20px;

    &:hover {
      border-bottom: 2px solid black;
      font-weight: 700;
    }
  }

  #icon {
    max-width: 30px;
  }
}
.imgContact {

  max-width: 300px;


  img {
    width: 100%;
    border-radius: 100px;
  }
}
</style>