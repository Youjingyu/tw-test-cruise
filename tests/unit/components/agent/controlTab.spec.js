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
  it('should emit search event', () => {
    const wrapper = shallowMount(ControlTab)

    wrapper.find('input').setValue('keyword')

    wrapper.find('input').trigger('keyup.enter')
    wrapper.find('i.icon-search').trigger('click')

    expect(wrapper.emitted().search.length).to.equal(2)
    expect(wrapper.emitted().search[0][0]).to.equal('keyword')
  })
})
