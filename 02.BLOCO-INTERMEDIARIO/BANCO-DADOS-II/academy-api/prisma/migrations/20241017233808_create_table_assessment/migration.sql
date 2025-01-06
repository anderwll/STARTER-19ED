-- CreateTable
CREATE TABLE "assessments" (
    "id" UUID NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "description" TEXT,
    "grade" DECIMAL(4,2) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
);
