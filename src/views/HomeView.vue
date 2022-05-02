<template>
    <main>
        <!-- <h1>Some projects that I'm proud of</h1>
        <table cellspacing="10em">
            <tr>
                These should be pulled from somewhere rather than hardcoded into the page
                <ProjectCell
                    name="lib-mal"
                    repo="https://github.com/AnActualEmerald/lib-mal"
                    desc="A rust crate for interacting with the public API of MyAnimeList.com"
                />
                <ProjectCell
                    name="BerylScript"
                    desc="An interpreted programming I wrote as one of my first projects in rust."
                    repo="https://github.com/AnActualEmerald/BerylScript"
                />
            </tr>
        </table> -->
    </main>
    <footer>
        <p>
            So let me be enemy to the noose and the fading will<br />Let me be
            open arms, tell the living world I am grateful still
        </p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import ProjectCell from "@/components/ProjectCell.vue";

export default defineComponent({
    components: {
        // ProjectCell,
    },
});
</script>

<style lang="scss" scoped>
p {
    text-align: center;
}
main {
    // border: 2px solid white;
    // border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 50px;
    // padding-top: 100px;
    padding-bottom: 100px;
    margin-left: 100px;
    margin-right: 100px;
    h1 {
        text-align: center;
        font-size: medium;
        padding-bottom: 2.5em;
    }
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
