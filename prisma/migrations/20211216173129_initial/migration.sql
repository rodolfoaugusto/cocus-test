-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL PRIMARY KEY,
    "side_a" INTEGER NOT NULL,
    "side_b" INTEGER NOT NULL,
    "side_c" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "types" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
