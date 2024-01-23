<template>
    <GeneralHeader/>
    <h1> Nothing to see yet...</h1>
    <img src="../assets/wip.png" alt="WIP" />
     <GeneralFooter class="footer"/>
</template>
<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
import GeneralFooter from '@/components/GeneralFooter.vue';
export default {
    name: "ProjectsWip",
    components: {
    GeneralHeader,
    GeneralFooter,
    }
}
</script>
<style scoped>
img{
    max-width: 60%;
    margin: 4em auto;
}

/* PATCH: TODO FIX THE FOOTER */
.footer{
    position: relative;
}
</style>