<template>
  <main class="about">
    <div class="aboutIntro">
    <img src="@/assets/emerald_witch.png" />
    <p> I go by Emerald in a lot of places on the internet. 
      I'm a big fan of mecha anime and when I'm not working on a project or building gunpla 
      I'm usually playing League of Legends with friends.</p>
    </div>
    <div class="aboutText">
      <p>I am a self taught developer who loves taking on side projects that I usually lack the requisite skills for. 
        Rust has been my go-to language for the past few years, and in fact this website is running on a 
        very small <a href="https://rocket.rs/">rocket.rs</a> server. I have also written a few things in Node.js,
        and am currently in the process of exploring Deno, though its dependency management hasn't really clicked for me so far. 
        You can see some of the things I'm proud of over on the <router-link to="/projects">projects</router-link> page.</p>

      <p>What first drew me to programming was a desire to make my own Minecraft mods. 
      I watched a lot of tutorials on YouTube, got my eclipse IDE set up, and made this.
      After that, I moved on to C# (MS Java), and even tried wrangling C++ for a bit.
      Throughout highschool I hacked away on my school-issued netbook, writing everything from a 3D renderer to a chat server and client. </p>

      <p>Nowadays, with all of <a href="https://crates.io">crates.io</a> as my disposal, 
      I feel encouraged to explore some of the murkier areas of computing. Compilers and interpreters especially interest me, 
      and I've already written one <a href="https://github.com/AnActualEmerald/BerylScript">language</a>, 
      and participated in the first <a href="https://github.com/langjam/jam0001/tree/main/AnActualEmerald">lang-jam</a>. 
      As I wrap up a few other things I'm "working" on, I intend to really dive into interpreters and bytecode,
      and perhaps attempt to write a language someone could actually use.</p>
    </div>
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
.aboutIntro {
  display: flex;
  justify-content: space-evenly;
  p {
    max-width:50%;
    font-size: 3rem;
  }
  img {
    margin: 20px;
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-left: 50px;
  padding-right: 50px;
  border: 2px solid white;
  border-radius: 100px;
  margin-left: 100px;
  margin-right: 100px;
  img {
    max-width: 25rem;
    @media screen and (max-width: 700px) {
      max-width: 150pt;
    }
  }
  p {
    text-align: left;
    font-size: 2rem;
    color: white;
    padding: 20pt;
    @media screen and (max-width: 700px) {
      font-size: 1.5em;
    }
    a {
      color: lightgreen;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 700px) {
    padding: 50px;
    margin-left: 25px;
    margin-right: 25px;
  }
}
footer {
  a {
    text-decoration: none;
    color: lighten($color: #000000, $amount: 5%);
  }
}
</style>