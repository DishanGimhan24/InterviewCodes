import React, { useState, useEffect } from "react";
import axios from 'axios'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import test from "../src/test.js"

const App = () => {
  <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<test/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>

  </>

};

export default App;
