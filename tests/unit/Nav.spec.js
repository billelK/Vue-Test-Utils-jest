import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
  it('renders profile link', () => {
    const wrapper = mount( Nav, {
      data() {
        return {
            isLoggedIn: true,
        }
      }
    })
    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toBe('My profile')
  })

  it('should not renders profile link', () => {
    const wrapper = mount( Nav, {
      data() {
        return {
            isLoggedIn: false,
        }
      }
    })
    const profileLink = wrapper.find('#profile')
    expect(profileLink.exists()).toBe(false)
  })
})