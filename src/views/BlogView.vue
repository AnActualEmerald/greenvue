<template>
    <h1>The Ramblings of an Addled Mind</h1>
    <p v-if="posts.length == 0" id="mt">There are no posts...</p>
    <ul>
        <li v-for="(p, index) in posts" :key="index">
            <p>{{ p.title }}</p>
            <span>{{ p.body.slice(0, 60) }}...</span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            posts: [{ title: "bruh", body: "moment" }],
        };
    },
};
</script>

<style lang="scss" scoped>
h1 {
    color: lightgreen;
}
ul {
    margin-top: 20pt;
    li {
        list-style: none;
        border: 2px solid darkgray;
        max-width: 150pt;
        text-align: left;
        padding: 20pt;
        padding-left: 15pt;
        P {
        }
    }
}
#mt {
    margin-top: 20pt;
    text-align: center;
    font-style: italic;
}
</style>
