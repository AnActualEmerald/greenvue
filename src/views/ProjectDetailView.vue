<template>
    <main>
        <h1>UNDER CONSTRUCTION</h1>
        <iframe src="https://giphy.com/embed/ZTans30ONaaIM" width="480" height="299" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ZTans30ONaaIM">via GIPHY</a></p>
        <!-- <h1>{{ title }}</h1>
        <p>Some stuff to say about it</p>
        <p><a>Repo link but maybe it's an icon this time</a></p> -->
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            title: "",
            long_desc: "",
            repo: "",
        };
    },
    beforeMount() {
        this.$data.title = this.$route.params.title as string;
    },
});
</script>

<style lang="scss" scoped>
main {
    margin-left: 25%;
    margin-right: 25%;
    text-align: left;
}
</style>
