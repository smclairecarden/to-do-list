import { Router } from 'express'
const router = Router()
import * as toDosCtrl from '../controllers/todos.js'

router.get('/', toDosCtrl.index)
router.get('/new', toDosCtrl.new)
router.get('/:id', toDosCtrl.show)
router.post('/', toDosCtrl
.create)
router.delete('/:id', toDosCtrl.delete)

export {
  router
}