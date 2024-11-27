import { Grid2, Typography } from "@mui/material";
import { SectionChips } from "../components/SectionChips";

export function Blog() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography variant="h2">Blog</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">
          Stay in the loop with the latest about our products
        </Typography>
      </Grid2>

      <SectionChips />
    </Grid2>
  );
}
