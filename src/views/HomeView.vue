<template>
    <GeneralHeader/>
<h1>Hi all, it's me <span class="gradient" @click="addConfetti">Cristina Siles</span>!</h1>
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
import JSConfetti from 'js-confetti';

export default {
    name: "HomeView",
    components: {
        GeneralHeader,
    },
    methods: {
        addConfetti() {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
        }
    }
}
</script>

<style scoped>
h1,
.gradient {
	font-size: clamp(2rem, 10vw, 8rem);
    font-family: "Poppins", sans-serif;
}

h1 {
	color: #000000;
}

.gradient {
    background-image: linear-gradient(92deg, #6a68d9 10%, #da6cae 60%, #f5a957);
    -webkit-text-fill-color: #0000;
    -webkit-background-clip: text;
    /* background-clip: border-box; This is the standard property */
}
</style>