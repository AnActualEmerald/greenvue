<template>
    <td>
        <p>{{ name }}</p>
        <p>{{ desc }}</p>
        <p><a :href="repo" target="_blank">repo</a></p>
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
    border: 1px solid red;
}
</style>
