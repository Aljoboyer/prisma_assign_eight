import express from 'express'
import { userCreateController } from './user.controller';

const router = express.Router()

router.post('/signup', userCreateController)

export const userRouter = router ;