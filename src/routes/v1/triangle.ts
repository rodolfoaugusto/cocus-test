import * as triangleControllerV1 from '../../controllers/v1/triangle';
import auth from '../../middlewares/auth';
import { Router } from 'express';

const router = Router();

router.post('/triangle', auth, triangleControllerV1.getTriangleType);
router.get('/triangle', auth, triangleControllerV1.getTriangleRecords);

export default router;
