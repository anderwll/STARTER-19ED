import { useState } from "react";

interface ErrorFields {
  email?: string;
  password?: string;
}

export function useValidate(email: string, password: string) {
  const [errors, setErrors] = useState<ErrorFields>({
    email: "",
    password: "",
  });

  if (!email) {
    setErrors({ email: "Email is required!" });
    return;
  }

  if (!password) {
    setErrors({ password: "Password is required!" });
    return;
  }

  setErrors({});
}
