<template>
  <div class="contact">
    <form @submit="handleSubmit($event)">
      <label>Email:</label>
      <input
        type="email"
        required
        v-model.trim="email"
        placeholder="example@example.com"
      />
      <div v-if="emailError">Please enter a valid email</div>

      <label>Name:</label>
      <input
        type="text"
        required
        v-model.trim="name"
        placeholder="Phoebe Buffay"
      />
      <div v-if="nameError">Please enter your name</div>

      <label>Mobile:</label>
      <input
        type="tel"
        required
        v-model.trim="mobile"
        placeholder="123456789"
      />
      <div v-if="mobileError">The mobile has to be 9 numbers</div>

      <label> Role: </label>
      <select required v-model="role">
        <option type="role" value="developer">Web Developer</option>
        <option type="role" value="recruiter">Recruiter</option>
        <option type="role" value="student">Web Student</option>
        <option type="role" value="other">Other</option>
      </select>
      <input
        v-if="role === 'other'"
        v-model="customRole"
        placeholder="Write your role"
      />

      <div class="accept">
        <div class="terms">
          <input type="checkbox" required v-model="terms" />
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
// the relevant methods
import { collection, addDoc } from "firebase/firestore"
// the firestore instance
// import db from '../firebase/init.js';
import dbFirestore from "../firebase/init.js";

export default {
  data() {
    return {
      email: "",
      name: "",
      mobile: "",
      role: "recruiter",
      customRole: "",
      emailError: false,
      nameError: false,
      mobileError: false,
      roleError: false,
      terms: false,
    };
  },
  methods: {
    handleRoleChange() {
      if (this.role !== "other") {
        this.customRole = this.role;
      }
    },
    handleSubmit(e) {
      // Prevent the default submit action
      e.preventDefault();

      // Validate the form fields
      this.emailError = !this.email.includes("@");
      this.nameError = this.name.trim() === "";
      this.mobileError = this.mobile.trim().length < 9;
      this.roleError = this.role.trim() === "";

      // If there are no error, we can submit the data to Firebase
      if (
        !this.emailError &&
        !this.nameError &&
        !this.mobileError &&
        !this.roleError
      ) {
        // Uses the Firebase Database API to add a new document to the "message" collection
        const messagesRef = collection(dbFirestore, "contact-form");

        addDoc(messagesRef, {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          role: this.role,
          terms: this.terms,
          time: new Date(),
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          // If the document was added successfully, reset the form
          .then(() => {
            this.name = "";
            this.email = "";
            this.mobile = "";
            this.role = "";
            this.terms = false;
          })
          // If there was an error adding the document, log it to the console
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.contact {
  margin-bottom: 5rem;
}
form {
  font-family: "Poppins";
  max-width: 40rem;
  margin: 1.8rem auto;
  margin-top: 5rem;
  background: #e7e7e7;
  text-align: left;
  padding: 2rem;
  gap: 1rem;
  border-radius: 10px;
}
label {
  color: #0e2431;
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
  border-bottom: 1px solid #e7e7e7;
  color: #0e2431;
  font-size: 1em;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  background: white;
  top: 2px;
}
.accept {
  display: flex;
  justify-content: space-between;
}
.submit button {
  font-family: "Poppins";
  margin-top: 1.2rem;
  border-radius: 0.375rem;
  border: 4px solid white;
  font-size: 0.9rem;
  background-color: white;
  color: #0e2431;
}

.submit button:hover {
  background-color: #0e2431;
  color: #e7e7e7;
  border: 4px solid #0e2431;
}

@media screen and (max-width: 768px) {
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1.8rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1.8rem;
  }
  .terms {
    font-size: 0.7rem;
  }
  .accept {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .submit {
    margin-top: 0.4rem;
  }
}
</style>
