import { Grid2, Typography } from "@mui/material";
import { SectionChips } from "../components/SectionChips";
import { CardPost } from "../components/CardPost";
import { blogList } from "../mock/blog-list";

export function Blog() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <Typography variant="h2">Blog</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">
          Stay in the loop with the latest about our products
        </Typography>
      </Grid2>

      <SectionChips />

      {blogList.map((post, index) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <CardPost
            key={index}
            img={post.img}
            title={post.title}
            author={post.author}
            rating={post.rating}
            createdAt={post.createdAt}
            categories={post.categories}
            description={post.description}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}
