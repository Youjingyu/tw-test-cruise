import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MachineView from '@/components/agent/MachineView.vue'
import ControlTab from '@/components/agent/ControlTab.vue'
import MachineList from '@/components/agent/MachineList.vue'

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

describe('agent/MachineView.vue', () => {
  it('should filter list when switchTab event is emitted', () => {
    const wrapper = shallowMount(MachineView, {
      propsData: {
        machineList: [mockData, mockData, mockData]
      }
    })
    wrapper.find(ControlTab).vm.$emit('switchTab', 2)

    expect(wrapper.vm.filteredMachineList.length).to.eql(0)
    expect(wrapper.vm.filterType).to.eql(2)
  })
  it('should filter list when search event is emitted', () => {
    const wrapper = shallowMount(MachineView, {
      propsData: {
        machineList: [mockData, mockData, mockData]
      }
    })

    wrapper.find(ControlTab).vm.$emit('search', '02')
    expect(wrapper.vm.filteredMachineList.length).to.eql(0)
  })
  it('should emit event', () => {
    const wrapper = shallowMount(MachineView, {
      propsData: {
        machineList: [mockData, mockData, mockData]
      }
    })
    const machineListVm = wrapper.find(MachineList).vm

    // pass through addResource event
    machineListVm.$emit('addResource', 1, ['resource1'])
    const eventParam = wrapper.emitted().addResource[0]
    expect(eventParam).to.eql([1, ['resource1']])

    // pass through deleteResource event
    machineListVm.$emit('deleteResource', 1, 2)
    const eventParam2 = wrapper.emitted().deleteResource[0]
    expect(eventParam2).to.eql([1, 2])
  })
})
