import { Box, Button, TextField, Typography, Grid2 } from "@mui/material";
import { Fingerprint as FingerprintIcon } from "@mui/icons-material";

export function Home() {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
          py: 10,
        }}
      >
        <Button>Default Button</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => alert("Clicou")}
        >
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>

        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <TextField variant="outlined" label="Outlined" />
        <TextField variant="filled" label="Filled" />
        <TextField variant="standard" label="Standard" />

        <FingerprintIcon
          color="warning"
          fontSize="small"
          sx={{
            width: 100,
            height: "auto",
            color: "black",
          }}
        />
      </Box>
      <Grid2 container sx={{ color: "white" }}>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "yellow" }}
        >
          Coluna
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "blue" }}
        >
          Coluna
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "black" }}
        >
          Coluna
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "red" }}
        >
          Coluna
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "orange" }}
        >
          Coluna
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
          sx={{ background: "purple" }}
        >
          Coluna
        </Grid2>
      </Grid2>
    </>
  );
}
