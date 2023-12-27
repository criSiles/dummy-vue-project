<template>
  <footer>
    <div class="contact-social">
      <ul>
        <li>
          <a
            class="hover-target"
            href="https://www.linkedin.com/in/cristina-siles-vega/"
            ><i class="fa fa-linkedin"></i
          ></a>
        </li>
        <li>
          <a class="hover-target" href="https://github.com/criSiles"
            ><i class="fa fa-github"></i
          ></a>
        </li>
      </ul>
    </div>
    <p>Copyright &copy; 2024 Cristina Siles Vega</p>
  </footer>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
footer {
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -2rem;
}
footer p {
  color: #0e2431;
  font-size: 1rem;
  margin: 0.5rem auto;
}
.contact-social > ul {
  display: inline-flex;
}
.contact-social ul li a {
  color: #0e2431;
  display: inline-block;
  height: 2rem;
  margin: 0rem 0.2rem;
  padding-top: 1rem;
  transition: all 0.4s ease 0s;
  width: 40px;
  text-decoration: none;
}

.contact-social ul li a:hover {
  color: royalblue;
}
.contact-social ul li a i {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
