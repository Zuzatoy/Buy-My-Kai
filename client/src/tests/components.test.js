import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Addproduct} from '../components/Product/Addproduct'

configure({adapter: new Adapter()})

// test('test runner runs', () => {
//   expect(true).toBeTruthy()
// })

test('<Addproduct />', () => {
  const expected = 'Add a Product'

  const wrapper = shallow(<Addproduct />)
  const actual = wrapper.find('h1').text()

  expect(actual).toEqual(expected)
})
