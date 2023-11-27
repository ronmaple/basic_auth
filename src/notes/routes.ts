import { Router } from 'express'
import { get, create, update, deletenote } from './controller'

const route = Router()
route.post('/', create)
route.get('/:id', get)
route.put('/:id', update)
route.delete('/:id', deletenote)


export default route