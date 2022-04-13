<template>
    <td colspan="2">
        <p>{{ name }}</p>
        <p>{{ desc }}</p>
        <p><a :href="repo" target="_blank">Jump to Github</a></p>
    </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        name: String,
        repo: String,
        desc: String,
    },
});
</script>

<style lang="scss" scoped>
td {
    padding: 2rem;
    border: 1px solid whitesmoke;
    border-radius: 1em;
    width: 25em;

    a {
        text-decoration: none;
        color: gray;
    }
}
td:hover {
    background-color: adjust-color($color: #000000, $lightness: 5%);
}
</style>
