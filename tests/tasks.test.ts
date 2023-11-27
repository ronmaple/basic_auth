import axios from './utils/axios'

describe('note.test.ts', () => {
  // Can add a route or direct import to purge database
  // but sometimes it's nice to use tests as a seeder

  it('should create note on POST /notes', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    const response = await axios.post('/notes', params)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Hello')
    expect(response.data.completed).toEqual(false)
  })

  it('should get note by id on GET /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/notes', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.get(`/notes/${id}`)
    expect(response.status).toEqual(200)
    expect(response.data._id).toEqual(id)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Hello')
    expect(response.data.completed).toEqual(false)
  })

  it('should update note by id on PUT /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/notes', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.put(`/notes/${id}`, { body: 'Changed' })
    expect(response.status).toEqual(200)
    expect(response.data._id).toEqual(id)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Changed')
    expect(response.data.completed).toEqual(false)
  })

  it('should delete note by id on DELETE /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/notes', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.delete(`/notes/${id}`)
    expect(response.status).toEqual(204)
  })
})
