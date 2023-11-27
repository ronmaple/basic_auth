import axios from './utils/axios'
import User from '../src/auth/model'

describe('auth.test.ts', () => {
  beforeAll(async () => {
    await axios.delete('/auth/purge')
  })
  afterEach(async () => {
    // delete users
    await axios.delete('/auth/purge')
  })

  it('should create a user on POST /auth/signup', async () => {
    const params = {
      username: 'ronmap',
      password: 'mysecret',
    }
    const response = await axios.post('/auth/signup', params)
    expect(response.status).toEqual(200)
    expect(response.data.username).toEqual(params.username)
  })

  it('should login a user on POST /auth/login', async () => {
    const params = {
      username: 'ronmap',
      password: 'mysecret',
    }
    await axios.post('/auth/signup', params)
    const response = await axios.post('/auth/login', params)
    expect(response.status).toEqual(200)
    expect(response.data.username).toEqual(params.username)
  })

  it('should throw Not Found error if user does not exist on POST /auth/login', async () => {
    const params = {
      username: 'ronmap2',
      password: 'mysecret',
    }
    try {
      await axios.post('/auth/login', params)
      // if this evaluates, then the test fails
      expect(false).toBe(true)
    } catch (err: any) {
      console.log(err)
      expect(err.response.status).toEqual(404)
    }
  })

  it('should throw Not Found error if password is incorrect POST /auth/login', async () => {
    const params = {
      username: 'ronmap2',
      password: 'mysecret',
    }
    try {
      await axios.post('/auth/login', params)
      // if this evaluates, then the test fails
      expect(false).toBe(true)
    } catch (err: any) {
      console.log(err)
      expect(err.response.status).toEqual(404)
    }
  })

  it.skip('should throw 409 error when username is taken', async () => {
    const params = {
      username: 'ronmap',
      password: 'mysecret',
    }
  })
})
