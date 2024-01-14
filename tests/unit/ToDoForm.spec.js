import { mount } from '@vue/test-utils'
import ToDoForm from '@/components/ToDoForm.vue'
import { useToDoStore } from '@/stores/ToDoStore'

jest.mock('@/stores/ToDoStore')

describe('ToDoForm.vue', () => {
  let wrapper
  let mockStore

  beforeEach(() => {
    mockStore = {
      tasks: [],
      addTask: jest.fn()
    }
    useToDoStore.mockReturnValue(mockStore)
    wrapper = mount(ToDoForm)
  })

  it('renders a form', () => {
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('renders an input field and a button', () => {
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('calls handleSubmit when form is submitted', async () => {
    const input = wrapper.find('input')
    await input.setValue('Test task')
    await wrapper.find('form').trigger('submit.prevent')

    expect(mockStore.addTask).toHaveBeenCalled()
    expect(mockStore.addTask).toHaveBeenCalledWith(expect.objectContaining({
      id: expect.any(Number),
      title: 'Test task',
      completed: false
    }))
  })

  it('clears the input field after form submission', async () => {
    const input = wrapper.find('input')
    await input.setValue('Test task')
    await wrapper.find('form').trigger('submit.prevent')

    expect(input.element.value).toBe('')
  })
})