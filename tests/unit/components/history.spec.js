import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import History from '@/components/History.vue'

describe('History.vue', () => {
  it('should render a list', () => {
    const history = ['history1', 'history2']
    const wrapper = shallowMount(History, {
      propsData: {
        history
      }
    })
    const items = wrapper.findAll('li')
    expect(items.length).to.equal(2)
    expect(items.at(0).text()).to.equal(history[0])
  })
})
