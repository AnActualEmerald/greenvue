<template>
    <!-- <div> -->
    <iframe
        ref="game"
        sandbox="allow-scripts allow-same-origin"
        loading="eager"
        name="Toadally Tacos"
        src="/wasm/game.html"
    >
    </iframe>
    <!-- </div> -->

    <!-- <vue-iframe src="@/assets/game.html" width="100" height="100" /> -->
    <p>Click to grab a fly and drag it around</p>
    <p>Please excuse the janky formatting I don't know what I'm doing</p>
</template>

<script>
function resizeIframe() {
    this.$refs.game.height =
        this.$refs.game.contentWindow.document.body.scrollHeight;
}

//eslint-disable-next-line
function getWindowWidth() {
    return window.innerWidth;
}

import * as wasm from "@emerald_actual/toadally_tacos";

export default {
    updated() {
        // wasm.run();
        console.log("Updated");
        resizeIframe();
    },
    methods: {
        runWasm() {
            wasm.run();
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-content: center;
    justify-content: center;
}
iframe {
    margin-top: -1em;
    margin-left: 25%;
    width: 100%;
    height: 400px;
    border: none;
}
</style>
