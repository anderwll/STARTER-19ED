import { Box, Container } from "@mui/material";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Container sx={{ py: 10, flexGrow: 1 }}>{children}</Container>
      <Footer />
    </Box>
  );
}
