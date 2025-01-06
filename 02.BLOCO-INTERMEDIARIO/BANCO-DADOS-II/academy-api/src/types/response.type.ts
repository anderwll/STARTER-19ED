export interface ResponseApi {
  ok: boolean;
  code: number;
  message: string;
  data?: any; // {} | [] | ''
}
