import { mount } from "@vue/test-utils";
import ContactForm from "@/components/ContactForm.vue";

describe("ContactForm.vue", () => {
  let wrapper;

  // BeforeEach is a setup function that allows us run a code before each test case in the test suite
  beforeEach(() => {
    // So before each test the component is mounted
    wrapper = mount(ContactForm);
  });

  // This test check if the wrapper object exists
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("form fields are empty initially", () => {
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.mobile).toBe("");
    expect(wrapper.vm.role).toBe("recruiter");
    expect(wrapper.vm.terms).toBe(false);
  });

  it("form fields update when data is entered in the input", async () => {
    // Create a const with the email fake value
    const email = "test@example.com";
    // Find the input element of type "email"
    await wrapper.find('input[type="email"]').setValue(email);
    // Asserts that the value of email property in the Vue component's data (wrapper.vm.email) is equal as the string provided "test@example.com"
    expect(wrapper.vm.email).toBe("test@example.com");

    const name = "Cris";
    const mobile = "1234567890";
    const role = "developer";
    
    await fillSubmitInputs(wrapper, email, name, role, mobile);

    expect(wrapper.vm.name).toBe("Cris");
    expect(wrapper.vm.mobile).toBe("1234567890");
    expect(wrapper.vm.role).toBe("developer");
    expect(wrapper.vm.terms).toBe(true);
  });

  // 1 FAIL: DOUBT, IDK how to do the submit correctly, I'm not sending it no anywhere
  it("form submission works correctly", async () => {
    // Create a spy on the 'submitForm' method
    const submitForm = jest.spyOn(wrapper.vm, "handleSubmit");

    // Trigger the form submission
    await wrapper.find("form").trigger("submit.prevent");

    // Check if 'submitForm' has been called
    expect(submitForm).toHaveBeenCalled();
  });

  // 2 FAIL: The result is false ¿why?
  it("shows error message if mobile length is under 9", async () => {
    const number = "12345";
    await fillSubmitInputs(
      wrapper,
      "hola@hola.com",
      "hola",
      "developer",
      number
    );
    await wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick(); // Wait for reactivity system
    expect(wrapper.vm.mobileError).toBe(true);
  });
});

async function fillSubmitInputs(wrapper, email, name, role, mobile) {
  await wrapper.find('input[type="email"]').setValue(email);
  await wrapper.find('input[type="text"]').setValue(name);
  await wrapper.find('option[type="role"]').setValue(role);
  await wrapper.find('input[type="tel"]').setValue(mobile);
  await wrapper.find('input[type="checkbox"]').setChecked();
}
