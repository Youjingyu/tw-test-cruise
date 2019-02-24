import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ControlTab from '@/components/agent/ControlTab.vue'

describe('agent/ControlTab.vue', () => {
  it('should render correct active tab', () => {
    const wrapper = shallowMount(ControlTab, {
      propsData: {
        filterType: 1
      }
    })
    const activeClass = wrapper.findAll('li').at(1).attributes('class')
    expect(activeClass).to.equal('active')
  })
  it('should emit switchTab event with correct filterType', () => {
    const wrapper = shallowMount(ControlTab)
    wrapper.findAll('li').at(2).trigger('click')

    const eventData = wrapper.emitted().switchTab[0][0]
    expect(eventData).to.equal(2)
  })
})
