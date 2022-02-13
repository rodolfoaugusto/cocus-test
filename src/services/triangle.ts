import { HttpException } from '../exceptions/HttpException';
import { triangleRelation } from '../utils';
import { triangleSides, triangleType } from '../types/triangle';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const convertNumToStringNInt = (value: number): number => {
    // When JSON entry is a string
    return Number.parseInt(String(value));
};

const checkTriangleObjectParts = async (parts: any): Promise<void> => {
    const valid = ['sideA', 'sideB', 'sideC'];
    valid.map((current) => {
        const currentSide: number = convertNumToStringNInt(parts[current]);
        if (!parts.hasOwnProperty(current)) {
            throw new HttpException({
                code: 'TRIANGLE_MISSING_SIDES',
                message: 'Missing triangle parameters. SideA, SideB and SideC is required.',
                status: 400,
            });
        } else if (!Number.isInteger(currentSide)) {
            throw new HttpException({
                code: 'TRIANGLE_SIDE_WRONG_VALUE',
                message: 'The triangle side value is not an integer.',
                status: 400,
            });
        } else if (currentSide <= 0) {
            throw new HttpException({
                code: 'TRIANGLE_SIDE_LOWER_VALUE',
                message: 'The triangle side value cannot be equal or lower than 0.',
                status: 400,
            });
        }
    });
};

export const getTriangleSides = async (sides: triangleSides): Promise<any> => {
    if (typeof sides.triangle === 'undefined') {
        throw new HttpException({
            code: 'TRIANGLE_MISSING_STRUCTURE',
            message: 'Missing triangle structure parameter.',
            status: 400,
        });
    }

    await checkTriangleObjectParts(sides.triangle);

    const sideA = convertNumToStringNInt(sides.triangle.sideA);
    const sideB = convertNumToStringNInt(sides.triangle.sideB);
    const sideC = convertNumToStringNInt(sides.triangle.sideC);

    const triangleType =
        (sideA === sideB && sideB === sideC && 1) ||
        ((sideA === sideB || sideA === sideC || sideB === sideC) && 2) ||
        3;

    const getTriangle: triangleType = triangleRelation.filter(
        (triangle) => triangle.id === triangleType,
    )[0];

    const triangleRecordCreated = await prisma.records.create({
        data: {
            type_id: getTriangle.id,
            side_a: sideA,
            side_b: sideB,
            side_c: sideC,
        },
    });

    return { triangle: getTriangle, record_id: triangleRecordCreated.id };
};

export const getTriangleRecordRows = async (): Promise<{
    records: string | Record<string, number>[];
}> => {
    const recordRows: Array<Record<string, number>> = await prisma.$queryRawUnsafe(
        `SELECT records.id, records.created_at, types.name, records.side_a, records.side_b, records.side_c 
        FROM records 
        INNER JOIN types ON types.id = records.type_id 
        ORDER BY id DESC 
        LIMIT 50 OFFSET 0`,
    );
    return { records: recordRows.length > 0 ? recordRows : 'No records yet.' };
};
