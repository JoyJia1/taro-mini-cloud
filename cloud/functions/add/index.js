// const wxServer = require('wx-server-sdk')
// // const TcbRouter = require('tcb-router')

// // const createLogDB = require('./createLogDB')

// wxServer.init()

// exports.main = async (event, context) => {
//     // const app = new TcbRouter({ event })
//     const db = wxServer.database()
//     try {
//       return await db.collection('number').add({
//         data: {
//           number: 1,
//           date: 123,
//           openid: 234
//         }
//       })
//     } catch (error) {
//       console.log('error', error);
//     }
// }

const wxServer = require('wx-server-sdk')
const TcbRouter = require('tcb-router')


wxServer.init()

exports.main = async (event, context) => {
    console.log('event', event);
    const app = new TcbRouter({ event })
    const db = wxServer.database()

    try {
      app.router('createLog', async (ctx, next) => {
          const res = await db.collection('number').add({
            data: {
              number: event.data.number,
              date: event.data.date,
              openid: event.data.openid,
              _id: event.data._id
            }
          })
          console.log('res', res);
          ctx.body = {
              code: 0,
              data: res
          }
      })
      return app.serve()
    } catch (error) {
      console.log('error', error);
    }
  
}
