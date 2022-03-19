<template>
  <main>
    <img
      src="https://media2.giphy.com/media/FqdGGgugkC4Xm/giphy.gif?cid=790b76117733a46cffb567b7dc09ecbf057eaf4f53b3617b&rid=giphy.gif&ct=g"
    />
    <p>
      I'm hard at work making the worst possible portfolio website for you to
      enjoy
    </p>
  </main>
  <footer>
    <p>
      So let me be enemy to the noose and the fading will<br />Let me be open
      arms, tell the living world I am grateful still
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
main {
  border: 2px solid white;
  border-radius: 100px;
  align-content: center;
  padding: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-left: 100px;
  margin-right: 100px;
  p {
    padding-top: 50pt;
    font-size: 3rem;
    color: lightgreen;
    @media screen and (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  @media screen and(max-width: 700px) {
    img {
      max-width: 150pt;
    }
    margin-left: 25px;
    margin-right: 25px;
  }
}
footer {
  p {
    color: lighten($color: black, $amount: 5%);
    font-size: 0.5rem;
  }
}
</style>
