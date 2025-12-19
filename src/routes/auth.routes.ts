import express from 'express';
import { signIn, signOut } from '../services/';

const router = express.Router();

router.post('/sessions/signin', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const data = await signIn(email, password);
    res.status(200).json({ success: true, data });
    
  } catch (error) {
    next(error)
  }
});


router.delete('/sessions/signout', async (_req, res, next) => {
  try {
    await signOut()
    res.status(200).json({ success: true, message: 'Signed out successfully' })
  } catch (error) { 
    next(error)
  }
});

export default router;