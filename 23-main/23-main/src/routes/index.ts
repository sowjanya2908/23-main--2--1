import { Request, Response, Router, NextFunction } from 'express'
import user from './user'
import ejs from 'ejs'
import AppConfig from '../config/app'

import { index } from './../views/index'
import doctor from './doctor'



const router: Router = Router()
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.send(ejs.render(index, { title: 'sample-api', version: AppConfig.app.api_version.toUpperCase() }))
})
router.use(user)
router.use(doctor)




export default router