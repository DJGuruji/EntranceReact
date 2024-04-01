import { useEffect } from "react";
import "./App.css";
import AdminRouter from "./components/routers/AdminRouter";
import AuthRouter from "./components/routers/AuthRouter";
import HomeRouter from "./components/routers/HomeRouter";
import { getToken, isLoggedIn } from "./lib/auth";
import { isAdminFunc } from "./lib/user";


function App() {
  // const isLogged = isLoggedIn();

  // let isAdmin = false;
  // useEffect(async() => {
  //    isAdmin = await isAdminFunc(getToken());
  // }, [isLogged]);
  
  // console.log(isAdmin)

  const isLogged = true;
  const isAdmin = false;

  return (
    <>
      {isLogged ? isAdmin ? <AdminRouter /> : <HomeRouter /> : <AuthRouter />}

    </>
  );
}

export default App;
