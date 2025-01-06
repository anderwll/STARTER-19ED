import { Container } from "@mui/material";
import AppBar from "../../components/AppBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <AppBar />
      <Container sx={{ marginTop: 10 }}>{children}</Container>
    </>
  );
}
