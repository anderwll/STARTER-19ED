import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Chip, Grid2, Rating } from "@mui/material";
import { useState } from "react";

interface CardPostProps {
  author: {
    avatar: string;
    name: string;
  };
  createdAt: Date;
  title: string;
  description: string;
  categories: string[];
  img: {
    src: string;
    alt: string;
  };
  rating: number;
}

export function CardPost({
  author,
  categories,
  createdAt,
  description,
  img,
  rating,
  title,
}: CardPostProps) {
  const [like, setLike] = useState(false);

  function toggleLike() {
    setLike((prev) => !prev);
  }

  function handleShared() {
    alert(`Shared: ${window.location.href}/${title}`);
  }

  return (
    <Card sx={{ minHeight: "100%" }}>
      <CardHeader
        avatar={<Avatar alt={`Imagem do ${author.name}`} src={author.avatar} />}
        title={author.name}
        subheader={createdAt.toLocaleDateString("pt-BR")}
      />
      <CardMedia component="img" height="194" image={img.src} alt={img.alt} />
      <CardContent sx={{ minHeight: 265 }}>
        <Grid2 container spacing={1}>
          {categories.map((cat) => (
            <Grid2>
              <Chip label={cat} size="small" />
            </Grid2>
          ))}
        </Grid2>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="add to favorites" onClick={toggleLike}>
            <FavoriteIcon color={like ? "error" : "action"} />
          </IconButton>
          <IconButton aria-label="share" onClick={handleShared}>
            <ShareIcon />
          </IconButton>
        </Box>

        <Rating defaultValue={rating} precision={0.5} readOnly />
      </CardActions>
    </Card>
  );
}
