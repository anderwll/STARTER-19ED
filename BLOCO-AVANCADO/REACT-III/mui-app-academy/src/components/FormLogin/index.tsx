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
import { useState } from "react";
import { Link } from "react-router-dom";

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography variant="h4">Sign in</Typography>
      </Grid2>

      <Grid2 size={12}>
        <FormControl fullWidth>
          <FormLabel id="email">E-mail</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            variant="outlined"
            fullWidth
          />
        </FormControl>
      </Grid2>

      <Grid2 size={12}>
        <FormControl fullWidth>
          <FormLabel id="password">Password</FormLabel>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="******"
            variant="outlined"
            fullWidth
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
        <Button variant="contained" fullWidth>
          Sing in
        </Button>
      </Grid2>
    </Grid2>
  );
}
