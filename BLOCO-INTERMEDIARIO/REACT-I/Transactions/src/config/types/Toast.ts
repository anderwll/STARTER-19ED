export type TType = "success" | "error";

export type Toast = {
  message?: string;
  type?: TType;
  duration?: number;
};
