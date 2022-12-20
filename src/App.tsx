import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './component/Home';
//import AboutPage  from './component/About';
import { NavBar } from './component/NavBar';
import { OrderSummary } from './component/OrderSummary';
import { NoMatchRoute } from './component/NoMatch';
import { Product } from './component/Product';
import { FeaturedProducts } from './component/FeaturedProducts';
import { NewProducts } from './component/NewProducts';
import { Users } from './component/User';
import { UserDetails } from './component/UserDetails';
import { Admin } from './component/Admin';
import { Profile } from './component/Profile';
import { AuthContextProvider } from './Utils/AuthContext';
import { Login } from './component/Login';
import { RequireAuth } from './component/Require';
const LazyAbout = React.lazy(() => import("./component/About"));

function App() {
  return (<>
  <AuthContextProvider>
      <NavBar />
      <Routes>
          <Route path= "/" element= {<HomePage />} />
          <Route path= "about" element= {
            <React.Suspense fallback="Loading ...">
              <LazyAbout />
            </React.Suspense>} />
          <Route path='/order-summary' element= {<OrderSummary />} />
          <Route path='products' element= { <Product />} >
             <Route index element= {<FeaturedProducts />} />
             <Route path='featured' element={<FeaturedProducts />} />
             <Route path='new' element = { <NewProducts />} />
          </Route>
          <Route path='users' element=  { <Users />} />
          <Route path='users/:userId' element= { <UserDetails />} />
          <Route path='users/admin' element= { <Admin />} />
          <Route path='profile' element={ <RequireAuth> <Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element= {<NoMatchRoute />} />
      </Routes>
  </AuthContextProvider>
  </>
  );
}

export default App;
