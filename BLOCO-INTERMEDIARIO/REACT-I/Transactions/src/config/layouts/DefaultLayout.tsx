import { ReactNode } from "react";
import { NavBar } from "../../components/NavBar";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar />
      <main style={{ marginTop: 85 }}>{children}</main>
    </>
  );
};
