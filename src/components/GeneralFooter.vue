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
    <p> Made with  <svg viewBox="0 0 1792 1792" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="height: 0.8rem;"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill="#e25555"></path></svg> by Cristina Siles Vega</p>
  </footer>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* footer {
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */
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
  padding-top: 1rem;
  transition: all 0.4s ease 0s;
  width: 40px;
  text-decoration: none;
}

.contact-social ul li a:hover {
  color: #e25555;
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
