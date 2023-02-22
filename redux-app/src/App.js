import ListNote from "./Note/ListNote";
import CreateNote from "./Note/CreateNote";
import Login from "./Login-logout/Login";
import {Route, Routes } from 'react-router-dom';
import Profile from "./Login-logout/Profile";
import Home from "./Login-logout/Home";
import Cart from "./E-Commerce/CartList/Cart";
import Nav from "./E-Commerce/Header/Nav";
import ProductList from "./E-Commerce/ProductList/ProductList";

function App() {
  return (
    <div>
       {/* <CreateNote/>
       <ListNote/> */}
       {/* <Home/>
       <Routes>
        <Route path="/login" element= {<Login/>}>Login</Route>
        <Route path="/profile" element= {<Profile/>}>Profiles</Route>
       </Routes> */}
       {/* 
       <Cart/> */}
       <Nav/>
       <ProductList/>
       <Cart/>
    </div>
  );
}

export default App;
