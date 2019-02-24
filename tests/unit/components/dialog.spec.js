import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog.vue', () => {
  it('should emit close event and clear input content', () => {
    const wrapper = shallowMount(Dialog)

    wrapper.find('input').setValue('test value')

    wrapper.find('button.cancel').trigger('click')
    expect(wrapper.emitted().close.length).to.equal(1)

    expect(wrapper.find('input').element.value).to.equal('')

    wrapper.find('i.icon-close').trigger('click')
    expect(wrapper.emitted().close.length).to.equal(2)
  })
  it('should emit addResource event with correct resource array, emit close event and clear input content', () => {
    const wrapper = shallowMount(Dialog)

    wrapper.find('input').setValue(';;resource1;resource2;  resource3 ;')

    wrapper.find('button.add-resource').trigger('click')
    const eventData = wrapper.emitted().addResource[0][0]
    expect(eventData).to.eql(['resource1', 'resource2', 'resource3'])

    expect(wrapper.emitted().close.length).to.equal(1)
    expect(wrapper.find('input').element.value).to.equal('')
  })
})
