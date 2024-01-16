<template>
  <body>
    <GeneralHeader />
    <main class="grid">
      <article class="aboutme">
        <h2>About me</h2>
        <p>
          Hi! I'm Cristina, a chemist from Málaga who moved to Barcelona in
          2020.
        </p>
        <p>
          After 3 years in the fragrance industry, where I learnt a bit about
          perfumes and a lot about teamwork, project management, strong
          organization skills and other professional aptitudes, I discovered
          programming and I embarked on a Web Development Bootcamp through a
          Women in Tech scholarship.
        </p>
        <p>
          I knew soon enough that I wanted a change in my life and couldn't
          resist the Frontend enchantments. Following a year of intensive study,
          I decided to start this website to show everything I've learned.
        </p>
        <p>
          However, the learning journey never ends, and this platform will
          continually evolve everytime I learn something new.
        </p>
        <p>Stay tuned for updates!</p>
      </article>

      <article class="featured">
        <h2>Hobbies</h2>
        <p>
          I like having an active lifestyle. Although, I'm not an expert in any
          particular activity, I find joy in exploring a diverse array of
          pursuits. These are some pictures of my many passions.
          Furthermore, I also like to snowboarding, play padel, indoor cycling,
          to play board games, to see tv shows and to read.
        </p>
        <article>
          <img src="../assets/about/cris_surf.jpg" alt="article img" />
          <h4>Surfing</h4>
        </article>
        <article>
          <img src="../assets/about/cris_fest.jpg" alt="article img" />
          <h4>Live Music</h4>
        </article>
        <article>
          <img src="../assets/about/cris_climber.jpg" alt="article img" />
          <h4>Indor Climbing</h4>
        </article>
        <article>
          <img src="../assets/about/cris_mountain.jpg" alt="article img" />
          <h4>Hiking</h4>
        </article>
      </article>
    </main>
    <footer>
      <GeneralFooter />
    </footer>
  </body>
</template>

<script scoped>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "AboutMeView",
  components: {
    GeneralHeader,
    GeneralFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;800&family=VT323&display=swap");

body {
  margin: 0;
  font-family: "Poppins";
  color: #0e2431;
  scroll-behavior: smooth;
  background: linear-gradient(to bottom, #f5f5f5, white);
}
.grid {
  display: grid;
  gap: 60px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}
.aboutme {
  grid-column: 1 / span 4;
  border-bottom: 1px solid #bbc7c7;
  padding-bottom: 40px;
}
.aboutme p {
  text-align:justify;
}
.featured {
  grid-column: 1 / span 4;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  gap: 60px;
  align-items: center;
}
.featured h2 {
  grid-column: 1 / span 4;
  margin: -3rem;
}
.featured p {
  grid-column: 1 / span 5;
  margin: -1rem;
  text-align: justify;
}
.featured img {
  grid-column: span 1;
  width: 100%;
  margin-left: 2rem;
}
.featured h4 {
  margin-left: 4rem;
  margin-top: 0.4rem;
}

footer{
position: relative;
}
@media screen and (max-width: 980px) {
  .aboutme {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 1 / span 4;
    display: block;
    margin: 0 25px;
    margin-top: -1rem;
  }
  .featured {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 1 / span 4;
    display: block;
  }
  .featured h2 {
    grid-column: 1 / span 4;
    margin: -1rem;
  }
  .featured p {
    grid-column: 1 / span 5;
    margin: 2rem;
    text-align: justify;
  }
  .aboutme p {
    text-align: justify;
  }
  .featured img {
  margin-top: 10px;
  margin-left: 0rem;
  max-width: 80%;
}
  .featured h4 {
  margin-left: 0rem;
}

}
</style>
