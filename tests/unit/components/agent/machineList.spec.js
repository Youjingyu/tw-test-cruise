import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MachineList from '@/components/agent/MachineList.vue'
import Dialog from '@/components/Dialog.vue'

const mockData = {
  'name': 'bjstdmngbdr01.thoughtworks.com',
  'os': 'windows',
  'status': 'idle',
  'type': 'physical',
  'ip': '192.168.1.102',
  'location': '/var/lib/cruise-agent',
  'resources': [
    'Firefox',
    'Safari',
    'Ubuntu',
    'Chrome'
  ],
  'id': 1
}

describe('agent/ControlTab.vue', () => {
  it('should render correct list', () => {
    const wrapper = shallowMount(MachineList, {
      propsData: {
        machineList: [mockData, mockData, mockData]
      }
    })
    const listItem = wrapper.findAll('li.machine-list-item')
    expect(listItem.length).to.equal(3)

    // choose a list item to test
    const sampleItem = listItem.at(1)
    expect(sampleItem.find('img[alt="os-icon"]').attributes('src').indexOf('windows')).to.above(-1)
    expect(sampleItem.find('h5.machine-name').text()).to.equal(mockData.name)
    expect(sampleItem.find('span.machine-status-info').classes('machine-idle')).to.equal(true)
    expect(sampleItem.findAll('span.machine-info').at(0).text()).to.equal(mockData.ip)
    expect(sampleItem.findAll('span.machine-info').at(1).text()).to.equal(mockData.location)
    expect(sampleItem.findAll('div.resource-item').length).to.equal(4)
  })
  it('should emit event', () => {
    const wrapper = shallowMount(MachineList, {
      propsData: {
        machineList: [mockData, mockData, mockData]
      }
    })
    // pass through Dialog addResource event
    // find the first dialog, represents the first list item
    wrapper.find(Dialog).vm.$emit('addResource', ['resource1'])
    const eventParam = wrapper.emitted().addResource[0]
    // first list item, resource array
    expect(eventParam).to.eql([0, ['resource1']])

    // find the first delete button, represents the first resource in the first list item
    wrapper.find('i.icon-trash').trigger('click')
    const eventParam2 = wrapper.emitted().deleteResource[0]
    // first list item, first resource item
    expect(eventParam2).to.eql([0, 0])
  })
})
