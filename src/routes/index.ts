import { Router } from 'express';
import triangleRoutesV1 from './v1/triangle';

const router = Router();

router.use('/v1', [triangleRoutesV1]);

export default router;
