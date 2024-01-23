<template>
    <GeneralHeader/>
    <h1> Nothing to see yet...</h1>
    <img src="../assets/wip.png" alt="WIP" />
     <GeneralFooter/>
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
img {
  width: 100%; 
  max-width: 250px; 
  height: auto;}

h1{
    text-align: center;
    font-size: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
}
footer{
    margin-top: 7rem;  
}
</style>