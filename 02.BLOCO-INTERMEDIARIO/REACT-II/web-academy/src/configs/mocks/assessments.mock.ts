import { Assessment } from "../../types/assessment.type";

const createUuid = new Date().getMilliseconds().toString();

// export const assessmentsMock: Assessment[] = [
//   {
//     id: createUuid,
//     title: "Avaliação 1",
//     description: "Descrição 1",
//     grade: 8,
//     createdAt: new Date(),
//   },
// ];

export const assessmentsMock: Assessment[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: createUuid,
    title: `Avaliação ${index + 1}`,
    description: `Descrição ${index + 1}`,
    grade: index * 2,
    createdAt: new Date(),
  })
);
