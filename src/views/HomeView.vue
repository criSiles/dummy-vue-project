<template>
  <div class="home-container">
    <GeneralHeader />
    <div class="hi-container">
      <h1>
        Hi all, it's me
      </h1>
      <h1 class="name">
        <span class="gradient" @click="addConfetti">Cristina Siles</span>!
      </h1>
    </div>
    <p>I'm a new frontend developer and I love it.</p>
  </div>
  <div class="skills">
    <h2>Skills</h2>
    <div class="logos-grid">
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/python-logo.png" />
        <p>Python</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/css-3-logo.png" />
        <p>CSS</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/html-logo.png" />
        <p>HTML</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/python.svg" />
        <p>Sass</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/vue-logo.svg" />
        <p>Vue JS 3</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/pinia-logo.svg" />
        <p>Pinia</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/javascript-logo-big.png" />
        <p>JavaScript</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/vue-logo.png" />
        <p>Vue</p>
      </div>
      <div class="skill-container">
        <img class="logo-complete" src="../assets/logos/github-logo.png" />
      </div>
      <div class="skill-container">
        <img class="logo-complete" src="../assets/logos/nodejs-logo.png" />
      </div>
      <div class="skill-container">
        <img class="logo-complete" src="../assets/logos/mongodb-logo.png" />
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/typescript-logo.png" />
        <p>TypeScript</p>
      </div>
      <div class="skill-container">
        <img class="logo-img" src="../assets/logos/pinia-logo.png" />
        <p>Pinia</p>
      </div>
    </div>
  </div>
  <div class="skills">
    <h2>Skills 2</h2>
    <div class="skill-container">
      <img class="logo-img-svg" src="../assets/logos/python.svg" />
    </div>
    <div class="skill-container">
      <img class="logo-img-svg" src="../assets/logos/vue-logo.svg" />
    </div>
    <div class="skill-container">
      <img class="logo-img-svg" src="../assets/logos/pinia-logo.svg" />
    </div>
  </div>
  <footer>
    <GeneralFooter />
  </footer>
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
h1,
h2 {
  color: #0e2431;
}

p {
  font-size: 1.2rem;
}

.skills,
p {
  font-size: 1rem;
}

.hi-container {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  margin-left: 0.5rem;
}

h1,
.gradient {
  margin-top: 6rem;
  font-size: clamp(2.2rem, 2.2rem, 2.2rem);
  font-family: "Poppins";
  margin-bottom: 0rem;
}

.gradient {
  background: linear-gradient(270deg, #40e0d0, #eee8aa, #ff6347);
  background-size: 600% 600%;
  -webkit-text-fill-color: #0000;
  -webkit-background-clip: text;
  animation: gradient-flow 6s ease infinite;
  background-clip: none;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.home-container {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
}

.skill-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
}

.skills h2 {
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
}

.skills {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 0px 15px rgba(75, 74, 74, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  margin: 4rem 20vw;
  align-items: center;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: start;
  align-items: center;
  margin: 0.5rem 1rem;
}

.logo-img {
  width: 2rem;
  margin: 0.5rem 0.5rem;
}

.logo-img-svg {
  position: relative;
  width: 5rem;
  margin: 0.5rem 0.5rem;
}

.logo-img-svg::before,
.logo-img-svg::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px 2px rgba(185, 33, 33, 0.5); /* Increase the opacity */
  z-index: -1;
}

.logo-img-svg::before {
  transform: rotate(60deg);
}

.logo-img-svg::after {
  transform: rotate(-60deg);
}
.logo-complete {
  width: 6rem;
  margin: 0.5rem 0.5rem;
}

@media screen and (max-width: 760px) {

  h1,
  .gradient {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
  }

  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills {
    margin: 4rem 3vh;
  }

  .name {
    margin-top: -0.5rem;
  }

  .hi-container {
    display: inline;
  }

  footer {
    position: relative;
  }
}</style>
