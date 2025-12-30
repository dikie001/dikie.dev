import { Router } from 'express';
import contactRoutes from './contact';

const router:Router = Router();

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
router.use('/contact', contactRoutes);

export default router;
 