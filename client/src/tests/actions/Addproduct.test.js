// // import actions
// import {
//   sendProduct,
//   PRODUCT_PENDING,
//   SHOW_ERROR} from '../../actions/products'

// jest.mock('superagent', () => {
//   return {
//     post: (url) => {
//       if (url.split('/')[1] === 'api') {
//         return {send: (product) => {
//           return Promise.resolve({body: {id: 1}})
//         }}
//       } else {
//         return Promise.reject(new Error('File not found'))
//       }
//     }
//   }
// })

// test('add product gets the correct actions', () => {
//   const dispatch = jest.fn()
//   const product = {
//     name: 'test',
//     websiteUrl: 'www.test.com',
//     countryId: '123'
//   }
//   return sendProduct('/api/v1/products/addproduct', product)(dispatch)
//     .then(() => {
//       expect(dispatch.mock.calls[0][0].type).toBe(PRODUCT_PENDING)
//     })
// })

// test('add company returns an error with incorrect url', () => {
//   const dispatch = jest.fn()
//   return sendProduct('/addproduct')(dispatch)
//     .catch(() => {
//       expect(dispatch.mock.calls[0][0].type).toBe(SHOW_ERROR)
//     })
// })
