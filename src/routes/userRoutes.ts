import { Router } from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/userController'

const router : Router = Router()

router.post('/create', createUser);
router.get('/getAll', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;
