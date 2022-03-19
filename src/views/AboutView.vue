<template>
  <main class="about">
    <img src="@/assets/emerald_witch.png" />
    <span>
      An aspiring full stack web developer? Artist? Musician? Vtuber? All of
      this, and less, can be found within the walls of this wretched form I have
      been bound to.
    </span>
  </main>
  <footer>
    <span
      ><a href="https://twitter.com/KevahnGee"
        >Follow my tiwtter if you want</a
      ></span
    >
  </footer>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-left: 50px;
  padding-right: 50px;
  border: 2px solid white;
  border-radius: 100px;

  img {
    max-width: 50%;
  }
  span {
    text-align: left;
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 20pt;
    @media screen and (max-width: 700px) {
      font-size: 1.5em;
    }
  }
  @media screen and (max-width: 700px) {
    padding: 50px;
  }
}
footer {
  a {
    text-decoration: none;
    color: lighten($color: #000000, $amount: 5%);
  }
}
</style>