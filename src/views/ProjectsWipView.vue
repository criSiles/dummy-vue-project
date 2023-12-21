<template>
    <GeneralHeader/>
    <h1> Nothing to see yet...</h1>
    <img src="../assets/wip.png" alt="WIP" />
</template>
<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
export default {
    name: "ProjectsWip",
    components: {
    GeneralHeader,
    }
}
</script>
<style scoped>
img{
    max-width: 60%;
    margin: 4em auto;
}
</style>