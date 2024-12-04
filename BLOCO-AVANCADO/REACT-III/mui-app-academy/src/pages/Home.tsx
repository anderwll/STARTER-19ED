import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";

export function Home() {
  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  return (
    <>
      <Typography variant="h2">Welcome, {userLoggedRedux.name}</Typography>
    </>
  );
}
