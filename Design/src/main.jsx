import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import Videos from "../components/Videos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/videos", element: <Videos /> },
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
