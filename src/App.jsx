import React from "react";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Journal from "./Pages/Journal";
import Error from "./Component/Common/Error";
import RootLayout from "./Component/Common/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/journal" element={<Journal />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

{
  /* <Home />
<Shop />
<About />
<Contact />
<Journal /> */
}
