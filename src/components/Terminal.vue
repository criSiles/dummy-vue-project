<template>
    <div class="terminal-container">

        <section class="text-animation">
            <div class="container">
                <div>
                    <div class="frame">
                        <div class="typewriter">
                            <span class="dollar">→ $ </span
                                ><span @click=typewriterHeading()></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
export default {
  setup() {
    const TypeWriterHeading = () => {
      const heading_arr = [
        "Some of the languages, frameworks and tools I know are...",
      ];
      let i = 0;
      let text_elem = document.getElementById("typewriter_heading");
      let word = heading_arr[i].split("");
      let type = function () {
        if (word.length > 0) {
          text_elem.innerHTML += word.shift();
        }
      };
      setInterval(type, 150);
    };
    return {TypeWriterHeading}
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto+Mono&display=swap");

* {
  margin: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
  padding: 0;
}

.terminal-container {
  font-family: "Roboto Mono", sans-serif;
  background-color: #000;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.typewriter {
  text-align: left;
  margin-left: 10px;
  margin-top: 15px;
}
.text-animation .typewriter .typewriter_caret {
  animation: blink 1.2s infinite;
  color: #fff;
  display: none;
}
.container {
  font-size: 30px;
  border: 1px solid white;
  width: 600px;
  height: 200px;
  border-radius: 20px;
  padding: 20px;
}

#typewriter_heading {
  color: #f1fa8c;
}

.dollar {
  color: #50fa7b;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 800px) {
  .container {
    font-size: 18px;
  }
  .fa-code-branch {
    font-size: 18px;
  }
  .container {
    border: 1px solid white;
    width: 350px;
    height: 200px;
    border-radius: 20px;
    padding: 10px;
  }
}
</style>
