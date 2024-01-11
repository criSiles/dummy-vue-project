import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm.vue', () => {
  it('updates the "email" model with input data', async () => {
    const wrapper = mount(ContactForm);
    // Create a const to find the input element of type "email"
    const input = wrapper.find('input[type="email"]');
    // Sets the value of the email input to 'test@example.com'
    await input.setValue("test@example.com");
    // Asserts that the value of email property in the Vue component's data (wrapper.vm.email) is equal as the string provided "test@example.com"
    expect(wrapper.vm.email).toBe("test@example.com");
  })

  it('updates the "name" model with input data', async () => {
    const wrapper = mount(ContactForm)
    const input = wrapper.find('input[type="name"]')
    await input.setValue('John Doe')
    expect(wrapper.vm.name).toBe('John Doe')
  })
})

describe('ContactForm.vue 2', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ContactForm)
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('form fields are empty initially', () => {
    expect(wrapper.vm.mobile).toBe('')
    expect(wrapper.vm.terms).toBe(false)
  })

  it('form fields update when data is entered', async () => {
    await wrapper.find('input[type="mobile"]').setValue('1234567890')
    expect(wrapper.vm.mobile).toBe('1234567890')

    await wrapper.find('input[type="checkbox"]').setChecked()
    expect(wrapper.vm.terms).toBe(true)
  })

  // DOUBT, IDK how to do the submit correctly, I'm not sending it no anywhere
  it('form submission works correctly', async () => {
    // Assuming there's a method 'submitForm' in your component
    const submitForm = jest.spyOn(wrapper.vm, 'submitForm');

    await wrapper.find('button').trigger('click')
    expect(submitForm).toHaveBeenCalled();
  })
  // DOUBT, IDK why fails, it works in the web, if i don't put the 9 numbers or 
  it('shows error messages when required fields are empty', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.mobileError).toBeTruthy()
  })
})