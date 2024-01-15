<template>
  <body>
    <div class="home-container">
      <GeneralHeader />
      <div class="hi-container">
        <h1>Hi all, it's me</h1>
        <h1 class="name">
          <span class="gradient" @click="addConfetti">Cristina Siles</span>!
        </h1>
      </div>
      <p>I'm a new frontend developer and I love it.</p>
    </div>

    <div class="skills">
      <div class="coding-container">
        <img src="../assets/logos/coding-skills-logo.svg" />
        <p>Some of the languages, frameworks and tools I know are...</p>
      </div>
      <div class="logos-grid">
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/python-logo.svg" />
          <p>Python</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/html-5-logo.svg" />
          <p>HTML</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/css-3-logo.svg" />
          <p>CSS</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/javascript-logo.svg" />
          <p>Javascript</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/typescript-logo.svg" />
          <p>Typescript</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/vue-logo.svg" />
          <p>Vue</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/pinia-logo.svg" />
          <p>Pinia</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/tailwind-logo.svg" />
          <p>Tailwind</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/git-logo.svg" />
          <p>Git</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/github-logo.svg" />
          <p>GitHub</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/firebase-logo.svg" />
          <p>Firebase</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/mongodb-logo.svg" />
          <p>MongoDB</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/nodejs-logo.svg" />
          <p>Node.js</p>
        </div>
        <div class="skill-container">
          <img class="logo-img-svg" src="../assets/logos/jest-logo.svg" />
          <p>Jest</p>
        </div>
      </div>
    </div>
  </body>
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
body {
  background: linear-gradient(to bottom, #f5f5f5, white);
}
h1,
h2 {
  color: #0e2431;
}

p {
  font-size: 1.2rem;
}
.hi-container {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
}
.name {
  margin-left: 0.5rem;
}

/* GRADIENT NAME CODE */
.gradient {
  background: linear-gradient(270deg, #ff6347, #eee8aa, #40e0d0);
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
/* END GRADIENT */
h1,
.gradient {
  margin-top: 6rem;
  font-size: clamp(2.2rem, 2.2rem, 2.2rem);
  font-family: "Poppins";
  margin-bottom: 0rem;
}

.home-container {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
}
.skills {
  /* border-top: 1px solid #bbc7c7; */
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  margin-top: 10rem;
  margin-bottom: auto;
  margin: 4rem 20vw;
  align-items: center;
}
.coding-container {
  display: flex;
  flex-direction: row;
  margin-top: -4rem;
  margin-bottom: 1rem;
}

.coding-container > img {
  position: relative;
  width: 2rem;
  margin: 0.5rem 0.5rem;
}
/* .coding-container > p {
  font-weight: 500;
} */
.logos-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: start;
  align-items: center;
  margin: 0.5rem 1rem;
}

.skill-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1rem auto;
}
.skill-container > p {
  font-size: 1rem;
  font-family: "Source Code Pro", monospace;
  font-weight: 500;
  margin-top: 0.2rem;
  color: #0e2431;
}

.logo-img-svg {
  position: relative;
  width: 5rem;
  margin: 0.5rem 0.5rem;
}

/* TRYING TO MAKE THE SHADOW */
/* .logo-img-svg::before,
.logo-img-svg::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px 2px rgba(185, 33, 33, 0.5); 
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
} */

footer {
  margin-top: -2rem;
  position: relative;
}

@media screen and (max-width: 780px) {
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
    padding-bottom: 4rem;
    margin-bottom: 2rem;
  }

  .name {
    margin-top: -0.5rem;
  }

  .hi-container {
    display: inline;
    margin-top: 0rem;
  }
  .home-container > p {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .coding-container {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .coding-container > p{
    margin-left: -1.8rem;
    margin-right: -1.8rem
  }
  footer {
    margin-top: -1rem;
    position: relative;
  }
}
</style>
