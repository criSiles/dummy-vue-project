<template>
  <div class="contact">

    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email" />
      
      <label>Name:</label>
      <input type="name" required v-model="name" />
      
      <label>Mobile:</label>
      <input type="mobile" required v-model="mobile" />
      <div v-if="mobileError">{{ mobileError }}</div>
      
      <label> Role: </label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="recruiter">Recruiter</option>
        <option value="student">Web Student</option>
      </select>

      <div class="accept">
        <div class="terms">
          <input type="checkbox" v-model="terms" required />
          <label>Accept terms and conditions</label>
        </div>
        
        <div class="submit">
          <button>Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      name: "",
      mobile: "",
      role: "",
      terms: false,
      mobileError: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.mobileError =
        this.mobile.length == 9 ? "" : "The mobile has to be 9 numbers";
    },
  },
};
</script>

<style scoped>
.contact{
margin-bottom: 5rem;
}
form {
  font-family: "Poppins";
  max-width: 40rem;
  margin: 1.8rem auto;
  margin-top: 5rem;
  background: white;
  text-align: left;
  padding: 2rem;
  gap: 1rem;
  border-radius: 10px;
}
label {
  color:  #0e2431;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 0.625rem;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.375rem;
  border-bottom: 1px solid #ddd;
  color:  #0e2431;
  font-size: 1em;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.accept{
  display: flex;
  justify-content: space-between;
}
.submit button{
  font-family: "Poppins";
  margin-top: 1.2rem;
  border-radius: 0.375rem;
  border: 4px solid #ddd;
  font-size: 0.9rem;
  background-color:#ddd;
  color: #0e2431;
}

.submit button:hover {
  background-color:  #0e2431;
  color: #ddd;
  border: 4px solid  #0e2431;
}
@media screen and (max-width: 768px) {
  .contact{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1.8rem
}
.terms{
  font-size: 0.7rem;
}
.accept{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submit{ 
  margin-top: 0.4rem;
}
}

</style>
