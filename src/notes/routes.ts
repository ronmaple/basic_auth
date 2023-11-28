import { Router } from 'express'
import { get, create, update, deleteNote } from './controller'

const route = Router()
route.post('/', create)
route.get('/:id', get)
route.put('/:id', update)
route.delete('/:id', deleteNote)


export default route