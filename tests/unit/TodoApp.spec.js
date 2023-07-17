import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(TodoApp)
    })

    it('render the todo text',() => {
        const todo = wrapper.get('[data-test="todo"]')

        expect(todo.text()).toBe('Learn vue testing')
    })

    it('should add new todo and', async () => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

        await wrapper.get('[data-test="new-todo"]').setValue(' New Todo')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3)
        expect(wrapper.findAll('[data-test="todo"]').at(2).text()).toBe('New Todo')
        
    })

    it('Inpute should be cleared', () => {
        expect(wrapper.get('[data-test="new-todo"]').element.value).toEqual("")
    })

    it('todo should be able to be completed', async () => {
        await wrapper.get('[data-test="todo-checkbox"]').setChecked(true) 
        expect(wrapper.findAll('.completed').at(0)).toBeTruthy()
    })
})