<template>
    <title>Verdant Homeland</title>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<script>
export default {
    created() {
        document.title = "Verdant Homeland";
    },
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    margin-bottom: 20pt;

    a {
        text-align: center;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        border-radius: 2px;
        padding: 5px;

        &.router-link-exact-active {
            color: #42b983;
            background-color: lighten($color: black, $amount: 5%);
        }
    }
}
</style>
