import reducer from '../../reducers/addproduct'
import * as types from '../../constants/ActionTypes'
​
describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        error: null,
        pending: false,
        product: null
      }
    ])
  })
​
  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.PRODUCT_SUCCESS,
        error: null,
        pending: false,
        product
      })
    ).toEqual([
      {
        type: types.PRODUCT_SUCCESS,
        error: null,
        pending: false,
        product: {

        }
      }
    ])
​
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})