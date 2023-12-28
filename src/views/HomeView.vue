<template>
  <div class="home-container">
    <GeneralHeader />
    <h1>
      Hi all, it's me
      <span class="gradient" @click="addConfetti">Cristina Siles</span>!
    </h1>
  </div>
  <GeneralFooter />
</template>

<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import JSConfetti from "js-confetti";

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
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 95vh;
}
h1,
.gradient {
  margin-top: 6rem;
  font-size: clamp(2rem, 4rem, 8rem);
  font-family: "Poppins";
}

h1 {
  color: #0e2431;
}

.gradient {
  background-image: linear-gradient(92deg, #40e0d0 10%, #eee8aa 50%, #ff6347);
  -webkit-text-fill-color: #0000;
  -webkit-background-clip: text;
  background-clip: text; /* Standard property for compatibility */}
</style>
