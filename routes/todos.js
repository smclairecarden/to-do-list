import { Router } from 'express'
const router = Router()
import * as toDosCtrl from '../controllers/todos.js'

router.get('/new', toDosCtrl.new)
router.post('/', toDosCtrl
.create)

export {
  router
}