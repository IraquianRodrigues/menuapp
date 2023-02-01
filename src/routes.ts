import {Router, Request, Response} from 'express'

const router = Router();

//--- criando rota da nossa api ---
router.get ('/teste', (req: Request, res: Response) => {
   return res.json({nome: 'iraquian'})
})

export {router};