<template>
  <body>
    <header>
      <GeneralHeader />
    </header>
    <main class="grid">
      <div class="column">
        <img src="../assets/cris_climber.jpg" alt="Climber" />
        <img src="../assets/cris_fest.jpg" alt="Fest" />
      </div>
      <div class="column">
        <img src="../assets/cris_mountain.jpg" alt="Mountain" />
        <img src="../assets/cris_surf.jpg" alt="Surf" />
      </div>
      <div class="aboutme">
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
        <p>
          Stay tuned forupdates!
        </p>
          
      </div>
      <h2>Projects</h2>
      <div class="card">
        <h3>To Do</h3>
        <p>
          This is a website where you can find a To Do list. In this part you
          could add a new to do, mark as fav, delete it and add notes.
        </p>
        <p>Click for more info.</p>
      </div>
      <div class="card">
        <h3>Shop</h3>
        <p>
          This is a second hand shop website. You can see all the products, make
          a search for specifics and post a product to sell.
        </p>
        <p>Click for more info.</p>
      </div>
      <div class="card">
        <h3>Flitter</h3>
        <p>
          This is a social media website where you can express yourself and see
          what other people are thinking or doing.
        </p>
        <p>Click for more info.</p>
      </div>
    </main>
  </body>
</template>

<script scoped>
import GeneralHeader from "@/components/GeneralHeader.vue";
export default {
  name: "AboutMeView",
  components: {
    GeneralHeader,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;800&family=VT323&display=swap");

body {
  margin: 0;
  font-family: "Poppins";
  background: #f5f5f5;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
}
header{
  margin-bottom: -3rem;
}
.column {
  grid-column: span 3;
  max-width: 100%;
  grid-column: span 3;
}
.column img {
  vertical-align: middle;
  padding: 1rem;
  width: 90%;
}

main {
  /* max-width: 1200px; */
  margin: 60px auto;
  padding: 20px;
}
main > h2 {
  grid-column: span 12;
  text-align: center;
  font-size: 1.5em;
}
main .aboutme {
  grid-column: 8 / span 5;
  margin-right: 2rem;
  margin-top: -2.4rem;
}
main .aboutme p {
  text-align: justify;
}
.card {
  grid-column: span 4;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 3px 3px 12px 0px rgb(0, 0, 0, 0.2);
  /* right - bottom - difuse - all sides*/
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 960px) {
  .column {
    grid-column: 2 / span 10;
    align-items: center;
    /* I skip 1 and start at 2, we expand 10 columns so is 1 left also at the end */
    margin-bottom: -1.8rem;
  }
  main .aboutme {
    grid-column: 2 / span 10;
    margin-top: -0.4rem;
    margin-right: 0;
  }
  main .card {
    grid-column: 3 / span 8;
  }
  main > h2 {
  margin-top: -0.5rem;
  margin-bottom: -0.2rem;
}
}
</style>
