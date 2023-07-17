import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
    it('renders the props.msg when passed', () => {
        const msg = "Hello Friends"
        const wrapper = mount(Message, {
            propsData: {msg}
        })
        expect(wrapper.text()).toContain(msg)
    })
})