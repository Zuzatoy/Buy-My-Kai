import companyList from '../../../client/reducers/companyList'
import {PRODUCT_PENDING} from ''

test('reducer receives list of all companies', () => {
  const currentState = []
  const action = {
    type: RECEIVE_COMPANIES,
    companies: [{name: 'test name'}]
  }
  const newState = companyList(currentState, action)
  expect(newState.length).toBe(1)
})
