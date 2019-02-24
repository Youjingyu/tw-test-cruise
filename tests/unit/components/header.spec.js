import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('should render avatar', () => {
    const avatarImgUrl = 'avatarImgUrl'
    const wrapper = shallowMount(Header, {
      propsData: {
        avatarImgUrl
      }
    })
    const renderedAvatar = wrapper.find('img[alt="avatar"]').attributes('src')
    expect(renderedAvatar).to.equal(avatarImgUrl)
  })
  it('should show/hide menu', () => {
    const wrapper = shallowMount(Header)
    const vm = wrapper.vm
    wrapper.find('div.login').trigger('click')
    expect(vm.isShowMenu).to.equal(true)
    wrapper.find('div.login').trigger('click')
    expect(vm.isShowMenu).to.to.equal(false)
  })
})
