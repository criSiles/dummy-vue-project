<template>
<GeneralHeader/>
<h1>Hi all, it's me <span class="gradient" @click="addConfetti">Cristina Siles</span>!</h1>
<GeneralFooter/>
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
import JSConfetti from 'js-confetti';
import GeneralFooter from '@/components/GeneralFooter.vue';

export default {
    name: "HomeView",
    components: {
        GeneralHeader,
        GeneralFooter,
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
    margin-top: 6rem;
	font-size: clamp(2rem, 4rem, 8rem);
    font-family: "Poppins", sans-serif;
}

h1 {
	color: #000000;
}

.gradient {
    /* background-image: linear-gradient(92deg, #6a68d9 10%, #da6cae 60%, #f5a957); */
    background-image: linear-gradient(92deg, #40E0D0 10%, #EEE8AA 50%, #FF6347);
    -webkit-text-fill-color: #0000;
    -webkit-background-clip: text;
    /* background-clip: border-box; This is the standard property */
}
</style>