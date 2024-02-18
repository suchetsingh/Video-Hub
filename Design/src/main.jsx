import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import Videos from "../components/Videos.jsx";
import Upload from "../components/Upload.jsx";
import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";
import ForgotPassword from "../components/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/upload", element: <Upload/> },
      { path: "/login", element: <Login/> },
      { path: "/signup", element: <Signup/> },
      { path: "/forgotpassword", element: <ForgotPassword/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
