import { Search, ShareRounded } from "@mui/icons-material";
import {
  Box,
  Chip,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";

const categories = ["All categories", "Company", "Design", "Engineering"];

export function SectionChips() {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid2
      size={12}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Box display="flex" gap={{ xs: 0.5, md: 2 }}>
        {categories.map((cat) => (
          <Chip
            label={cat}
            onClick={() => alert(cat)}
            size={mobile ? "small" : "medium"}
          />
        ))}
      </Box>
      <Box>
        <TextField
          placeholder="Search..."
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton>
          <ShareRounded />
        </IconButton>
      </Box>
    </Grid2>
  );
}
