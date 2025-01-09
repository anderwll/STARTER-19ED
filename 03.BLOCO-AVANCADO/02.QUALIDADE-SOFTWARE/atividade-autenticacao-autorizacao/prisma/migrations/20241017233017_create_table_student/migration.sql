-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('M', 'F', 'T');

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "password" TEXT NOT NULL,
    "type" "StudentType" NOT NULL DEFAULT 'M',
    "age" INTEGER,
    "cpf" CHAR(11) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");
