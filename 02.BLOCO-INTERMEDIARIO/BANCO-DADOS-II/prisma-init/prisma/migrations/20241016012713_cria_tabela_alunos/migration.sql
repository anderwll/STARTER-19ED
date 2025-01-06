-- CreateTable
CREATE TABLE "alunos" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "idade" INTEGER,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
