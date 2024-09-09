import { ReactNode } from "react";
import { NavBar } from "../../components/NavBar";
import { navigations } from "../navigations/navigation";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar navigations={navigations} />
      <main style={{ marginTop: 85 }}>{children}</main>
    </>
  );
};
