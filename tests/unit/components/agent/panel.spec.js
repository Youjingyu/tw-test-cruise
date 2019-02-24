import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ControlTab from '@/components/agent/Panel.vue'

describe('agent/Panel.vue', () => {
  it('should render correct data', () => {
    const wrapper = shallowMount(ControlTab, {
      propsData: {
        panelData: {
          building: 0,
          idle: 1,
          physical: 2,
          virtual: 3
        }
      }
    })
    expect(wrapper.find('div.building').find('span').text()).to.equal('0')
    expect(wrapper.find('div.idle').find('span').text()).to.equal('1')

    const summary = wrapper.find('div.status-summary').findAll('div')

    expect(summary.at(1).find('span').text()).to.equal('5')
    expect(summary.at(2).find('span').text()).to.equal('2')
    expect(summary.at(3).find('span').text()).to.equal('3')
  })
})
