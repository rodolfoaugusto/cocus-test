import { Request, Response } from 'express';
import { getTriangleSides, getTriangleRecordRows } from '../../services/triangle';

type IdentifyBody = {
    triangle: {
        sideA: number;
        sideB: number;
        sideC: number;
    };
};

export const getTriangleRecords = async (req: Request, res: Response): Promise<void> => {
    const response = await getTriangleRecordRows();
    res.json(response);
};

export const getTriangleType = async (
    req: Request<any, any, IdentifyBody>,
    res: Response,
): Promise<any> => {
    const request = req.body;
    const response = await getTriangleSides(request);
    res.json(response);
};
