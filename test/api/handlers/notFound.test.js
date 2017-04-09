const test = require('ava')
const request = require('supertest')
require('../server')

test.before((t) => (
  serverPromise
))

test.cb('get', (t) => {
  request(server.listener)
    .get('/undefinedurl')
    .expect(404)
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.result, 'Page not found.')
      t.end()
    })
})

