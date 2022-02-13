import { PrismaClient } from '@prisma/client';
import { triangleRelation } from '../src/utils';

const prisma = new PrismaClient();

async function main() {
    const types = await prisma.types.createMany({
        data: triangleRelation,
    });
    console.log({ types });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
