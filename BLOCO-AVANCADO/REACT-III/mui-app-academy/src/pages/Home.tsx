import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/modules/userLogged/userLoggedSlice";

export function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  function handleLogout() {
    // disparar o logout
    dispatch(logout());
  }

  useEffect(() => {
    if (!userLoggedRedux.id) {
      // navego para login
      navigate("/login");
    }
  }, [userLoggedRedux, navigate]);

  return (
    <>
      <Typography variant="h2">Welcome, {userLoggedRedux.name}</Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}
