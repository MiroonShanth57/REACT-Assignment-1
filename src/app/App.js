import React from "react";
import CartPage from "../pages/Cart/index.jsx";
import DashBoard from "../pages/DashBoard/index.jsx";
import LogInPage from "../pages/loginPage/index.jsx"
import ProductsPage from "../pages/Products/index.jsx";
import Products from "../pages/Products/index.jsx";
import UserRegistrPage from "../pages/UserRegistrationPage/index.jsx";

import {BrowserRouter,Routes,Route}from "react-router-dom";


function App() {
  return (
   //<LogInPage/>
  //<UserRegistrPage/>
  // <DashBoard/>

  //<CartPage/>

  //<ProductsPage/>

  <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path="/"element={<LogInPage/>}/>
             <Route path="/UserRegistrPage"element={<UserRegistrPage/>}/>
             <Route path="/DashBoard"element={<DashBoard/>}/>
             <Route path="/CartPage"element={<CartPage/>}/>
             <Route path="/ProductsPage"element={<ProductsPage/>
}/>

          </Routes>
      </BrowserRouter>
    </div>
    

  )
}

export default App;
