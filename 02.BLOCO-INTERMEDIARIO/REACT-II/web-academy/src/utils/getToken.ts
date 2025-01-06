export function getToken() {
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  return sessionToken ? sessionToken : localToken;
}
