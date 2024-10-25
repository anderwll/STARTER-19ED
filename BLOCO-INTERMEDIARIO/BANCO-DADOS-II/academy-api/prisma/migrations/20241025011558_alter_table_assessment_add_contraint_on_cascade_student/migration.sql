-- DropForeignKey
ALTER TABLE "assessments" DROP CONSTRAINT "assessments_student_id_fkey";

-- AddForeignKey
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
