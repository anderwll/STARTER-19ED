declare namespace Express {
  export interface Request {
    authStudent: {
      id: string;
      name: string;
      email: string;
      type: "T" | "M" | "F";
    };
  }
}
