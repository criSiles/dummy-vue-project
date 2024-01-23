<template>
  <section class="all-container">
    <header>
      <GeneralHeader />
    </header>
    <main>
      <h1>Nothing to see yet...</h1>
      <img src="../assets/wip.png" alt="WIP" />
    </main>
    <footer>
      <GeneralFooter />
    </footer>
  </section>
</template>
<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "ProjectsWip",
  components: {
    GeneralHeader,
    GeneralFooter,
  },
};
</script>
<style scoped>
.all-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  margin: 0;
  font-family: "Poppins";
  background: linear-gradient(to bottom, #f2f2f2, white);
  padding-bottom: 3rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* border-right: .15em solid orange; The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.05em; /* Adjust as needed */
  animation: typing 8s steps(40, end);
}

img {
  opacity: 0;
  animation: fadeIn 2s ease-in 1;
  animation-fill-mode: forwards;
  height: 60%;
  margin-top: 2rem;
}

footer {
  margin-top: 2rem;
  margin-bottom: -1.2rem;
}
</style>
