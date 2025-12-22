import express from 'express';
import { signIn, signOut } from '../services/';

const router = express.Router();

router.post('/sessions/signin', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const data = await signIn(email, password);
    console.log("/sessions/signin, about to return res.status")
    res.status(200).json({ success: true, data });
    
  } catch (error) {
    next(error)
  }
});


router.delete('/sessions/signout', async (_req, res, next) => {
  try {
    await signOut()
    console.log("/sessions/signout about to return res.status")
    res.status(200).json({ success: true, message: 'Signed out successfully' })
  } catch (error) { 
    next(error)
  }
});

export default router;