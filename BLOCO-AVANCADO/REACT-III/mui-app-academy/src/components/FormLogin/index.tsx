import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface ErrorFields {
  email?: string;
  password?: string;
}

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<ErrorFields>({
    email: "",
    password: "",
  });

  function validate(email: string, password: string) {
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

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget["email"].value;
    const password = event.currentTarget.password.value;
    const remember = event.currentTarget["remember"].checked;

    validate(email, password);

    console.log({ email, password, remember });
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Grid2 container spacing={2} component="form" onSubmit={handleLogin}>
      <Grid2 size={12}>
        <Typography variant="h4">Sign in</Typography>
      </Grid2>

      <Grid2 size={12}>
        <FormControl fullWidth error={!!errors.email}>
          <FormLabel id="email">E-mail</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            onChange={(e) => {
              if (e.target.value) {
                setErrors({ ...errors, email: "" });
              }
            }}
          />
        </FormControl>
      </Grid2>

      <Grid2 size={12}>
        <FormControl fullWidth error={!!errors.password}>
          <FormLabel id="password">Password</FormLabel>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="******"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
            onChange={(e) => {
              if (e.target.value) {
                setErrors({ ...errors, password: "" });
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid2>

      <Grid2 size={12}>
        <FormControlLabel
          name="remember"
          control={<Checkbox />}
          label="Remember me"
        />
      </Grid2>

      <Grid2 size={12}>
        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "capitalize" }}
          fullWidth
        >
          Sign in
        </Button>
      </Grid2>
    </Grid2>
  );
}
