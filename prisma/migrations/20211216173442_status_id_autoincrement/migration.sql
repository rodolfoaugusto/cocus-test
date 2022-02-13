-- AlterTable
CREATE SEQUENCE "types_id_seq";
ALTER TABLE "types" ALTER COLUMN "id" SET DEFAULT nextval('types_id_seq');
ALTER SEQUENCE "types_id_seq" OWNED BY "types"."id";

SELECT setval('records_id_seq', 1000);