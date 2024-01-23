<template>
  <body>
    <header class="header-container">
      <router-link :to="{ name: 'Home' }">
        <div class="title">
          <img
            class="element image"
            src="../assets/circleCris.png"
            alt="Cris"
          />
            <a class="element name">Cristina Siles Vega</a>
  
            
        </div>
      </router-link>
      <nav>
        <div class="navbar">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="menu-items overlay">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/aboutme">About</a></li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </body>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #fff;
  width: 100%;
  /* flex-direction: row-reverse; */
}

.element {
  display: flex;
  max-width: 12.5rem;
  max-height: 12.5rem;
}

.image {
  max-width: 3.5rem;
  margin: 0.5rem 0.5rem;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.name {
  font-size: 1.1rem;
  font-weight: 500;
  justify-content: center;
  color: #0e2431;
  animation: fadeIn 2s ease-in-out;
}

a:link {
  text-decoration: none;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.container {
  width: 90%;
  margin: auto;
  animation: slideInFromLeft 2s ease-in-out;
}
.menu-items {
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  margin-left: -8.6rem;
  margin-top: -0.6rem;
  display: flex;
  justify-content: center;
}

.navbar {
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  display: flex;
  color: #0e2431;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem;
  text-decoration: none;
}

.nav-container .checkbox {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-container {
    display: block;
    position: relative;
    width: 100%;
  }
  .navbar .nav-container a:hover {
    font-weight: bolder;
  }
  .nav-container .checkbox {
    cursor: pointer;
    display: block;
    height: 2rem;
    opacity: 0;
    position: absolute;
    width: 2rem;
    z-index: 4;
    margin-left: -0.5rem;
  }

  .nav-container .hamburger-lines {
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    position: absolute;
    width: 2rem;
    z-index: 3;
    margin-left: -0.5rem;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 0.25rem;
    width: 100%;
    border-radius: 0.625rem;
    background: #0e2431;
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 80px;
    box-shadow: inset 0 0 125rem rgba(242, 242, 242, 1);
    height: 100vh;
    width: 100%;
    transform: translate(150%);
    display: flex;
    flex-direction: column;
    margin-left: -9.375rem;
    padding-left: 3.125rem;
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }

  .navbar .menu-items li {
    margin-bottom: 1.1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
  .overlay {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0rem;
    left: 9.375rem;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    padding-right: 40px;
    padding-bottom: 40rem;
    z-index: 2;
  }
}
</style>
